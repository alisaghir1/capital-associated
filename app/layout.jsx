import "./globals.css";
import LayoutClient from "./LayoutClient";
import { getServerSideMetadata } from "../lib/server-metadata";

export async function generateMetadata() {
  const settings = await getServerSideMetadata();
  
  // Fallback values
  const defaultTitle = "Capital Associated | Elite Construction Company & Fit-Out in Dubai";
  const defaultDescription = "Leading construction company in Dubai offering design-build, interior fit-out, engineering, and project management solutions across residential & commercial sectors.";
  const defaultKeywords = "Construction Company Dubai, Building Contracting UAE, Interior Fit-Out Dubai, Design Build UAE";
  
  const title = settings.site_meta_title || defaultTitle;
  const description = settings.site_meta_description || defaultDescription;
  const keywords = settings.site_meta_keywords || defaultKeywords;
  const companyName = settings.company_name || "Capital Associated Building Contracting";
  
  return {
    metadataBase: new URL("https://capitalassociated.com"),
    title: title,
    description: description,
    icons: {
      icon: settings.site_favicon || "/logoLight.svg",
    },
    keywords: keywords.split(',').map(k => k.trim()),
    openGraph: {
      title: title,
      description: description,
      url: "https://capitalassociated.com",
      type: "website",
      images: [
        {
          url: settings.site_logo || "/main.jpg",
          width: 1200,
          height: 600,
          alt: companyName,
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
    },
    // Add Google Analytics/GTM if configured
    ...(settings.google_analytics_id && {
      googleAnalytics: {
        id: settings.google_analytics_id,
      },
    }),
  };
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='antialiased'>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
