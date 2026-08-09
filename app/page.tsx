import type { Metadata } from "next";
import Hero from "@/components/Hero";
import FeatureStrip from "@/components/FeatureStrip";
import WhyPocketSAM from "@/components/WhyPocketSAM";
import PowerfulFeatures from "@/components/PowerfulFeatures";
import GivingMission from "@/components/GivingMission";
import AppDownload from "@/components/AppDownload";

export const metadata: Metadata = {
  title: {
    absolute: "PocketSAM | Caregiver App for Managing Care",
  },
  description:
    "PocketSAM is a caregiver app that helps families organize medications, appointments, symptoms, care tasks, notes, and important health information in one place.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "PocketSAM | Caregiver App for Managing Care",
    description:
      "PocketSAM is a caregiver app that helps families organize medications, appointments, symptoms, care tasks, notes, and important health information in one place.",
    url: "https://pocketsam.com",
  },
};

export default function HomePage() {
  return (
    <div className="relative">
      <Hero />
      <FeatureStrip />
      <div className="relative z-10 bg-white">
        <WhyPocketSAM />
        <PowerfulFeatures />
        <GivingMission />
        <AppDownload className="pb-8 pt-2 lg:pb-10 lg:pt-3" />
      </div>
    </div>
  );
}
