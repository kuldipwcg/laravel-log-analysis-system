<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoggerController;
Route::get('/random', function () {

    $length = rand(1,10);
    $pool = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $key =substr(str_shuffle(str_repeat($pool, 5)), 0, $length);
    return $key;
});

Route::middleware(['api','tracker'])->prefix('logger')->group( function () {
    Route::get("/", [LoggerController::class,"index"]);
    Route::get("filters", [LoggerController::class,"filters"]);
    Route::post("/{id}/delete", [LoggerController::class,"destroy"]);
    Route::get("/{id}/show", [LoggerController::class,"show"]);
    Route::post("/{id}/update", [LoggerController::class,"update"]);
});
