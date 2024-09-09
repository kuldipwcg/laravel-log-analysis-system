<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Logger;
use Illuminate\Http\Request;

class LoggerController extends Controller
{
    private $table;

    function __construct()
    {
        $this->table = 'app_logs';
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function filters()
    {

        $obj = (new Logger())->setMongoCollection($this->table);
        $levels = $obj->pluck("level", "level")->toArray();
        $level_names = $obj->pluck("level_name", "level_name")->toArray();
        $channels = $obj->pluck("channel", "channel")->toArray();
        return compact("levels", "level_names", "channels");
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $obj = (new Logger())->setMongoCollection($this->table);
        $whereClosure = function ($q) use ($request) {
            if ($request->has("filter_level")) {
                $q->where("level", (int) $request->filter_level);
            }
            if ($request->has("filter_level_name")) {
                $q->where("level_name", $request->filter_level_name);
            }
            if ($request->has("filter_channel")) {
                $q->where("channel", $request->filter_channel);
            }
        };
        return $obj
            ->where($whereClosure)
            ->select([
                "id",
                "message",
                "context.exception.message",
                "context.exception.code",
                "level",
                "level_name",
                "channel",
                "datetime",
                "extra",
            ])->orderBy('datetime','DESC')
            ->paginate();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $obj = (new Logger())->setMongoCollection($this->table);
        return $obj->where("_id", $id)->firstOrFail();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $obj = (new Logger())->setMongoCollection($this->table);
        return $obj->where("_id", $id)->update($request->input());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $obj = (new Logger())->setMongoCollection($this->table);
        return $obj->where("_id", $id)->delete();
    }
}
