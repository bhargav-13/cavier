const asyncHandler = require('../middleware/asyncHandler');
const productService = require('../services/productService');

const getProducts = asyncHandler(async (req, res) => {
  const products = await productService.getProducts(req.query);

  return res.status(200).json({
    success: true,
    data: products,
  });
});

const getProductById = asyncHandler(async (req, res) => {
  const product = await productService.getProductById(req.params.id);

  return res.status(200).json({
    success: true,
    data: product,
  });
});

const createProduct = asyncHandler(async (req, res) => {
  const product = await productService.createProduct(req.body, req.file);

  return res.status(201).json({
    success: true,
    message: 'Product created successfully',
    data: product,
  });
});

module.exports = {
  getProducts,
  getProductById,
  createProduct,
};
