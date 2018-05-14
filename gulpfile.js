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

    path:{
        tasks: require('./gulp/config/tasks.js')
    }
};

$.path.tasks.forEach(function (taskPath) {
    require(taskPath)();
})

$.gulp.task('default', $.gulp.series(
    $.gulp.parallel('pug', 'sass', 'scripts:lib', 'scripts', 'img:dev'),
    $.gulp.parallel('watch', 'serve')
));

$.gulp.task('build', $.gulp.series(
    $.gulp.parallel('pug', 'sass', 'scripts:lib', 'scripts', 'img:build'),
    $.gulp.parallel('watch', 'serve')
));