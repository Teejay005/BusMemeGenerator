var path = require('path'),
  rootPath = path.normalize(__dirname + '/..'),
  env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'app'
    },
    port: process.env.BM_PORT || 3000,
    db: process.env.BM_MONGODB_URI || 'mongodb://db/app-dev'
  },

  test: {
    root: rootPath,
    app: {
      name: 'app'
    },
    port: process.env.BM_PORT || 3000,
    db: process.env.BM_MONGODB_URI || 'mongodb://localhost/app-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'app'
    },
    port: process.env.BM_PORT || 3000,
    db: process.env.BM_MONGODB_URI
  }
};

module.exports = config[env];
