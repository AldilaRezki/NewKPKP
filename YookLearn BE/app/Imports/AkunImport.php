<?php

namespace App\Imports;

use App\Models\Account;
use App\Models\Lecturer;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class AkunImport implements ToCollection, WithHeadingRow
{
    public function collection($rows)
    {
        foreach ($rows as $row) {

            $inputAkun['username'] = $row['username'];
            $inputAkun['password'] = bcrypt($row['password']);
            $inputAkun['role'] = $row['role'];
            $inputAkun['nama_user'] = $row['nama_user'];

            Account::create($inputAkun);
        }
    }
}
