<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Account;
use App\Models\Assigment_Comment;
use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use App\Models\Forum;
use App\Models\Forum_Comment;
use App\Models\Assignment;
use App\Models\Lecturer;
use App\Models\Material;
use App\Models\Student_Assigment;
use Illuminate\Support\Facades\Redis;
use Carbon\Carbon;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\File;

class StudentController extends Controller
{
    public function getProfile()
    {
        $user = Auth()->user();
        $student = DB::table('students')->get()->where('id', $user['id'])->first();

        $res = [
            'success' => true,
            'user' => $user,
            'student' => $student
        ];

        return response()->json($res);
    }

    public function editPassword(Request $request)
    {
        $user = auth()->user();

        $validator = Validator::make($request->all(), [
            'new_password' => 'required',
            'old_password' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Ada Kesalahan',
                'data' => $validator->errors(),
            ]);
        }

        $input = $request->all();

        
        if (!Hash::check($request['old_password'], $user['password']))
        {
            $res = [
                'success' => false,
                'message' => 'password lama tidak sama dengan yang dimasukkan'
            ];

            return response()->json($res);
        }
        
        $input['new_password'] = bcrypt($input['new_password']);
        $affected = Account::where('id', $user['id'])->update(['password' => $input['new_password']]);

        $res = [
            'success' => true,
            'message' => 'password berhasil di ganti'
        ];

        if (!$affected) {
            $res = [
                'success' => false,
                'message' => 'password gagal di ganti'
            ];
        }

        return response()->json($res);
    }

    public function getAllTugas()
    {
        $user = auth()->user();

        $student = DB::table('students')->get()->where('id', $user['id'])->first();
        $subjects = DB::table('subjects')->get()->where('id_kelas', $student->id_kelas);
        $tugas = [];

        foreach ($subjects as $subject) {
            $tugas[] = DB::table('assignments')->get()->where('id_matpel', $subject->id);
        }

        $tugas = reset($tugas);

        foreach ($tugas as $x) {
            $carbon = new Carbon($x->deadline);
            $date = $carbon->format('Y-m-d');
            $x->deadline = $date;
        }

        return $tugas;
    }

    public function getKelas()
    {
        $user = auth()->user();
        $userAccount = DB::table('students')->get()->where('id', $user->id)->first();

        $kelas = DB::table('classess')->get()->where('id', $userAccount->id_kelas)->first();
        $students = DB::table('students')->get()->where('id_kelas', $kelas->id);
        $guru = DB::table('lecturers')->get()->where('id', $kelas->id_guru)->first();
        $total = 0;

        foreach ($students as $student) {
            if ($student->id_kelas === $kelas->id) {
                $total += 1;
            }
        }

        $kelas->jumlah_siswa = $total;
        $kelas->guru = $guru->nama_lengkap;

        return $kelas;
    }

    public function getMapel($idKelas)
    {
        $user = auth()->user();

        $kelas = DB::table('classess')->get()->where('id', $idKelas)->first();
        $subjects = DB::table('subjects')->get()->where('id_kelas', $kelas->id);
        $guru = DB::table('lecturers')->get()->where('id', $kelas->id_guru)->first();

        foreach ($subjects as $subject) {
            $subject->nama_guru = $guru->nama_lengkap;
        }

        return $subjects;
    }

    public function getMapelById($idMapel)
    {
        $user = auth()->user();

        $subject = DB::table('subjects')->get()->where('id', $idMapel)->first();

        return $subject;
    }

    public function getSiswa($idKelas)
    {
        $user = auth()->user();

        $students = DB::table('students')->get()->where('id_kelas', $idKelas);

        return $students;
    }

    public function getTugas($idMatpel)
    {
        $user = auth()->user();

        $tugas = DB::table('assignments')->get()->where('id_matpel', $idMatpel);

        return $tugas;
    }

    public function getDetailTugas($idTugas)
    {
        $user = auth()->user();

        $tugas = DB::table('assignments')->get()->where('id', $idTugas)->first();

        return $tugas;
    }

    public function uploadTugas(Request $request,$idTugas)
    {
        $user = auth()->user();

        $validator = Validator::make($request->all(), [
            'file' => 'required|file|max:2048'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Terjadi Kesalahan',
                'data' => $validator->errors(),
            ]);
        }

        if ($request->hasFile('file')) {
            $file = $request->file('file');
            $filename = time() . '_' . $file->getClientOriginalName();
            $file->move(public_path('uploads'), $filename);
        }

        $input['filename'] = $filename;
        $input['nilai'] = 0;
        $input['id_siswa'] = $user['id'];
        $input['id_tugas'] = $idTugas;


        $affected = Student_Assigment::create($input);

        $res = [
            'success' => true,
            'message' => 'Tugas berhasil diupload'
        ];

        if (!$affected) {
            $res = [
                'success' => false,
                'message' => 'Tugas gagal diupload'
            ];
        }

        return $res;

    }

    

    public function getMateri($idMatpel)
    {
        $user = auth()->user();

        $materi = DB::table('materials')->get()->where('id_matpel', $idMatpel);

        return $materi;
    }

    public function getDetailMateri($idMateri)
    {
        $user = auth()->user();

        $materi = DB::table('materials')->get()->where('id', $idMateri)->first();

        return $materi;
    }

    
    // public function downloadMateri($fileId)
    // {
    //     // Retrieve the file name based on the fileId
    //     $file = DB::table('materials')->get('filename')->where('id', $fileId)->first();
    
    //     if ($file->filename) {
    //         $filePath = public_path('upload/' . $file->filename);
    
    //         // Check if the file exists in the public/upload directory
    //         if (File::exists($filePath)) {
    //             // Get the file's content type
    //             $contentType = File::mimeType($filePath);
    
    //             // Generate the response with the file content
    //             $response = response()->download($filePath, null, [
    //                 'Content-Type' => $contentType,
    //             ]);
    
    //             return $response;
    //         }
    //     }
    
    //     // File not found, return an error response
    //     return response()->json(['message' => 'File not found'], Response::HTTP_NOT_FOUND);
    // }
    
}
