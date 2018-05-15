module.exports = function () {
    $.gulp.task('svg:dev', function () {
        return $.gulp.src('src/static/img/svg/*.svg')
            .pipe($.cheerio({
                run: function ($) {
                    $('[fill]').removeAttr('fill');
                    $('[stroke]').removeAttr('stroke');
                    $('[style]').removeAttr('style');
                },
                parseOptions: { xmlMode: true}
            }))
            .pipe($.replace('&gt', '>'))
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
            .pipe($.cheerio({
                run: function ($) {
                    $('[fill]').removeAttr('fill');
                    $('[stroke]').removeAttr('stroke');
                    $('[style]').removeAttr('style');
                },
                parseOptions: { xmlMode: true}
            }))
            .pipe($.replace('&gt', '>'))
            .pipe($.gulp.dest('build/static/img/svg/'))
            .on('end', $.browserSync.reload);
    });
};