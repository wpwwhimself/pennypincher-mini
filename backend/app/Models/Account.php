<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Account extends Model
{
    protected $fillable = [
        "name", "description",
        "icon", "color",
        "starting_balance",
    ];

    #region relations
    public function transactions()
    {
        return $this->hasMany(Transaction::class);
    }
    #endregion
}
