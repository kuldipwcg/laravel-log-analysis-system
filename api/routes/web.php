<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {

    $length = rand(1,10);
    $pool = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $key =substr(str_shuffle(str_repeat($pool, 5)), 0, $length);
    return $key;
});

Route::group(["prefix" => "logger"], function () {
    Route::get("/", "LoggerController@index");
    Route::get("filters", "LoggerController@filters");
    Route::post("/{id}/delete", "LoggerController@destroy");
    Route::get("/{id}/show", "LoggerController@show");
    Route::post("/{id}/update", "LoggerController@update");
});
