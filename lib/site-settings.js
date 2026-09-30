import { supabaseAdmin } from "./supabase-admin";

// Read a single value from site_metadata on the server; returns fallback on any failure.
export async function getSiteSetting(key, fallback = "") {
  try {
    const { data } = await supabaseAdmin
      .from("site_metadata")
      .select("value")
      .eq("key", key)
      .maybeSingle();
    return data?.value || fallback;
  } catch (error) {
    console.error(`Error reading site setting "${key}":`, error);
    return fallback;
  }
}
