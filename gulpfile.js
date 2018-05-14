'use strict';

var gulp        = require('gulp'),
    pug         = require('gulp-pug'),
    sass        = require('gulp-sass'),
    csso        = require('gulp-csso'),
    notify      = require ('gulp-notify'),
    sourcemaps  = require('gulp-sourcemaps'),
    prefixer    = require('gulp-autoprefixer'),
    browserSync = require("browser-sync").create();


gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: "./build"
        }
    });
});

gulp.task('pug', function () {
    return gulp.src('src/pug/pages/*.pug')
        .pipe(pug({
           pretty: true
        }))
        .pipe(gulp.dest('build'))
        .on('end', browserSync.reload);
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
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('watch', function () {
    gulp.watch('src/pug/**/*.pug', gulp.series('pug'));
    gulp.watch('src/static/styles/**/*.scss', gulp.series('sass'))
});

gulp.task('default', gulp.series(
    gulp.parallel('pug', 'sass'),
    gulp.parallel('watch', 'serve')
));