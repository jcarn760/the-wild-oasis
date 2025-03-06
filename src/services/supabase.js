import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://lizqrnttaeoeqqmfmddl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxpenFybnR0YWVvZXFxbWZtZGRsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEyOTEyNzIsImV4cCI6MjA1Njg2NzI3Mn0.ZQzh0-n5lQ9-3SdT0ZnXDoIMY397pihyNbSuYdyE3FU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
