<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Trails extends Model
{
    protected $fillable = [
      'activity', 'approved', 'ascent', 'coords', 'created_at' , 'descent' , 'description' , 'difficulty' , 'distance', 'gpx', 'hire_centre', 'no_times_downloaded', 'slug', 'strava_link', 'summary', 'tags' , 'time', 'title', 'user_id', 'youtube_link'
  ];

          public function index()
      {
        // return $this->hasMany(Task::class);
        echo "hello";
      }
}
