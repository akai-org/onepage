const gulp = require('gulp');

const paths = require('../config/paths');
const servers = require('../config/servers');

const gutil = require( 'gulp-util' );
const ftp = require( 'vinyl-ftp' );

gulp.task('deploy:ftp', ['build'], function () {
  gulp.src()
  var conn = ftp.create( {
    host:     servers.ftp.host,
    user:     servers.ftp.user,
    password: servers.ftp.pass,
    parallel: 10,
    log:      gutil.log
  } );

  return gulp.src( paths.publish.dir, { base: '.', buffer: false } )
    .pipe( conn.newer( servers.ftp.remotePath ) )
    .pipe( conn.dest( servers.ftp.remotePath ) );
});
