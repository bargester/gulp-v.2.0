module.exports = function () {
    $.gulp.task('pug:dev', function () {
        return $.gulp.src('src/pug/pages/*.pug')
            .pipe($.pug({
                pretty: true
            }))
            .on("error", $.notify.onError({
                title: "Error!"
            }))
            .pipe($.gulp.dest('build'))
            .on('end', $.browserSync.reload);
    });
    $.gulp.task('pug:build', function () {
        return $.gulp.src('src/pug/pages/*.pug')
            .pipe($.pug({
                pretty: true
            }))
            .pipe($.gulp.dest('build'))
    });
};