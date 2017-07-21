const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

const paths = require('../config/paths');

gulp.task('images', () =>
  gulp.src(paths.source.images)
    .pipe(imagemin())
    .pipe(gulp.dest(paths.publish.images))
);

gulp.task('images:dev', () =>
  gulp.src(paths.source.images)
    .pipe(imagemin())
    .pipe(gulp.dest(paths.build.images))
);

gulp.task('images:watch', () => {
  gulp.watch(paths.source.images, ['images:dev']);
});