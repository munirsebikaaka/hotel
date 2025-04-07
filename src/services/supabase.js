import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://jfasswfrmncazruanrwv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpmYXNzd2ZybW5jYXpydWFucnd2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMxNzE3ODEsImV4cCI6MjA1ODc0Nzc4MX0.C-wKylmNat-d-KOVit0dGtDU6l5VAs7teRx_YuqH1FI";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
