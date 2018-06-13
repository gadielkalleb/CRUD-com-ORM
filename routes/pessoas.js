const express = require('express')
const router = express.Router();
const pessoasController = require('../controller/pessoas')
const model = require('../model/index')

router.get('/', pessoasController.index.bind(null, model.models))
router.get('/create', pessoasController.createForm)
router.post('/create', pessoasController.createProcess.bind(null, model.models))
router.get('/delete/:id', pessoasController.deleteOne.bind(null, model.models))
router.post('/update/:id', pessoasController.editProcess.bind(null, model.models))
router.get('/update/:id', pessoasController.editForm.bind(null, model.models))


module.exports = router