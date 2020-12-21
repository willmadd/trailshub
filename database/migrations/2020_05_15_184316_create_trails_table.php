<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTrailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('trails', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamp('created_at')->nullable();
            $table->timestamp('updated_at')->nullable();
            $table->string('user_id');
            $table->string('title')->nullable();
            // $table->string('main_image');
            $table->string('slug')->nullable();
            $table->longText('description')->nullable();
            $table->string('youtube_link')->nullable();
            $table->string('strava_link')->nullable();
            $table->string('activity')->nullable();
            $table->boolean('hire_centre')->nullable();
            $table->string('status')->default('draft');
            $table->string('tags')->nullable();
            $table->integer('difficulty')->nullable();
            $table->integer('ascent')->nullable();
            $table->integer('descent')->nullable();
            $table->integer('distance')->nullable();
            $table->integer('time')->nullable();
            $table->integer('start_lat')->nullable();
            $table->integer('start_lng')->nullable();
            $table->longText('gpx')->nullable();
            $table->longText('coords')->nullable();
            $table->longText('summary')->nullable();
            $table->integer('no_times_downloaded')->default('0');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('trails');
    }
}
