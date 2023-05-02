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
            'golongan' => 'V',
        ]);

        DB::table('classess')->insert([
            'id' => 1,
            'nama_kelas' => 'Kelas 12 Test',
            'id_guru' => 'guruuuid',
        ]);

        DB::table('subjects')->insert([
            'id' => 1,
            'nama_matpel' => 'Matematika 12 Test',
            'id_kelas' => '1',
            'id_guru' => 'guruuuid',
        ]);

        DB::table('subjects')->insert([
            'id' => 2,
            'nama_matpel' => 'IPA 12 Test',
            'id_kelas' => '1',
            'id_guru' => 'guruuuid',
        ]);

        DB::table('subjects')->insert([
            'id' => 3,
            'nama_matpel' => 'Bahasa 12 Test',
            'id_kelas' => '1',
            'id_guru' => 'guruuuid',
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
            'agama' => 'Islam',
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
            'agama' => 'Kristen Protestan',
            'id_kelas' => 1,
        ]);

        DB::table('assignments')->insert([
            'id' => 1,
            'judul_tugas' => 'Tugas Test 1',
            'detail_tugas' => 'Ini adalah tugas test 1',
            'nilai' => 90,
            'tipe_deadline' => 'strict',
            'id_matpel' => 1,
        ]);

        DB::table('assignments')->insert([
            'id' => 2,
            'judul_tugas' => 'Tugas Test 2',
            'detail_tugas' => 'Ini adalah tugas test 2',
            'nilai' => 100,
            'tipe_deadline' => 'unstrict',
            'id_matpel' => 1,
        ]);

        DB::table('student_assigments')->insert([
            'id' => 'uuidkumpultugas1',
            'filename' => 'filetugas1',
            'nilai' => 0,
            'id_siswa' => 'siswauuid',
            'id_tugas' => 1,
        ]);

        DB::table('student_assigments')->insert([
            'id' => 'uuidkumpultugas2',
            'filename' => 'filetugas2',
            'nilai' => 0,
            'id_siswa' => 'siswauuid',
            'id_tugas' => 2,
        ]);

        DB::table('student_assigments')->insert([
            'id' => 'uuidkumpultugas3',
            'filename' => 'filetugas3',
            'nilai' => 0,
            'id_siswa' => 'siswauuid2',
            'id_tugas' => 2,
        ]);

        DB::table('student_assigments')->insert([
            'id' => 'uuidkumpultugas3',
            'filename' => 'filetugas3',
            'nilai' => 0,
            'id_siswa' => 'siswauuid2',
            'id_tugas' => 2,
        ]);

        DB::table('assigment_comments')->insert([
            'id' => 1,
            'komentar' => 'Ini adalah komentar 1 tugas pada tugas 1',
            'id_pengirim' => 'siswauuid',
            'id_kumpul' => "uuidkumpultugas1",
        ]);

        DB::table('assigment_comments')->insert([
            'id' => 2,
            'komentar' => 'Ini adalah komentar 2 tugas pada tugas 1',
            'id_pengirim' => 'guruuuid',
            'id_kumpul' => "uuidkumpultugas2",
        ]);

        DB::table('assigment_comments')->insert([
            'id' => 3,
            'komentar' => 'Ini adalah komentar 1 tugas pada tugas 2',
            'id_pengirim' => 'siswauuid2',
            'id_kumpul' => "uuidkumpultugas2",
        ]);

        DB::table('assigment_comments')->insert([
            'id' => 4,
            'komentar' => 'Ini adalah komentar 2 tugas pada tugas 2',
            'id_pengirim' => 'guruuuid',
            'id_kumpul' => "uuidkumpultugas2",
        ]);

        DB::table('forums')->insert([
            'id' => 1,
            'judul_forum' => 'Forum Test 1',
            'isi_forum' => 'Ini adalah isi dari forum test 1',
            'id_matpel' => 1,
        ]);

        DB::table('forum_comments')->insert([
            'id' => 'komen1uuid',
            'komentar' => 'Ini adalah komentar 1 tugas pada forum 1',
            'id_pengirim' => 'guruuuid',
            'id_forum' => 1,
        ]);

        DB::table('forum_comments')->insert([
            'id' => 'komen2uuid',
            'komentar' => 'Ini adalah komentar 2 tugas pada forum 1',
            'id_pengirim' => 'siswauuid',
            'id_forum' => 1,
            'id_reply' => 'komen1uuid'
        ]);

        DB::table('materials')->insert([
            'id' => 1,
            'id_matpel' => 1,
            'judul_materi' => 'Materi test 1',
            'isi_materi' => 'Ini adalah isi materi test 1',
            'filename' => 'materi1.pdf'
        ]);

        DB::table('materials')->insert([
            'id' => 2,
            'id_matpel' => 1,
            'judul_materi' => 'Materi test 2',
            'isi_materi' => 'Ini adalah isi materi test 2',
            'filename' => 'materi2.pdf'
        ]);

        DB::table('materials')->insert([
            'id' => 3,
            'id_matpel' => 1,
            'judul_materi' => 'Materi test 3',
            'isi_materi' => 'Ini adalah isi materi test 3',
            'filename' => 'materi3.pdf'
        ]);
    }
}