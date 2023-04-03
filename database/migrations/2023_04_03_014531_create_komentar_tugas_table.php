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
        Schema::create('assigment_comments', function (Blueprint $table) {
            $table->id('id');
            $table->text('Komentar');
            $table->dateTime('Tanggal_Upload');
            $table->timestamps();
            $table->string('ID_Pengirim');
            $table->string('ID_Kumpul');

            $table->foreign('ID_Pengirim')->references('id')->on('accounts')->onDelete('cascade');
            $table->foreign('ID_kumpul')->references('id')->on('student_assigments')->onDelete('cascade');

            $table->index('id','id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('komentar_tugas');
    }
};
