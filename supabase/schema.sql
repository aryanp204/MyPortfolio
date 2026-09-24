-- ====================================================================
-- SUPABASE SCHEMA: Contact Messages for Aryan Patel Portfolio
-- ====================================================================

-- 1. Create messages table
CREATE TABLE IF NOT EXISTS public.messages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- 2. Enable Row Level Security (RLS)
ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;

-- 3. Policy: Allow anonymous users to INSERT messages only
DROP POLICY IF EXISTS "Allow anonymous insert-only" ON public.messages;
CREATE POLICY "Allow anonymous insert-only" 
ON public.messages 
FOR INSERT 
TO anon 
WITH CHECK (true);

-- 4. Ensure no public read/update/delete access for anonymous role
REVOKE SELECT, UPDATE, DELETE ON public.messages FROM anon;

-- Comments for documentation
COMMENT ON TABLE public.messages IS 'Stores inbound contact form messages submitted via the portfolio site';
