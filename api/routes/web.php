<?php

use Illuminate\Support\Facades\Route;
Route::get('/random', function () {

    $length = rand(1,10);
    $pool = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $key =substr(str_shuffle(str_repeat($pool, 5)), 0, $length);
    return $key;
});
