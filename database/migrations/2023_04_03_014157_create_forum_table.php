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
        Schema::create('forums', function (Blueprint $table) {
            $table->id('id');
            $table->string('Judul_forum');
            $table->text('Isi_forum');
            $table->dateTime('Tanggal_Forum');
            $table->timestamps();
            $table->unsignedBigInteger('ID_Matpel');

            $table->foreign('ID_Matpel')->references('id')->on('subjects')->onDelete('cascade');

            $table->index('id','id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('forum');
    }
};
