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
        Schema::create('collect_tests', function (Blueprint $table) {
            $table->id('id');
            $table->string('id_siswa');
            $table->unsignedBigInteger('id_ujian');
            $table->integer('nilai');
            $table->timestamps();

            $table->foreign('id_siswa')->references('id')->on('students')->onDelete('cascade');
            $table->foreign('id_ujian')->references('id')->on('tests')->onDelete('cascade');

            $table->index('id','id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('collect_tests');
    }
};
