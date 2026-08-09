import type { Metadata } from "next";
import CareTasksDetail from "@/components/CareTasksDetail";
import AppDownload from "@/components/AppDownload";

export const metadata: Metadata = {
  title: "Caregiver Task Management",
  description:
    "Assign, track, and complete everyday care tasks with PocketSAM caregiver task management so families know what needs to be done, who is helping, and what is finished.",
  alternates: {
    canonical: "/features/care-tasks",
  },
  openGraph: {
    title: "Caregiver Task Management | PocketSAM",
    description:
      "Coordinate care tasks across your care team with assignments, due dates, notes, and completion tracking.",
    url: "https://pocketsam.com/features/care-tasks",
  },
};

export default function CareTasksPage() {
  return (
    <>
      <CareTasksDetail />
      <AppDownload />
    </>
  );
}
