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
        Schema::create('subjects', function (Blueprint $table) {
            $table->id('id');
            $table->dateTime('jadwal');
            $table->timestamps();
            $table->unsignedBigInteger('ID_Kelas');
            $table->string('ID_Guru');
            $table->string('ID_Kelas');

            $table->foreign('ID_Kelas')->references('id')->on('classess')->onDelete('cascade');
            $table->foreign('ID_Guru')->references('id')->on('lecturers')->onDelete('cascade');
            $table->foreign('ID_Kelas')->references('id')->on('subjects')->onDelete('cascade');

            $table->index('id','id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('_mata__pelajaran');
    }
};
