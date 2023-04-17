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
        // Schema::table('lecturers', function (Blueprint $table) {
        //     $table->unsignedBigInteger('id_matpel')->nullable();
        //     $table->foreign('id_matpel')->references('id')->on('subjects')->onDelete('cascade');
        // });

        Schema::table('students', function (Blueprint $table) {
            $table->unsignedBigInteger('id_kelas')->nullable();
            $table->foreign('id_kelas')->references('id')->on('classess')->onDelete('cascade');
        });

        Schema::table('classess', function (Blueprint $table) {
            $table->string('id_guru');
            $table->foreign('id_guru')->references('id')->on('lecturers')->onDelete('cascade');
        });

        Schema::table('forum_comments', function (Blueprint $table) {
            $table->string('id_reply')->nullable();
            $table->foreign('id_reply')->references('id')->on('forum_comments')->onDelete('cascade');
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
