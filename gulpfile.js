var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var runSequence = require('run-sequence');

// Static Server + watching scss/html files
gulp.task('serve', function() {

    browserSync.init({
        server: "./app"
    });

    gulp.watch("app/scss/*.scss", ['sass']);
    gulp.watch("app/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("app/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("app/css"))
        .pipe(browserSync.stream());
});

// copy Font Awesome fonts
gulp.task('copyfonts', function() {
   return gulp.src('./bower_components/font-awesome/fonts/**/*.{ttf,woff,woff2,eot,svg}')
   .pipe(gulp.dest('app/fonts'));
});

// copy Font Awesome scss
gulp.task('copyscss', function() {
   return gulp.src('bower_components/font-awesome/scss/**/*')
    .pipe(gulp.dest('app/scss'));
});

gulp.task('default', function(done) {
    runSequence('copyfonts', 'copyscss', 'sass', 'serve', function() {
        done();
    });
});