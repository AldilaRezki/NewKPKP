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
        Schema::create('forum_comments', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->text('Komentar');
            $table->dateTime('Tanggal_Upload');
            $table->timestamps();
            $table->unsignedBigInteger('ID_Forum');
            $table->string('ID_Pengirim');

            $table->foreign('ID_Forum')->references('id')->on('forums')->onDelete('cascade');
            $table->foreign('ID_Pengirim')->references('id')->on('accounts')->onDelete('cascade');

            $table->index('id','id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('komentar_forum');
    }
};
