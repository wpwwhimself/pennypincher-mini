<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;

class ModelController extends Controller
{
    private static function model($model)
    {
        return "App\Models\\" . Str::of($model)->studly()->singular();
    }

    public function list(Request $rq, $model)
    {
        $model = self::model($model);
        return $model::orderBy("created_at", "desc")
            ->get();
    }

    public function show(Request $rq, $model, $id)
    {
        $model = self::model($model);
        return $model::findOrFail($id);
    }

    public function store(Request $rq, $model)
    {
        $model = self::model($model);
        return $model::create($rq->all());
    }

    public function update(Request $rq, $model, $id)
    {
        $model = self::model($model);
        return $model::findOrFail($id)->update($rq->all());
    }

    public function destroy(Request $rq, $model, $id)
    {
        $model = self::model($model);
        return $model::findOrFail($id)->delete();
    }
}
