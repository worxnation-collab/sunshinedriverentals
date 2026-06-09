-- SunshineDrive backend migration — run once in Supabase SQL editor
-- (project: trmbuniojjmetfnoqmgy). Adds the two tables the existing schema is missing.
-- The `inquiries`, `bookings`, `saved_quotes`, `vehicles`, `blockouts` tables already exist.

-- Email capture (homepage + footer signup)
create table if not exists public.subscribers (
  id         uuid primary key default gen_random_uuid(),
  email      text not null unique,
  created_at timestamptz not null default now()
);

-- Single-row store for the P&L tool's editable figures
create table if not exists public.pnl_settings (
  id         integer primary key default 1,
  data       jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now(),
  constraint pnl_settings_singleton check (id = 1)
);

-- RLS on: only the service-role key (used by the Netlify functions) can read/write.
-- No public policies => the anon key cannot touch these tables.
alter table public.subscribers  enable row level security;
alter table public.pnl_settings enable row level security;
