import type { Metadata } from "next";
import MultiLanguageSupportDetail from "@/components/MultiLanguageSupportDetail";
import AppDownload from "@/components/AppDownload";

export const metadata: Metadata = {
  title: "Multi-Language Support",
  description:
    "Use PocketSAM in English, Spanish, French, or Portuguese with live preview and saved language preferences for care users and caregivers.",
};

export default function MultiLanguageSupportPage() {
  return (
    <>
      <MultiLanguageSupportDetail />
      <AppDownload />
    </>
  );
}
