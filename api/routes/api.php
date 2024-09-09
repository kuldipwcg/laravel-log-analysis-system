<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoggerController;

Route::middleware('tracker')->group( function () {
    Route::get("/logger", [LoggerController::class,"index"]);
    Route::get("logger/filters", [LoggerController::class,"filters"]);
    Route::post("logger/{id}/delete", [LoggerController::class,"destroy"]);
    Route::get("logger/{id}/show", [LoggerController::class,"show"]);
    Route::post("logger/{id}/update", [LoggerController::class,"update"]);
});
