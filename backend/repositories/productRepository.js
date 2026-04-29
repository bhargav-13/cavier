const supabase = require('../config/supabase');
const { TABLE_NAMES } = require('../config/constants');

const buildRepositoryError = (error, message) => {
  const repositoryError = new Error(message);
  repositoryError.cause = error;
  repositoryError.statusCode = 500;
  return repositoryError;
};

const getAllProducts = async ({
  page = 1,
  pageSize = 12,
  area,
  finish,
  category,
  shape,
  theme,
  minPrice,
  maxPrice,
}) => {
  let query = supabase
    .from(TABLE_NAMES.PRODUCTS)
    .select('*', { count: 'exact' })
    .order('created_at', { ascending: false });

  if (area) {
    query = query.eq('area', area);
  }
  if (finish) {
    query = query.eq('finish', finish);
  }
  if (category) {
    query = query.eq('category', category);
  }
  if (shape) {
    query = query.eq('shape', shape);
  }
  if (theme) {
    query = query.eq('theme', theme);
  }
  if (typeof minPrice === 'number') {
    query = query.gte('price', minPrice);
  }
  if (typeof maxPrice === 'number') {
    query = query.lte('price', maxPrice);
  }

  const safePage = Math.max(1, Number(page) || 1);
  const safePageSize = Math.min(50, Math.max(1, Number(pageSize) || 12));
  const from = (safePage - 1) * safePageSize;
  const to = from + safePageSize - 1;

  const { data, error, count } = await query.range(from, to);

  if (error) {
    throw buildRepositoryError(error, 'Failed to fetch products');
  }

  return {
    rows: data || [],
    total: count || 0,
    page: safePage,
    pageSize: safePageSize,
  };
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
