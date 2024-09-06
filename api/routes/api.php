<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoggerController;

Route::middleware(['api','tracker'])->group( function () {
    Route::get("/", [LoggerController::class,"index"]);
    Route::get("filters", [LoggerController::class,"filters"]);
    Route::post("/{id}/delete", [LoggerController::class,"destroy"]);
    Route::get("/{id}/show", [LoggerController::class,"show"]);
    Route::post("/{id}/update", [LoggerController::class,"update"]);
});
