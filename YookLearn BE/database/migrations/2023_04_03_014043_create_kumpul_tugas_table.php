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
            $table->uuid('id');
            $table->string('filename')->nullable();
            $table->integer('nilai');
            // $table->dateTime('tanggal_upload');
            $table->timestamps();
            $table->string('id_siswa');
            $table->unsignedBigInteger('id_tugas');
            
            $table->foreign('id_siswa')->references('id')->on('students')->onDelete('cascade');
            $table->foreign('id_tugas')->references('id')->on('assignments')->onDelete('cascade');

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
