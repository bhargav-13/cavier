const supabase = require('../config/supabase');
const { TABLE_NAMES } = require('../config/constants');

const buildRepositoryError = (error, message) => {
  const repositoryError = new Error(message);
  repositoryError.cause = error;
  repositoryError.statusCode = 500;
  return repositoryError;
};

const getAllProducts = async () => {
  const { data, error } = await supabase
    .from(TABLE_NAMES.PRODUCTS)
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    throw buildRepositoryError(error, 'Failed to fetch products');
  }

  return data;
};

const getProductById = async (id) => {
  const { data, error } = await supabase
    .from(TABLE_NAMES.PRODUCTS)
    .select('*')
    .eq('id', id)
    .maybeSingle();

  if (error) {
    throw buildRepositoryError(error, 'Failed to fetch product');
  }

  return data;
};

const getProductByCode = async (code) => {
  const { data, error } = await supabase
    .from(TABLE_NAMES.PRODUCTS)
    .select('*')
    .eq('code', code)
    .maybeSingle();

  if (error) {
    throw buildRepositoryError(error, 'Failed to fetch product by code');
  }

  return data;
};

const createProduct = async (payload) => {
  const { data, error } = await supabase
    .from(TABLE_NAMES.PRODUCTS)
    .insert(payload)
    .select('*')
    .single();

  if (error) {
    const repositoryError = buildRepositoryError(error, 'Failed to create product');
    if (error.code === '23505') {
      repositoryError.statusCode = 409;
      repositoryError.message = 'Product with same code already exists';
    }
    throw repositoryError;
  }

  return data;
};

module.exports = {
  getAllProducts,
  getProductById,
  getProductByCode,
  createProduct,
};
