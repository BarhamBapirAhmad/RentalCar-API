<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Rental extends Model
{
    protected $fillable = [
         'car_id',
        'plan',
        'km_before',
        'km_after',
        'status',
        'start_date',
        'end_date',
        'total_price'
    ];
    public function car()
    {
        return $this->belongsTo(Car::class);
    }
}
