<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Account;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login (Request $request) {

        $credentials = $request->validate([
            'Username' => ['required'],
            'Password' => ['required'],
        ]);

        // return response()->json([
        //     'data' => $credentials
        // ]);

        if (Auth::attempt($credentials)) {
            
            $auth = Auth::users();

            $succes['token'] = $auth->createToken('auth_token')->plainTextToken;
            $succes['name'] = $auth->Nama_User;
            $succes['role'] = $auth->Role;
            
            return response()->json(
                [
                    'success' => true,
                    'massage' => 'Berhasil Login',
                    'data' => $succes,
                ]
            ); 
        } 
        else {
            return response()->json(
                [
                    'success' => false,
                    'massage' => 'Silahkan Cek kembali username dan password anda',
                    'data' => null,
                ]
            ); 
        }
    }
}