const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello World');
});

router.use('/clientes', require('./clientes'));
router.use('/produtos', require('./produtos'));

module.exports = router;
