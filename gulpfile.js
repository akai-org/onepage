var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var fileinclude = require('gulp-file-include');

// Static Server + watching scss/html files
gulp.task('serve', ['html', 'sass', 'copy'], function() {

    browserSync.init({

        server: "./public"
    });
    gulp.watch("app/scss/*.scss", ['sass']);
    gulp.watch("app/img/*", ['copy']);
    gulp.watch("app/*.html").on('change', browserSync.reload);

});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("app/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("public/css"))
        .pipe(browserSync.stream());
});

gulp.task('html', function() {
  return gulp.src("app/index.html")
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest("public/"));
});

gulp.task('copy', function() {
    return gulp.src("app/img/*")
        .pipe(gulp.dest("public/img"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);



