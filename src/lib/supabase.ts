import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://yqrllzkoheyixauxuhia.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlxcmxsemtvaGV5aXhhdXh1aGlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA4NjEyMDksImV4cCI6MjA4NjQzNzIwOX0.Hve-QdCXoSizmd9mwZZZtSt1BkQYQmf5SHohJ5vCgx0";

export const supabase = createClient(
supabaseUrl,
supabaseAnonKey
);
