import type { Metadata } from "next";
import AppointmentsDetail from "@/components/AppointmentsDetail";
import AppDownload from "@/components/AppDownload";

export const metadata: Metadata = {
  title: "Appointments",
  description:
    "Organize appointments in a shared calendar with provider details, locations, notes, customizable reminders, and reusable visit templates with PocketSAM.",
};

export default function AppointmentsPage() {
  return (
    <>
      <AppointmentsDetail />
      <AppDownload />
    </>
  );
}
