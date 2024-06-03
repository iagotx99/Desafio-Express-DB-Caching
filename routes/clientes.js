const express = require('express');
const router = express.Router();
const clientesController = require('../controllers/clientesController');

router.get('/', clientesController.getClientes);
// Define POST, PUT, DELETE similarly

module.exports = router;
