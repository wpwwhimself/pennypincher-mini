<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $fillable = [
        "name", "description",
        "icon", "color",
    ];

    #region relations
    public function transactions()
    {
        return $this->hasMany(Transaction::class);
    }
    #endregion
}
