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


        if ($user['id'] != $subject->id_guru) {
            return response()->json([
                'success' => false,
                'massage' => 'Tidak memiliki otoritas',
            ]);
        }

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

        $input = $request->all();
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
        $assigment = DB::table('assignments')->get(['id', 'judul_tugas', 'deadline'])->where('id', $subject->id);
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

        foreach ($submit as $i)
        {
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

        foreach ($submit as $i)
        {
            $student = DB::table("students")->get(['id', 'nama_lengkap', 'id_kelas'])->where('id', $i->id_siswa)->first();
            $i->nama_pengirim = $student->nama_lengkap;
        }

        return response()->json($submit);
    }

    public function getDetailIndividuTugas($id_matpel, $id_tugas, $id_kumpul)
    {
        $user = auth()->user();
        $subject = DB::table('subjects')->get()->where('id', $id_matpel)->first();
        $assigment = DB::table('assignments')->get(['id', 'judul_tugas', 'detail_tugas'])->where('id', $id_tugas)->first();
        $submit = DB::table('student_assigments')->get()->where('id', $id_kumpul)->first();

        $submit->comments = DB::table('assigment_comments')->get()->where('id_kumpul', $assigment->id);


        if ($user['id'] != $subject->id_guru) {
            return response()->json([
                'success' => false,
                'massage' => 'Tidak memiliki otoritas',
            ]);
        }

        $res = [
            'success' => true,
            'tugas' => $submit
        ];

        return response()->json($res);
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
        $assigment = DB::table('assigments')->get()->where('id', $id_tugas)->first();


        if ($user['id'] != $subject->id_guru) {
            return response()->json([
                'success' => false,
                'massage' => 'Tidak memiliki otoritas',
            ]);
        }

        $validator = Validator::make($request->all(), [
            'judul_tugas' => 'required',
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

        $input = $request->all();
        $input['id_matpel'] = $subject->id;

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
            'isi_materi' => 'required',
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

    public function addUjian()
    {
    }

    public function getUjian()
    {
    }

    public function getDetailUjian()
    {
    }
}
