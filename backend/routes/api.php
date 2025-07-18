<?php

use App\Http\Controllers\ModelController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->group(function () {
    Route::controller(UserController::class)->prefix("users")->group(function () {
        Route::get("me", "me");

        Route::withoutMiddleware("auth:sanctum")->post("tokens/create", "createToken");
    });

    Route::controller(ModelController::class)->group(function () {
        Route::get("{model}", "list");
        Route::get("{model}/{id}", "show");
        Route::post("{model}", "store");
        Route::patch("{model}/{id}", "update");
        Route::delete("{model}/{id}", "destroy");
    });
});
