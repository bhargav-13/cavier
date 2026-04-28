const mapProductRowToDto = (row) => ({
  id: row.id,
  title: row.title,
  shortTitle: row.short_title,
  code: row.code,
  price: row.price,
  image: row.image,
  area: row.area,
  finish: row.finish,
  category: row.category,
  shape: row.shape,
  theme: row.theme,
  rating: row.rating,
  description: row.description,
  features: row.features || [],
  createdAt: row.created_at,
  updatedAt: row.updated_at,
});

module.exports = {
  mapProductRowToDto,
};
