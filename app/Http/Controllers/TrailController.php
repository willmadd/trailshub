<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Gpxroute;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class TrailController extends Controller
{
 
    public function getTrails () {
        
        $trails = DB::table('trails')->select('coords')->where([
            ['activity', 'mtb'],
            ['approved', 1],
            ['completed', 1]
        ])->get()->map(function($trail) {
            return json_decode($trail->coords);
        });

        return response()->json(
            $trails, 200);
    }

    public function getTrailBySlug ($slug) {
        
        $trail = DB::table('trails')->where('slug', $slug)->first();

        return response()->json(
            $trail,
             200);
    }
}
