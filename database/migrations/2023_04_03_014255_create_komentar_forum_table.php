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
            $table->text('komentar');
            // $table->dateTime('tanggal_upload');
            $table->timestamps();
            $table->unsignedBigInteger('id_forum');
            $table->string('id_pengirim');

            $table->foreign('id_forum')->references('id')->on('forums')->onDelete('cascade');
            $table->foreign('id_pengirim')->references('id')->on('accounts')->onDelete('cascade');

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
