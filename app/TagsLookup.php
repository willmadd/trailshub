<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TagsLookup extends Model
{
    protected $fillable = [
      'tag_id', 'trail_id'
  ];

          public function index()
      {
        // return $this->hasMany(Task::class);
        echo "hello";
      }
}
