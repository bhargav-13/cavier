const TABLE_NAMES = {
  PRODUCTS: 'products',
};

const STORAGE_BUCKETS = {
  PRODUCT_IMAGES: process.env.SUPABASE_STORAGE_BUCKET || 'product-images',
};

const DEFAULTS = {
  PRODUCT_THEME: 'Themes',
  PRODUCT_RATING: 5,
};

const LIMITS = {
  UPLOAD_SIZE_BYTES: 5 * 1024 * 1024,
};

module.exports = {
  TABLE_NAMES,
  STORAGE_BUCKETS,
  DEFAULTS,
  LIMITS,
};
