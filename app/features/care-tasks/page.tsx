import type { Metadata } from "next";
import CareTasksDetail from "@/components/CareTasksDetail";
import AppDownload from "@/components/AppDownload";

export const metadata: Metadata = {
  title: "Care Tasks",
  description:
    "Assign, track, and complete everyday care tasks with PocketSAM so families and caregivers know what needs to be done, who is helping, and what has been completed.",
};

export default function CareTasksPage() {
  return (
    <>
      <CareTasksDetail />
      <AppDownload />
    </>
  );
}
