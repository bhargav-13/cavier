# Cavier Backend API Endpoints

Base URL:

- Local: `http://localhost:3000`
- API prefix: `/api`


## Products

### `GET /api/products`

Description: List products with filters and pagination.

Query params (all optional):

- `page`: number, default `1`
- `pageSize`: number, default `12`, max `50`
- `area`: string
- `finish`: string
- `category`: string
- `shape`: string
- `theme`: string
- `minPrice`: number
- `maxPrice`: number

Example:

`GET /api/products?page=1&pageSize=6&category=Cock&area=Bathroom&minPrice=1800&maxPrice=2500`

Success `200`:

```json
{
  "success": true,
  "data": {
    "items": [
      {
        "id": "uuid",
        "title": "SO 04 101 | Pillar Cock with Base",
        "shortTitle": "Pillar Cock with Base",
        "code": "SO 04-101",
        "price": 1930,
        "image": "https://...",
        "area": "Bathroom",
        "finish": "Chrome",
        "category": "Cock",
        "shape": "Square",
        "theme": "Themes",
        "rating": 5,
        "description": "....",
        "features": ["..."],
        "createdAt": "timestamp",
        "updatedAt": "timestamp"
      }
    ],
    "pagination": {
      "page": 1,
      "pageSize": 6,
      "totalItems": 8,
      "totalPages": 2
    }
  }
}
```

### `GET /api/products/:id`

Description: Get one product by product UUID.

Path params:

- `id`: product UUID

Success `200`:

```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "title": "...."
  }
}
```

Error `404`:

```json
{
  "success": false,
  "message": "Product not found"
}
```

### `POST /api/products`

Description: Create product with image upload.

Content type:

- `multipart/form-data`

Body fields:

- `title` (required)
- `code` (required, unique)
- `price` (required)
- `category` (required)
- `description` (required)
- `image` (required file)
- `shortTitle` (optional)
- `area` (optional)
- `finish` (optional)
- `shape` (optional)
- `theme` (optional)
- `rating` (optional)
- `features` (optional): JSON array string or newline-separated string

Success `201`:

```json
{
  "success": true,
  "message": "Product created successfully",
  "data": {
    "id": "uuid",
    "title": "...."
  }
}
```

Common errors:

- `400`: missing required fields or image
- `409`: duplicate product code

## Cart (Guest Session)

All cart endpoints require header:

- `x-client-id: <unique-client-id>`

### `GET /api/cart`

Description: Get cart items for `x-client-id`.

Success `200`:

```json
{
  "success": true,
  "data": {
    "items": [
      {
        "productId": "product-uuid",
        "quantity": 2
      }
    ]
  }
}
```

### `POST /api/cart/items`

Description: Add product to cart. If already present, quantity is incremented.

Headers:

- `x-client-id` required

JSON body:

```json
{
  "productId": "product-uuid",
  "quantity": 1
}
```

`quantity` is optional; defaults to `1`.

Success `200`: returns updated cart.

### `PATCH /api/cart/items/:productId`

Description: Set exact quantity for an existing cart item.

Headers:

- `x-client-id` required

Path params:

- `productId`: product UUID

JSON body:

```json
{
  "quantity": 3
}
```

Rules:

- Quantity must be an integer > 0

Success `200`: returns updated cart.

### `DELETE /api/cart/items/:productId`

Description: Remove item from cart.

Headers:

- `x-client-id` required

Path params:

- `productId`: product UUID

Success `200`: returns updated cart.

## Wishlist (Guest Session)

All wishlist endpoints require header:

- `x-client-id: <unique-client-id>`

### `GET /api/wishlist`

Description: Get wishlist items for `x-client-id`.

Success `200`:

```json
{
  "success": true,
  "data": {
    "items": [
      {
        "productId": "product-uuid"
      }
    ]
  }
}
```

### `POST /api/wishlist/items`

Description: Add product to wishlist. If already exists, no duplicate is created.

Headers:

- `x-client-id` required

JSON body:

```json
{
  "productId": "product-uuid"
}
```

Success `200`: returns updated wishlist.

### `DELETE /api/wishlist/items/:productId`

Description: Remove product from wishlist.

Headers:

- `x-client-id` required

Path params:

- `productId`: product UUID

Success `200`: returns updated wishlist.
