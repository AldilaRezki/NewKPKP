<?php

namespace App\Imports;

use App\Models\Account;
use App\Models\Student;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Illuminate\Support\Facades\Request;

class SiswaImport implements ToCollection, WithHeadingRow
{
    public function collection($rows)
    {
        $idKelas = Request::route('id_kelas');

        foreach ($rows as $row) {

            $inputAkun['username'] = $row['username'];
            $inputAkun['password'] = bcrypt($row['password']);
            $inputAkun['role'] = "siswa";
            $inputAkun['namaUser'] = $row['nama_lengkap'];

            $akun = Account::create($inputAkun);

            $input['id'] = $akun['id'];
            $input['nisn'] = $row['nisn'];
            $input['nama_lengkap'] = $row['nama_lengkap'];
            $input['jenis_kelamin'] = $row['jenis_kelamin'];
            $input['agama'] = $row['agama'];
            $input['id_kelas'] = $idKelas;

            Student::create($input);
        }
    }
}
