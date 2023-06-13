<?php

namespace App\Imports;

use App\Models\Account;
use App\Models\Lecturer;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class GuruImport implements ToCollection, WithHeadingRow
{
    public function collection($rows)
    {
        foreach ($rows as $row) {

            $inputAkun['username'] = $row['username'];
            $inputAkun['password'] = bcrypt($row['password']);
            $inputAkun['role'] = "guru";
            $inputAkun['nama_user'] = $row['nama_lengkap'];

            $akun = Account::create($inputAkun);

            $input['id'] = $akun['id'];
            $input['nip'] = $row['nip'];
            $input['nama_lengkap'] = $row['nama_lengkap'];
            $input['golongan'] = $row['golongan'];
            $input['pangkat'] = $row['pangkat'];
            $input['matpel'] = $row['mata_pelajaran_yang_diajar'];

            Lecturer::create($input);
        }
    }
}
