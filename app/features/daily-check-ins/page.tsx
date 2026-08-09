import type { Metadata } from "next";
import DailyCheckInsDetail from "@/components/DailyCheckInsDetail";
import AppDownload from "@/components/AppDownload";

export const metadata: Metadata = {
  title: "Symptom Tracking & Care Journal",
  description:
    "Use PocketSAM as a caregiver symptom tracker and care journal—record mood, symptoms, pain, vitals, notes, and photos to share with trusted caregivers or doctors.",
  alternates: {
    canonical: "/features/daily-check-ins",
  },
  openGraph: {
    title: "Symptom Tracking & Care Journal | PocketSAM",
    description:
      "Track symptoms, mood, pain, vitals, and caregiver notes in a simple health journal between doctor visits.",
    url: "https://pocketsam.com/features/daily-check-ins",
  },
};

export default function DailyCheckInsPage() {
  return (
    <>
      <DailyCheckInsDetail />
      <AppDownload />
    </>
  );
}
