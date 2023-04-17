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
            $table->unsignedBigInteger('id_matpel');
            $table->text('judul_materi');
            $table->text('isi_materi')->nullable();
            $table->string('filename')->nullable();

            $table->foreign('id_matpel')->references('id')->on('subjects')->onDelete('cascade');

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
