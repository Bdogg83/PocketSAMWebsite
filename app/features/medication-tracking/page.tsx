import type { Metadata } from "next";
import MedicationTrackingDetail from "@/components/MedicationTrackingDetail";
import AppDownload from "@/components/AppDownload";

export const metadata: Metadata = {
  title: "Medication Tracking for Caregivers",
  description:
    "Use PocketSAM as a medication tracker for caregivers—organize medications, set reminders, track daily doses, monitor refills, and keep trusted caregivers informed.",
  alternates: {
    canonical: "/features/medication-tracking",
  },
  openGraph: {
    title: "Medication Tracking for Caregivers | PocketSAM",
    description:
      "A medication management app for caregivers to organize doses, reminders, refills, and shared medication updates.",
    url: "https://pocketsam.com/features/medication-tracking",
  },
};

export default function MedicationTrackingPage() {
  return (
    <>
      <MedicationTrackingDetail />
      <AppDownload />
    </>
  );
}
