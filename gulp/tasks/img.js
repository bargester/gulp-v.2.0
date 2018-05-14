module.exports = function () {
    $.gulp.task('img:dev', function () {
        return $.gulp.src('src/static/img/*')
            .pipe($.gulp.dest('build/static/img'))
            .on('end', $.browserSync.reload);
    });

    $.gulp.task('img:build', function () {
        return $.gulp.src('src/static/img/*')
            .pipe($.imagemin({
                progressive: true,
                interlaced: true
            }))
            .pipe($.gulp.dest('build/static/img'))
            .on('end', $.browserSync.reload);
    });
};