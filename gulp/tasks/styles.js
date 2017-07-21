const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const gulpStylelint = require('gulp-stylelint');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');

const postCssPlugins = [
  require('postcss-normalize')(),
  require('postcss-font-magician')(),
  require('cssnano')(),
  require('autoprefixer')({browsers: ['last 1 version']})
];

const paths = require('../config/paths');

gulp.task('styles', function () {
  return gulp.src(paths.source.styles)
    .pipe(gulpStylelint({failAfterError: true, reporters: [{formatter: 'verbose', console: true}], debug: false}))
    .pipe(concat('all.scss'))
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(postcss(postCssPlugins))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(paths.public.styles));
});

gulp.task('styles:dev', function () {
  return gulp.src(paths.source.styles)
    .pipe(gulpStylelint({failAfterError: false, reporters: [{formatter: 'string', console: true}], debug: true}))
    .pipe(sourcemaps.init())
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(postcss(postCssPlugins))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.build.styles))
    .pipe(browserSync.stream({match: '**/*.css'}));
});

gulp.task('styles:watch', function () {
  gulp.watch(paths.source.styles, ['styles:dev']);
});

gulp.task('stylelint', function() {
  return gulp.src([paths.source.styles, paths.source.markup])
    .pipe(gulpStylelint({failAfterError: false, reporters: [{formatter: 'string', console: true}], debug: true}));
});