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
        Schema::create('class_packages', function (Blueprint $table) {
            $table->id('id');
            $table->string('nama_paket');
            $table->timestamps();

            $table->string('id_guru');
            $table->foreign('id_guru')->references('id')->on('lecturers')->onDelete('cascade');

            $table->index('id','id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('paket_kelas');
    }
};
