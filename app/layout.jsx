import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://capitalassociated.com"),
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
    url: "https://capitalassociated.com",
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
    canonical: "https://capitalassociated.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-9QGK0BM0P8"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-9QGK0BM0P8');
            `,
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
