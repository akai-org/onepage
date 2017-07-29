const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();

const paths = require('../config/paths');

gulp.task('images', () =>
  gulp.src(paths.source.images)
    .pipe(plugins.cache(plugins.imagemin({ progressive: true, interlaced: true })))
    .pipe(gulp.dest(paths.dist.images))
    .pipe(plugins.size({title: 'images'}))
);

gulp.task('images:watch', () => {
  gulp.watch(paths.source.images, ['images']);
});