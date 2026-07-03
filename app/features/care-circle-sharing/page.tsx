import type { Metadata } from "next";
import CareCircleSharingDetail from "@/components/CareCircleSharingDetail";
import AppDownload from "@/components/AppDownload";

export const metadata: Metadata = {
  title: "Care Circle Sharing",
  description:
    "Invite trusted family, friends, and caregivers into your Care Circle and choose exactly what each person can see or help manage with PocketSAM.",
};

export default function CareCircleSharingPage() {
  return (
    <>
      <CareCircleSharingDetail />
      <AppDownload />
    </>
  );
}
