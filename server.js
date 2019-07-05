const express = require('express')
const next = require('next')
const nextI18NextMiddleware = require('next-i18next/middleware')

const nextI18next = require('./i18n')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const port = process.env.PORT || 40000

app.prepare().then(() => {
  const server = express()

  //비어 링크
  server.get('/beer/:name', (req, res) => {
    app.render(req, res, '/beer', {name:req.params.name})
  })

  //번역 
  server.use(nextI18NextMiddleware(nextI18next))

  server.get('*', (req, res) => handle(req, res))

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`) // eslint-disable-line no-console
  })
})