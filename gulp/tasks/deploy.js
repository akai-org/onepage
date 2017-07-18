const gulp = require('gulp');
const fs = require('fs');

const paths = require('../config/paths');
const servers = require('../config/servers');

const gutil = require( 'gulp-util' );
const ftp = require( 'vinyl-ftp' );

gulp.task('deploy', ['deploy:sftp']);

gulp.task('deploy:ftp', ['build'], function () {
  const conn = ftp.create( {
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

var config = {
  host: servers.ssh.host,
  port: 22,
  username: servers.ssh.user,
  privateKey: servers.ssh.privateKey
}

var gulpSSH = new GulpSSH({
  ignoreErrors: false,
  sshConfig: config
})

gulp.task('deploy:sftp', ['build'], function () {
  return gulp.src(paths.publish.dir)
    .pipe(gulpSSH.dest(servers.ssh.remotePath))
})