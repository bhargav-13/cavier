const crypto = require('crypto');
const path = require('path');
const supabase = require('../config/supabase');
const { STORAGE_BUCKETS } = require('../config/constants');
const slugify = require('../utils/slugify');

const resolveFileExtension = (fileName = '', mimeType = '') => {
  const extensionFromName = path.extname(fileName || '').replace('.', '').toLowerCase();
  if (extensionFromName) {
    return extensionFromName;
  }

  const mimeExtensionMap = {
    'image/jpeg': 'jpg',
    'image/png': 'png',
    'image/webp': 'webp',
    'image/gif': 'gif',
  };

  return mimeExtensionMap[mimeType] || 'bin';
};

const uploadProductImageBuffer = async ({
  buffer,
  productCode,
  originalName = '',
  mimeType = '',
  upsert = false,
}) => {
  const extension = resolveFileExtension(originalName, mimeType);
  const fileName = `${slugify(productCode)}-${crypto.randomUUID()}.${extension}`;
  const filePath = `products/${fileName}`;

  const { error } = await supabase.storage
    .from(STORAGE_BUCKETS.PRODUCT_IMAGES)
    .upload(filePath, buffer, {
      contentType: mimeType,
      upsert,
    });

  if (error) {
    const storageError = new Error('Image upload failed');
    storageError.statusCode = 500;
    storageError.cause = error;
    throw storageError;
  }

  const { data: publicUrlData } = supabase.storage
    .from(STORAGE_BUCKETS.PRODUCT_IMAGES)
    .getPublicUrl(filePath);

  return publicUrlData.publicUrl;
};

const uploadProductImage = async (file, productCode) =>
  uploadProductImageBuffer({
    buffer: file.buffer,
    productCode,
    originalName: file.originalname,
    mimeType: file.mimetype,
    upsert: false,
  });

module.exports = {
  uploadProductImage,
  uploadProductImageBuffer,
};
