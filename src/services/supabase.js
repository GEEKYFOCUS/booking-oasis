import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://snhxfqmutnbgzsfpzejf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNuaHhmcW11dG5iZ3pzZnB6ZWpmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM5Njg1OTMsImV4cCI6MjAyOTU0NDU5M30.7epoYYBLGWngf8rhjeGD3n6EecCU-SpvWbKcyC35hlI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
