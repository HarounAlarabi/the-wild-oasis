import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://ioxcstxhwceebhdwgpcj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlveGNzdHhod2NlZWJoZHdncGNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU3ODU3NzIsImV4cCI6MjA0MTM2MTc3Mn0.TCL7ofRgEDIaevJZLPchVoKdG3U4Cfe4-mYISmZE9ks";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
