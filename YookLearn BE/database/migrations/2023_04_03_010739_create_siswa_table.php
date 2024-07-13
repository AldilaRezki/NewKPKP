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
        Schema::create('students', function (Blueprint $table) {
            // $table->id('id');
            $table->uuid('id')->primary();
            $table->string('nisn',10);
            $table->string('nama_lengkap');
            $table->string('jenis_kelamin');
            $table->char('agama',18);
            $table->timestamps();

            $table->foreign('id')->references('id')->on('accounts')->onDelete('cascade');

            $table->index('id','id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('students');
    }
};
