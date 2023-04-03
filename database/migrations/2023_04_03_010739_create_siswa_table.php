<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('students', function (Blueprint $table) {
            $table->uuid('id');
            $table->integer('NISN',10);
            $table->string('Nama Lengkap');
            $table->char('Jenis_Kelamin',1);
            $table->char('Agama',18);
            $table->timestamps();

            $table->foreign('id')->references('id')->on('accounts')->onDelete('cascade');

            $table->index('id','id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('siswa');
    }
};
