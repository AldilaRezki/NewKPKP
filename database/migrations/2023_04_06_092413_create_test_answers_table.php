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
        Schema::create('test_answers', function (Blueprint $table) {
            $table->id('id');
            $table->unsignedBigInteger('id_soal');
            $table->unsignedBigInteger('id_kumpul');
            $table->string('jawaban');
            $table->enum('status',['benar','salah']);
            $table->timestamps();

            $table->foreign('id_soal')->references('id')->on('questions')->onDelete('cascade');
            $table->foreign('id_kumpul')->references('id')->on('collect_tests')->onDelete('cascade');

            $table->index('id','id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('test_answers');
    }
};
