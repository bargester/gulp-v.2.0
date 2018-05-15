'use strict';

global.$={
    gulp        : require('gulp'),
    pug         : require('gulp-pug'),
    sass        : require('gulp-sass'),
    csso        : require('gulp-csso'),
    notify      : require ('gulp-notify'),
    sourcemaps  : require('gulp-sourcemaps'),
    prefixer    : require('gulp-autoprefixer'),
    browserSync : require("browser-sync").create(),
    concat      : require('gulp-concat'),
    imagemin    : require('gulp-imagemin'),
    del         : require('del'),
    svgmin      : require('gulp-svgmin'),

    path:{
        tasks: require('./gulp/config/tasks.js')
    }
};

$.path.tasks.forEach(function (taskPath) {
    require(taskPath)();
})

$.gulp.task('default', $.gulp.series(
    'clean',
    $.gulp.parallel('pug:dev', 'sass:dev', 'scripts:lib', 'scripts:build', 'img:dev', 'svg:dev', 'fonts'),
    $.gulp.parallel('watch', 'serve')
));

$.gulp.task('build', $.gulp.series(
    'clean',
    $.gulp.parallel('pug:dev', 'sass:build', 'scripts:lib', 'scripts:build', 'img:build', 'svg:build', 'fonts'),
));