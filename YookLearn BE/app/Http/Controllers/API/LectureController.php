<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Account;
use App\Models\Assigment_Comment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use App\Models\Forum;
use App\Models\Forum_Comment;
use App\Models\Assignment;
use App\Models\Lecturer;
use App\Models\Material;
use App\Models\Test;
use App\Models\Logbook;
use App\Models\Student;
use App\Models\Classes;
use App\Models\Batch;
use App\Models\Subject;
use Carbon\Carbon;
use Illuminate\Support\Facades\Redis;

class LectureController extends Controller
{
    public function getProfile()
    {
        $user = auth()->user();
        $lecture = DB::table('lecturers')->get()->where('id', $user['id'])->first();

        $res = [
            'success' => true,
            'lecturer' => $lecture
        ];

        return response()->json($lecture);
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

    public function getMatpel()
    {
        $user = auth()->user();

        $matpel = DB::table('subjects')->get()->where('id_guru', $user['id']);

        $X = [];
        $XI = [];
        $XII = [];

        foreach ($matpel as $i) {
            if (preg_match('/^(10|X)$/', $i->nama_matpel)) {
                $X[] = $i;
            } elseif (preg_match('/^(11|XI)$/', $i->nama_matpel)) {
                $XI[] = $i;
            } elseif (preg_match('/^(12|XII)$/', $i->nama_matpel)) {
                $XII[] = $i;
            }
        }

        $res = [
            'success' => true,
            'matpel' => $matpel
        ];

        return response()->json($matpel);
    }

    public function getAnggotaKelas($id_matpel)
    {
        $user = auth()->user();
        $subject = DB::table('subjects')->get()->where('id', $id_matpel)->first();

        $class = DB::table('classess')->get()->where('id', $subject->id_kelas)->first();
        $student = DB::table('students')->get(['id', 'nisn', 'jenis_kelamin', 'agama', 'nama_lengkap', 'id_kelas'])->where('id_kelas', $class->id);

        return response()->json($student);
    }

    public function addForum(Request $request, $id_matpel)
    {
        $user = auth()->user();
        $subject = DB::table('subjects')->get()->where('id', $id_matpel)->first();


        if ($user['id'] != $subject->id_guru) {
            return response()->json([
                'success' => false,
                'massage' => 'Tidak memiliki otoritas',
            ]);
        }

        $validator = Validator::make($request->all(), [
            'judul_forum' => 'required',
            'isi_forum' => 'required',
            // 'tanggal_forum' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Terjadi Kesalahan',
                'data' => $validator->errors(),
            ]);
        }

        $input = $request->all();
        $input['id_matpel'] = $subject->id;

        $affected = Forum::create($input);

        $res = [
            'success' => true,
            'message' => 'Forum berhasil dibuat'
        ];

        if (!$affected) {
            $res = [
                'success' => false,
                'message' => 'Forum gagal dibuat'
            ];
        }

        return response()->json($res);
    }

    public function getForum($id_matpel)
    {
        $user = auth()->user();
        $subject = DB::table('subjects')->get()->where('id', $id_matpel)->first();

        if ($user['id'] != $subject->id_guru) {
            return response()->json([
                'success' => false,
                'massage' => 'Tidak memiliki otoritas',
            ]);
        }

        $forums = Forum::all();

        $res = [
            'success' => true,
            'forum' => $forums
        ];

        if (!$forums) {
            $res = [
                'success' => true,
                'forum' => null
            ];
        }

        return response()->json($res);
    }

    public function getForumById($id_matpel, $id_forum)
    {
        $user = auth()->user();
        $subject = DB::table('subjects')->get()->where('id', $id_matpel)->first();
        $comments = DB::table('forum_comments')->get()->where('id_forum', $id_forum)->sortBy('created_at', false);;

        foreach ($comments as $comment) {
            $comment->reply = DB::table('forum_comments')->get()->where('id_reply', $comment->id);
        }

        if ($user['id'] != $subject->id_guru) {
            return response()->json([
                'success' => false,
                'massage' => 'Tidak memiliki otoritas',
            ]);
        }

        $forum = DB::table('forums')->get()->where('id', $id_forum)->first();

        $res = [
            'success' => true,
            'forum' => $forum,
            'comment' => $comments,
        ];

        if (!$forum) {
            $res = [
                'success' => false,
                'forum' => null
            ];
        }

        return response()->json($res);
    }

