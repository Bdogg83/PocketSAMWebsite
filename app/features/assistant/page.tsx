import type { Metadata } from "next";
import AssistantDetail from "@/components/AssistantDetail";
import AppDownload from "@/components/AppDownload";

export const metadata: Metadata = {
  title: "PocketSAM Assistant",
  description:
    "PocketSAM Assistant prepares care updates from text or voice for you to review before they are saved. AI features are included only with the Assistant plan.",
  alternates: {
    canonical: "/features/assistant",
  },
  openGraph: {
    title: "PocketSAM Assistant | PocketSAM",
    description:
      "Review proposed care actions before PocketSAM saves them. Assistant can be used alone or with a care team.",
    url: "https://pocketsam.com/features/assistant",
  },
};

export default function AssistantFeaturePage() {
  return (
    <>
      <AssistantDetail />
      <AppDownload />
    </>
  );
}
