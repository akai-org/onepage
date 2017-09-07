const express = require('express')
const app = express()

const pageRenderer = require('../src/js/pageRenderer')

app.use(express.static('../build'))

app.get('/', function (req, res) {
  let config = require('../src/config.json')
  res.send(pageRenderer.run(config))
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})