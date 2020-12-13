<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tags extends Model
{
    protected $fillable = [
      'tag'
  ];

          public function index()
      {
        // return $this->hasMany(Task::class);
        echo "hello";
      }
}
