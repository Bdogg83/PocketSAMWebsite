import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative z-0 min-h-[420px] overflow-hidden bg-cream pb-8 sm:min-h-[560px] lg:min-h-[720px] lg:pb-10"
      aria-label="PocketSAM — Care made simple. Life made easier."
    >
      <Image
        src="/homepagebackground.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-contain object-top sm:object-cover sm:object-center"
      />
      <h1 className="sr-only">Care made simple. Life made easier.</h1>
    </section>
  );
}
