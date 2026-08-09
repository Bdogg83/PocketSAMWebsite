import type { Metadata } from "next";
import AppointmentsDetail from "@/components/AppointmentsDetail";
import AppDownload from "@/components/AppDownload";

export const metadata: Metadata = {
  title: "Appointment Tracking & Shared Caregiver Calendar",
  description:
    "Organize medical appointments with PocketSAM’s shared caregiver calendar—provider details, locations, notes, custom reminders, and reusable visit templates.",
  alternates: {
    canonical: "/features/appointments",
  },
  openGraph: {
    title: "Appointment Tracking & Shared Caregiver Calendar | PocketSAM",
    description:
      "A medical appointment organizer with shared caregiver calendar views, reminders, and visit templates.",
    url: "https://pocketsam.com/features/appointments",
  },
};

export default function AppointmentsPage() {
  return (
    <>
      <AppointmentsDetail />
      <AppDownload />
    </>
  );
}
