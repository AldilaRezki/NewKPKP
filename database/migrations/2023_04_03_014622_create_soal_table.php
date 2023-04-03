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
            $table->text('Pertanyaan');
            $table->string('Filename')->nullable();
            $table->enum('Tipe_Soal',['Pilihan Ganda', 'Pilihan Centang', 'Essay']);
            $table->integer('Poin');
            $table->timestamps();
            $table->unsignedBigInteger('ID_Ujian');

            $table->foreign('ID_Ujian')->references('id')->on('tests')->onDelete('cascade');

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
