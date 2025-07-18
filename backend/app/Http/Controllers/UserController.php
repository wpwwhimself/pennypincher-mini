<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function me(Request $rq)
    {
        return $rq->user();
    }

    #region tokens
    public function createToken(Request $rq)
    {
        $creds = $rq->only(["name", "password"]);
        if (!Auth::attempt($creds)) {
            return response()->json(["message" => "Unauthorized"], 401);
        }

        $token = $rq->user()->createToken($rq->name);
        return ["token" => $token->plainTextToken];
    }
    #endregion
}
