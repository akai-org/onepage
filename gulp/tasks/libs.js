const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();

const paths = require('../config/paths');

gulp.task('libs', () =>
  gulp.src(paths.source.libs)
    .pipe(gulp.dest(paths.dist.libs))
    .pipe(plugins.size({title: 'libs'}))
);

gulp.task('libs:watch', () => {
  gulp.watch(paths.source.images, ['libs']);
});
