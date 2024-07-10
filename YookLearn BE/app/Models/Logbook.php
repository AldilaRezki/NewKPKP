<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Logbook extends Model
{
    use HasFactory;

    protected $table = 'logbook';

    protected $fillable = [
        'nama_buku',
        'nama_penulis',
        'tanggal_pinjam',
        'tanggal_pengembalian',
        'created_by',
    ];

    protected $dates = [
        'tanggal_pinjam',
        'tanggal_pengembalian',
    ];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            $model->created_by = Auth::id();
        });
    }

    // Define relationship with the User model (assuming a User model exists)
    public function peminjam()
    {
        return $this->belongsTo(Account::class, 'created_by');
    }
}
