<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StudentBatch extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('students')
    ->where('id', 'siswauuid')
    ->update(['batch_id' => 1]);

    DB::table('students')
    ->where('id', 'siswauuid2')
    ->update(['batch_id' => 2]);
    }
}
