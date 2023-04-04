<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Lecturer;
use App\Models\Account;
use App\Models\Student;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AdminController extends Controller
{
    public function addGuru(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'Nama_Lengkap' => 'required',
            'Jenis_Kelamin' => 'required',
            'ID_Matpel' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => true,
                'message' => 'Ada Kesalahan',
                'data' => $validator->errors(),
            ]);
        }

        $guru = $request->all();

        $account['Username'] =  $guru['Nama_Lengkap'] . 'lecturer';
        $account['Password'] = bcrypt($guru['Nama_Lengkap'] . 'Lecturer' . $guru['ID_Matpel']);
        $account['Role'] = 'guru';
        $account['Nama_User'] = $guru['Nama_Lengkap'];

        if ($akun = Account::create($account)) {

            $guru['id'] = $akun['id'];

            // return $guru;

            Lecturer::create($guru);

            return response()->json([
                'success' => true,
                'massage' => 'Berhasil Menambahkan Guru dan Membuat akun guru',
                'id_guru' => $guru['id']
            ]);
        } else {
            return response()->json([
                'success' => false,
                'massage' => 'Gagal Menambahkan guru',
            ]);
        }
    }

    public function addSiswa(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'Nama_Lengkap' => 'required',
            'Jenis_Kelamin' => 'required',
            'NISN' => 'required',
            'Agama' => 'required',
            'ID_Kelas' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Ada Kesalahan',
                'data' => $validator->errors(),
            ]);
        }

        $siswa = $request->all();

        $account['Username'] =  $siswa['NISN'];
        $account['Password'] = bcrypt($siswa['Nama_Lengkap'] . "321");
        $account['Role'] = 'siswa';
        $account['Nama_User'] = $siswa['Nama_Lengkap'];

        if ($akun = Account::create($account)) {

            $siswa['id'] = $akun['id'];

            // return $siswa;

            Student::create($siswa);

            return response()->json([
                'success' => true,
                'massage' => 'Berhasil Menambahkan siswa dan Membuat akun siswa',
                'id_siswa' => $siswa['id'],
            ]);
        } else {
            return response()->json([
                'success' => false,
                'massage' => 'Gagal Menambahkan siswa'
            ]);
        }
    }

    public function deleteGuru($id)
    {
        if (Lecturer::find($id)->delete()) {
            if (Account::find($id)->delete()) {
                return response()->json([
                    'success' => true,
                    'message' => 'Guru berhasil dihapus'
                ]);
            } else {
                return response()->json([
                    'success' => false,
                    'message' => 'Guru gagal dihapus dihapus'
                ]);
            }
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Guru gagal dihapus dihapus'
            ]);
        }
    }
    public function deleteSiswa($id)
    {
        if (Student::find($id)->delete()) {
            if (Account::find($id)->delete()) {
                return response()->json([
                    'success' => true,
                    'message' => 'Siswa berhasil dihapus'
                ]);
            } else {
                return response()->json([
                    'success' => false,
                    'message' => 'Siswa gagal dihapus dihapus'
                ]);
            }
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Siswa gagal dihapus dihapus'
            ]);
        }
    }

    public function addAccount(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'Username' => 'required',
            'Password' => 'required',
            'Role' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => true,
                'message' => 'Ada Kesalahan',
                'data' => $validator->errors(),
            ]);
        }

        $input = $request->all();
        $input['Password'] = bcrypt($input['Password']);

        $akun = Account::create($input);

        $success['token'] = $akun->createToken('auth_token')->plainTextToken;

        $succes['name'] = $akun->Nama_User;
        $succes['role'] = $akun->Role;

        return response()->json(
            [
                'succes' => true,
                'massage' => 'Akun berhasil dibuat',
                'data' => $succes
            ]
        );
    }
}
