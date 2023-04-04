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
        Schema::create('student_assigments', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('Filename')->nullable();
            $table->string('Poin',3);
            $table->dateTime('Tanggal_Upload');
            $table->timestamps();
            $table->string('ID_Siswa');
            $table->unsignedBigInteger('ID_Tugas');
            
            $table->foreign('ID_Siswa')->references('id')->on('students')->onDelete('cascade');
            $table->foreign('ID_Tugas')->references('id')->on('assignments')->onDelete('cascade');

            $table->index('id','id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('kumpul_tugas');
    }
};
