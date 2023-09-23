<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Feature;
use App\Models\Product;
use App\Models\Sku;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Product::factory()
                ->hasAttached(Feature::factory()->count(1), ['name' => '1000 Canais'])
                ->count(3)
            ->count(5)
            ->create([
                'category_id' => Category::first()->id,
            ]);
    }
}
