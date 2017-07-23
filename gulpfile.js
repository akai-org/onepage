const gulp = require('gulp');
const inject = require('gulp-inject');
const injectfile = require('gulp-inject-file');
const htmlmin = require('gulp-htmlmin');
const htmlhint = require('gulp-htmlhint');
const strip = require('gulp-strip-comments');

const paths = require('../config/paths');

gulp.task('markup', function () {
  return gulp.src(paths.source.markup)
    .pipe(inject(gulp.src([paths.publish.styles+"/**/*.css", paths.publish.scripts+"/**/*.js"], {read: false}), {ignorePath: 'public', addRootSlash: false}))
    .pipe(injectfile())
    .pipe(htmlhint())
    .pipe(htmlhint.failReporter())
    .pipe(strip())
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(paths.publish.markup));
});

gulp.task('markup:dev', function () {
  return gulp.src(paths.source.markup)
    .pipe(inject(gulp.src([paths.build.styles+"/**/*.css", paths.build.scripts+"/**/*.js"], {read: false}), {ignorePath: 'build', addRootSlash: false}))
    .pipe(injectfile())
    .pipe(htmlhint())
    .pipe(htmlhint.reporter())
    .pipe(gulp.dest(paths.build.markup));
});

gulp.task('markup:watch', function () {
  gulp.watch(paths.source.markup, ['markup:dev']);
});
