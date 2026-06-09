-- SunshineDrive Rentals — Supabase Table Setup
-- Run this in your Supabase SQL Editor (Dashboard → SQL Editor → New Query)
-- 
-- This creates the `subscribers` table for the email list form.
-- The `inquiries` table should already exist from your live site.

-- ============================================
-- 1. SUBSCRIBERS TABLE (email list)
-- ============================================

CREATE TABLE IF NOT EXISTS public.subscribers (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  email text NOT NULL,
  created_at timestamptz DEFAULT now() NOT NULL,
  CONSTRAINT subscribers_email_unique UNIQUE (email)
);

-- Enable Row Level Security
ALTER TABLE public.subscribers ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (for the frontend form)
CREATE POLICY "Allow anonymous inserts" ON public.subscribers
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated reads (for admin/dashboard access)
CREATE POLICY "Allow authenticated reads" ON public.subscribers
  FOR SELECT
  TO authenticated
  USING (true);

-- Index for faster lookups
CREATE INDEX IF NOT EXISTS idx_subscribers_email ON public.subscribers (email);
CREATE INDEX IF NOT EXISTS idx_subscribers_created_at ON public.subscribers (created_at DESC);

-- ============================================
-- 2. VERIFY INQUIRIES TABLE EXISTS
-- ============================================
-- Your live site already has this table. This is here for reference only.
-- If it doesn't exist, uncomment and run:

-- CREATE TABLE IF NOT EXISTS public.inquiries (
--   id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
--   type text NOT NULL,
--   data jsonb NOT NULL,
--   created_at timestamptz DEFAULT now() NOT NULL
-- );
-- 
-- ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;
-- 
-- CREATE POLICY "Allow anonymous inserts" ON public.inquiries
--   FOR INSERT TO anon WITH CHECK (true);
-- 
-- CREATE POLICY "Allow authenticated reads" ON public.inquiries
--   FOR SELECT TO authenticated USING (true);