    public function updateForum(Request $request, $id_matpel, $id)
    {
        $user = auth()->user();
        $subject = DB::table('subjects')->get()->where('id', $id_matpel)->first();


        if ($user['id'] != $subject->id_guru) {
            return response()->json([
                'success' => false,
                'massage' => 'Tidak memiliki otoritas',
            ]);
        }

        $validator = Validator::make($request->all(), [
            'judul_forum' => 'required',
            'isi_forum' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Terjadi Kesalahan',
                'data' => $validator->errors(),
            ]);
        }

        $input = $request->all();
        $affected = DB::table('forums')->where('id', $id)->update($input);

        $res = [
            'success' => true,
            'massage' => 'Forum berhasil diedit',
        ];

        if (!$affected) {
            $res = [
                'success' => false,
                'massage' => 'forum gagal diedit'
            ];
        }

        return response()->json($res);
    }

    public function deleteForum($id_matpel, $id)
    {
        $user = auth()->user();
        $subject = DB::table('subjects')->get()->where('id', $id_matpel)->first();

        if ($user['id'] != $subject->id_guru) {
            return response()->json([
                'success' => false,
                'massage' => 'Tidak memiliki otoritas',
            ]);
        }

        $affected = Forum::find($id)->delete();

        $res = [
            'success' => true,
            'message' => 'Forum berhasil dihapus'
        ];

        if (!$affected) {
            $res = [
                'success' => false,
                'message' => 'Forum gagal dihapus'
            ];
        }

        return response()->json($res);
    }

    public function addForumComment(Request $request, $id_matpel, $id_forum)
    {
        $user = auth()->user();
        $subject = DB::table('subjects')->get()->where('id', $id_matpel)->first();
        $forum = DB::table('forums')->get()->where('id', $id_forum)->first();

        if ($user['id'] != $subject->id_guru) {
            return response()->json([
                'success' => false,
                'massage' => 'Tidak memiliki otoritas',
            ]);
        }

        $validator = Validator::make($request->all(), [
            'komentar' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Terjadi Kesalahan',
                'data' => $validator->errors(),
            ]);
        }

        $input = $request->all();
        $input['id_forum'] = $forum->id;
        $input['id_pengirim'] = $user['id'];

        $affected = Forum_Comment::create($input);

        $res = [
            'success' => true,
            'massaged' => 'berhasil menambahkan komentar'
        ];

        if (!$affected) {
            $res = [
                'success' => false,
                'massage' => 'gagal menambahkan komentar'
            ];
        }

        return response()->json($res);
    }

    public function replyCommnent(Request $request, $id_matpel, $id_forum, $id_comment)
    {
        $user = auth()->user();
        $subject = DB::table('subjects')->get()->where('id', $id_matpel)->first();
        $forum = DB::table('forums')->get()->where('id', $id_forum)->first();
        $comment = DB::table('forum_comments')->get()->where('id', $id_comment)->first();

        if ($user['id'] != $subject->id_guru) {
            return response()->json([
                'success' => false,
                'massage' => 'Tidak memiliki otoritas',
            ]);
        }

        $validator = Validator::make($request->all(), [
            'komentar' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Terjadi Kesalahan',
                'data' => $validator->errors(),
            ]);
        }

        $input = $request->all();

        $input['id_forum'] = $forum->id;
        $input['id_pengirim'] = $user['id'];
        $input['id_reply'] = $comment->id;

        $affected = Forum_Comment::create($input);

        $res = [
            'success' => true,
            'massaged' => 'berhasil menambahkan balasan'
        ];

        if (!$affected) {
            $res = [
                'success' => false,
                'massage' => 'gagal menambahkan balasan'
            ];
        }

        return response()->json($res);
    }

    public function getForumComments($id_matpel, $id_forum)
    {
        $user = auth()->user();
        $subject = DB::table('subjects')->get()->where('id', $id_matpel);

        if ($user['id'] != $subject['id_guru']) {
            return response()->json([
                'success' => false,
                'massage' => 'Tidak memiliki otoritas',
            ]);
        }

        $comments = Forum_Comment::get()->where('id_forum', $id_forum);

        $res = [
            'success' => true,
            'comments' => $comments
        ];

        if (!$comments) {
            $res['comments'] = null;
        }

        return response()->json($res);
    }

    public function editForumComment(Request $request, $id_matpel, $id_forum, $id_comment)
    {
        $user = auth()->user();
        $comment = DB::table('forum_comments')->get()->where('id', $id_comment)->first();

        if ($user['id'] != $comment->id_pengirim) {
            return response()->json([
                'success' => false,
                'massage' => 'Tidak memiliki otoritas',
            ]);
        }

        $validator = Validator::make($request->all(), [
            'komentar' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Terjadi Kesalahan',
                'data' => $validator->errors(),
            ]);
        }

        $input = $request->all();

        $affected = Forum_Comment::where('id', $comment->id)->update(['komentar' => $input['komentar']]);

        $res = [
            'success' => true,
            'massage' => 'Komentar berhasil di edit'
        ];

        if (!$affected) {
            $res = [
                'success' => false,
                'massage' => 'Komentar gagal di edit'
            ];
        }

        return response()->json($res);
    }

    public function deleteForumComment($id_matpel, $id_forum, $id_comment)
    {
        $user = auth()->user();
        $subject = DB::table('subjects')->get()->where('id', $id_matpel)->first();
        $forum = DB::table('forums')->get()->where('id', $id_forum)->first();
        $comment = DB::table('forum_comments')->get()->where('id', $id_comment)->first();

        if ($user['id'] != $subject->id_guru or $user['id'] != $comment->id_pengirim) {
            return response()->json([
                'success' => false,
                'massage' => 'Tidak memiliki otoritas',
            ]);
        }

        $affected = Forum_Comment::find($comment->id)->delete();

        $res = [
            'success' => true,
            'massage' => 'Komentar berhasil dihapus'
        ];

        if (!$affected) {
            $res = [
                'success' => false,
                'message' => 'Komentar gagal dihapus'
            ];
        }

        return response()->json($res);
    }

    public function addTugas(Request $request, $id_matpel)
    {
        $user = auth()->user();
        $subject = DB::table('subjects')->get()->where('id', $id_matpel)->first();


        if ($user['id'] != $subject->id_guru) {
            return response()->json([
                'success' => false,
                'massage' => 'Tidak memiliki otoritas',
            ]);
        }

        $validator = Validator::make($request->all(), [
            'judul_tugas' => 'required',
            'file' => 'required|file|max:2048',
            'deadline' => 'required',
            'nilai' => 'required',
            'tipe_deadline' => 'required',
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

        $input = $request->all();
        $input['filename'] = $filename;
        $input['id_matpel'] = $subject->id;

        $affected = Assignment::create($input);

        $res = [
            'success' => true,
            'massage' => 'Tugas berhasil ditambah',
        ];

        if (!$affected) {
            $res = [
                'success' => false,
                'massage' => 'Tugas gagal ditambah',
            ];
        }

        return response()->json($res);
    }

    public function getTugas($id_matpel)
    {
        $user = auth()->user();
        $subject = DB::table('subjects')->get()->where('id', $id_matpel)->first();


        if ($user['id'] != $subject->id_guru) {
            return response()->json([
                'success' => false,
                'massage' => 'Tidak memiliki otoritas',
            ]);
        }

        // $assigment = DB::table('assignments')->get(['id', 'judul_tugas'])->where('id', $subject->id);
        $assigment = DB::table('assignments')->get(['id', 'judul_tugas', 'deadline', 'id_matpel'])->where('id_matpel', $subject->id);
        foreach ($assigment as $i) {
            $i->total = DB::table('student_assigments')->get()->where('id_tugas', $i->id)->count();
        }

        return response()->json($assigment);
    }

    public function getDetailTugas($id_matpel, $id_tugas)
    {
        $user = auth()->user();
        $subject = DB::table('subjects')->get()->where('id', $id_matpel)->first();
        $assigment = DB::table('assignments')->get(['id', 'judul_tugas', 'detail_tugas', 'nilai'])->where('id', $id_tugas)->first();


        if ($user['id'] != $subject->id_guru) {
            return response()->json([
                'success' => false,
                'massage' => 'Tidak memiliki otoritas',
            ]);
        }

        $submit = DB::table('student_assigments')->get(['id', 'id_siswa', 'id_tugas', 'created_at', 'nilai'])->where('id_tugas', $assigment->id);

        foreach ($submit as $i) {
            $student = DB::table("students")->get(['id', 'nama_lengkap', 'id_kelas'])->where('id', $i->id_siswa)->first();
            $i->nama_pengirim = $student->nama_lengkap;
        }

        return response()->json($assigment);
    }

    public function getStudentSubmit($id_matpel, $id_tugas)
    {
        $user = auth()->user();
        $subject = DB::table('subjects')->get()->where('id', $id_matpel)->first();
        $assigment = DB::table('assignments')->get(['id', 'judul_tugas', 'detail_tugas', 'nilai'])->where('id', $id_tugas)->first();


        if ($user['id'] != $subject->id_guru) {
            return response()->json([
                'success' => false,
                'massage' => 'Tidak memiliki otoritas',
            ]);
        }

        $submit = DB::table('student_assigments')->get(['id', 'id_siswa', 'id_tugas', 'created_at', 'nilai', 'filename'])->where('id_tugas', $assigment->id);
        $result = [];

        foreach ($submit as $i) {
            $student = DB::table("students")->get(['id', 'nama_lengkap', 'id_kelas'])->where('id', $i->id_siswa)->first();
            $i->nama_pengirim = $student->nama_lengkap;
            $result[] = $i;
        }

        return response()->json($result);
    }

    public function getDetailIndividuTugas($id_matpel, $id_tugas, $id_kumpul)
    {
        $user = auth()->user();
        $subject = DB::table('subjects')->get()->where('id', $id_matpel)->first();
        $assigment = DB::table('assignments')->get(['id', 'nilai'])->where('id', $id_tugas)->first();
        $submit = DB::table('student_assigments')->get(['id', 'nilai', 'id_siswa'])->where('id', $id_kumpul)->first();
        $siswa = DB::table('students')->get(['id', 'nama_lengkap'])->where('id', $submit->id_siswa)->first();

        $submit->nama_pengirim = $siswa->nama_lengkap;
        $submit->maks_nilai = $assigment->nilai;


        if ($user['id'] != $subject->id_guru) {
            return response()->json([
                'success' => false,
                'massage' => 'Tidak memiliki otoritas',
            ]);
        }

        return response()->json($submit);
    }

    public function submitNilai(Request $request, $id_matpel, $id_kumpul)
    {
        $user = auth()->user();
        $subject = DB::table('subjects')->get()->where('id', $id_matpel)->first();

        $validator = Validator::make($request->all(), [
            'nilai' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Terjadi Kesalahan',
                'data' => $validator->errors(),
            ]);
        }

        if ($user['id'] != $subject->id_guru) {
            return response()->json([
                'success' => false,
                'massage' => 'Tidak memiliki otoritas',
            ]);
        }

        $success = DB::table('student_assigments')->where('id', $id_kumpul)->update(['nilai' => $request->nilai]);

        return $success;
    }

    public function addKomentarTugas(Request $request, $id_matpel, $id_tugas, $id_kumpul)
    {
        $user = auth()->user();
        $subject = DB::table('subjects')->get()->where('id', $id_matpel)->first();
        $submit = DB::table('student_assigments')->get()->where('id', $id_kumpul)->first();


        if ($user['id'] != $subject->id_guru) {
            return response()->json([
                'success' => false,
                'massage' => 'Tidak memiliki otoritas',
            ]);
        }

        $validator = Validator::make($request->all(), [
            'komentar' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Terjadi Kesalahan',
                'data' => $validator->errors(),
            ]);
        }

        $input = $request->all();
        $input['id_pengirim'] = $user['id'];
        $input['id_kumpul'] = $submit->id;

        $affected = Assigment_Comment::create($input);

        $res = [
            'suuccess' => true,
            'massage' => 'Komentar berhasil ditambahkan'
        ];

        if (!$affected) {
            $res = [
                'suuccess' => false,
                'massage' => 'Komentar gagal ditambahkan'
            ];
        }

        return response()->json($res);
    }

    public function updateTugas(Request $request, $id_matpel, $id_tugas)
    {
        $user = auth()->user();
        $subject = DB::table('subjects')->get()->where('id', $id_matpel)->first();
        $assigment = DB::table('assignments')->get()->where('id', $id_tugas)->first();


        if ($user['id'] != $subject->id_guru) {
            return response()->json([
                'success' => false,
                'massage' => 'Tidak memiliki otoritas',
            ]);
        }

        $validator = Validator::make($request->all(), [
            'judul_tugas' => 'required',
            'file' => 'required|file|max:2048',
            // 'nilai' => 'required',
            // 'tipe_deadline' => 'required',
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

        $input = $request->except(['file']);
        $input['filename'] = $filename;
        $input['id_matpel'] = $subject->id;

        // //Test
        // $input['nilai'] = 100;
        // $input['tipe_deadline'] = 'unstrict';

        // return $input;

        $affected = Assignment::where('id', $assigment->id)->update($input);

        $res = [
            'success' => true,
            'massage' => 'Tugas berhasil diedit',
        ];

        if (!$affected) {
            $res = [
                'success' => false,
                'massage' => 'Tugas gagal diedit',
            ];
        }

        return response()->json($res);
    }

    public function deleteTugas($id_matpel, $id_tugas)
    {
        $user = auth()->user();
        $subject = DB::table('subjects')->get()->where('id', $id_matpel)->first();
        $assigment = DB::table('assignments')->get(['id', 'judul_tugas', 'detail_tugas'])->where('id', $id_tugas)->first();


        if ($user['id'] != $subject->id_guru) {
            return response()->json([
                'success' => false,
                'massage' => 'Tidak memiliki otoritas',
            ]);
        }

        $affected = Assignment::find($assigment->id)->delete();

        $res = [
            'success' => true,
            'message' => 'Tugas berhasil dihapus'
        ];

        if (!$affected) {
            $res = [
                'success' => false,
                'message' => 'Tugas gagal dihapus'
            ];
        }

        return response()->json($res);
    }

    public function addMateri(Request $request, $id_matpel)
    {
        $user = auth()->user();
        $subject = DB::table('subjects')->get()->where('id', $id_matpel)->first();


        if ($user['id'] != $subject->id_guru) {
            return response()->json([
                'success' => false,
                'massage' => 'Tidak memiliki otoritas',
            ]);
        }

        $validator = Validator::make($request->all(), [
            'judul_materi' => 'required',
            // 'isi_materi' => 'required',
            'file' => 'required|file|max:2048',
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

        $input = $request->all();
        $input['filename'] = $filename;
        $input['id_matpel'] = $subject->id;
        $input['isi_materi'] = "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed diam";

        $affected = Material::create($input);

        $res = [
            'success' => true,
            'massage' => 'materi berhasil ditambahkan'
        ];

        if (!$affected) {
            $res = [
                'success' => false,
                'massage' => 'materi gagal ditambahkan'
            ];
        }

        return response()->json($res);
    }

    public function getMateri($id_matpel)
    {
        $user = auth()->user();
        $subject = DB::table('subjects')->get()->where('id', $id_matpel)->first();


        if ($user['id'] != $subject->id_guru) {
            return response()->json([
                'success' => false,
                'massage' => 'Tidak memiliki otoritas',
            ]);
        }

        $materials = DB::table('materials')->get()->where('id_matpel', $id_matpel);

        // $res = [
        //     'success' => true,
        //     'materi' => $materials
        // ];

        return response()->json($materials);
    }

    public function getDetailMateri($id_matpel, $id_materi)
    {
        $user = auth()->user();
        $subject = DB::table('subjects')->get()->where('id', $id_matpel)->first();
        $materi = DB::table('materials')->get()->where('id', $id_materi)->first();


        if ($user['id'] != $subject->id_guru) {
            return response()->json([
                'success' => false,
                'massage' => 'Tidak memiliki otoritas',
            ]);
        }

        $res = [
            'success' => true,
            'materi' => $materi
        ];

        return response()->json($materi);
    }

    public function addUjian(Request $request, $id_matpel)
    {

        $user = auth()->user();
        $subject = DB::table('subjects')->get()->where('id', $id_matpel)->first();


        if ($user['id'] != $subject->id_guru) {
            return response()->json([
                'success' => false,
                'massage' => 'Tidak memiliki otoritas',
            ]);
        }

        $validator = Validator::make($request->all(), [
            'judul_ujian' => 'required',
            'waktu' => 'required',
            'filename' => 'optional|file|max:2048',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Terjadi Kesalahan',
                'data' => $validator->errors(),
            ]);
        }

        $input = $request->all();

        if ($request->hasFile('file')) {
            $file = $request->file('file');
            $filename = time() . '_' . $file->getClientOriginalName();
            $file->move(public_path('uploads'), $filename);

            $input['filename'] = $filename;
        }

        $input['id_matpel'] = $subject->id;

        $affected = Test::create($input);

        $res = [
            'success' => true,
        ];

        if (!$affected) {
            $res = [
                'success' => false,
            ];
        }

        return response()->json($affected);
    }

    public function addSoal(Request $request, $id_Ujian)
    {
        $user = auth()->user();

        $input = json_decode($request->list_soal, true);
        $jumlahSoal = 0;

        foreach ($input as $data) {
            $jumlahSoal += 1;
            $pertanyaan = DB::table('questions')->insertGetId([
                'pertanyaan' => strip_tags($data['pertanyaan']),
                'tipe_soal' => $data['jenis'],
                'nilai' => $data['poin'],
                'id_ujian' => $id_Ujian
            ]);

            if ($data['jenis'] === 'pilgan' || $data['jenis'] === 'kotakcentang') {
                foreach ($data['jawaban'] as $index => $jawaban) {
                    if ($data['jenis'] === 'pilgan') {
                        $tipe_opsi = ($data['jenis'] === 'pilgan' && $data['kunci'] == $index) ? 'benar' : 'salah';
                    } else if ($data['jenis'] === 'kotakcentang') {
                        $tipe_opsi = ($data['jenis'] === 'kotakcentang' && $data['kunci'][$index] === true) ? 'benar' : 'salah';
                    }

                    DB::table('question_options')->insert([
                        'deskripsi' => strip_tags($jawaban),
                        'tipe_opsi' => $tipe_opsi,
                        'id_soal' => $pertanyaan
                    ]);
                }
            }
        }

        DB::table('tests')
            ->where('id', $id_Ujian)
            ->update(['jumlah_soal' => $jumlahSoal]);

        return response()->json([
            'success' => true,
        ]);
    }

    public function getUjian($id_mapel)
    {
        $user = auth()->user();
        $subject = DB::table('subjects')->get()->where('id', $id_mapel)->first();

        if ($user['id'] != $subject->id_guru) {
            return response()->json([
                'success' => false,
                'massage' => 'Tidak memiliki otoritas',
            ]);
        }

        $test = DB::table('tests')->get(['id', 'judul_ujian', 'waktu', 'jumlah_soal', 'created_at', 'id_matpel'])->where('id_matpel', $id_mapel);

        foreach ($test as $data) {
            $formattedDate = Carbon::parse($data->created_at)->format('l, d F Y');
            $data->created_at = $formattedDate;
        }

        return response()->json($test);
    }

    public function daftarSoal($id_mapel, $id_ujian)
    {
        $user = auth()->user();
        $subject = DB::table('subjects')->get()->where('id', $id_mapel)->first();

        $soal = DB::table('questions')
            ->select('questions.id', 'questions.pertanyaan', 'questions.tipe_soal', 'questions.nilai', 'question_options.id as opsi_id', 'question_options.deskripsi as opsi_deskripsi', 'question_options.tipe_opsi')
            ->leftJoin('question_options', 'questions.id', '=', 'question_options.id_soal')
            ->where('questions.id_ujian', $id_ujian)
            ->whereIn('questions.tipe_soal', ['pilgan', 'kotakcentang'])
            ->get();

        $formattedSoal = [];

        foreach ($soal as $item) {
            $soalItem = [
                'id' => $item->id,
                'pertanyaan' => strip_tags($item->pertanyaan),
                'tipe_soal' => $item->tipe_soal,
                'opsi' => [],
                'nilai' => $item->nilai,
            ];

            $index = array_search($soalItem['id'], array_column($formattedSoal, 'id'));
            if ($index === false) {
                if (isset($item->opsi_id)) {
                    $opsi = [
                        'id' => $item->opsi_id,
                        'deskripsi' => $item->opsi_deskripsi,
                        'tipe_opsi' => $item->tipe_opsi,
                    ];
                    $soalItem['opsi'][] = $opsi;
                }
                $formattedSoal[] = $soalItem;
            } else {
                if ($item->opsi_id) {
                    $opsi = [
                        'id' => $item->opsi_id,
                        'deskripsi' => $item->opsi_deskripsi,
                        'tipe_opsi' => $item->tipe_opsi,
                    ];
                    $formattedSoal[$index]['opsi'][] = $opsi;
                }
            }
        }

        $essai = DB::table('questions')
            ->select('id', 'pertanyaan', 'tipe_soal', 'nilai')
            ->where('id_ujian', $id_ujian)
            ->where('tipe_soal', 'essai')
            ->get();

        foreach ($essai as $item) {
            $index = array_search($item->id, array_column($formattedSoal, 'id'));
            if ($index === false) {
                $soalItem = [
                    'id' => $item->id,
                    'pertanyaan' => $item->pertanyaan,
                    'tipe_soal' => $item->tipe_soal,
                    'opsi' => [],
                    'nilai' => $item->nilai,
                ];
                $formattedSoal[] = $soalItem;
            }
        }

        return response()->json($formattedSoal);
    }
    public function getDetailUjian($id_ujian)
    {
        $user = auth()->user();

        $test = DB::table("tests")->get(["id", "judul_ujian", "waktu", "jumlah_soal", "deadline", "id_matpel"])->where("id", $id_ujian)->first();

        $carbon = Carbon::createFromFormat('H:i:s', $test->waktu);
        $totalMinutes = $carbon->hour * 60 + $carbon->minute;
        $test->waktu = $totalMinutes;

        $carbon = Carbon::parse($test->deadline);
        $date = $carbon->toDateString();
        $test->deadline = $date;

        $matpel = DB::table("subjects")->get(["id", "nama_matpel", "id_kelas", "id_guru"])->where("id", $test->id_matpel)->first();
        $test->matpel = $matpel->nama_matpel;


        return $test;
    }
    public function getDetailKumpulUjian($id_mapel, $id_ujian)
    {
        $user = auth()->user();

        $subject = DB::table("subjects")->get(["id", "nama_matpel", "id_kelas"])->where("id", $id_mapel)->first();
        $student = DB::table("students")->get(["id", "nisn", "nama_lengkap", "id_kelas"])->where('id_kelas', $subject->id_kelas);

        foreach ($student as $row) {
            $test = DB::table("collect_tests")->get(["id", "id_siswa", "id_ujian", "nilai"])->where("id_ujian", $id_ujian)->where("id_siswa", $row->id)->first();
            if ($test) {
                $row->status = "Ujian Telah Diselesaikan";
                $row->nilai = $test->nilai;
            } else {
                $row->status = "Ujian Belum Dikerjakan";
                $row->nilai = 0;
            }
        }

        return response()->json($student);
    }

    public function getDetailKumpulSiswa($id_mapel, $id_ujian, $id_siswa)
    {
        $user = auth()->user();

        $soal = DB::table('questions AS q')
            ->leftJoin('question_options AS qo', 'qo.id_soal', '=', 'q.id')
            ->leftJoin('test_submit_questions AS tsq', function ($join) use ($id_siswa, $id_ujian) {
                $join->on('tsq.id_soal', '=', 'q.id')
                    ->where('tsq.id_siswa', '=', $id_siswa)
                    ->where('tsq.id_ujian', '=', $id_ujian);
            })
            ->select(
                'q.id',
                'q.pertanyaan',
                'q.filename',
                'q.tipe_soal',
                'q.nilai',
                'qo.id AS opsi_id',
                'qo.deskripsi',
                'qo.tipe_opsi',
                DB::raw("CASE WHEN tsq.jawaban LIKE CONCAT('%', CAST(qo.id AS CHAR), '%') THEN true ELSE false END AS checked")
            )
            ->orderBy('q.id')
            ->orderBy('qo.id')
            ->get();

        $soalArray = $soal->groupBy('id')->toArray();

        return response()->json($soalArray);
    }

    public function getDetailUjianKelas($id_mapel, $id_ujian)
    {
        $user = auth()->user();

        $soal = DB::table('questions')->get(["id", "tipe_soal", "id_ujian"])->where('id_ujian', $id_ujian)
            ->where('tipe_soal', "!=", "essai");

        foreach ($soal as $row) {

            $jumlahIdSiswa = DB::table('test_submit_questions')
                ->select(DB::raw('COUNT(DISTINCT id_siswa) as jumlah_id_siswa'))
                ->value("jumlah_id_siswa");

            $jumlahBenar = DB::table('test_submit_questions')
                ->where('id_soal', '=', $row->id)
                ->where('status_jawaban', '=', 'benar')
                ->count();

            $jumlahSalah = DB::table('test_submit_questions')
                ->where('id_soal', '=', $row->id)
                ->where('status_jawaban', '=', 'salah')
                ->count();

            $tidakMenjawab = $jumlahIdSiswa - ($jumlahBenar + $jumlahSalah);

            $persentase = ($jumlahBenar / $jumlahIdSiswa) * 100;

            $row->benar = $jumlahBenar;
            $row->salah = $jumlahSalah;
            $row->tidak_menjawab = $tidakMenjawab;
            $row->persentase = $persentase;
        }

        return response()->json($soal);
    }

    public function getJawabanSiswa($idUjian, $idSiswa)
    {
        $soal = DB::table("questions")->get(['id', 'pertanyaan', 'tipe_soal', 'id_ujian'])->where('id_ujian', $idUjian)->where('tipe_soal', "essai");
        $result = [];

        foreach ($soal as $item) {
            $jawaban = DB::table('test_submit_questions')->get(['id', 'id_siswa', 'tipe_soal', 'jawaban'])->where('tipe_soal', 'essai')->where('id_siswa', $idSiswa)->first();
            if ($jawaban) {
                $item->jawaban = $jawaban->jawaban;
            } else {
                $item->jawaban = "";
            }

            $result[] = $item;
        }

        return $result;
    }
    public function getPoinSiswa($idUjian, $idSiswa)
    {
        $poin = DB::table("collect_tests")->get(['id', 'id_siswa', 'nilai', 'id_ujian'])->where('id_siswa', $idSiswa)->where('id_ujian', $idUjian)->first();

        return $poin;
    }
    public function updateNilaiUjian(Request $request, $idUjian, $idSiswa)
    {
        $poin = $request->input('nilai');

        $affected = DB::table('collect_tests')
            ->where('id_ujian', $idUjian)
            ->where('id_siswa', $idSiswa)
            ->update(['nilai' => $poin]);

        return $affected;
    }

    public function showLogbook($id = null){
        if($id != null){
            $data = Account::where('id',$id)->whereHas('logbook')->whereHas('student')->with(['logbook','student'])->get();
        }else{
        $data = Account::whereHas('logbook')->whereHas('student')->with(['logbook','student'])->get();
        }
        foreach ($data as $value){
            $value->studentDetail = Student::find($value->id);
            $value->kelas = Classes::find($value->studentDetail->id_kelas);
        }
        return $data;
    }

    public function storeBatch(Request $request){
        $validatedData = $request->validate([
            'nama' => 'required|string',
            'tanggal_masuk' => 'required|date',
            'tanggal_selesai' => 'required|date',
        ]);

        $batch = Batch::create([
            'nama' => $validatedData['nama'],
            'tanggal_masuk' => $validatedData['tanggal_masuk'],
            'tanggal_selesai' => $validatedData['tanggal_selesai'],
        ]);

        return response()->json([
            'message' => 'Batch entry created successfully',
            'logbook' => $batch,
        ], 201);
    }

    public function getBatch(){
        $data = Batch::with('materi')->get();
        return $data;
    }

    public function storeMateri(Request $request, $id){
        $validatedData = $request->validate([
            'nama' => 'required|string',
        ]);

        $batch = Subject::create([
            'nama_matpel' => $validatedData['nama'],
            'batch_id' => $id,
        ]);

        return response()->json([
            'message' => 'Batch entry created successfully',
            'logbook' => $batch,
        ], 201);
    }

}
