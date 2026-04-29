const asyncHandler = require('../middleware/asyncHandler');
const wishlistService = require('../services/wishlistService');

const getClientId = (req) => req.header('x-client-id');

const getWishlist = asyncHandler(async (req, res) => {
  const data = await wishlistService.getWishlist(getClientId(req));
  return res.status(200).json({ success: true, data });
});

const addToWishlist = asyncHandler(async (req, res) => {
  await wishlistService.addToWishlist({
    clientId: getClientId(req),
    productId: req.body.productId,
  });

  const data = await wishlistService.getWishlist(getClientId(req));
  return res.status(200).json({ success: true, data });
});

const removeFromWishlist = asyncHandler(async (req, res) => {
  await wishlistService.removeFromWishlist({
    clientId: getClientId(req),
    productId: req.params.productId,
  });

  const data = await wishlistService.getWishlist(getClientId(req));
  return res.status(200).json({ success: true, data });
});

module.exports = {
  getWishlist,
  addToWishlist,
  removeFromWishlist,
};
