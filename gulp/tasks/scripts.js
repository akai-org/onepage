const gulp = require('gulp');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const eslint = require('gulp-eslint');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const injectfile = require('gulp-inject-file');

const paths = require('../config/paths');

gulp.task('scripts', ['libs'], () => {
  return gulp.src(paths.source.scripts)
    .pipe(injectfile())
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .pipe(babel())
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(paths.publish.scripts));
});

gulp.task('scripts:dev', ['libs:dev'], () => {
  return gulp.src(paths.source.scripts)
    .pipe(injectfile())
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.build.scripts));
});

gulp.task('scripts:watch', () => {
  gulp.watch(paths.source.scripts, ['scripts:dev']);
});

gulp.task('eslint', () => {
  gulp.src(paths.source.scripts)
    .pipe(injectfile())
    .pipe(eslint())
    .pipe(eslint.format())
});

gulp.task('libs', ['jquery', 'lodash']);

gulp.task('jquery', function () {
  return gulp.src('./node_modules/jquery/dist/jquery.min.js')
    .pipe(gulp.dest(paths.publish.scripts));
});

gulp.task('lodash', function () {
  return gulp.src('./node_modules/lodash/lodash.min.js')
    .pipe(gulp.dest(paths.publish.scripts));
});

gulp.task('libs:dev', ['jquery:dev', 'lodash:dev']);

gulp.task('jquery:dev', function () {
  return gulp.src('./node_modules/jquery/dist/jquery.js')
    .pipe(gulp.dest(paths.build.scripts));
});

gulp.task('lodash:dev', function () {
  return gulp.src('./node_modules/lodash/lodash.js')
    .pipe(gulp.dest(paths.build.scripts));
});
