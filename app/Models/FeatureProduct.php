<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\Pivot;
use Illuminate\Database\Eloquent\SoftDeletes;

class FeatureProduct extends Pivot
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'product_id',
        'feature_id',
        'name'
    ];

    public function Product(): BelongsTo
    {
        return $this->belongsTo(Product::class);
    }
}
