<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Gpxroute;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use App\Trails;
use Storage;
use App\Images;
use App\Tags;
use App\TagsLookup;
use Image;
use Illuminate\Support\Str;
// use ImageOptimizer;
// use Intervention\Image\ImageManagerStatic as Image;
// Image::configure(array('driver' => 'imagick'));

class TrailController extends Controller
{
 
    public function getTrails () {
        
        $trails = DB::table('trails')->select(['coords','id', 'slug', 'title' , 'difficulty'])->where([
            ['activity', 'mtb'],
            ['status', "approved"],
        ])->get()->map(function($trail) {
            return Array('coords' => json_decode($trail->coords), 'id' => $trail->id, 'slug'=>$trail->slug, 'title'=>$trail->title, 'difficulty' => $trail->difficulty);
        });

        return response()->json(
            ['trails'=>$trails,], 200);
    }

    public function getTrailBySlug ($slug, $coords) {
        // return response()->json(
        //     $coords,
        //      200);
    if($coords=="coords"){
        $trail = DB::table('trails')->select(['id', 'user_id', 'strava_link' , 'description', 'activity', 'title', 'hire_centre' , 'difficulty','youtube_link', 'summary', 'distance' , 'time' , 'ascent' ,'descent' , 'coords'])->where('slug', $slug)->first();
    }else{
        $trail = DB::table('trails')->select(['id', 'user_id', 'strava_link' , 'description', 'activity', 'title', 'hire_centre' , 'difficulty','youtube_link', 'summary', 'distance' , 'time' , 'ascent' ,'descent' ])->where('slug', $slug)->first();

    }

    // $trail->id.
    
    
    // $tags = 
    $trail->images = DB::table('images')->select(['url'])->where('trail_id',  $trail->id)->get();

    $trail->tags=$this->getTagsById($trail->id);

        return response()->json(
            $trail,
            // $tags,
             200);
    }

    public function dSlug($string) {
        return strtolower(trim(preg_replace('~[^0-9a-z]+~i', '-', html_entity_decode(preg_replace('~&([a-z]{1,2})(?:acute|cedil|circ|grave|lig|orn|ring|slash|th|tilde|uml);~i', '$1',htmlentities(preg_replace('/[&]/', ' and ', $title), ENT_QUOTES, 'UTF-8')), ENT_QUOTES, 'UTF-8')), '-'));
    }

    public function checkSlug($slug){
        $trail = DB::table('trails')->select(['slug'])->where('slug', $slug)->first();
        if (!$trail){
               return response()->json(
                false,
                 200);
        
        }else{
            return response()->json(
                true,
                 200);
        }
    }

    public function getTrailByTag($tag)
    {

        $tagRecord = DB::table('tags')->select(['id'])->where('tag', $tag)->first();
        $trailsIdArr = DB::table('tags_lookUps')->select(['trail_id'])->where('tag_id', $tagRecord->id)->get();

        $trails=[];

        foreach($trailsIdArr as $trailId){
            $trail = DB::table('trails')->select(['id', 'user_id', 'activity', 'title', 'hire_centre' , 'tags', 'difficulty', 'slug', 'ascent', 'descent', 'distance', 'time'])->where('id', $trailId->trail_id)->first();
            $trail->images = DB::table('images')->select(['url'])->where('trail_id',  $trail->id)->get();
            array_push($trails, $trail);
           }


        // $regionData = DB::table('region_data')->select(['id', 'title', 'image', 'slug', 'description'])->where('slug', $tag)->first();
        return response()->json(
            [
                // 'dddd'=>$trailsIdArr,
            'trails'=>$trails,
            // 'regionData'=>$regionData,
            'arr'=>json_decode($trailsIdArr),
            ],
             200);
    
    }

    public function getRecentTrails($limit)
    {
        $recentTrails = DB::table('trails')->select(['id', 'user_id', 'activity', 'title', 'hire_centre' , 'tags', 'difficulty', 'slug', 'ascent', 'descent', 'distance', 'time'])->latest('created_at')->limit($limit)->get();
    
        foreach($recentTrails as $trail){
            $trail->images = DB::table('images')->select(['url'])->where('trail_id', $trail->id)->get()->pluck('url');
        }


        return response()->json(
            $recentTrails,
             200);
    }

