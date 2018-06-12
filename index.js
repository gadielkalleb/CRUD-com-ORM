const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 3000

// import das rotas 
const pessoas = require('./routes/pessoas')

// Banco de dados 
const model = require('./model/index')

//configuração do middleware 
app.use(bodyParser.urlencoded({ extended:true }))
app.use(express.static('public'))

// view engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// rotas 
app.get('/', (req, res) => res.render('index', { title: 'pagina inicial'}))
app.use('/pessoas', pessoas)

// Sincroniza com banco e depois starta a aplicação
model.sequelize.sync(/*{ force: true}*/).then(() => {
  app.listen(port, () => console.log('escutando app na porta '+port))
})