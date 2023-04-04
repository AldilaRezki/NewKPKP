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
            $table->string('NIP',21)->nullable();
            $table->string('Nama_Lengkap');
            $table->char('Jenis_Kelamin',1);
            $table->string('Golongan',5)->nullable();
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
