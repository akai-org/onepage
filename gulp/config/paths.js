const paths = {
  /* source code */
  source: {
    dir: './source',
    images: './src/img/**/*',
    markup: './src/**/*.html',
    styles: './src/scss/**/*.scss',
    scripts: './src/js/**/*.js',
    specs: './spec/**/*[sS]pec.js'
  },

  /* build */
  build: {
    dir: './build',
    images: './build/assets',
    markup: './build',
    styles: './build/assets',
    scripts: './build/assets'
  },

  /* minified and optimized */
  publish: {
    dir: './public',
    images: './public/assets',
    markup: './public',
    styles: './public/assets',
    scripts: './public/assets'
  }
};

const gulp = require('gulp');
paths.dist = gulp.env.production ? paths.publish : paths.build;

module.exports = paths;