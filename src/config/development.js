'use strict';

module.exports = {
  env: 'development',
  db: process.env.MONGO_URI,
  port: process.env.PORT || 3000
};
