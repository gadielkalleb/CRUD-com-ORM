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

exports.deleteOne = async ({ Pessoa },req,res) => {
  await Pessoa.destroy({
    where: {
      id: req.params.id
    }
  })
  res.redirect('/pessoas')
}

exports.editForm = async ({ Pessoa },req, res) => {
  const pessoa = await Pessoa.findById(req.params.id)
  res.render('pessoas/edit',{ 
    title: 'Atualizar cadastro',
    pessoa: pessoa
  })
}

exports.editProcess = async ({ Pessoa }, req, res) => {
  await Pessoa.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  res.redirect('/pessoas')
}