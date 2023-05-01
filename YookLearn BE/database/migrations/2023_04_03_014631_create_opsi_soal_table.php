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
        Schema::create('question_options', function (Blueprint $table) {
            $table->id('id');
            $table->text('deskripsi');
            $table->enum('tipe_opsi', ['benar', 'salah']);
            $table->timestamps();
            $table->unsignedBigInteger('id_soal');

            $table->foreign('id_soal')->references('id')->on('questions')->onDelete('cascade');

            $table->index('id','id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('komentar_opsi_soal');
    }
};
