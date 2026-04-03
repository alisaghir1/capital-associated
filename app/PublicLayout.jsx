import { createServerSupabaseClient } from "@/lib/supabase-server";
import Navbar from "./components/Navbar";
import NavbarMobile from "./components/NavbarMobile";
import Consultation from "./components/Consultation";
import Footer from "./components/Footer";

async function getSettings() {
  try {
    const supabase = createServerSupabaseClient();
    const { data } = await supabase.from("site_metadata").select("*");
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
