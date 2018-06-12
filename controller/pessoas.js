const model = require('../model/index')

exports.index = async ({ Pessoa }, req, res) => {
  const pessoas = await Pessoa.findAll()
  res.render('pessoas/index',{ 
    title: 'Bem vindo ao cadastro de projetos',
    h1titulo: 'Lista de Pessoas',
    pessoas: pessoas
  })
} 

exports.createForm = (req, res) => res.render('pessoas/create',{ title: 'Pagina de cadastro'})

exports.createProcess = async ({ Pessoa }, req, res) => {
  await Pessoa.create(req.body)
  res.redirect('/pessoas')
}