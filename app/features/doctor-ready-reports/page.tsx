import type { Metadata } from "next";
import DoctorReadyReportsDetail from "@/components/DoctorReadyReportsDetail";
import AppDownload from "@/components/AppDownload";

export const metadata: Metadata = {
  title: "Doctor-Ready Reports",
  description:
    "Organize check-ins, symptoms, pain notes, vitals, mood, and wellness activity into clear reports so patients and caregivers can walk into appointments better prepared.",
};

export default function DoctorReadyReportsPage() {
  return (
    <>
      <DoctorReadyReportsDetail />
      <AppDownload />
    </>
  );
}
