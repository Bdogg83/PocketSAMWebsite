import type { Metadata } from "next";
import MedicationTrackingDetail from "@/components/MedicationTrackingDetail";
import AppDownload from "@/components/AppDownload";

export const metadata: Metadata = {
  title: "Medication Tracking",
  description:
    "Organize medications, set reminders, track daily doses, monitor refills, and keep trusted caregivers informed with PocketSAM.",
};

export default function MedicationTrackingPage() {
  return (
    <>
      <MedicationTrackingDetail />
      <AppDownload />
    </>
  );
}
