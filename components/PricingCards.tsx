import { Check } from "lucide-react";
import { Container } from "./ui";
import SectionHeading from "./SectionHeading";
import { ButtonPrimary } from "./ui";

const plan = {
  name: "Family Plan",
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
    <section className={showHeading ? "py-16 lg:py-24" : ""}>
      <Container>
        {showHeading && (
          <SectionHeading
            centered
            title="Simple pricing for families."
            subtitle="One plan with every feature and unlimited caregivers."
          />
        )}

        <div className="mx-auto max-w-lg">
          <div className="rounded-3xl border border-teal-primary/30 bg-white p-8 shadow-soft-lg">
            <h3 className="text-xl font-bold text-teal-deep">{plan.name}</h3>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-4xl font-bold text-teal-deep">{plan.price}</span>
              <span className="text-gray-soft">{plan.period}</span>
            </div>

            <p className="mt-6 mb-4 text-sm font-semibold text-teal-deep">Includes:</p>
            <ul className="space-y-3">
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

            <div className="mt-8">
              <ButtonPrimary href="/contact" className="w-full">
                Join Early Access
              </ButtonPrimary>
            </div>
          </div>
        </div>

        {showHeading && (
          <p className="mt-8 text-center text-sm text-gray-soft">
            14-day free trial planned at launch.
          </p>
        )}
      </Container>
    </section>
  );
}
