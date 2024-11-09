import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qqisvstqmwdxtvnqpecq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxaXN2c3RxbXdkeHR2bnFwZWNxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyNzE4OTE0MywiZXhwIjoyMDQyNzY1MTQzfQ.3yAfloQj6OteYQ4tNODJA1z2VUxg4pd8Cccs8qv5yQE";
export const supabase = createClient(supabaseUrl, supabaseKey);
