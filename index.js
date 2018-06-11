const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000

const pessoas = require('./routes/pessoas')

const model = require('./model/index')

app.use(express.static('public'))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// app.use('/', (req, res, next) => {
//   console.log(req.rawHeaders)
//   console.log(req.url)
//   next()
// })
app.get('/', (req, res) => res.render('index', { title: 'pagina inicial'}))
app.use('/pessoas', pessoas)

model.sequelize.sync().then(() => {
  app.listen(port, () => console.log('escutando app na porta '+port))
})