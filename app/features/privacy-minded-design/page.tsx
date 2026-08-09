import type { Metadata } from "next";
import PrivacyMindedDesignDetail from "@/components/PrivacyMindedDesignDetail";
import AppDownload from "@/components/AppDownload";

export const metadata: Metadata = {
  title: "Privacy-Minded Care Sharing Controls",
  description:
    "Control caregiver sharing permissions, manage analytics and history settings, and use account-level data separation designed for real-world care coordination.",
  alternates: {
    canonical: "/features/privacy-minded-design",
  },
  openGraph: {
    title: "Privacy-Minded Care Sharing Controls | PocketSAM",
    description:
      "Granular caregiver permissions, history controls, and secure permission storage for care team sharing.",
    url: "https://pocketsam.com/features/privacy-minded-design",
  },
};

export default function PrivacyMindedDesignPage() {
  return (
    <>
      <PrivacyMindedDesignDetail />
      <AppDownload />
    </>
  );
}
