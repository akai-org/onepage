const paths = {
  /* source code */
  source: {
    dir: './source',
    fonts: './src/fonts/**/*',
    images: './src/img/**/*',
    markup: './src/**/index.html',
    styles: './src/scss/**/*.scss',
    scripts: './src/js/**/*.js',
    specs: './spec/**/*[sS]pec.js'
  },

  /* build */
  build: {
    dir: './build',
    fonts: './build/assets',
    images: './build/img',
    markup: './build',
    styles: './build/assets',
    scripts: './build/assets'
  },

  /* minified and optimized */
  publish: {
    dir: './public',
    fonts: './public/assets',
    images: './public/img',
    markup: './public',
    styles: './public/assets',
    scripts: './public/assets'
  }
};

module.exports = paths