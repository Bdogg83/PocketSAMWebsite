import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative z-0 min-h-[420px] overflow-hidden bg-cream pb-8 sm:min-h-[560px] lg:min-h-[720px] lg:pb-10"
      aria-label="PocketSAM — One caregiver app for managing care"
    >
      <Image
        src="/homepagebackground.png"
        alt="PocketSAM caregiver app — organize medications, appointments, and care for your loved ones"
        fill
        priority
        sizes="100vw"
        className="object-contain object-top sm:object-cover sm:object-center"
      />
      <h1 className="sr-only">
        One Caregiver App. Everything You Need to Manage Care.
      </h1>
    </section>
  );
}
