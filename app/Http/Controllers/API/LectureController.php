<?php

namespace App\Http\Controllers\API;
use App\Http\Controllers\Controller;
use App\Models\Account;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use App\Models\Forum;
use App\Models\Forum_Comment;
use App\Models\Assignment;
use App\Models\Lecturer;
use Illuminate\Support\Facades\Redis;

class LectureController extends Controller
{
    public function getProfile()
    {
        $user = auth()->user();
        $lecture = DB::table('lecturers')->get()->where('id', $user['id']);

        $res = [
            'success' => true,
            'user' => $user,
            'lecturer' => $lecture
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
        $affected = Account::where('id', $user['id']) ->update(['password' => $input['new_password']]);

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

        $res = [
            'success' => true,
            'matpel' => $matpel
        ];

        return response()->json($res);
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
        $student = DB::table('students')->get()->where('id_kelas', $class->id);

        $res = [
            'success' => true,
            'student' => $student
        ];

        return response()->json($res);
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

        if (!$forums)
        {
            $res = [
                'success' => true,
                'forum' => null
            ];
        }

        return response()->json($res);
    }

    public function getForumById($id_matpel,$id_forum)
    {
        $user = auth()->user();
        $subject = DB::table('subjects')->get()->where('id', $id_matpel)->first();
        $comments = DB::table('forum_comments')->get()->where('id_forum', $id_forum)->sortBy('created_at', false);;
        
        foreach ($comments as $comment)
        {
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

        if (!$forum)
        {
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

        if(!$affected)
        {
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

        if(!$affected)
        {
            $res = [
                'success' => false,
                'message' => 'Forum gagal dihapus'
            ];
        }

        return response()->json($res);
    }

    public function addForumComment(Request $request,$id_matpel,$id_forum)
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

        if(!$affected) {
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

        if(!$affected) {
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

        if (!$comments)
        {
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

        $affected = Forum_Comment::where('id', $comment->id) ->update(['komentar' => $input['komentar']]);

        $res = [
            'success' => true,
            'massage' => 'Komentar berhasil di edit'
        ];

        if(!$affected) {
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

        if(!$affected)
        {
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

        if (!$affected)
        {
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

        $assigment = DB::table('assignments')->get(['id', 'judul_tugas'])->where('id', $subject->id);

        $res = [
            'success' => true,
            'assigment' => $assigment
        ];

        return response()->json($res);
    }

    public function getDetailTugas()
    {

    }

    public function getDetailIndividuTugas()
    {

    }

    public function updateTugas()
    {

    }

    public function deleteTugas()
    {

    }
    
    public function addMateri()
    {

    }

    public function getMateri()
    {

    }

    public function getDetailMateri()
    {

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
