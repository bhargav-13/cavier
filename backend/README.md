# Backend Architecture

This backend now follows a layered architecture with Supabase:

- `config`: environment/bootstrap clients and constants
- `controllers`: HTTP handlers
- `services`: business logic and orchestration
- `repositories`: data access to Supabase Postgres
- `routes`: API route definitions
- `middleware`: cross-cutting express middleware
- `db/migrations`: SQL migrations
- `utils`: pure helper functions and mappers

## Required Environment Variables

```env
PORT=3000
SUPABASE_URL=https://your-project-ref.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
SUPABASE_STORAGE_BUCKET=product-images
```

## Supabase Setup

1. Run [001_create_products.sql](/d:/Freelance/codelix/cavier/frontend/backend/db/migrations/001_create_products.sql) in the Supabase SQL editor.
2. Run [002_create_product_images_bucket.sql](/d:/Freelance/codelix/cavier/frontend/backend/db/migrations/002_create_product_images_bucket.sql).
3. If you change `SUPABASE_STORAGE_BUCKET`, create matching bucket/policies for that name.

## Seed Products

Run this command from `backend` to seed sample products using image [product-2.png](/d:/Freelance/codelix/cavier/frontend/frontend/src/assets/home/product-2.png):

```bash
npm run seed:products
```
