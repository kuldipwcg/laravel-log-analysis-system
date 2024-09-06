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

    public function getMessageAttribute(){
        return $this->attributes['message'] ? unserialize($this->attributes['message']) : [];
    }
}
