const express = require('express');
const router = express.Router();
const productsRouter = require('./products');
const usersRouter = require('./users');
const homeRouter = require('./home');
const categoriesRouter = require('./categories');

function routerApi(app) {
  app.use('/api/v1', router);
  router.use('/categories', categoriesRouter);
  router.use('/', homeRouter);
  router.use('/products', productsRouter);
  router.use('/users', usersRouter);

};

module.exports = routerApi;
