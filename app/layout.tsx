import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import "./globals.css";

const siteTitle = "PocketSAM | Caregiver App for Managing Care";
const siteDescription =
  "PocketSAM is a caregiver app that helps families organize medications, appointments, symptoms, care tasks, notes, and important health information in one place.";

export const metadata: Metadata = {
  metadataBase: new URL("https://pocketsam.com"),
  title: {
    default: siteTitle,
    template: "%s | PocketSAM",
  },
  description: siteDescription,
  applicationName: "PocketSAM",
  keywords: [
    "caregiver app",
    "caregiving app",
    "care management app",
    "family caregiver app",
    "medication tracking",
    "appointment tracking",
    "symptom tracking",
    "care tasks",
    "family care coordination",
  ],
  authors: [{ name: "PocketSAM" }],
  creator: "PocketSAM",
  publisher: "PocketSAM",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "https://pocketsam.com",
    siteName: "PocketSAM",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/homepagebackground.png",
        width: 1200,
        height: 630,
        alt: "PocketSAM caregiver app homepage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/homepagebackground.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <JsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
