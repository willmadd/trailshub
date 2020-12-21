<?php

use Illuminate\Http\Request;


header('Access-Control-Allow-Origin: *');
//Access-Control-Allow-Origin: *
header('Access-Control-Allow-Methods:  POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers:  Content-Type, X-Auth-Token, Origin, Authorization');

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::get('gettrails', 'TrailController@getTrails');

Route::get('trail/slugverification/{slug}', 'TrailController@checkSlug');

Route::get('gettrail/{trailIdentifier}/{coords}', 'TrailController@getTrailBySlug');

Route::get('gettrailsbytag/{tag}', 'TrailController@getTrailByTag');

Route::get('getrecenttrails/{limit}', 'TrailController@getRecentTrails');

Route::get('getrecenttrails/{limit}', 'TrailController@getRecentTrails');

Route::get('location/{location}', 'LocationController@getLocationTrails');

Route::get('map/mapstyles', 'LocationController@getMapStyles');


Route::group([
    'prefix' => 'auth'
], function () {
    Route::post('login', 'AuthController@login');
    Route::post('signup', 'AuthController@signup');
    Route::post('fieldverification/', 'AuthController@fieldverification');
    Route::get('signup/activate/{token}', 'AuthController@signupActivate');
    Route::group([
      'middleware' => 'auth:api'
    ], function() {
        Route::get('logout', 'AuthController@logout');
        Route::get('user', 'AuthController@user');
        Route::post('trail/submit', 'TrailController@createTrail');
        Route::get('trail/gettrailbyid/{id}', 'TrailController@getTrailById');
    });
});


