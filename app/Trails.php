<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Trails extends Model
{
    protected $fillable = ['title', 'id'];

          public function index()
      {
        // return $this->hasMany(Task::class);
        echo "hello";
      }
}
