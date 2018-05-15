module.exports = function () {
    $.gulp.task('img:dev', function () {
        return $.gulp.src('src/static/img/**/*.{png,jpg,gif}')
            .pipe($.gulp.dest('build/static/img/'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });

    $.gulp.task('img:build', function () {
        return $.gulp.src('src/static/img/**/*.{png,jpg,gif}')
            .pipe($.imagemin({
                progressive: true,
                interlaced: true
            }))
            .pipe($.gulp.dest('build/static/img/'))
    });
};