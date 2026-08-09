import type { Metadata } from "next";
import DoctorReadyReportsDetail from "@/components/DoctorReadyReportsDetail";
import AppDownload from "@/components/AppDownload";

export const metadata: Metadata = {
  title: "Doctor-Ready Care Reports",
  description:
    "Turn caregiver notes, symptom tracking, vitals, mood, and wellness activity into clear reports so patients and caregivers walk into appointments better prepared.",
  alternates: {
    canonical: "/features/doctor-ready-reports",
  },
  openGraph: {
    title: "Doctor-Ready Care Reports | PocketSAM",
    description:
      "Organize health journal details into clear reports for doctor visits and care team review.",
    url: "https://pocketsam.com/features/doctor-ready-reports",
  },
};

export default function DoctorReadyReportsPage() {
  return (
    <>
      <DoctorReadyReportsDetail />
      <AppDownload />
    </>
  );
}
