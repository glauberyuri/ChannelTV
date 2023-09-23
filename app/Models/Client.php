<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class Client extends Model
{
    use HasFactory, SoftDeletes;

    public $fillable = [
        'product_id',
        'user_id',
        'name',
        'provider',
        'login',
        'password',
        'views',
        'note',
        'number',
        'credit',
        'status',
        'start_date',
        'expire_date',
        'content',
        'type',
    ];

    public function Product() : BelongsTo
    {
        return $this->belongsTo(Product::class);
    }
    public function User() : BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
