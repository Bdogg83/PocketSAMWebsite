import type { Metadata } from "next";
import { Container } from "@/components/ui";
import SectionHeading from "@/components/SectionHeading";
import PricingCards from "@/components/PricingCards";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, family-friendly pricing for PocketSAM. One plan with every feature and unlimited caregivers.",
};

const faqs = [
  {
    question: "Is PocketSAM available yet?",
    answer: "PocketSAM is currently preparing for launch.",
  },
  {
    question: "Is there a free trial?",
    answer: "A 14-day free trial is planned at launch.",
  },
  {
    question: "Can I add multiple caregivers?",
    answer:
      "Yes. The Family Plan includes unlimited caregivers so your whole care circle can stay connected.",
  },
  {
    question: "Is this a medical device?",
    answer:
      "PocketSAM is designed to help families organize care information. It is not intended to diagnose, treat, or replace professional medical advice.",
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="bg-cream py-16 lg:py-20">
        <Container>
          <SectionHeading
            centered
            label="Pricing"
            title="Simple pricing for families."
            subtitle="One plan with every feature and unlimited caregivers."
          />
        </Container>
      </section>

      <PricingCards showHeading={false} />

      <section className="pb-16 lg:pb-24">
        <Container>
          <p className="mb-12 text-center text-sm text-gray-soft">
            14-day free trial planned at launch.
          </p>

          <SectionHeading centered title="Frequently asked questions" />

          <div className="mx-auto max-w-3xl space-y-4">
            {faqs.map(({ question, answer }) => (
              <details
                key={question}
                className="group rounded-2xl border border-gray-border bg-white p-6 shadow-soft"
              >
                <summary className="cursor-pointer list-none text-base font-semibold text-teal-deep marker:hidden [&::-webkit-details-marker]:hidden">
                  <span className="flex items-center justify-between gap-4">
                    {question}
                    <span className="text-green-accent transition-transform group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-4 leading-relaxed text-gray-soft">{answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
