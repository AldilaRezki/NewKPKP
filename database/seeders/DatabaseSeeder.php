<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        // DB::table('akun')->insert([
        //     'name' => Str::random(10),
        //     'email' => Str::random(10).'@gmail.com',
        //     'password' => Hash::make('password'),
        // ]);

        DB::table('accounts')->insert([
            'id' => 'adminuuid',
            'Username' => 'admin',
            'Password' => Hash::make('admin123'), 
            'Role' => 'admin', 
            'Nama_User' => 'Admin Sistem',
        ]);

        DB::table('accounts')->insert([
            'id' => 'guruuuid',
            'Username' => 'guru',
            'Password' => Hash::make('lecture321'), 
            'Role' => 'guru', 
            'Nama_User' => 'Guru Sistem',
        ]);

        DB::table('lecturers')->insert([
            'id' => 'guruuuid',
            'nip' => 'niptesting',
            'nama_lengkap' => 'Guru Sistem',
            'jenis_kelamin' => 'L',
            'golongan'  => 'V',
        ]);

        DB::table('classess')->insert([
            'id' => 1,
            'nama_kelas' => 'Kelas 12 Test',
            'id_guru'  => 'guruuuid',
        ]);

        DB::table('subjects')->insert([
            'id' => 1,
            'nama_matpel' => 'Matematika 12 Test',
            'id_kelas'  => '1',
            'id_guru'  => 'guruuuid',
        ]);

        DB::table('subjects')->insert([
            'id' => 2,
            'nama_matpel' => 'IPA 12 Test',
            'id_kelas'  => '1',
            'id_guru'  => 'guruuuid',
        ]);

        DB::table('subjects')->insert([
            'id' => 3,
            'nama_matpel' => 'Bahasa 12 Test',
            'id_kelas'  => '1',
            'id_guru'  => 'guruuuid',
        ]);

        DB::table('accounts')->insert([
            'id' => 'siswauuid',
            'Username' => 'siswa',
            'Password' => Hash::make('student@123'), 
            'Role' => 'siswa', 
            'Nama_User' => 'Siswa Sistem',
        ]);

        DB::table('students')->insert([
            'id' => 'siswauuid',
            'nisn' => 'nisntest',
            'nama_lengkap' => 'Siswa Sistem',
            'jenis_kelamin' => 'L',
            'agama'  => 'Islam',
            'id_kelas' => 1,
        ]);

        DB::table('accounts')->insert([
            'id' => 'siswauuid2',
            'Username' => 'siswa2',
            'Password' => Hash::make('student@123'), 
            'Role' => 'siswa', 
            'Nama_User' => 'Siswa Sistem 2',
        ]);

        DB::table('students')->insert([
            'id' => 'siswauuid2',
            'nisn' => 'nisntest2',
            'nama_lengkap' => 'Siswa Sistem 2',
            'jenis_kelamin' => 'L',
            'agama'  => 'Kristen Protestan',
            'id_kelas' => 1,
        ]);

        
    }
}
