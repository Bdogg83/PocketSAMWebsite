import { ButtonPrimary, ButtonSecondary, Container } from "./ui";
import { launchPricingNotice, pricingSummary } from "./pricingData";
import { waitlistPath } from "./sitePaths";

export default function PlanSummary() {
  return (
    <section className="py-4 lg:py-6" aria-labelledby="plan-summary-heading">
      <Container>
        <div className="rounded-3xl border border-gray-border bg-cream px-6 py-8 text-center shadow-soft sm:px-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-green-accent">
            Pricing
          </p>
          <h2
            id="plan-summary-heading"
            className="text-2xl font-bold tracking-tight text-teal-deep sm:text-3xl text-balance"
          >
            Care organized. Support connected.
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-gray-soft sm:text-base">
            {pricingSummary}
          </p>
          <p className="mt-3 text-sm font-semibold text-teal-deep">{launchPricingNotice}</p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonPrimary href="/pricing">View plans</ButtonPrimary>
            <ButtonSecondary href={waitlistPath}>Join the Waitlist</ButtonSecondary>
          </div>
        </div>
      </Container>
    </section>
  );
}
