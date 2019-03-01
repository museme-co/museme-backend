'use strict';

module.exports = {
  env: 'development',
  db: process.env.MONGODB_URI,
  port: process.env.PORT || 3000
};
