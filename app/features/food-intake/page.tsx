import type { Metadata } from "next";
import FoodIntakeDetail from "@/components/FoodIntakeDetail";
import AppDownload from "@/components/AppDownload";

export const metadata: Metadata = {
  title: "Food Intake Tracking",
  description:
    "Record meals and snacks in PocketSAM and review the day's intake. Food tracking is included on every plan. Shared caregiver access is on Together and Assistant.",
  alternates: {
    canonical: "/features/food-intake",
  },
  openGraph: {
    title: "Food Intake Tracking | PocketSAM",
    description:
      "Keep a simple daily record of meals and snacks, and include it in a check-in report when you want.",
    url: "https://pocketsam.com/features/food-intake",
  },
};

export default function FoodIntakePage() {
  return (
    <>
      <FoodIntakeDetail />
      <AppDownload />
    </>
  );
}
