import type { Metadata } from "next";
import { Container } from "@/components/ui";
import SectionHeading from "@/components/SectionHeading";
import PricingCards from "@/components/PricingCards";

export const metadata: Metadata = {
  title: "Caregiver App Pricing",
  description:
    "Simple PocketSAM pricing: $9.99/month after a 30-day free trial, with up to 5 caregivers included and $1.99/month for each additional caregiver.",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "Caregiver App Pricing | PocketSAM",
    description:
      "$9.99/month after a 30-day free trial. Up to 5 caregivers included.",
    url: "https://pocketsam.com/pricing",
  },
};

const faqs = [
  {
    question: "Is PocketSAM available yet?",
    answer:
      "PocketSAM is in beta testing now. The app and full website experience are coming soon. Join the waitlist through our contact page to get launch updates.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes. PocketSAM includes a 30-day free trial. After the trial, the plan is $9.99/month.",
  },
  {
    question: "Can I add multiple caregivers?",
    answer:
      "Yes. Your plan includes up to 5 caregivers. Additional caregivers beyond the first 5 are $1.99/month each.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes. You can cancel your PocketSAM subscription at any time.",
  },
  {
    question: "Is this a medical device?",
    answer:
      "PocketSAM is designed to help people organize care information. It is not intended to diagnose, treat, or replace professional medical advice.",
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="bg-cream pt-8 pb-10 lg:pt-10 lg:pb-12">
        <Container>
          <SectionHeading
            as="h1"
            centered
            className="mb-0"
            label="Pricing"
            title="Simple, transparent pricing."
            subtitle="One caregiver app plan with every feature. Up to 5 caregivers included."
          />
        </Container>
      </section>

      <PricingCards showHeading={false} />

      <section className="pb-12 lg:pb-16">
        <Container>
          <p className="mb-8 text-center text-sm text-gray-soft">
            PocketSAM is in beta. Full launch and 30-day free trial coming soon.
          </p>

          <SectionHeading centered className="mb-4 lg:mb-6" title="Frequently asked questions" />

          <div className="mx-auto max-w-3xl space-y-3">
            {faqs.map(({ question, answer }) => (
              <details
                key={question}
                className="group rounded-2xl border border-gray-border bg-white p-5 shadow-soft"
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
