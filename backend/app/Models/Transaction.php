<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    protected $fillable = [
        'account_id', 'category_id',
        'date', 'label', 'description', 'amount',
        'internal_transaction_account_id',
    ];

    protected $dates = [
        'date',
    ];

    #region relations
    public function account()
    {
        return $this->belongsTo(Account::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
    #endregion
}
