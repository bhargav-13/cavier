create table if not exists public.cart_items (
  id uuid primary key default gen_random_uuid(),
  client_id text not null,
  product_id uuid not null references public.products(id) on delete cascade,
  quantity integer not null default 1 check (quantity > 0),
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now()),
  unique (client_id, product_id)
);

create index if not exists idx_cart_items_client_id on public.cart_items(client_id);
create index if not exists idx_cart_items_product_id on public.cart_items(product_id);

create table if not exists public.wishlist_items (
  id uuid primary key default gen_random_uuid(),
  client_id text not null,
  product_id uuid not null references public.products(id) on delete cascade,
  created_at timestamptz not null default timezone('utc', now()),
  unique (client_id, product_id)
);

create index if not exists idx_wishlist_items_client_id on public.wishlist_items(client_id);
create index if not exists idx_wishlist_items_product_id on public.wishlist_items(product_id);

create or replace function public.set_updated_at_cart_items()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = timezone('utc', now());
  return new;
end;
$$;

drop trigger if exists trg_cart_items_updated_at on public.cart_items;
create trigger trg_cart_items_updated_at
before update on public.cart_items
for each row
execute function public.set_updated_at_cart_items();
