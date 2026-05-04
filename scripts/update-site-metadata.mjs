// One-off script: update site_metadata rows in Supabase to match the
// agreed homepage / brand copy. Reads .env.local for SUPABASE keys.
import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createClient } from "@supabase/supabase-js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const envPath = resolve(__dirname, "..", ".env.local");
const envText = readFileSync(envPath, "utf8");

const env = {};
for (const line of envText.split(/\r?\n/)) {
  const m = line.match(/^([A-Z0-9_]+)\s*=\s*(.*)$/);
  if (m) env[m[1]] = m[2];
}

const SUPABASE_URL = env.NEXT_PUBLIC_SUPABASE_URL;
const SERVICE_KEY = env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SERVICE_KEY) {
  console.error("Missing SUPABASE env vars in .env.local");
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SERVICE_KEY, {
  auth: { autoRefreshToken: false, persistSession: false },
});

const updates = [
  {
    key: "site_meta_title",
    value: "Capital Associated | Contracting Company in Dubai, UAE",
    description: "Default meta title",
    type: "text",
  },
  {
    key: "site_meta_description",
    value:
      "Capital Associated Building Contracting LLC \u2014 licensed contractor in Dubai. 100+ projects, 750,000+ sq ft delivered across Dubai, Abu Dhabi & Sharjah. Villas, commercial builds & turnkey construction.",
    description: "Default meta description",
    type: "text",
  },
  {
    key: "company_name",
    value: "Capital Associated Building Contracting",
    description: "Company name",
    type: "text",
  },
  {
    key: "company_tagline",
    value: "Leading Contracting Company in Dubai, UAE",
    description: "Company tagline",
    type: "text",
  },
  {
    key: "company_description",
    value:
      "Capital Associated Building Contracting LLC is a licensed contracting company in Dubai, founded in 2021. 100+ completed projects and 750,000+ sq ft delivered across Dubai, Abu Dhabi, and Sharjah \u2014 residential villas, commercial builds, and turnkey construction.",
    description: "Company description",
    type: "text",
  },
  {
    key: "copyright_text",
    value: "Capital Associated Building Contracting \u00a9 2026",
    description: "Footer copyright",
    type: "text",
  },
  {
    key: "social_twitter",
    value: "",
    description: "Twitter/X URL",
    type: "text",
  },
  {
    key: "social_facebook",
    value: "https://www.facebook.com/capital.associated",
    description: "Facebook URL",
    type: "text",
  },
];

console.log(`Updating ${updates.length} site_metadata rows...`);

for (const row of updates) {
  const { data, error } = await supabase
    .from("site_metadata")
    .upsert(row, { onConflict: "key" })
    .select();
  if (error) {
    console.error(`FAIL ${row.key}:`, error.message);
    process.exit(1);
  }
  console.log(`OK   ${row.key} -> ${row.value.slice(0, 60)}${row.value.length > 60 ? "..." : ""}`);
}

console.log("\nVerifying...");
const { data: verify, error: vErr } = await supabase
  .from("site_metadata")
  .select("key, value")
  .in(
    "key",
    updates.map((u) => u.key)
  );
if (vErr) {
  console.error("Verify error:", vErr.message);
  process.exit(1);
}
for (const r of verify) {
  console.log(`  ${r.key}: ${r.value.slice(0, 80)}`);
}
console.log("\nDone.");
