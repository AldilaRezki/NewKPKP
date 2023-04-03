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
            $table->text('Judul_Tugas');
            $table->integer('Poin');
            $table->dateTime('Deadline');
            $table->enum('Tipe_Deadline',['Strict', 'unStrict']);
            $table->string('Filename')->nullable();
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
        Schema::dropIfExists('tugas');
    }
};
