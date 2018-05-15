module.exports = function () {
    $.gulp.task('sass:dev', function () {
        return $.gulp.src('src/static/styles/main.scss')
            .pipe($.sourcemaps.init())
            .pipe($.sass())
            .on("error", $.notify.onError({
                title: "Error!"
            }))
            .pipe($.sourcemaps.write())
            .pipe($.gulp.dest('build/static/css/'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });

    $.gulp.task('sass:build', function () {
        return $.gulp.src('src/static/styles/main.scss')
            .pipe($.sourcemaps.init())
            .pipe($.sass())
            .pipe($.prefixer({
                browsers: ['last 3 versions', '> 1%']
            }))
            .pipe($.csso())
            .pipe($.sourcemaps.write())
            .pipe($.gulp.dest('build/static/css/'))
    });
};