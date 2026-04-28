insert into storage.buckets (id, name, public, file_size_limit)
values ('product-images', 'product-images', true, 5242880)
on conflict (id) do nothing;

drop policy if exists "Public can read product images" on storage.objects;
create policy "Public can read product images"
on storage.objects
for select
to public
using (bucket_id = 'product-images');

drop policy if exists "Service role can upload product images" on storage.objects;
create policy "Service role can upload product images"
on storage.objects
for insert
to service_role
with check (bucket_id = 'product-images');
