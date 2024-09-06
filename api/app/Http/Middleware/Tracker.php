<?php

namespace App\Http\Middleware;

use Closure;

class Tracker {

    /**
     **
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle($request, Closure $next) {

        $headers = $request->header();
        unset($headers['cookie']);

        $data = [
            'url'=>$request->fullUrl(),
            'headers'=>$headers,
            'inputs'=>$request->input(),
            'visitor'=>$request->ip(),
        ];
        \Log::info($data);

        $response = $next($request);
        return $response;
    }
}
