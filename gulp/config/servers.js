const servers = {
  ftp: {
      host: process.env.FTP_HOST,
      user: process.env.FTP_USER,
      pass: process.env.FTP_PASS,
      port: '21',
      remotePath: 'public_html/'
  },
  ssh: {
    host: process.env.SSH_HOST,
    user: process.env.SSH_USER,
    privateKey: process.env.SSH_PRIVATE_KEY, // fs.readFileSync('/.ssh/id_rsa')
    port: '22',
    remotePath: '/home/project-name/'
  }
};

module.exports = servers