import { supabaseAdmin } from "@/lib/supabase-admin";
import Navbar from "./components/Navbar";
import NavbarMobile from "./components/NavbarMobile";
import Consultation from "./components/Consultation";
import Footer from "./components/Footer";

async function getSettings() {
  try {
    // Use the admin (service-role) client so server-side rendering reads
    // site_metadata even when RLS is enabled. This guarantees that values
    // saved from /admin/metadata are reflected on the public site.
    const { data } = await supabaseAdmin.from("site_metadata").select("*");
    const settings = {};
    data?.forEach((item) => {
      settings[item.key] = item.value;
    });
    return settings;
  } catch (error) {
    console.error("Error fetching site settings:", error);
    return {};
  }
}

// Shared layout for public pages with Navbar and Footer
export default async function PublicLayout({ children }) {
  const settings = await getSettings();

  return (
    <>
      <Navbar settings={settings} />
      <NavbarMobile settings={settings} />
      {children}
      <Consultation />
      <Footer settings={settings} />
    </>
  );
}
