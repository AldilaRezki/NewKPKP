<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\AdminController;

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

Route::post('admin/account/add', [AdminController::class, 'addAccount']);

Route::post('admin/guru/add', [AdminController::class, 'addGuru']);
Route::delete('admin/guru/delete/{id}', [AdminController::class, 'deleteGuru']);

Route::post('admin/siswa/add', [AdminController::class, 'addSiswa']);
Route::delete('admin/siswa/delete/{id}', [AdminController::class, 'deleteSiswa']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
