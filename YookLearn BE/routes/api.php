<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\AdminController;
use App\Http\Controllers\API\LectureController;
use App\Http\Controllers\API\StudentController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('login', [AuthController::class, 'login']);
Route::middleware('auth:sanctum')->post('logout', [AuthController::class, 'logout']);

// Admin Routes
Route::group(['middleware' => ['auth:sanctum'], 'prefix' => 'admin'], function () {

    Route::get('account/', [AdminController::class, 'getAccount']);
    Route::get('account/{id}', [AdminController::class, 'getAccountById']);
    Route::post('account/add', [AdminController::class, 'addAccount']);
    Route::post('account/edit/{id}', [AdminController::class, 'editAccount']);
    Route::delete('account/delete/{id}', [AdminController::class, 'deleteAccount']);

    Route::post('guru/add', [AdminController::class, 'addGuru']);
    Route::get('guru/', [AdminController::class, 'getGuru']);
    Route::get('guru/{id}', [AdminController::class, 'getGuruById']);
    Route::post('guru/edit/{id}', [AdminController::class, 'updateGuru']);
    Route::delete('guru/delete/{id}', [AdminController::class, 'deleteGuru']);

    Route::post('siswa/add', [AdminController::class, 'addSiswa']);
    Route::get('siswa/', [AdminController::class, 'getSiswa']);
    Route::get('siswa/{id}', [AdminController::class, 'getSiswaById']);
    Route::post('siswa/edit/{id}', [AdminController::class, 'updateSiswa']);
    Route::delete('siswa/delete/{id}', [AdminController::class, 'deleteSiswa']);

    Route::post('kelas/add', [AdminController::class, 'addKelas']);
    Route::get('kelas/', [AdminController::class, 'getKelas']);
    Route::get('kelas/{id}', [AdminController::class, 'getKelasById']);
    Route::post('kelas/edit/{id}', [AdminController::class, 'updateKelas']);
    Route::delete('kelas/delete/{id}', [AdminController::class, 'deleteKelas']);

    Route::post('matpel/add', [AdminController::class, 'addMatpel']);
    Route::get('matpel/', [AdminController::class, 'getMatpel']);
    Route::get('matpel/{id}', [AdminController::class, 'getMatpelById']);
    Route::post('matpel/edit/{id}', [AdminController::class, 'updateMatpel']);
    Route::delete('matpel/delete/{id}', [AdminController::class, 'deleteMatpel']);
});

// Lecture Routes
Route::group(['middleware' => ['auth:sanctum'], 'prefix' => 'lecture'], function () {
    Route::get('matpel', [LectureController::class, 'getMatpel']);

    Route::get('profile', [LectureController::class, 'getProfile']);
    Route::post('profile/editpassword', [LectureController::class, 'editPassword']);

    Route::get('/anggota/{id_matpel}', [LectureController::class, 'getAnggotaKelas']);

    Route::get('matpel/{matpel_id}forum/', [LectureController::class, 'getForum']);
    Route::post('matpel/{matpel_id}/forum/add', [LectureController::class, 'addForum']);
    Route::get('matpel/{matpel_id}forum/{id_forum}', [LectureController::class, 'getForumById']);
    Route::post('matpel/{matpel_id}forum/{id_forum}/edit', [LectureController::class, 'updateForum']);
    Route::delete('matpel/{matpel_id}forum/{id_forum}/delete', [LectureController::class, 'deleteForum']);

    Route::post('matpel/{id_matpel}/forum/{id_forum}/addcomment', [LectureController::class, 'addForumComment']);
    Route::post('matpel/{id_matpel}/forum/{id_forum}/reply/{id_comment}', [LectureController::class, 'replyCommnent']);
    Route::post('matpel/{id_matpel}/forum/{id_forum}/comment/{id_comment}/edit', [LectureController::class, 'editForumComment']);
    Route::delete('matpel/{id_matpel}/forum/{id_forum}/comment/{id_comment}/delete', [LectureController::class, 'deleteForumComment']);

    Route::post('matpel/{id_matpel}/tugas/add', [LectureController::class, 'addTugas']);
    Route::get('matpel/{id_matpel}/tugas/', [LectureController::class, 'getTugas']);
    Route::get('matpel/{id_matpel}/tugas/{id_tugas}', [LectureController::class, 'getDetailTugas']);
    Route::post('matpel/{id_matpel}/tugas/{id_tugas}/edit', [LectureController::class, 'updateTugas']);
    Route::delete('matpel/{id_matpel}/tugas/{id_tugas}/delete', [LectureController::class, 'deleteTugas']);
    Route::get('matpel/{id_matpel}/tugas/{id_tugas}/submit/{id_kumpul}', [LectureController::class, 'getDetailIndividuTugas']);
    Route::post('matpel/{id_matpel}/tugas/{id_tugas}/submit/{id_kumpul}/comment/add', [LectureController::class, 'addKomentarTugas']);

    Route::post('matpel/{id_matpel}/materi/add', [LectureController::class, 'addMateri']);
    Route::get('matpel/{id_matpel}/materi/', [LectureController::class, 'getMateri']);
    Route::get('matpel/{id_matpel}/materi/{id_materi}', [LectureController::class, 'getDetailMateri']);
});

// Student Routes
Route::group(['middleware' => ['auth:sanctum'], 'prefix' => 'student'], function () {
    Route::get('/profile', [StudentController::class, 'getProfile']);
    Route::post('/editpassword', [StudentController::class, 'editPassword']);
    Route::get('/tugas', [StudentController::class, 'getAllTugas']);
    Route::get('/kelas', [StudentController::class, 'getKelas']);
    Route::get('/kelas/{id_kelas}', [StudentController::class, 'getMapel']);
    Route::get('/kelas/{id_kelas}/siswa', [StudentController::class, 'getSiswa']);

    Route::get('/matpel/{id_matpel}/tugas', [StudentController::class, 'getTugas']);
    Route::get('/tugas/{idTugas}', [StudentController::class, 'getDetailTugas']);
    Route::post('/tugas/{idTugas}/add', [StudentController::class, 'uploadTugas']);

    Route::get('/matpel/{idMatpel}/materi', [StudentController::class, 'getMateri']);
    Route::get('/materi/{idMateri}', [StudentController::class, 'getDetailMateri']);
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});