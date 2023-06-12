<?php

namespace App\Imports;

use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Illuminate\Support\Facades\Request;

class SiswaImport implements ToCollection, WithHeadingRow
{
    public function collection($rows)
    {
        $idKelas = Request::route('id_kelas');

        foreach ($rows as $row) {

            $nisn = $row['nisn'];
            $namaLengkap = $row['nama_lengkap'];
            $jenisKelamin = $row['jenis_kelamin'];
            $agama = $row['agama'];

            DB::table('students')->insert([
                'nisn' => $nisn,
                'nama_lengkap' => $namaLengkap,
                'jenis_kelamin' => $jenisKelamin,
                'agama' => $agama,
                'id_kelas' => $idKelas,
            ]);
        }
    }
}
