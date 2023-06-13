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
        Schema::create('test_submit_questions', function (Blueprint $table) {
            $table->id();
            $table->string('id_siswa');
            $table->unsignedBigInteger('id_ujian');
            $table->unsignedBigInteger('id_soal');
            $table->enum('tipe_soal', ['pilgan', 'kotakcentang', 'essai']);
            $table->string("status_jawaban");
            $table->string("jawaban");
            $table->timestamps();

            $table->foreign('id_siswa')->references('id')->on('students')->onDelete('cascade');
            $table->foreign('id_ujian')->references('id')->on('tests')->onDelete('cascade');
            $table->foreign('id_soal')->references('id')->on('questions')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('test__submit__questions');
    }
};
