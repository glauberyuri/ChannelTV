<?php

namespace App\Models;

use App\Enums\OrderStatusEnum;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Order extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'user_id',
        'session_id',
        'total',
        'status'
    ];

    protected $casts = [
        'status' => OrderStatusEnum::class
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function Products(): BelongsToMany
    {
        return $this->belongsToMany(Product::class)
        ->using(OrderProduct::class)
        ->withPivot('quantity', 'unitary_price', 'product');
    }

    public function payment(): hasMany
    {
        return $this->hasMany(Payment::class);
    }
}
