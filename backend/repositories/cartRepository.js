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
    .from(TABLE_NAMES.CART_ITEMS)
    .select('product_id, quantity, products(*)')
    .eq('client_id', clientId)
    .order('created_at', { ascending: false });

  if (error) {
    throw repoError(error, 'Failed to fetch cart items');
  }

  return data || [];
};

const findByClientAndProduct = async (clientId, productId) => {
  const { data, error } = await supabase
    .from(TABLE_NAMES.CART_ITEMS)
    .select('id, product_id, quantity')
    .eq('client_id', clientId)
    .eq('product_id', productId)
    .maybeSingle();

  if (error) {
    throw repoError(error, 'Failed to fetch cart item');
  }

  return data;
};

const insertItem = async ({ clientId, productId, quantity }) => {
  const { data, error } = await supabase
    .from(TABLE_NAMES.CART_ITEMS)
    .insert({
      client_id: clientId,
      product_id: productId,
      quantity,
    })
    .select('product_id, quantity')
    .single();

  if (error) {
    throw repoError(error, 'Failed to add cart item');
  }

  return data;
};

const updateQuantityById = async (id, quantity) => {
  const { data, error } = await supabase
    .from(TABLE_NAMES.CART_ITEMS)
    .update({ quantity })
    .eq('id', id)
    .select('product_id, quantity')
    .single();

  if (error) {
    throw repoError(error, 'Failed to update cart item');
  }

  return data;
};

const removeByClientAndProduct = async (clientId, productId) => {
  const { error } = await supabase
    .from(TABLE_NAMES.CART_ITEMS)
    .delete()
    .eq('client_id', clientId)
    .eq('product_id', productId);

  if (error) {
    throw repoError(error, 'Failed to remove cart item');
  }
};

module.exports = {
  listByClientId,
  findByClientAndProduct,
  insertItem,
  updateQuantityById,
  removeByClientAndProduct,
};
