<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Account;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function addAccount(Request $request){
        $validator = Validator::make($request->all(), [
            'Username' => 'required',
            'Password' => 'required',
            'Role' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => true,
                'message' => 'Ada Kesalahan',
                'data' => $validator->errors(),
            ]);
        }

        $input = $request->all();
        $input['Password'] = bcrypt($input['Password']);

        $akun = Account::create($input);
        
        $success['token'] = $akun->createToken('auth_token')->plainTextToken;

        $succes['name'] = $akun->Nama_User;
        $succes['role'] = $akun->Role;

        return response()->json([
            'succes' => true,
            'massage' => 'Akun berhasil dibuat',
            'data' => $succes
        ]);
    }
}
