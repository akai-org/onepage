const gulp = require('gulp');
const sass = require('gulp-sass');
const plugins = require('gulp-load-plugins')();

const postCssPlugins = [
  require('postcss-normalize')(),
  require('postcss-font-magician')(),
  require('cssnano')(),
  require('autoprefixer')({browsers: ['last 2 version']})
];

const paths = require('../config/paths');

gulp.task('styles', () => {
  gulp.start(`styles:${gulp.env.production ? 'prod' : 'dev'}`)
});

gulp.task('styles:prod', function () {
  return gulp.src(paths.source.styles)
    .pipe(plugins.newer(paths.dist.styles))
    .pipe(plugins.stylelint({failAfterError: true, reporters: [{formatter: 'verbose', console: true}], debug: false}))
    .pipe(plugins.sass.sync().on('error', sass.logError))
    .pipe(plugins.postcss(postCssPlugins))
    .pipe(plugins.concat('all.css'))
    .pipe(plugins.rename({ suffix: '.min' }))
    .pipe(plugins.size({title: 'styles'}))
    .pipe(gulp.dest(paths.dist.styles));
});

gulp.task('styles:dev', function () {
  return gulp.src(paths.source.styles)
    .pipe(plugins.newer('.tmp/styles'))
    .pipe(plugins.stylelint({failAfterError: false, reporters: [{formatter: 'string', console: true}], debug: true}))
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.sass.sync().on('error', sass.logError))
    .pipe(plugins.postcss(postCssPlugins))
    .pipe(plugins.sourcemaps.write())
    .pipe(gulp.dest(paths.dist.styles))
    .pipe(plugins.size({title: 'styles'}))
    .pipe(browserSync.stream({match: '**/*.css'}));
});

gulp.task('styles:watch', function () {
  gulp.watch(paths.source.styles, ['styles']);
});