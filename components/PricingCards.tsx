import { Check } from "lucide-react";
import { Container } from "./ui";
import SectionHeading from "./SectionHeading";

const plan = {
  name: "PocketSAM Plan",
  price: "$9.99",
  period: "/month",
  features: [
    "Patient account",
    "Unlimited caregivers",
    "Medication tracking",
    "Appointments",
    "Daily check-ins",
    "Care tasks",
    "Hydration tracking",
    "Food intake tracking",
    "Doctor-ready reports",
    "Care Circle sharing",
    "Emergency info",
  ],
};

interface PricingCardsProps {
  showHeading?: boolean;
}

export default function PricingCards({ showHeading = true }: PricingCardsProps) {
  return (
    <section className={showHeading ? "py-16 lg:py-24" : "pb-8 lg:pb-10"}>
      <Container>
        {showHeading && (
          <SectionHeading
            centered
            title="Simple, transparent pricing."
            subtitle="One plan with every feature and unlimited caregivers."
          />
        )}

        <div className="mx-auto max-w-lg">
          <div className="rounded-3xl border border-teal-primary/30 bg-white p-6 shadow-soft-lg sm:p-7">
            <h3 className="text-xl font-bold text-teal-deep">{plan.name}</h3>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-4xl font-bold text-teal-deep">{plan.price}</span>
              <span className="text-gray-soft">{plan.period}</span>
            </div>

            <p className="mt-5 mb-3 text-sm font-semibold text-teal-deep">Includes:</p>
            <ul className="space-y-2.5">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-gray-soft">
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-green-accent"
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <button
                type="button"
                disabled
                aria-label="Coming Soon"
                className="inline-flex w-full cursor-not-allowed items-center justify-center rounded-2xl bg-teal-deep/60 px-6 py-3 text-sm font-semibold text-white shadow-soft"
              >
                Coming Soon
              </button>
            </div>
          </div>
        </div>

        {showHeading && (
          <p className="mt-8 text-center text-sm text-gray-soft">
            PocketSAM is in beta. Full launch and 14-day free trial coming soon.
          </p>
        )}
      </Container>
    </section>
  );
}
