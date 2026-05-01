const wishlistRepository = require('../repositories/wishlistRepository');
const productRepository = require('../repositories/productRepository');
const { mapProductRowToDto } = require('../utils/productMapper');

const validateClientId = (clientId) => {
  if (!clientId) {
    const error = new Error('Missing client id');
    error.statusCode = 400;
    throw error;
  }
};

const validateProductId = (productId) => {
  if (!productId) {
    const error = new Error('productId is required');
    error.statusCode = 400;
    throw error;
  }
};

const ensureProductExists = async (productId) => {
  const product = await productRepository.getProductById(productId);
  if (!product) {
    const error = new Error('Product not found');
    error.statusCode = 404;
    throw error;
  }
};

const getWishlist = async (clientId) => {
  validateClientId(clientId);
  const items = await wishlistRepository.listByClientId(clientId);

  return {
    items: items.map((item) => ({
      productId: item.product_id,
      product: item.products ? mapProductRowToDto(item.products) : null,
    })),
  };
};

const addToWishlist = async ({ clientId, productId }) => {
  validateClientId(clientId);
  validateProductId(productId);
  await ensureProductExists(productId);

  const existing = await wishlistRepository.findByClientAndProduct(clientId, productId);
  if (existing) {
    return { product_id: productId };
  }

  return wishlistRepository.insertItem({ clientId, productId });
};

const removeFromWishlist = async ({ clientId, productId }) => {
  validateClientId(clientId);
  validateProductId(productId);
  await wishlistRepository.removeByClientAndProduct(clientId, productId);
};

module.exports = {
  getWishlist,
  addToWishlist,
  removeFromWishlist,
};
