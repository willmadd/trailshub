<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Gpxroute;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class TrailController extends Controller
{
 
    public function getTrails () {
        
        $trails = DB::table('trails')->select(['coords','id', 'title'])->where([
            ['activity', 'mtb'],
            ['approved', 1],
            ['completed', 1]
        ])->get()->map(function($trail) {
            return json_decode($trail->coords);
        });

        return response()->json(
            ['ggg'=>$trails,], 200);
    }

    public function getTrailBySlug ($slug) {
        
        $trail = DB::table('trails')->where('slug', $slug)->first();

        return response()->json(
            $trail,
             200);
    }

    public function dSlug($string) {
        return strtolower(trim(preg_replace('~[^0-9a-z]+~i', '-', html_entity_decode(preg_replace('~&([a-z]{1,2})(?:acute|cedil|circ|grave|lig|orn|ring|slash|th|tilde|uml);~i', '$1',htmlentities(preg_replace('/[&]/', ' and ', $title), ENT_QUOTES, 'UTF-8')), ENT_QUOTES, 'UTF-8')), '-'));
    }
}


