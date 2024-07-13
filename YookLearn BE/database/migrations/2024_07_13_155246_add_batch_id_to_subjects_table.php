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
        Schema::table('subjects', function (Blueprint $table) {
            $table->integer('batch_id')->nullable();
            $table->unsignedBigInteger('id_kelas')->nullable()->change();
            $table->string('id_guru')->nullable()->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('subjects', function (Blueprint $table) {
            $table->dropColumn('batch_id');
            $table->unsignedBigInteger('id_kelas')->nullable(false)->change();
            $table->string('id_guru')->nullable(false)->change();
        });
    }
};
