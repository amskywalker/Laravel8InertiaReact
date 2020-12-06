<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [\App\Http\Controllers\UserController::class, 'index'])->name('users.index');
Route::post('/store', [\App\Http\Controllers\UserController::class, 'store']);

Route::get('/cadastrar', function(){
    $data = [
        'name' => 'Adailton Moura dos Santos',
        'email' => 'adailtonsantos@gmail.com',
        'password' => '12345678'
    ];
    \App\Models\User::create($data);
});
