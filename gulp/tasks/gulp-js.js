import webpack from 'webpack-stream';

export const gulpJs = () => {
    return app.gulp.src(app.path.src.js, {sourcemap: app.isDev})
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: 'JS',
                message: 'Error <%= error.message %>'
            })
        ))
        .pipe(webpack({
            mode: app.isBuild ? 'production' : 'development',
            entry: {
                slider: app.path.src.js + '/slider.js',
                main: app.path.src.js + '/main.js'
            },
            output: {
                filename: '[name].js'
            }
        }))
        .pipe(app.gulp.dest(app.path.build.js))
        .pipe(app.plugins.browsersync.stream())
}