# Database Migrations

This folder contains SQL migration files for setting up the Supabase database schema.

## How to Run Migrations

### Option 1: Using Supabase Dashboard (Recommended for Quick Setup)

1. Go to your Supabase project dashboard: https://supabase.com/dashboard
2. Navigate to **SQL Editor** in the left sidebar
3. Click **New Query**
4. Copy and paste the contents of `001_create_contacts_table.sql`
5. Click **Run** to execute the migration

### Option 2: Using Supabase CLI

If you have Supabase CLI installed:

```bash
# Link to your project (if not already linked)
supabase link --project-ref your-project-ref

# Run the migration
supabase db push
```

### Option 3: Using psql (PostgreSQL client)

```bash
# Connect to your Supabase database
psql "postgresql://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT-REF].supabase.co:5432/postgres"

# Run the migration file
\i migrations/001_create_contacts_table.sql
```

## Migration Files

- `001_create_contacts_table.sql` - Creates the contacts table with all necessary columns and security policies

## Table Schema

The `contacts` table includes:

- `id` (UUID, Primary Key) - Auto-generated unique identifier
- `name` (TEXT) - Full name of the contact
- `email` (TEXT) - Email address (required)
- `company` (TEXT, nullable) - Company name (optional)
- `subject` (TEXT) - Subject of the inquiry
- `message` (TEXT) - Message content
- `phone_number` (TEXT, nullable) - Phone number with country code
- `country` (TEXT, nullable) - Country code
- `created_at` (TIMESTAMP) - Auto-generated timestamp

## Security

The migration includes Row Level Security (RLS) policies:
- **Public Insert**: Anyone can submit contact forms (anon and authenticated users)
- **Authenticated Read**: Only authenticated users can read contact submissions
- **Service Role**: Full access for admin operations

## Troubleshooting

If you encounter errors:

1. **Table already exists**: The migration uses `CREATE TABLE IF NOT EXISTS`, so it won't fail if the table exists
2. **Permission errors**: Make sure you're using the correct database credentials
3. **RLS errors**: Check that the policies are created correctly and match your Supabase project settings

## Next Steps

After running the migration:

1. Verify the table was created in the Supabase dashboard under **Table Editor**
2. Test the contact form on your website
3. Check the `contacts` table to see submissions


