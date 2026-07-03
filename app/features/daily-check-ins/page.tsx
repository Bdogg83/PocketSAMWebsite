import type { Metadata } from "next";
import DailyCheckInsDetail from "@/components/DailyCheckInsDetail";
import AppDownload from "@/components/AppDownload";

export const metadata: Metadata = {
  title: "Daily Check-Ins",
  description:
    "Record mood, symptoms, pain, vitals, notes, and photos with PocketSAM so changes are easier to remember, review, and share with trusted caregivers or doctors.",
};

export default function DailyCheckInsPage() {
  return (
    <>
      <DailyCheckInsDetail />
      <AppDownload />
    </>
  );
}
