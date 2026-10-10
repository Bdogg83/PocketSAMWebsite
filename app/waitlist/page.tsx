import type { Metadata } from "next";
import EarlyAccessForm from "@/components/EarlyAccessForm";

export const metadata: Metadata = {
  title: "Join the Waitlist",
  description:
    "Join the PocketSAM waitlist for launch updates. PocketSAM is a caregiver app currently in beta.",
  alternates: {
    canonical: "/waitlist",
  },
  openGraph: {
    title: "Join the Waitlist | PocketSAM",
    description: "Leave your email to hear when the PocketSAM caregiver app launches.",
    url: "https://pocketsam.com/waitlist",
  },
};

export default function WaitlistPage() {
  return <EarlyAccessForm />;
}
