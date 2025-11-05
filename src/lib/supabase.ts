import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ohhecurbjksubantcdxz.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9oaGVjdXJiamtzdWJhbnRjZHh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIzMTYxNzIsImV4cCI6MjA3Nzg5MjE3Mn0.ToMZKLtEj_tU4_JdMWH43MtUnh5fkzXrsIFsHZtkSVs'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
