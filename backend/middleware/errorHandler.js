const errorHandler = (error, _req, res, _next) => {
  console.error(error);

  return res.status(error.statusCode || 500).json({
    success: false,
    message: error.message || 'Internal server error',
  });
};

module.exports = errorHandler;
