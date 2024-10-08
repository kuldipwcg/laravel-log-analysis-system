<?php

namespace App\Models;

use MongoDB\Laravel\Eloquent\Model;

class Logger extends Model
{
    protected $connection = "mongodb";

    protected $collection = "api_logs";

    protected $guarded = [];

    public function setMongoCollection($currentCollection)
    {
        $this->collection = $currentCollection;
        return $this;
    }

    public function getMessageAttribute()
    {
        try {
            return unserialize($this->attributes['message']);
        } catch (\Throwable $th) {
            return $this->attributes['message'];
            //throw $th;
        }
    }
}
