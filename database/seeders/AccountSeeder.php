<?php

namespace Database\Seeders;

use DateTime;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class AccountSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('accounts')->insert([
            'id' => Str::random(36),
            'Username' => 'admin',
            'Password' => Hash::make('admin123'), 
            'Role' => 'admin', 
            'Nama_User' => 'Admin Sistem',
        ]);

        DB::table('accounts')->insert([
            'id' => Str::random(36),
            'Username' => 'guru',
            'Password' => Hash::make('lecture321'), 
            'Role' => 'guru', 
            'Nama_User' => 'Guru Sistem',
        ]);
        
        DB::table('accounts')->insert([
            'id' => Str::random(36),
            'Username' => 'siswa',
            'Password' => Hash::make('student@123'), 
            'Role' => 'siswa', 
            'Nama_User' => 'Siswa Sistem',
        ]);
    }
}
