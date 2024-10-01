import { createClient } from "@supabase/supabase-js";

export const supabaseClient = createClient(
  `https://${import.meta.env.VITE_SUPABASE_URL}.supabase.co`,
  import.meta.env.VITE_ANON_KEY
);