    public function createTrail(Request $request)
    {

       
if($request->status==="pending"){
    $request->validate([
    
        "title"=>'required|string',
        "slug"=>'required|string|unique:trails',
        "activity"=>'required|string',
        "ascent"=>'required|numeric',
        "coords"=>'required|string',
        "distance"=>'required|numeric',
        "difficulty"=>'required|integer',
        "descent"=>'required|numeric',
        "description"=>'required|string',
        "gpx"=>'required_without:strava_link                                                                                                                        a3',
        "strava_link"=>'required_without:gpx|numeric',
        "summary"=>'required|string',
        "time"=>'required|integer',
        "youtube_link"=>'required|string',
        "start_lat"=>"numeric",
        "start_lng"=>"numeric",
    ]);
}else{
    $request->validate([
        "status"=>'required|string',
    ]);
}
// return $request->id;

        $trail = Trails::updateOrCreate([
            'id' => $request->id,
        ],[
            "title"=>$request->title,
            "slug"=>$request->slug,
            "activity"=>$request->activity,
            "ascent"=>$request->ascent,
            "coords"=>$request->coords,
            "distance"=>$request->distance,
            "difficulty"=>$request->difficulty,
            "descent"=>$request->descent,
            "description"=>$request->description,
            "gpx"=>$request->gpx,
            "hire_centre"=>$request->hire_centre,
            "strava_link"=>$request->strava_link,
            "summary"=>$request->summary,
            // "tags"=>$request->tags,
            "start_lat"=>$request->start_lat,
            "start_lng"=>$request->start_lng,
            "time"=>$request->time,
            // "start_lng"=>98798,
            "youtube_link"=>$request->youtube_link,
            "user_id"=>auth()->user()->id,
            // "status"=>"pending",
        ]);



        Images::where('trail_id',$trail->id)->delete();
        if($request->input('images')){
            $this->saveImages($request->input('images'), $trail->id);
        }



        TagsLookUp::where('trail_id',$trail->id)->delete();
    $tags = $request->tags;
    foreach($tags as $key => $tag){
     $tagRecord = Tags::firstOrCreate(['tag' => (String)$tag]);
    $tagLookup = TagsLookUp::updateOrCreate([
        "tag_id"=>$tagRecord->id,
        "trail_id"=>$trail->id,

        ]);
    }
    
    
    
    
    return response()->json(
        [
            "id"=>$trail ->id,
            "images"=>$request->input('images'),
            "request" => $request->start_lng
        ],
            200);
    }

    public function saveImages($images, $trail_id)
    {
        $i=0;
        foreach($images as $key => $image){
            $i++;
            $relPath = 'trails/'.$trail_id.'';
            if (!file_exists(public_path($relPath))) {
                mkdir(public_path($relPath), 777, true);
                chmod(public_path($relPath), 0777);
            }
            $type = explode('/', mime_content_type($image))[1];

            $width = 1200;
            $height = 1200;
            
            $filename = 't-'.$trail_id.'-'.Str::random(12).'.'.$type;
            $imgf = Image::make($image);
            $imgf->height() > $imgf->width() ? $width=null : $height=null;
            $imgf->resize($width, $height, function ($constraint) {
                $constraint->aspectRatio();
            });
            $imgf->save(public_path('trails/'.$trail_id.'/'.$filename),50,'jpg');
            $images = Images::create([
                "url"=>'trails/'.$trail_id.'/'.$filename,
                "trail_id"=>$trail_id
            ]);
        }
    }

    public function getTagsById($id){
        
        $tagsIdArr = DB::table('tags_lookUps')->select(['tag_id'])->where('trail_id', $id)->get();
                
        $tags = [];
        foreach ($tagsIdArr as $tagId) {
            $tag = DB::table('tags')->select(['tag'])->where('id', $tagId->tag_id)->get();
            array_push($tags, $tag[0]->tag);
        };
        return $tags;
    }

    public function getImagesById($id){
        $images=[];
        $imagesArr = DB::table('images')->select(['url'])->where('trail_id', $id)->get();
    
        foreach($imagesArr as $image){
            $url = $image->url;
            $type = pathinfo($image->url, PATHINFO_EXTENSION);
            $data = file_get_contents(public_path($url));
            $base64 = 'data:image/' . $type . ';base64,' . base64_encode($data);
            array_push($images, $base64);
        }
        return $images;
    }

    public function getTrailById($id){
        
        $trail = DB::table('trails')->select(['id', 'strava_link' , 'description', 'activity', 'title', 'hire_centre' , 'tags', 'difficulty','youtube_link' , 'coords', 'summary', 'user_id','distance','descent','ascent','time' ,'status'])->where('id', $id)->first();

        $tags = $this->getTagsById($trail->id);

        $images = $this->getImagesById($trail->id);
    
            if($trail->user_id == auth()->user()->id){
                return response()->json(
                    [
                        "trail"=>$trail,
                        "tags"=> $tags,
                        // "images"=> $imagesArr,
                        "images"=> $images,
                    ],
                     200);
            }else{
                return response()->json(
                    [
                        "message"=>"this isn't yout trail",
                    ],
                     404);
            }

    }
}


