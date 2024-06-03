const NodeCache = require('node-cache');
const cache = new NodeCache();

exports.get = (key) => {
  return cache.get(key);
};

exports.set = (key, value, ttl) => {
  cache.set(key, value, ttl);
};

exports.del = (key) => {
  cache.del(key);
};
