<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Product extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [

        'category_id',
        'name',
        'description',
        'views',
        'status',
        'slug',
        'discount',
        'image',
        'price'
    ];

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    public function Products(): BelongsToMany
    {
        return $this->belongsToMany(Order::class)->using(OrderProduct::class);
    }
    public function features(): BelongsToMany
    {
        return $this->belongsToMany(Feature::class)
            ->using(FeatureProduct::class);
    }
    public function Client(): HasMany
    {
        return $this->hasMany(Client::class);
    }
}
