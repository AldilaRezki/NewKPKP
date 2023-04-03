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
        Schema::create('materials', function (Blueprint $table) {
            $table->id('id');
            $table->unsignedBigInteger('ID_Matpel');
            $table->text('Judul_Materi');
            $table->text('Isi_Materi')->nullable();
            $table->string('Filename')->nullable();

            $table->foreign('ID_Matpel')->references('id')->on('subjects')->onDelete('cascade');

            $table->index('id','id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('komentar_materi');
    }
};
