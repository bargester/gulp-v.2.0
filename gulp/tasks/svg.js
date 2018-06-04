module.exports = function () {
    $.gulp.task('svg:dev', function () {
        return $.gulp.src('src/static/img/**/*.svg')
            .pipe($.gulp.dest('build/static/img/'))
            .on('end', $.browserSync.reload);
    });

    $.gulp.task('svg:build', function () {
        return $.gulp.src('src/static/img/**/*.svg')
            .pipe($.svgmin({
                js2svg: {
                    pretty: true
                }
            }))
            .pipe($.gulp.dest('build/static/img/'))
            .on('end', $.browserSync.reload);
    });
};