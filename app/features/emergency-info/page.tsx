import type { Metadata } from "next";
import EmergencyInfoDetail from "@/components/EmergencyInfoDetail";
import AppDownload from "@/components/AppDownload";

export const metadata: Metadata = {
  title: "Emergency Health Information",
  description:
    "Keep emergency contacts, allergies, conditions, medications, doctors, insurance details, and important caregiver notes organized in one place with PocketSAM.",
  alternates: {
    canonical: "/features/emergency-info",
  },
  openGraph: {
    title: "Emergency Health Information | PocketSAM",
    description:
      "Organize critical health information so caregivers can find what they need when every second matters.",
    url: "https://pocketsam.com/features/emergency-info",
  },
};

export default function EmergencyInfoPage() {
  return (
    <>
      <EmergencyInfoDetail />
      <AppDownload />
    </>
  );
}
