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
        Schema::create('payments', function (Blueprint $table) {
            $table->id();
            $table->string('external_id')->nullable(); // Ref a payment id
            $table->foreignId('order_id')->constrained();
            $table->integer('method'); //the method of payment
            $table->integer('status'); // status payment
            $table->integer('installments')->nullable(); // the number of installments credit card
            $table->dateTime('approved_at')->nullable(); // date approved of payment
            $table->text('qr_code_64')->nullable(); //the image to pix, it's mean base64 image
            $table->text('qr_code')->nullable(); // the code pix to insert to copy button
            $table->text('ticket_url')->nullable(); // link to billet payment
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('payments');
    }
};
