import type { Metadata } from "next";
import PrivacyMindedDesignDetail from "@/components/PrivacyMindedDesignDetail";
import AppDownload from "@/components/AppDownload";

export const metadata: Metadata = {
  title: "Privacy-Minded Design",
  description:
    "Control caregiver sharing permissions, manage analytics and history settings, and benefit from account-level data separation with PocketSAM.",
};

export default function PrivacyMindedDesignPage() {
  return (
    <>
      <PrivacyMindedDesignDetail />
      <AppDownload />
    </>
  );
}
