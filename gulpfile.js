var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var fileinclude = require('gulp-file-include');

// Static Server + watching scss/html files
gulp.task('serve', ['html', 'copyfa', 'copyfacss', 'js', 'sass', 'copy', 'copyjquery'], function() {

    browserSync.init({
        server: "./public"
    });

    gulp.watch("app/scss/*.scss", ['sass']);
    gulp.watch("app/img/*", ['copy']);
    gulp.watch("app/*.html",['html']);
    gulp.watch("app/js/*.js",['js']);
    gulp.watch("app/js/*.js").on('change', browserSync.reload);
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

// merge & copy JS files
gulp.task('js', function() {
  return gulp.src("app/js/main.js")
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest("public/js/"));
});

// copy images
gulp.task('copy', function() {
    return gulp.src("app/img/*")
        .pipe(gulp.dest("public/img"))
        .pipe(browserSync.stream());
});

// copy jQuery file
gulp.task('copyjquery', function() {
  return gulp.src('node_modules/jquery/dist/jquery.min.js')
    .pipe(gulp.dest('public/js'));
});

// copy Font Awesome fonts
gulp.task('copyfa', function() {
   return gulp.src('node_modules/font-awesome/fonts/**/*.{ttf,woff,woff2,eot,svg}')
   .pipe(gulp.dest('public/fonts'));
});

// copy Font Awesome css
gulp.task('copyfacss', function() {
   return gulp.src('node_modules/font-awesome/css/font-awesome.min.css')
    .pipe(gulp.dest('public/css'));
});

gulp.task('default', ['serve']);
