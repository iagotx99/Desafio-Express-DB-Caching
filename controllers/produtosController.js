const dbService = require('../services/dbService');

exports.getProdutos = async (req, res, next) => {
  try {
    const produtos = await dbService.getProdutos();
    res.json(produtos);
  } catch (err) {
    next(err);
  }
};

// Similar implementation for POST, PUT, DELETE
