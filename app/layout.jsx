import "./globals.css";
import Script from "next/script";

export const metadata = {
  metadataBase: new URL("https://www.capitalassociated.com"),
  title: {
    default: "Capital Associated | Elite Construction Company & Fit-Out in Dubai",
    template: "%s",
  },
  description:
    "Leading construction company in Dubai offering design-build, interior fit-out, engineering, and project management solutions across residential & commercial sectors.",
  keywords: [
    "Construction Company Dubai",
    "Building Contracting UAE",
    "Interior Fit-Out Dubai",
    "Design Build UAE",
    "General Contractor Dubai",
  ],
  openGraph: {
    title: "Capital Associated | Elite Construction Company & Fit-Out in Dubai",
    description:
      "Leading construction company in Dubai offering design-build, interior fit-out, engineering, and project management solutions.",
    url: "https://www.capitalassociated.com",
    siteName: "Capital Associated Building Contracting",
    type: "website",
    images: [
      {
        url: "/main.jpg",
        width: 1200,
        height: 600,
        alt: "Capital Associated Building Contracting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Capital Associated | Elite Construction Company & Fit-Out in Dubai",
    description:
      "Leading construction company in Dubai offering design-build, interior fit-out, engineering, and project management solutions.",
    images: ["/main.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.capitalassociated.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          id="gtm-head"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-P3DGKDLT');`,
          }}
        />
        <Script
          id="google-analytics"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                var s=document.createElement('script');
                s.async=true;
                s.src='https://www.googletagmanager.com/gtag/js?id=G-9QGK0BM0P8';
                document.head.appendChild(s);
                window.dataLayer=window.dataLayer||[];
                function gtag(){dataLayer.push(arguments);}
                gtag('js',new Date());
                gtag('config','G-9QGK0BM0P8');
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P3DGKDLT"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
