const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();

const paths = require('../config/paths');

gulp.task('copy', () =>
  gulp.src([
    paths.source.dir,
    '!'+paths.source.scripts,
    '!'+paths.source.markup,
    '!'+paths.source.styles,
    '!'+paths.source.images
  ], {
    dot: true
  }).pipe(gulp.dest(paths.dist.dir))
    .pipe(plugins.size({title: 'copy'}))
);

gulp.task('copy:watch', function () {
  gulp.watch([
    paths.source.dir,
    '!'+paths.source.scripts,
    '!'+paths.source.markup,
    '!'+paths.source.styles,
    '!'+paths.source.images
  ], ['copy']);
});