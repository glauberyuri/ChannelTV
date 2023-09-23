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
        Schema::create('clients', function (Blueprint $table) {
            $table->id();
            $table->foreignId('product_id')->constrained();
            $table->foreignId('user_id')->constrained();
            $table->string('name');
            $table->string('provider');
            $table->string('login');
            $table->string('password');
            $table->string('note');
            $table->string('number');
            $table->integer('status');
            $table->integer('credit');
            $table->date('start_date');
            $table->date('expire_date');
            $table->string('content');
            $table->integer('type');
            $table->timestamps();
            $table->softDeletes();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('clients');
    }
};
