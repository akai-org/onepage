const servers = {
  ftp: {
      host: process.env.FTP_HOST,
      user: process.env.FTP_USER,
      pass: process.env.FTP_PASS,
      port: '21',
      remotePath: 'public_html/'
  },
  ssh: {
    type: "ssh",
    options: {
      host: process.env.SSH_HOST,
      user: process.env.SSH_USER,
      pass: process.env.SSH_PASS,
      port: '22',
      remotePath: ''
    }
  }
};

module.exports = servers