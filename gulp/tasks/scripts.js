const gulp = require('gulp');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const eslint = require('gulp-eslint');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

const paths = require('../config/paths');

gulp.task('scripts', () => {
  return gulp.src(paths.source.scripts)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .pipe(babel())
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(paths.publish.scripts));
});

gulp.task('scripts:dev', () => {
  return gulp.src(paths.source.scripts)
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
    .pipe(eslint())
    .pipe(eslint.format())
});
