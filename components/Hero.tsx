export default function Hero() {
  return (
    <section
      className="relative z-0 min-h-[480px] bg-cover bg-center bg-no-repeat pb-8 sm:min-h-[560px] lg:min-h-[720px] lg:pb-10"
      style={{ backgroundImage: "url('/homepagebackground.png')" }}
      aria-label="PocketSAM — Care made simple. Life made easier."
    >
      <h1 className="sr-only">Care made simple. Life made easier.</h1>
    </section>
  );
}
