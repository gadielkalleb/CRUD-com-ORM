const express = require('express')
const router = express.Router();
const pessoasController = require('../controller/pessoas')

router.get('/', pessoasController.index)

module.exports = router