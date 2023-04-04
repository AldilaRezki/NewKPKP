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
        Schema::table('lecturers', function (Blueprint $table) {
            $table->unsignedBigInteger('ID_Matpel');
            // $table->foreign('ID_Matpel')->references('id')->on('subjects')->onDelete('cascade');
        });

        Schema::table('students', function (Blueprint $table) {
            $table->unsignedBigInteger('ID_Kelas');
            // $table->foreign('ID_Matpel')->references('id')->on('subjects')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
