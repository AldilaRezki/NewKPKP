<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\AdminController;
use App\Http\Controllers\API\LectureController;

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
    
    Route::get('forum/{id_matpel}', [LectureController::class, 'getForum']);
    Route::post('forum/add/{id_matpel}', [LectureController::class, 'addForum']);
    Route::get('forum/{id_matpel}/{id}', [LectureController::class, 'getForumById']);
    Route::post('forum/{id_matpel}/edit/{id}', [LectureController::class, 'updateForum']);
    Route::delete('forum/{id_matpel}/delete/{id}', [LectureController::class, 'deleteForum']);

    Route::post('matpel/{id_matpel}/forum/{id_forum}/addcomment', [LectureController::class, 'addForumComment']);
    Route::post('matpel/{id_matpel}/forum/{id_forum}/reply/{id_comment}', [LectureController::class, 'replyCommnent']);
    Route::post('matpel/{id_matpel}/forum/{id_forum}/comment/{id_comment}/edit', [LectureController::class, 'editForumComment']);
    Route::delete('matpel/{id_matpel}/forum/{id_forum}/comment/{id_comment}/delete', [LectureController::class, 'deleteForumComment']);
    
    Route::post('matpel/{id_matpel}/tugas/add', [LectureController::class, 'addTugas']);
    Route::get('matpel/{id_matpel}/tugas/', [LectureController::class, 'getTugas']);

});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});



