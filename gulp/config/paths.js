const paths = {
  /* source code */
  source: {
    fonts: './src/fonts/**/*',
    images: './src/img/**/*',
    markup: './src/**/*.html',
    styles: './src/scss/**/*.scss',
    scripts: './src/js/**/*.js'
  },

  /* build */
  build: {
    fonts: './build/assets',
    images: './build/assets',
    markup: './build',
    styles: './build/assets',
    scripts: './build/assets'
  },

  /* minified and optimized */
  publish: {
    fonts: './publish/assets',
    images: './publish/assets',
    markup: './publish',
    styles: './publish/assets',
    scripts: './publish/assets'
  }
};

module.exports = paths