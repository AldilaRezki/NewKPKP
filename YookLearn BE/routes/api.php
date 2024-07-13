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
Route::get('materi/{idMateri}/download', [StudentController::class, 'downloadMateri']);

Route::middleware('auth:sanctum')->post('logout', [AuthController::class, 'logout']);
Route::middleware('auth:sanctum')->get('user', [AuthController::class, 'currentUser']);

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

    Route::post('import/siswa/kelas/{id_kelas}', [AdminController::class, 'importExcelSiswa']);
    Route::post('import/guru', [AdminController::class, 'importExcelGuru']);
    Route::post('import/akun', [AdminController::class, 'importExcelAkun']);

    Route::post('kelas/add', [AdminController::class, 'addKelas']);
    Route::get('kelas/', [AdminController::class, 'getKelas']);
    Route::get('kelas/{id}', [AdminController::class, 'getKelasById']);
    Route::get('kelas/{id}/siswa', [AdminController::class, 'getSiswaByKelas']);
    Route::get('kelas/{id}/mapel', [AdminController::class, 'getMapelByKelas']);
    Route::post('kelas/edit/{id}', [AdminController::class, 'editKelas']);
    Route::delete('kelas/delete/{id}', [AdminController::class, 'deleteKelas']);
    Route::get('/mapel/{id_mapel}/siswa', [StudentController::class, 'getSiswa']);

    Route::post('matpel/add', [AdminController::class, 'addMatpel']);
    Route::get('matpel/', [AdminController::class, 'getMatpel']);
    Route::get('matpel/{id}', [AdminController::class, 'getMatpelById']);
    Route::post('matpel/edit/{id}', [AdminController::class, 'editMatpel']);
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
    Route::get('matpel/{id_matpel}/tugas/{id_tugas}/kumpul', [LectureController::class, 'getStudentSubmit']);
    Route::post('matpel/{id_matpel}/tugas/{id_tugas}/edit', [LectureController::class, 'updateTugas']);
    Route::delete('matpel/{id_matpel}/tugas/{id_tugas}/delete', [LectureController::class, 'deleteTugas']);
    Route::get('matpel/{id_matpel}/tugas/{id_tugas}/submit/{id_kumpul}', [LectureController::class, 'getDetailIndividuTugas']);
    Route::post('matpel/{id_matpel}/tugas/{id_tugas}/submit/{id_kumpul}/comment/add', [LectureController::class, 'addKomentarTugas']);

    Route::post('matpel/{id_matpel}/kumpul/{id_submit}', [LectureController::class, 'submitNilai']);

    Route::post('matpel/{id_matpel}/materi/add', [LectureController::class, 'addMateri']);
    Route::get('matpel/{id_matpel}/materi/', [LectureController::class, 'getMateri']);
    Route::get('matpel/{id_matpel}/materi/{id_materi}', [LectureController::class, 'getDetailMateri']);

    Route::get('matpel/{id_matpel}/ujian', [LectureController::class, 'getUjian']);
    Route::get('matpel/{id_matpel}/ujian/{id_ujian}/soal', [LectureController::class, 'daftarSoal']);
    Route::post('matpel/{id_matpel}/ujian/add', [LectureController::class, 'addUjian']);
    Route::post('ujian/{id_ujian}/tambahSoal', [LectureController::class, 'addSoal']);

    Route::get('ujian/{id_ujian}/infoUjian', [LectureController::class, 'getDetailUjian']);
    Route::get('mapel/{id_mapel}/ujian/{id_ujian}/kumpul', [LectureController::class, 'getDetailKumpulUjian']);
    Route::get('mapel/{id_mapel}/ujian/{id_ujian}/siswa/{id_siswa}', [LectureController::class, 'getDetailKumpulSiswa']);
    Route::get('mapel/{id_mapel}/ujian/{id_ujian}', [LectureController::class, 'getDetailUjianKelas']);
    Route::get('ujian/{idUjian}/hasil/{idSiswa}', [LectureController::class, 'getJawabanSiswa']);
    Route::get('ujian/{idUjian}/poin/{idSiswa}', [LectureController::class, 'getPoinSiswa']);
    Route::post('ujian/{idUjian}/submit/{idSiswa}/update', [LectureController::class, 'updateNilaiUjian']);

    Route::get('/logbook/{id?}', [LectureController::class, 'showLogbook']);

    Route::post('/batch', [LectureController::class, 'storeBatch']);
    Route::get('/batch', [LectureController::class, 'getBatch']);
    Route::post('/materi/{id}', [LectureController::class, 'storeMateri']);
    Route::get('/batch/logbook/{id}', [LectureController::class, 'getBatchLogbook']);
});

// Student Routes
Route::group(['middleware' => ['auth:sanctum'], 'prefix' => 'student'], function () {
    Route::get('/profile', [StudentController::class, 'getProfile']);
    Route::post('/editpassword', [StudentController::class, 'editPassword']);
    Route::get('/tugas', [StudentController::class, 'getAllTugas']);
    Route::get('/kelas', [StudentController::class, 'getKelas']);
    Route::get('/kelas/{id_kelas}', [StudentController::class, 'getMapel']);
    Route::get('/mapel/{id_mapel}', [StudentController::class, 'getMapelById']);

    Route::get('/matpel/{id_matpel}/tugas', [StudentController::class, 'getTugas']);
    Route::get('/tugas/{idTugas}', [StudentController::class, 'getDetailTugas']);
    Route::post('/tugas/{idTugas}/add', [StudentController::class, 'uploadTugas']);
    Route::get('/tugas/{idTugas}/upload', [StudentController::class, 'getUploadTugas']);

    Route::get('/matpel/{idMatpel}/materi', [StudentController::class, 'getMateri']);
    Route::get('/materi/{idMateri}', [StudentController::class, 'getDetailMateri']);

    Route::get('/matpel/{idMatpel}/ujian', [StudentController::class, 'getUjian']);
    Route::get('/matpel/{idMatpel}/ujian/{idUjian}/detail', [StudentController::class, 'getCurrentUjian']);
    Route::get('/ujian/{idUjian}/soal', [StudentController::class, 'getSoal']);

    Route::post('/ujian/{idUjian}/submit', [StudentController::class, 'submitUjian']);
    Route::get('/ujian/{idUjian}/waktu', [StudentController::class, 'getWaktuUjian']);

    Route::get('/logbook', [StudentController::class, 'getLogbook']);
    Route::get('/logbook/lampiran/{id}', [StudentController::class, 'downloadLampiran']);
    Route::post('/logbook', [StudentController::class, 'storeLogbook']);
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
