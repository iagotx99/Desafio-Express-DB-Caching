const dbService = require('../services/dbService');
const cacheService = require('../services/cacheService');

exports.getClientes = async (req, res, next) => {
  try {
    const cacheKey = 'clientes';
    let clientes = cacheService.get(cacheKey);
    if (clientes) {
      console.log('Cache hit');
      return res.json(clientes);
    }
    console.log('Cache miss');
    clientes = await dbService.getClientes();
    cacheService.set(cacheKey, clientes, 30);
    res.json(clientes);
  } catch (err) {
    next(err);
  }
};

// Similar implementation for POST, PUT, DELETE
