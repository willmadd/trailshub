<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use App\Trails;
// use Illuminate\Support\Facades\Http;
use Response;

class LocationController extends Controller
{
 
    public function getLocationTrails ($location) {

        $endpoint = "https://maps.googleapis.com/maps/api/geocode/json?address=".$location."&key=AIzaSyADQ6jdzvTJFPsgPy36aj67-GVYnvNDVrs";
        $client = new \GuzzleHttp\Client();

        $response = $client->request('GET', $endpoint);

        $statusCode = $response->getStatusCode();

        $content = json_decode($response->getBody(), true);
                
        $bounds = $content['results'][0]['geometry']['bounds'];

        $north_lat = $bounds['northeast']['lat'];
        $south_lat = $bounds['southwest']['lat'];
        $east_lng = $bounds['northeast']['lng'];
        $west_lng = $bounds['southwest']['lng'];

        $trails = DB::table('trails')->select(['id', 'user_id', 'slug', 'description', 'activity', 'title', 'hire_centre' , 'difficulty','youtube_link', 'summary', 'distance' , 'time' , 'ascent' ,'descent' , 'coords'])
        ->where('start_lat','<=', $north_lat)->
        where('start_lat','>=', $south_lat)->
        where('start_lng','<=', $east_lng)->
        where('start_lng','>=', $west_lng)->get();

        $address_components = $content['results'][0]['address_components'];

        $regionData = DB::table('region_data')->select(['id', 'title', 'image', 'slug', 'description'])->where('slug', $this->slugify($content['results'][0]['address_components'][0]['long_name']))->first();

        foreach($trails as $trail){
            $images=[];
            $imagesArr = DB::table('images')->select(['url'])->where('trail_id', $trail->id)->get();
            $tags = [];
            $tagsIdArr = DB::table('tags_lookUps')->select(['tag_id'])->where('trail_id', $trail->id)->get();
            // $url = $image->url;
                // array_push($images, $base64);
                foreach($imagesArr as $image){
                    $url = $image->url;
                    array_push($images, $url);
                }
                $trail->images = $images;
                foreach ($tagsIdArr as $tagId) {
                    $tag = DB::table('tags')->select(['tag'])->where('id', $tagId->tag_id)->get();
                    array_push($tags, $tag[0]->tag);
                };
                $trail->tags = $tags;
            }



        return response()->json(
            [
            "bounds"=> $bounds,
            "locationTrails"=>$trails,
            "locationData"=>$regionData,
            "address_components"=>array_map(function($place){
                return $place['long_name'];
            },$address_components)
            ],

             200);
    }

    public function getMapStyles () {
        $style_id = 'cka5ncmgs19io1io3qn27wejb';
        $access_token = 'pk.eyJ1Ijoid2lsbG1hZGQiLCJhIjoiY2thNW43amlvMDFteDNtcGEyMWpxeWwzcCJ9.wfx7i_G1rWq3roofKl7XhQ';
        $endpoint = 'https://api.mapbox.com/styles/v1/willmadd/'.$style_id.'/tiles/{z}/{x}/{y}?access_token='.$access_token;


        // $endpoint = "https://maps.googleapis.com/maps/api/geocode/json?address=".$location."&key=AIzaSyADQ6jdzvTJFPsgPy36aj67-GVYnvNDVrs";
        $client = new \GuzzleHttp\Client();

        $response = $client->request('GET', $endpoint);

        $statusCode = $response->getStatusCode();

        $content = json_decode($response->getBody(), true);
        
        return response()->json(
            // $content, 
            $endpoint,
            // "dddd",
            200
        );
    }

    public function slugify($string){
        return strtolower(trim(preg_replace('/[^A-Za-z0-9-]+/', '-', $string), '-'));
    }
}


