const asyncHandler = require('../middleware/asyncHandler');
const cartService = require('../services/cartService');

const getClientId = (req) => req.header('x-client-id');

const getCart = asyncHandler(async (req, res) => {
  const data = await cartService.getCart(getClientId(req));
  return res.status(200).json({ success: true, data });
});

const addToCart = asyncHandler(async (req, res) => {
  await cartService.addToCart({
    clientId: getClientId(req),
    productId: req.body.productId,
    quantity: req.body.quantity,
  });

  const data = await cartService.getCart(getClientId(req));
  return res.status(200).json({ success: true, data });
});

const updateCartQuantity = asyncHandler(async (req, res) => {
  await cartService.updateCartQuantity({
    clientId: getClientId(req),
    productId: req.params.productId,
    quantity: req.body.quantity,
  });

  const data = await cartService.getCart(getClientId(req));
  return res.status(200).json({ success: true, data });
});

const removeFromCart = asyncHandler(async (req, res) => {
  await cartService.removeFromCart({
    clientId: getClientId(req),
    productId: req.params.productId,
  });

  const data = await cartService.getCart(getClientId(req));
  return res.status(200).json({ success: true, data });
});

module.exports = {
  getCart,
  addToCart,
  updateCartQuantity,
  removeFromCart,
};
