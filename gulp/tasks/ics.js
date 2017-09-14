const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();

const paths = require('../config/paths');

gulp.task('ics', () =>
    gulp.src(paths.source.ics)
        .pipe(plugins.rename('calendar.ics'))
        .pipe(gulp.dest(paths.dist.dir))
);

gulp.task('ics:watch', () => {
    gulp.watch(paths.source.ics, ['ics']);
});