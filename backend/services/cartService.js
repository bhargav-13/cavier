const cartRepository = require('../repositories/cartRepository');
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

const getCart = async (clientId) => {
  validateClientId(clientId);
  const items = await cartRepository.listByClientId(clientId);

  return {
    items: items.map((item) => ({
      productId: item.product_id,
      quantity: item.quantity,
      product: item.products ? mapProductRowToDto(item.products) : null,
    })),
  };
};

const addToCart = async ({ clientId, productId, quantity = 1 }) => {
  validateClientId(clientId);
  validateProductId(productId);
  await ensureProductExists(productId);

  const parsedQuantity = Math.max(1, Number(quantity) || 1);
  const existing = await cartRepository.findByClientAndProduct(clientId, productId);

  if (existing) {
    return cartRepository.updateQuantityById(existing.id, existing.quantity + parsedQuantity);
  }

  return cartRepository.insertItem({
    clientId,
    productId,
    quantity: parsedQuantity,
  });
};

const updateCartQuantity = async ({ clientId, productId, quantity }) => {
  validateClientId(clientId);
  validateProductId(productId);

  const parsedQuantity = Number(quantity);
  if (!Number.isInteger(parsedQuantity) || parsedQuantity < 1) {
    const error = new Error('quantity must be an integer greater than 0');
    error.statusCode = 400;
    throw error;
  }

  const existing = await cartRepository.findByClientAndProduct(clientId, productId);
  if (!existing) {
    const error = new Error('Cart item not found');
    error.statusCode = 404;
    throw error;
  }

  return cartRepository.updateQuantityById(existing.id, parsedQuantity);
};

const removeFromCart = async ({ clientId, productId }) => {
  validateClientId(clientId);
  validateProductId(productId);
  await cartRepository.removeByClientAndProduct(clientId, productId);
};

module.exports = {
  getCart,
  addToCart,
  updateCartQuantity,
  removeFromCart,
};
