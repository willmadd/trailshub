<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('gettrails', 'TrailController@getTrails');

Route::get('gettrail/{trailIdentifier}/{coords}', 'TrailController@getTrailBySlug');

Route::get('gettrailsbytag/{tag}', 'TrailController@getTrailByTag');

Route::get('getrecenttrails/{limit}', 'TrailController@getRecentTrails');

