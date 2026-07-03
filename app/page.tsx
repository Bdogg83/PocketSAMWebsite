import Hero from "@/components/Hero";
import FeatureStrip from "@/components/FeatureStrip";
import WhyPocketSAM from "@/components/WhyPocketSAM";
import PowerfulFeatures from "@/components/PowerfulFeatures";
import GivingMission from "@/components/GivingMission";
import AppDownload from "@/components/AppDownload";

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
