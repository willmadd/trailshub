<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Images extends Model
{
    protected $fillable = [
      'trail_id', 'url'
  ];

          public function index()
      {
        // return $this->hasMany(Task::class);
        echo "hello";
      }
}
