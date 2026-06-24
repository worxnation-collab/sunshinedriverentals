-- Reviews: native customer reviews for SunshineDrive Rentals
-- Run this in Supabase project trmbuniojjmetfnoqmgy → SQL Editor.

create table if not exists public.reviews (
  id           uuid primary key default gen_random_uuid(),
  vehicle_id   text,                       -- optional slug tag (e.g. "durango"); nullable
  customer_name text not null,
  location     text,
  rating       int  not null check (rating between 1 and 5),
  title        text,
  comment      text not null,
  status       text not null default 'pending',  -- 'pending' | 'approved'
  created_at   timestamptz not null default now(),
  approved_at  timestamptz
);

create index if not exists reviews_status_created_idx on public.reviews (status, created_at desc);

alter table public.reviews enable row level security;

-- Public site can READ only approved reviews
drop policy if exists reviews_public_read_approved on public.reviews;
create policy reviews_public_read_approved on public.reviews
  for select to anon
  using (status = 'approved');

-- Public site can SUBMIT, but only as 'pending' and within sane limits
drop policy if exists reviews_public_submit_pending on public.reviews;
create policy reviews_public_submit_pending on public.reviews
  for insert to anon
  with check (
    status = 'pending'
    and char_length(customer_name) between 1 and 80
    and char_length(comment) between 1 and 2000
    and rating between 1 and 5
  );

-- ── How to moderate ──────────────────────────────────────────────
-- See what's waiting:
--   select id, customer_name, rating, comment, created_at
--   from public.reviews where status = 'pending' order by created_at desc;
-- Approve one (it then shows on the site):
--   update public.reviews set status='approved', approved_at=now() where id='PASTE_ID';
