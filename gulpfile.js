const gulp = require('gulp');
const gulpsync = require('gulp-sync')(gulp);
browserSync = require("browser-sync").create();
const requireDir = require('require-dir');
requireDir('./gulp/tasks');

const paths = require('./gulp/config/paths');

gulp.task('default', ['serve']);

gulp.task('build', gulpsync.sync(['styles', 'scripts', 'images', 'copy', 'markup']));

gulp.task('watch', ['styles:watch', 'scripts:watch', 'images:watch', 'copy:watch', 'markup:watch']);

gulp.task('serve', ['build'], () => {
  browserSync.init({server: paths.dist.dir});
  gulp.watch([paths.dist.markup, paths.dist.scripts]).on("change", browserSync.reload);
});