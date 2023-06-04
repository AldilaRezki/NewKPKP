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
        Schema::create('tests', function (Blueprint $table) {
            $table->id('id');
            $table->text('judul_ujian')->nullable();
            $table->text('deskripsi')->nullable();
            $table->time('waktu');
            $table->string('filename')->nullable();
            $table->integer('jumlah_soal')->nullable();
            // $table->dateTime('tanggal_ujian')->nullable();
            // $table->enum('tipe_soal', ['acak', 'tidak acak']);
            $table->timestamps();
            $table->unsignedBigInteger('id_matpel');

            $table->foreign('id_matpel')->references('id')->on('subjects')->onDelete('cascade');

            $table->index('id','id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('komentar_ujian');
    }
};
