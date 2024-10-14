import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://gtlahwppugukudukhjkr.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd0bGFod3BwdWd1a3VkdWtoamtyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg2NjU0MzUsImV4cCI6MjA0NDI0MTQzNX0.MKKbpJ018DqQGghQu14fDpruxWAebjMaS6kiOQc0xuk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
