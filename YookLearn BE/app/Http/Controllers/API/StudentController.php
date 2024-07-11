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
use App\Models\Logbook;
use Illuminate\Support\Facades\Redis;
use Carbon\Carbon;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Auth;

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


        if (!Hash::check($request['old_password'], $user['password'])) {
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

    public function getUploadTugas($idTugas)
    {
        $user = auth()->user();
        $upload = DB::table('student_assigments')->get(['id', 'filename', 'created_at', 'id_siswa','id_tugas'])->where('id_siswa', $user['id'])->where('id_tugas', $idTugas);

        return $upload;
    }

    public function uploadTugas(Request $request, $idTugas)
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

    public function getUjian($idMapel)
    {
        $user = auth()->user();

        $ujian = DB::table("tests")->get(["id", "judul_ujian", "id_matpel"])->where('id_matpel', $idMapel);

        return $ujian;
    }
    public function getCurrentUjian($idMapel, $idUjian)
    {
        $user = auth()->user();

        $ujian = DB::table("tests")->get(["id", "judul_ujian", "jumlah_soal", "waktu", "deadline"])->where('id', $idUjian)->first();

        $waktuJam = $ujian->waktu;
        $waktuCarbon = Carbon::createFromFormat('H:i:s', $waktuJam);
        $totalMenit = $waktuCarbon->diffInMinutes(Carbon::today());
        $deadline = Carbon::createFromFormat('Y-m-d H:i:s', $ujian->deadline)->format('d F Y');

        $ujian->deadline = $deadline;
        $ujian->waktu = $totalMenit;

        return $ujian;
    }
    public function getWaktuUjian($idUjian)
    {
        $user = auth()->user();

        $ujian = DB::table("tests")->select("id", "judul_ujian", "jumlah_soal", "waktu")->where('id', $idUjian)->first();

        $waktu_ujian = strtotime($ujian->waktu) - strtotime('TODAY');

        return $waktu_ujian;
    }
    public function getSoal($idUjian)
    {
        $user = auth()->user();

        $data = DB::table('questions')
            ->select('questions.id', 'questions.pertanyaan as question', 'questions.tipe_soal as type', 'question_options.id as option_id', 'question_options.deskripsi as choice')
            ->leftJoin('question_options', 'questions.id', '=', 'question_options.id_soal')
            ->where('questions.id_ujian', $idUjian)
            ->orderBy('questions.id')
            ->get();

        $result = [];
        $prevId = null;
        $item = null;

        foreach ($data as $row) {
            if ($row->id !== $prevId) {
                if ($item !== null) {
                    $result[] = $item;
                }

                $item = [
                    'id' => $row->id,
                    'question' => $row->question,
                    'type' => $row->type,
                ];

                if ($row->type === 'pilgan') {
                    $item['answer'] = 0;
                    $item['choices'] = [];
                } elseif ($row->type === 'kotakcentang') {
                    $item['choices'] = [];
                    $item['answer'] = array_fill(0, count($item['choices']), false);
                } elseif ($row->type === 'essai') {
                    $item['answer'] = '';
                }

                $prevId = $row->id;
            }

            if ($row->type === 'pilgan' || $row->type === 'kotakcentang') {
                $item['choices'][] = [
                    'id' => count($item['choices']),
                    'choice' => $row->choice,
                    'answer' => false,
                ];
            }
        }

        if ($item !== null) {
            $result[] = $item;
        }

        return response()->json($result);
    }

    public function submitUjian(Request $request, $idUjian)
    {
        $user = auth()->user();

        $data = DB::table("questions")
            ->select('questions.id', 'questions.pertanyaan', 'questions.tipe_soal', 'questions.nilai', 'questions.id_ujian', 'question_options.id as option_id', 'question_options.deskripsi as choice', 'question_options.tipe_opsi')
            ->leftJoin('question_options', 'questions.id', '=', 'question_options.id_soal')
            ->where('questions.id_ujian', $idUjian)
            ->orderBy('questions.id')
            ->get();

        $result = [];

        foreach ($data as $row) {
            $option = [
                'id' => $row->option_id,
                'deskripsi' => $row->choice,
                'tipe_opsi' => $row->tipe_opsi,
                'id_soal' => $row->id,
            ];

            if (!isset($result[$row->id])) {
                $result[$row->id] = [
                    'id' => $row->id,
                    'pertanyaan' => $row->pertanyaan,
                    'tipe_soal' => $row->tipe_soal,
                    'nilai' => $row->nilai,
                    'id_ujian' => $row->id_ujian,
                    'opsi' => [],
                ];
            }

            $result[$row->id]['opsi'][] = $option;
        }

        $soal = array_values($result);
        $userAnswers = json_decode($request->input('user_answers'), true);

        $totalNilai = 0;

        foreach ($userAnswers as $jawaban) {
            $idSoal = $jawaban['id'];
            $answer = $jawaban['answer'];

            $answer_status['id_siswa'] = $user['id'];
            $answer_status['id_ujian'] = $idUjian;
            $answer_status['id_soal'] = $idSoal;
            $answer_status['jawaban'] = $answer;
            $answer_status['status_jawaban'] = 'salah';



            foreach ($soal as $pertanyaan) {
                if ($pertanyaan['id'] === $idSoal) {
                    if ($pertanyaan['tipe_soal'] === 'kotakcentang') {

                        $answer_status['tipe_soal'] = 'kotakcentang';
                        $answer_status['jawaban'] = implode(',', $answer_status['jawaban']);

                        $opsiBenar = array_filter($pertanyaan['opsi'], function ($opsi) {
                            return $opsi['tipe_opsi'] === 'benar';
                        });

                        $isAllBenar = true;
                        foreach ($answer as $index) {
                            $opsi = $pertanyaan['opsi'][$index];
                            if ($opsi['tipe_opsi'] !== 'benar') {
                                $isAllBenar = false;
                                break;
                            }
                        }
                        if ($isAllBenar && count($answer) === count($opsiBenar)) {
                            $totalNilai += $pertanyaan['nilai'];
                            $answer_status['status_jawaban'] = 'benar';
                        }

                        DB::table('test_submit_questions')->insert($answer_status);
                    } elseif ($pertanyaan['tipe_soal'] === 'pilgan') {

                        $answer_status['tipe_soal'] = 'pilgan';

                        $answer_status['jawaban'] = array_keys($answer, true);
                        $answer_status['jawaban'] = implode('', $answer_status['jawaban']);

                        $jawabanBenar = true;
                        foreach ($pertanyaan['opsi'] as $index => $opsi) {
                            $isOpsiDipilih = isset($answer[$index]) && $answer[$index];
                            $isOpsiBenar = $opsi['tipe_opsi'] === 'benar';

                            if ($isOpsiDipilih !== $isOpsiBenar) {
                                $jawabanBenar = false;
                                break;
                            }
                        }
                        if ($jawabanBenar) {
                            $totalNilai += $pertanyaan['nilai'];
                            $answer_status['status_jawaban'] = 'benar';
                        }

                        DB::table('test_submit_questions')->insert($answer_status);
                    } elseif ($pertanyaan['tipe_soal'] === 'essai') {
                        $answer_status['tipe_soal'] = 'essai';
                        DB::table('test_submit_questions')->insert($answer_status);
                    }
                    break;
                }
            }
        }

        $input['id_siswa'] =  $user['id'];
        $input['id_ujian'] =  $idUjian;
        $input['nilai'] =  $totalNilai;

        DB::table('collect_tests')->insert($input);

        return true;
    }

    public function getLogbook(Request $request){
        $data = Logbook::where('created_by', Auth::id())->get();
        return $data;
    }

    public function storeLogbook(Request $request){
        $validatedData = $request->validate([
            'tanggal' => 'required|date',
            'deskripsi' => 'required|string',
            'lampiran' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        // Handle file upload
        if ($request->hasFile('lampiran')) {
            $file = $request->file('lampiran');
            $filename = time() . '_' . $file->getClientOriginalName();
            $path = $file->storeAs('logbook', $filename, 'public');
        }

        // Buat entri logbook baru
        $logbook = Logbook::create([
            'tanggal' => $validatedData['tanggal'],
            'deskripsi' => $validatedData['deskripsi'],
            'lampiran' => $path, // Simpan jalur file di database
            'created_by' => Auth::id(),
        ]);

        // Kembalikan respons, misalnya redirect atau pesan sukses
        return response()->json([
            'message' => 'Logbook entry created successfully',
            'logbook' => $logbook,
        ], 201);
    }

    // public function submitUjian(Request $request, $idUjian)
    // {
    //     $user = auth()->user();

    //     $data = DB::table("questions")
    //         ->select('questions.id', 'questions.pertanyaan', 'questions.tipe_soal', 'questions.nilai', 'questions.id_ujian', 'question_options.id as option_id', 'question_options.deskripsi as choice', 'question_options.tipe_opsi')
    //         ->leftJoin('question_options', 'questions.id', '=', 'question_options.id_soal')
    //         ->where('questions.id_ujian', $idUjian)
    //         ->where('questions.tipe_soal', '!=', 'essai')
    //         ->orderBy('questions.id')
    //         ->get();

    //     $result = [];

    //     foreach ($data as $row) {
    //         $option = [
    //             'id' => $row->option_id,
    //             'deskripsi' => $row->choice,
    //             'tipe_opsi' => $row->tipe_opsi,
    //             'id_soal' => $row->id,
    //         ];

    //         if (!isset($result[$row->id])) {
    //             $result[$row->id] = [
    //                 'id' => $row->id,
    //                 'pertanyaan' => $row->pertanyaan,
    //                 'tipe_soal' => $row->tipe_soal,
    //                 'nilai' => $row->nilai,
    //                 'id_ujian' => $row->id_ujian,
    //                 'opsi' => [],
    //             ];
    //         }

    //         $result[$row->id]['opsi'][] = $option;
    //     }

    //     $soal = array_values($result);
    //     $userAnswers = json_decode($request->input('user_answers'), true);

    //     $totalNilai = 0;

    //     foreach ($userAnswers as $jawaban) {
    //         $idSoal = $jawaban['id'];
    //         $answer = $jawaban['answer'];

    //         foreach ($soal as $pertanyaan) {
    //             if ($pertanyaan['id'] === $idSoal) {
    //                 if ($pertanyaan['tipe_soal'] === 'kotakcentang') {
    //                     $opsiBenar = array_filter($pertanyaan['opsi'], function ($opsi) {
    //                         return $opsi['tipe_opsi'] === 'benar';
    //                     });

    //                     $isAllBenar = true;
    //                     foreach ($answer as $index) {
    //                         $opsi = $pertanyaan['opsi'][$index];
    //                         if ($opsi['tipe_opsi'] !== 'benar') {
    //                             $isAllBenar = false;
    //                             break;
    //                         }
    //                     }

    //                     if ($isAllBenar && count($answer) === count($opsiBenar)) {
    //                         $totalNilai += $pertanyaan['nilai'];
    //                     }
    //                 } elseif ($pertanyaan['tipe_soal'] === 'pilgan') {
    //                     $jawabanBenar = true;
    //                     foreach ($pertanyaan['opsi'] as $index => $opsi) {
    //                         $isOpsiDipilih = isset($answer[$index]) && $answer[$index];
    //                         $isOpsiBenar = $opsi['tipe_opsi'] === 'benar';

    //                         if ($isOpsiDipilih !== $isOpsiBenar) {
    //                             $jawabanBenar = false;
    //                             break;
    //                         }
    //                     }

    //                     if ($jawabanBenar) {
    //                         $totalNilai += $pertanyaan['nilai'];
    //                     }
    //                 }

    //                 break;
    //             }
    //         }
    //     }

    //     return $totalNilai;
    // }


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
