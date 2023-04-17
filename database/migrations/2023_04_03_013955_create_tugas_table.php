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
        Schema::create('assignments', function (Blueprint $table) {
            $table->id('id');
            $table->text('judul_tugas');
            $table->integer('nilai');
            $table->dateTime('deadline')->nullable();
            $table->enum('tipe_deadline',['strict', 'unstrict']);
            $table->string('filename')->nullable();
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
        Schema::dropIfExists('tugas');
    }
};
