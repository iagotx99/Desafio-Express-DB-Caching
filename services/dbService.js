const pool = require('../configs/db');

exports.getClientes = async () => {
  const [rows] = await pool.query('SELECT * FROM clientes');
  return rows;
};

exports.getProdutos = async () => {
  const [rows] = await pool.query('SELECT * FROM produtos');
  return rows;
};

// Similar functions for insert, update, delete
