const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();

const paths = require('../config/paths');

gulp.task('markup', () => {
  gulp.start(`markup:${gulp.env.production ? 'prod' : 'dev'}`)
});

gulp.task('markup:prod', function () {
  return gulp.src(paths.source.markup)
    .pipe(plugins.injectFile())
    .pipe(plugins.htmlhint())
    .pipe(plugins.htmlhint.failReporter())
    .pipe(plugins.inject(gulp.src([paths.publish.styles+"/**/*.css", paths.publish.scripts+"/**/*.js"], {read: false}), {ignorePath: 'public', addRootSlash: false}))
    .pipe(plugins.stripComments())
    .pipe(plugins.htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(paths.publish.markup));
});

gulp.task('markup:dev', function () {
  return gulp.src(paths.source.markup)
    .pipe(plugins.injectFile())
    .pipe(plugins.htmlhint())
    .pipe(plugins.htmlhint.reporter())
    .pipe(plugins.inject(gulp.src([paths.build.styles+"/**/*.css", paths.build.scripts+"/**/*.js"], {read: false}), {ignorePath: 'build', addRootSlash: false}))
    .pipe(gulp.dest(paths.build.markup));
});

gulp.task('markup:watch', function () {
  gulp.watch(paths.source.markup, ['markup:dev']);
});
