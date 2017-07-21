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
    dir: './public',
    fonts: './public/assets',
    images: './public/assets',
    markup: './public',
    styles: './public/assets',
    scripts: './public/assets'
  }
};

module.exports = paths