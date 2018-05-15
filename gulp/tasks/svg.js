module.exports = function () {
    $.gulp.task('svg:dev', function () {
        return $.gulp.src('src/static/img/svg/*.svg')
            .pipe($.gulp.dest('build/static/img/svg/'))
            .on('end', $.browserSync.reload);
    });

    $.gulp.task('svg:build', function () {
        return $.gulp.src('src/static/img/svg/*.svg')
            .pipe($.svgmin({
                js2svg: {
                    pretty: true
                }
            }))
            .pipe($.gulp.dest('build/static/img/svg/'))
            .on('end', $.browserSync.reload);
    });
};