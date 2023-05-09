<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Account;
use Illuminate\Http\Client\ResponseSequence;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request)
    {

        $credentials = $request->validate([
            'username' => ['required'],
            'password' => ['required'],
        ]);

        $user = Account::where('username', $credentials['username'])->first();

        if (!$user || !Hash::check($credentials['password'], $user->password)) {
            return response()->json([
                'success' => false,
                'message' => 'Gagal login, silahkan cek kembali username dan password'
            ]);
        }

        $token = $user->createToken('auth_token')->plainTextToken;
        $token = substr($token, 2);

        $res = [
            'success' => true,
            'user' => $user['username'],
            'role' => $user['role'],
            'token' => $token,
        ];

        return response()->json($res);
    }

    public function logout()
    {
        auth()->user()->tokens()->delete();
        return [
            'message' => 'user logged out'
        ];
    }
}
