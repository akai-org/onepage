const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();

const paths = require('../config/paths');

gulp.task('scripts', () => {
  gulp.start(`scripts:${gulp.env.production ? 'prod' : 'dev'}`)
});

gulp.task('scripts:prod', ['eslint'], () => {
  return gulp.src(paths.source.scripts)
    .pipe(plugins.newer(paths.dist.scripts))
    .pipe(plugins.eslint())
    .pipe(plugins.eslint.format())
    .pipe(plugins.eslint.failAfterError())
    .pipe(plugins.babel())
    .pipe(plugins.concat('bundle.js'))
    .pipe(plugins.browserify())
    .pipe(plugins.uglify())
    .pipe(plugins.rename({suffix: '.min'}))
    .pipe(gulp.dest(paths.dist.scripts))
    .pipe(plugins.size({title: 'scripts'}));
});

gulp.task('scripts:dev', ['eslint'], () => {
  return gulp.src(paths.source.scripts)
    .pipe(plugins.newer(paths.dist.scripts))
    .pipe(plugins.eslint())
    .pipe(plugins.eslint.format())
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.babel())
    .pipe(plugins.concat('bundle.js'))
    .pipe(plugins.browserify())
    .pipe(plugins.sourcemaps.write('.'))
    .pipe(gulp.dest(paths.dist.scripts))
    .pipe(plugins.size({title: 'scripts'}));
});

gulp.task('scripts:watch', () => {
  gulp.watch(paths.source.scripts, ['scripts']);
});
