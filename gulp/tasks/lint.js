const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();
const paths = require('../config/paths');

gulp.task('eslint', () =>
  gulp.src([`${paths.source.scripts}/**/*.js`,'!node_modules/**'])
    .pipe(plugins.eslint())
    .pipe(plugins.eslint.format())
    .pipe(plugins.eslint.failAfterError())
);

gulp.task('stylelint', function() {
  return gulp.src([paths.source.styles, paths.source.markup])
    .pipe(plugins.stylelint({failAfterError: false, reporters: [{formatter: 'string', console: true}], debug: true}));
});