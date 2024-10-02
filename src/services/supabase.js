import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://pqabinsuikcjcjxdlcwq.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBxYWJpbnN1aWtjamNqeGRsY3dxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc0NTkyODAsImV4cCI6MjA0MzAzNTI4MH0.57HZ4uHIjD3HQUimOK-W5t1MiA24W29MW6oYJUjxSB4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
