const express = require('express');
const router = express.Router();
const produtosController = require('../controllers/produtosController');

router.get('/', produtosController.getProdutos);
// Define POST, PUT, DELETE similarly

module.exports = router;
 
