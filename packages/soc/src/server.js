const http = require('http')
const router = require('find-my-way')()
const markupHandler = require('./processMarkupRequest')
const configurationHandler = require('./processConfigurationRequest')

router.on('GET', '/*', (req, res, params) => {
  res.end(JSON.stringify({
    status:"failed",
    message:"Not sure what to render :-)",
    description: "POST requests only for /processReactMarkup & /processConfiguration"
  }))
})

router.on('POST', '/processReactMarkup', (req, res, params) => {
  markupHandler.processRequest(req, res)
})

router.on('POST', '/processConfiguration', (req, res, params) => {
  configurationHandler.processRequest(req, res)
})

const server = http.createServer((req, res) => {
  router.lookup(req, res)
})

server.listen(3000, err => {
  if (err) throw err
  console.log('Server listening on: http://localhost:3000')
})