-- Migration: Create contacts table for contact form submissions
-- Created: 2024
-- Description: Stores contact form submissions from the sales contact page

-- Create the contacts table
CREATE TABLE IF NOT EXISTS public.contacts (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    company TEXT,
    subject TEXT NOT NULL,
    message TEXT NOT NULL,
    phone_number TEXT,
    country TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
);

-- Create an index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_contacts_email ON public.contacts(email);

-- Create an index on created_at for sorting queries
CREATE INDEX IF NOT EXISTS idx_contacts_created_at ON public.contacts(created_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows anyone to insert (for public form submissions)
-- but only authenticated users can read
CREATE POLICY "Allow public insert on contacts"
    ON public.contacts
    FOR INSERT
    TO anon, authenticated
    WITH CHECK (true);

-- Create a policy that allows authenticated users to read all contacts
CREATE POLICY "Allow authenticated users to read contacts"
    ON public.contacts
    FOR SELECT
    TO authenticated
    USING (true);

-- Optional: Create a policy for service role to do everything (for admin operations)
CREATE POLICY "Allow service role full access"
    ON public.contacts
    FOR ALL
    TO service_role
    USING (true)
    WITH CHECK (true);

-- Add comments for documentation
COMMENT ON TABLE public.contacts IS 'Stores contact form submissions from the website';
COMMENT ON COLUMN public.contacts.id IS 'Unique identifier for each contact submission';
COMMENT ON COLUMN public.contacts.name IS 'Full name of the contact (first + last name)';
COMMENT ON COLUMN public.contacts.email IS 'Email address of the contact';
COMMENT ON COLUMN public.contacts.company IS 'Company name (optional)';
COMMENT ON COLUMN public.contacts.subject IS 'Subject of the inquiry';
COMMENT ON COLUMN public.contacts.message IS 'Message content from the contact';
COMMENT ON COLUMN public.contacts.phone_number IS 'Phone number with country code';
COMMENT ON COLUMN public.contacts.country IS 'Country code (US, CA, EU, PH, etc.)';
COMMENT ON COLUMN public.contacts.created_at IS 'Timestamp when the contact submission was created';


