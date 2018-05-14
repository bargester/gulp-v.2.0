'use strict';

var gulp        = require('gulp'),
    pug         = require('gulp-pug'),
    sass        = require('gulp-sass'),
    csso        = require('gulp-csso'),
    notify      = require ('gulp-notify'),
    sourcemaps  = require('gulp-sourcemaps'),
    prefixer    = require('gulp-autoprefixer');


gulp.task('pug', function () {
    return gulp.src('src/pug/pages/*.pug')
        .pipe(pug({
           pretty: true
        }))
        .pipe(gulp.dest('build'))
});

gulp.task('sass', function () {
    return gulp.src('src/static/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(prefixer({
            browsers: ['last 3 versions', '> 1%']
        }))
        .on("error", notify.onError({
            title: "Error!"
        }))
        .pipe(csso())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('build/static/css/'))
});