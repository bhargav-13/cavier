const express = require('express');

const routes = express.Router();

routes.get('/', (_req, res) => {
  res.status(200).json({
    success: true,
    message: 'Cavier API is running',
  });
});

routes.use('/api/products', require('./productRoutes'));
routes.use('/api/cart', require('./cartRoutes'));
routes.use('/api/wishlist', require('./wishlistRoutes'));

module.exports = routes;
