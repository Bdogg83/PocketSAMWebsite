import type { Metadata } from "next";
import EmergencyInfoDetail from "@/components/EmergencyInfoDetail";
import AppDownload from "@/components/AppDownload";

export const metadata: Metadata = {
  title: "Emergency Info",
  description:
    "Keep emergency contacts, allergies, conditions, medications, doctors, insurance details, and important care notes organized in one place with PocketSAM.",
};

export default function EmergencyInfoPage() {
  return (
    <>
      <EmergencyInfoDetail />
      <AppDownload />
    </>
  );
}
