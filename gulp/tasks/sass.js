module.exports = function () {
    $.gulp.task('sass', function () {
        return $.gulp.src('src/static/styles/main.scss')
            .pipe($.sourcemaps.init())
            .pipe($.sass())
            .pipe($.prefixer({
                browsers: ['last 3 versions', '> 1%']
            }))
            .on("error", $.notify.onError({
                title: "Error!"
            }))
            .pipe($.csso())
            .pipe($.sourcemaps.write())
            .pipe($.gulp.dest('build/static/css/'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });
};