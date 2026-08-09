import type { Metadata } from "next";
import CareCircleSharingDetail from "@/components/CareCircleSharingDetail";
import AppDownload from "@/components/AppDownload";

export const metadata: Metadata = {
  title: "Family Care Coordination & Care Team Sharing",
  description:
    "Invite trusted family, friends, and caregivers into your Care Circle for family care coordination—choose what each person can see or help manage with PocketSAM.",
  alternates: {
    canonical: "/features/care-circle-sharing",
  },
  openGraph: {
    title: "Family Care Coordination & Care Team Sharing | PocketSAM",
    description:
      "Improve caregiver communication and care team management with granular sharing permissions.",
    url: "https://pocketsam.com/features/care-circle-sharing",
  },
};

export default function CareCircleSharingPage() {
  return (
    <>
      <CareCircleSharingDetail />
      <AppDownload />
    </>
  );
}
