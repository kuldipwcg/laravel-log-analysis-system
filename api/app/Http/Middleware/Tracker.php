<?php

namespace App\Http\Middleware;

use App\Common\Common;
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
        \Log::info('headers= '.json_encode($headers));
        \Log::info('data= '.json_encode($request->input() + ['ip' => $request->ip()]));

        $response = $next($request);
        return $response;
    }
}
