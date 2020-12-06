<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index()
    {
        $users = User::all();
        return Inertia::render('IndexUser', [
            'users' => $users
            ]);
    }
    public function store(Request $request){
        $users = $request->all();
        User::create($users);
        
        return redirect()->route('users.index');
    }
}
