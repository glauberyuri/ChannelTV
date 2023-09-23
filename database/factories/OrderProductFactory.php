<?php

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\OrderProduct>
 */
class OrderProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $product = Product::with('Products')->inRandomOrder()->first();
        return [
            'product_id' => $product->id,
            'product' => $product->toJson(),
            'quantity' => $this->faker->randomDigitNot(0),
            'unitary_price' => $product->price
        ];
    }
}
