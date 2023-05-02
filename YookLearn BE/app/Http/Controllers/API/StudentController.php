<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Account;
use App\Models\Assigment_Comment;
use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use App\Models\Forum;
use App\Models\Forum_Comment;
use App\Models\Assignment;
use App\Models\Lecturer;
use App\Models\Material;
use App\Models\Student_Assigment;
use Illuminate\Support\Facades\Redis;

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
            'new_password' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Ada Kesalahan',
                'data' => $validator->errors(),
            ]);
        }

        $input = $request->all();

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

        return $tugas;
    }

    public function getKelas()
    {
        $user = auth()->user();
        $userAccount = DB::table('students')->get()->where('id', $user->id)->first();

        $kelas = DB::table('classess')->get()->where('id', $userAccount->id_kelas)->first();
        $students = DB::table('students')->get()->where('id_kelas', $kelas->id);
        $total = 0;

        foreach ($students as $student) {
            if ($student->id_kelas === $kelas->id) {
                $total += 1;
            }
        }

        $kelas->jumlah_siswa = $total;

        return $kelas;
    }

    public function getMapel($idKelas)
    {
        $user = auth()->user();

        $kelas = DB::table('classess')->get()->where('id', $idKelas)->first();
        $subjects = DB::table('subjects')->get()->where('id_kelas', $kelas->id);

        return $subjects;
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

        $tugas = DB::table('assignments')->get()->where('id', $idTugas);

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

        $materi = DB::table('materials')->get()->where('id', $idMateri);

        return $materi;
    }
}
