import { Check } from "lucide-react";
import { ButtonPrimary, Container } from "./ui";
import { pricingPlans } from "./pricingData";

export default function PricingCards() {
  return (
    <section className="pb-8 lg:pb-10" aria-label="PocketSAM plans">
      <Container>
        <div className="grid items-stretch gap-6 lg:grid-cols-3 lg:gap-8">
          {pricingPlans.map((plan) => (
            <article
              key={plan.key}
              className="flex h-full flex-col rounded-3xl border border-gray-border bg-white p-6 shadow-soft sm:p-7"
            >
              <h2 className="text-xl font-bold text-teal-deep">{plan.name}</h2>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold tracking-tight text-teal-deep">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-base text-gray-soft">{plan.period}</span>
                )}
              </div>
              <p className="mt-3 font-semibold text-teal-deep lg:min-h-[3rem]">{plan.tagline}</p>
              <p className="mt-2 text-sm leading-relaxed text-gray-soft lg:min-h-[4.75rem]">
                {plan.description}
              </p>

              <div className="mt-5 rounded-2xl bg-green-pale px-4 py-3 text-center">
                <p className="text-sm font-semibold text-teal-deep">1 care user</p>
                <p className="text-sm font-semibold text-teal-deep">{plan.caregiverLimit}</p>
                <p className="text-sm font-semibold text-teal-deep">{plan.aiAvailability}</p>
              </div>

              <ul className="mt-5 space-y-2.5">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-gray-soft">
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-green-accent"
                      aria-hidden="true"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-6">
                <p className="text-sm leading-relaxed text-gray-soft">{plan.supporting}</p>
                <ButtonPrimary href="/contact" className="relative mt-5 w-full">
                  Join the Waitlist
                  <span className="sr-only"> for {plan.name}</span>
                </ButtonPrimary>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
