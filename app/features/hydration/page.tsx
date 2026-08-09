import type { Metadata } from "next";
import HydrationDetail from "@/components/HydrationDetail";
import AppDownload from "@/components/AppDownload";

export const metadata: Metadata = {
  title: "Hydration Tracking for Caregivers",
  description:
    "Set a daily hydration goal, log fluids, track intake and progress, and optionally share hydration information with caregivers using PocketSAM.",
  alternates: {
    canonical: "/features/hydration",
  },
  openGraph: {
    title: "Hydration Tracking for Caregivers | PocketSAM",
    description:
      "Track daily hydration goals, intake, and progress—and share updates with caregivers when you choose.",
    url: "https://pocketsam.com/features/hydration",
  },
};

export default function HydrationPage() {
  return (
    <>
      <HydrationDetail />
      <AppDownload />
    </>
  );
}
