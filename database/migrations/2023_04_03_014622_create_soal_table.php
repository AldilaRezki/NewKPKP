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
        Schema::create('questions', function (Blueprint $table) {
            $table->id('id');
            $table->text('pertanyaan');
            $table->string('filename')->nullable();
            $table->enum('tipe_soal',['ganda', 'centang', 'essay']);
            $table->integer('nilai');
            $table->timestamps();
            $table->unsignedBigInteger('id_ujian');

            $table->foreign('id_ujian')->references('id')->on('tests')->onDelete('cascade');

            $table->index('id','id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('komentar_soal');
    }
};
