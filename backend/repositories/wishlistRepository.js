const supabase = require('../config/supabase');
const { TABLE_NAMES } = require('../config/constants');

const repoError = (error, message) => {
  const err = new Error(message);
  err.statusCode = 500;
  err.cause = error;
  return err;
};

const listByClientId = async (clientId) => {
  const { data, error } = await supabase
    .from(TABLE_NAMES.WISHLIST_ITEMS)
    .select('product_id')
    .eq('client_id', clientId)
    .order('created_at', { ascending: false });

  if (error) {
    throw repoError(error, 'Failed to fetch wishlist items');
  }

  return data || [];
};

const findByClientAndProduct = async (clientId, productId) => {
  const { data, error } = await supabase
    .from(TABLE_NAMES.WISHLIST_ITEMS)
    .select('id, product_id')
    .eq('client_id', clientId)
    .eq('product_id', productId)
    .maybeSingle();

  if (error) {
    throw repoError(error, 'Failed to fetch wishlist item');
  }

  return data;
};

const insertItem = async ({ clientId, productId }) => {
  const { data, error } = await supabase
    .from(TABLE_NAMES.WISHLIST_ITEMS)
    .insert({
      client_id: clientId,
      product_id: productId,
    })
    .select('product_id')
    .single();

  if (error) {
    throw repoError(error, 'Failed to add wishlist item');
  }

  return data;
};

const removeByClientAndProduct = async (clientId, productId) => {
  const { error } = await supabase
    .from(TABLE_NAMES.WISHLIST_ITEMS)
    .delete()
    .eq('client_id', clientId)
    .eq('product_id', productId);

  if (error) {
    throw repoError(error, 'Failed to remove wishlist item');
  }
};

module.exports = {
  listByClientId,
  findByClientAndProduct,
  insertItem,
  removeByClientAndProduct,
};
