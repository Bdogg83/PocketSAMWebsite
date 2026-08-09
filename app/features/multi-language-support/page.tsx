import type { Metadata } from "next";
import MultiLanguageSupportDetail from "@/components/MultiLanguageSupportDetail";
import AppDownload from "@/components/AppDownload";

export const metadata: Metadata = {
  title: "Multi-Language Caregiver App Support",
  description:
    "Use the PocketSAM caregiver app in English, Spanish, French, or Portuguese with live preview and saved language preferences for care users and caregivers.",
  alternates: {
    canonical: "/features/multi-language-support",
  },
  openGraph: {
    title: "Multi-Language Caregiver App Support | PocketSAM",
    description:
      "Preview and save English, Spanish, French, or Portuguese across PocketSAM for care users and caregivers.",
    url: "https://pocketsam.com/features/multi-language-support",
  },
};

export default function MultiLanguageSupportPage() {
  return (
    <>
      <MultiLanguageSupportDetail />
      <AppDownload />
    </>
  );
}
