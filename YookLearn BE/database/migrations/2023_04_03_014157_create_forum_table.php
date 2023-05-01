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
            $table->string('judul_forum');
            $table->text('isi_forum');
            // $table->dateTime('tanggal_forum');
            $table->timestamps();
            $table->unsignedBigInteger('id_matpel');

            $table->foreign('id_matpel')->references('id')->on('subjects')->onDelete('cascade');

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
