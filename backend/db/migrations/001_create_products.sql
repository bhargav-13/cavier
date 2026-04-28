create extension if not exists pgcrypto;

create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  short_title text not null,
  code text not null unique,
  price numeric(10,2) not null check (price >= 0),
  image text not null,
  area text not null default '',
  finish text not null default '',
  category text not null,
  shape text not null default '',
  theme text not null default 'Themes',
  rating numeric(2,1) not null default 5 check (rating >= 0 and rating <= 5),
  description text not null,
  features text[] not null default '{}',
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create index if not exists idx_products_category on public.products(category);
create index if not exists idx_products_price on public.products(price);
create index if not exists idx_products_area on public.products(area);
create index if not exists idx_products_finish on public.products(finish);
create index if not exists idx_products_shape on public.products(shape);
create index if not exists idx_products_theme on public.products(theme);
create index if not exists idx_products_rating_desc on public.products(rating desc);
create index if not exists idx_products_created_at_desc on public.products(created_at desc);
create index if not exists idx_products_category_price on public.products(category, price);
create index if not exists idx_products_area_finish on public.products(area, finish);

create or replace function public.set_updated_at_products()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = timezone('utc', now());
  return new;
end;
$$;

drop trigger if exists trg_products_updated_at on public.products;
create trigger trg_products_updated_at
before update on public.products
for each row
execute function public.set_updated_at_products();
