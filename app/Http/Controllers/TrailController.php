<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Gpxroute;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class TrailController extends Controller
{
 
    public function getTrails () {
        
        $trails = DB::table('trails')->select(['coords','id', 'slug'])->where([
            ['activity', 'mtb'],
            ['approved', 1],
            ['completed', 1]
        ])->get()->map(function($trail) {
            return Array('coords' => json_decode($trail->coords), 'id' => $trail->id, 'slug'=>$trail->slug);
        });

        return response()->json(
            ['trails'=>$trails,], 200);
    }

    public function getTrailBySlug ($slug, $coords) {
        // return response()->json(
        //     $coords,
        //      200);
    if($coords=="coords"){
        $trail = DB::table('trails')->select(['id', 'user_id', 'main_image', 'strava_link' , 'description', 'activity', 'title', 'hire_centre' , 'tags', 'difficulty','youtube_link' , 'coords'])->where('slug', $slug)->first();
    }else{
        $trail = DB::table('trails')->select(['id', 'user_id', 'main_image', 'strava_link' , 'description', 'activity', 'title', 'hire_centre' , 'tags', 'difficulty','youtube_link' ])->where('slug', $slug)->first();

    }

        return response()->json(
            $trail,
             200);
    }

    public function dSlug($string) {
        return strtolower(trim(preg_replace('~[^0-9a-z]+~i', '-', html_entity_decode(preg_replace('~&([a-z]{1,2})(?:acute|cedil|circ|grave|lig|orn|ring|slash|th|tilde|uml);~i', '$1',htmlentities(preg_replace('/[&]/', ' and ', $title), ENT_QUOTES, 'UTF-8')), ENT_QUOTES, 'UTF-8')), '-'));
    }

    public function getTrailByTag($tag)
    {
        $trails = DB::table('trails')->select(['id', 'user_id', 'main_image', 'activity', 'title', 'hire_centre' , 'tags', 'difficulty', 'slug', 'ascent', 'descent', 'distance', 'time'])->where('tags', 'LIKE', "%{$tag}%")->get();
        $regionData = DB::table('region_data')->select(['id', 'title', 'image', 'slug', 'description'])->where('slug', $tag)->first();
        return response()->json(
            [
            'trails'=>$trails,
            'regionData'=>$regionData
            ],
             200);
    
    }

    public function getRecentTrails($limit)
    {
        $recentTrails = DB::table('trails')->select(['id', 'user_id', 'main_image', 'activity', 'title', 'hire_centre' , 'tags', 'difficulty', 'slug', 'ascent', 'descent', 'distance', 'time'])->latest('created_at')->limit($limit)->get();
    
    
        return response()->json(
            $recentTrails,
             200);
    }
}


