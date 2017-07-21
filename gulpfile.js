const gulp = require('gulp');
const gulpsync = require('gulp-sync')(gulp);
browserSync = require("browser-sync").create();
const requireDir = require('require-dir');

requireDir('./gulp/tasks');

gulp.task('default', ['serve:dev']);

gulp.task('build', gulpsync.sync(['styles', 'scripts', 'markup']));

gulp.task('build:dev', gulpsync.sync(['styles:dev', 'scripts:dev', 'markup:dev']));

gulp.task('watch', ['styles:watch', 'scripts:watch', 'markup:watch']);

gulp.task('serve', ['build'], () => {
  browserSync.init({
    server: "./public"
  });

  gulp.watch( ['./public/**/*.html', './public/**/*.js'] ).on("change", browserSync.reload);
});


gulp.task('serve:dev', ['build:dev', 'watch'], () => {
  browserSync.init({
    server: "./build"
  });

  gulp.watch( ['./build/**/*.html', './build/**/*.js'] ).on("change", browserSync.reload);
});