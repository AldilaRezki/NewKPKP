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
        Schema::create('lecturers', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->string('nip',21)->nullable();
            $table->string('nama_lengkap');
            $table->char('jenis_kelamin',1);
            $table->string('golongan',5)->nullable();
            $table->string('matpel')->nullable();
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
        Schema::dropIfExists('guru');
    }
};
