const multer = require('multer');
const { LIMITS } = require('../config/constants');

const storage = multer.memoryStorage();

const upload = multer({
  storage,
  limits: {
    fileSize: LIMITS.UPLOAD_SIZE_BYTES,
  },
});

module.exports = upload;
