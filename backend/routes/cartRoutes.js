const express = require('express');
const {
  getCart,
  addToCart,
  updateCartQuantity,
  removeFromCart,
} = require('../controllers/cartController');

const router = express.Router();

router.get('/', getCart);
router.post('/items', addToCart);
router.patch('/items/:productId', updateCartQuantity);
router.delete('/items/:productId', removeFromCart);

module.exports = router;
