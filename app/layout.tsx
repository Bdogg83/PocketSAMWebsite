import type { Metadata, Viewport } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "PocketSAM | Your Pocket Caregiver",
    template: "%s | PocketSAM",
  },
  description:
    "PocketSAM helps families and caregivers organize medications, appointments, check-ins, reports, and care team coordination in one simple app.",
  metadataBase: new URL("https://pocketsam.com"),
  openGraph: {
    title: "PocketSAM | Your Pocket Caregiver",
    description:
      "PocketSAM helps families and caregivers organize medications, appointments, check-ins, reports, and care team coordination in one simple app.",
    siteName: "PocketSAM",
    type: "website",
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
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
