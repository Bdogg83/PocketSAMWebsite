import { Container, PocketSAMLogo } from "./ui";

function StoreButton({ store }: { store: "apple" | "google" }) {
  const label = store === "apple" ? "App Store" : "Google Play";
  const sublabel = store === "apple" ? "Download on the" : "Get it on";

  return (
    <button
      type="button"
      disabled
      aria-label={`${label} — Coming Soon`}
      className="flex w-full items-center gap-3 rounded-2xl bg-gray-900 px-5 py-3 opacity-75 transition-opacity sm:w-auto"
    >
      {store === "apple" ? (
        <svg viewBox="0 0 24 24" className="h-7 w-7 fill-white" aria-hidden="true">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" className="h-7 w-7 fill-white" aria-hidden="true">
          <path d="M3.609 1.814L13.792 12 3.61 22.186a1.968 1.968 0 0 1-.395-1.158V2.972c0-.437.145-.84.394-1.158M14.5 12.707l2.302 2.302-10.937 6.333 8.635-8.635M15.792 11.415l2.302-2.302 1.686.975a1.968 1.968 0 0 1 0 3.414l-1.686.975-2.302-2.302M14.5 11.293L5.865 2.658l8.635 8.635" />
        </svg>
      )}
      <div className="text-left">
        <p className="text-[10px] leading-none text-white/70">{sublabel}</p>
        <p className="text-sm font-semibold text-white">
          {label} <span className="text-white/60">— Coming Soon</span>
        </p>
      </div>
    </button>
  );
}

export default function AppDownload({
  className = "pb-10 pt-4 lg:pb-12 lg:pt-6",
}: {
  className?: string;
}) {
  return (
    <section className={className}>
      <Container>
        <div className="flex flex-col items-center gap-6 rounded-3xl bg-cream-warm px-6 py-8 shadow-soft sm:flex-row sm:gap-8 sm:p-8">
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-white p-2 shadow-soft">
            <PocketSAMLogo className="h-full w-full object-contain" />
          </div>

          <div className="flex-1 text-center sm:text-left">
            <h2 className="text-xl font-bold text-teal-deep sm:text-2xl text-balance">
              Your pocket caregiver is always with you.
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-soft sm:text-base">
              PocketSAM is preparing for launch. Join the early access list and be first to know when it is available.
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto">
            <StoreButton store="apple" />
            <StoreButton store="google" />
          </div>
        </div>
      </Container>
    </section>
  );
}
