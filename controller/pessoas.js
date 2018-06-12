const model = require('../model/index')

exports.index = async ({ Pessoa }, req, res) => {
  const pessoas = await Pessoa.findAll()
  res.render('home',{ 
    title: 'Bem vindo ao cadastro de projetos',
    mensagem: 'Olá mundo',
    pessoas: pessoas
  })
} 

exports.createForm = (req, res) => res.render('pessoas/create',{ title: 'Pagina de cadastro'})

exports.createProcess = async ({ Pessoa }, req, res) => {
  res.send('create')
}