<?php

namespace App\Http\Controllers;

use App\Enums\OrderStatusEnum;
use App\Models\Order;
use Database\Seeders\OrderSeeder;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
    /**
     * Get data to cart users
     */
    public function loadCart(): array
    {
        $cart = Order::with('skus.product', 'sku.features')
            ->where('status', OrderStatusEnum::CART)
            ->where(function ($query) {
                $query->where('session_id', session()->getId());
                if(auth()->check()){
                    $query->orWhere('user_id', auth()->user()->id);
                }
            })->first();
        if (!$cart && config('app.env') == 'local'){
            $seed = new OrderSeeder();
            $seed->run(session()->getId());
            return $this->loadCart();
        }

        return $cart->toArray();
    }
}
