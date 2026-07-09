import type { Metadata } from "next";
import { Newsreader, Inter } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/smooth-scroll-provider";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const siteUrl = "https://marionschmaeh.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Marion Schmaeh — Autumn Day of Presence | Toronto Retreat",
  description:
    "A one-day immersive retreat of breath, gentle movement, stillness and reflection in Toronto. Saturday October 18, 2026. 18 places only.",
  keywords: [
    "embodied awareness Toronto",
    "day retreat Toronto",
    "mindfulness retreat Toronto",
    "Marion Schmaeh",
    "somatic retreat",
  ],
  openGraph: {
    title: "Autumn Day of Presence — A One-Day Retreat in Toronto",
    description:
      "Step out of urgency. Return to yourself. A one-day immersive retreat with Marion Schmaeh in Toronto, Saturday October 18, 2026.",
    url: siteUrl,
    siteName: "Marion Schmaeh",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Autumn Day of Presence — A One-Day Retreat in Toronto",
    description:
      "Step out of urgency. Return to yourself. A one-day immersive retreat with Marion Schmaeh in Toronto.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Autumn Day of Presence",
  startDate: "2026-10-18T09:30:00-04:00",
  endDate: "2026-10-18T17:00:00-04:00",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  location: {
    "@type": "Place",
    name: "SPACE on King",
    address: {
      "@type": "PostalAddress",
      streetAddress: "300 King Street East",
      addressLocality: "Toronto",
      addressRegion: "ON",
      addressCountry: "CA",
    },
  },
  image: ["https://marionschmaeh.com/images/hero-portrait.jpg"],
  description:
    "A one-day immersive retreat of breath, gentle movement, stillness and reflection for people seeking a different relationship with time, attention and themselves.",
  organizer: {
    "@type": "Person",
    name: "Marion Schmaeh",
  },
  offers: {
    "@type": "Offer",
    price: "145",
    priceCurrency: "CAD",
    availability: "https://schema.org/LimitedAvailability",
    url: "https://marionschmaeh.com/#reserve",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${newsreader.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
        />
      </head>
      <body>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
