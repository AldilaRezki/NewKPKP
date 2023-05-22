<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as Middleware;

class VerifyCsrfToken extends Middleware
{
    /**
     * The URIs that should be excluded from CSRF verification.
     *
     * @var array<int, string>
     */
    protected $except = [
        //
        'http://localhost:8000/api/login',
        
        'http://localhost:8000/api/admin/siswa/add',
        'http://localhost:8000/api/admin/siswa/edit/*',
        'http://localhost:8000/api/admin/guru/add',
        'http://localhost:8000/api/admin/guru/edit/*',
        'http://localhost:8000/api/admin/account/add',
        'http://localhost:8000/api/admin/account/edit/*',
        'http://localhost:8000/api/admin/kelas/add',
        'http://localhost:8000/api/admin/matpel/add',
        'http://localhost:8000/api/admin/matpel/edit/*',
        'http://localhost:8000/api/admin/kelas/edit/*',
        
        'http://localhost:8000/api/lecture/profile/editpassword',

        'http://localhost:8000/api/student/editpassword',
        'http://localhost:8000/api/student/tugas/*/add',
    ];
}
