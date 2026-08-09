import type { Metadata } from "next";
import HydrationDetail from "@/components/HydrationDetail";
import AppDownload from "@/components/AppDownload";

export const metadata: Metadata = {
  title: "Hydration",
  description:
    "Set a daily hydration goal, log fluids, track progress, and optionally share hydration information with caregivers using PocketSAM.",
};

export default function HydrationPage() {
  return (
    <>
      <HydrationDetail />
      <AppDownload />
    </>
  );
}
