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
            $table->string('nama_matpel');
            $table->string('jadwal')->nullable();
            $table->timestamps();
            $table->unsignedBigInteger('id_kelas');
            $table->string('id_guru');
            // $table->string('jadwal');
            // $table->unsignedBigInteger('id_packages');

            $table->foreign('id_kelas')->references('id')->on('classess')->onDelete('cascade');
            $table->foreign('id_guru')->references('id')->on('lecturers')->onDelete('cascade');
            // $table->foreign('id_packages')->references('id')->on('class_packages')->onDelete('cascade');

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
