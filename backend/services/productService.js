const productRepository = require('../repositories/productRepository');
const { DEFAULTS } = require('../config/constants');
const { uploadProductImage } = require('./storageService');
const { mapProductRowToDto } = require('../utils/productMapper');

const parseFeatures = (features) => {
  if (!features) {
    return [];
  }

  if (Array.isArray(features)) {
    return features.map((item) => String(item).trim()).filter(Boolean);
  }

  if (typeof features === 'string') {
    try {
      const parsed = JSON.parse(features);
      if (Array.isArray(parsed)) {
        return parsed.map((item) => String(item).trim()).filter(Boolean);
      }
    } catch (error) {
      return features
        .split('\n')
        .map((item) => item.trim())
        .filter(Boolean);
    }
  }

  return [];
};

const validateCreatePayload = ({ title, code, price, category, description, file }) => {
  if (!title || !code || !price || !category || !description) {
    const error = new Error('title, code, price, category and description are required');
    error.statusCode = 400;
    throw error;
  }

  if (!file) {
    const error = new Error('image file is required');
    error.statusCode = 400;
    throw error;
  }
};

const toOptionalNumber = (value) => {
  if (value === undefined || value === null || value === '') {
    return undefined;
  }
  const parsed = Number(value);
  return Number.isNaN(parsed) ? undefined : parsed;
};

const getProducts = async (query = {}) => {
  const result = await productRepository.getAllProducts({
    page: query.page,
    pageSize: query.pageSize,
    area: query.area,
    finish: query.finish,
    category: query.category,
    shape: query.shape,
    theme: query.theme,
    minPrice: toOptionalNumber(query.minPrice),
    maxPrice: toOptionalNumber(query.maxPrice),
  });

  const totalPages = Math.max(1, Math.ceil(result.total / result.pageSize));

  return {
    items: result.rows.map(mapProductRowToDto),
    pagination: {
      page: result.page,
      pageSize: result.pageSize,
      totalItems: result.total,
      totalPages,
    },
  };
};

const getProductById = async (id) => {
  const row = await productRepository.getProductById(id);

  if (!row) {
    const error = new Error('Product not found');
    error.statusCode = 404;
    throw error;
  }

  return mapProductRowToDto(row);
};

const createProduct = async (body, file) => {
  const {
    title,
    shortTitle,
    code,
    price,
    area,
    finish,
    category,
    shape,
    theme,
    rating,
    description,
  } = body;

  validateCreatePayload({
    title,
    code,
    price,
    category,
    description,
    file,
  });

  const normalizedCode = code.trim();
  const duplicateProduct = await productRepository.getProductByCode(normalizedCode);
  if (duplicateProduct) {
    const error = new Error('Product with same code already exists');
    error.statusCode = 409;
    throw error;
  }

  const features = parseFeatures(body.features);
  const image = await uploadProductImage(file, normalizedCode);

  const product = await productRepository.createProduct({
    title: title.trim(),
    short_title: shortTitle?.trim() || title.trim(),
    code: normalizedCode,
    price: Number(price),
    image,
    area: area?.trim() || '',
    finish: finish?.trim() || '',
    category: category.trim(),
    shape: shape?.trim() || '',
    theme: theme?.trim() || DEFAULTS.PRODUCT_THEME,
    rating: rating ? Number(rating) : DEFAULTS.PRODUCT_RATING,
    description: description.trim(),
    features,
  });

  return mapProductRowToDto(product);
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
};
