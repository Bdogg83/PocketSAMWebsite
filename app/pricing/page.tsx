import type { Metadata } from "next";
import { Container } from "@/components/ui";
import SectionHeading from "@/components/SectionHeading";
import PricingCards from "@/components/PricingCards";
import PricingComparison from "@/components/PricingComparison";
import {
  launchPricingNotice,
  pricingFaqs,
  renewalNotice,
} from "@/components/pricingData";

export const metadata: Metadata = {
  title: "Caregiver App Pricing",
  description:
    "Planned PocketSAM launch pricing while the app is in beta: Free with one additional caregiver, Family for $7.99/month with up to five additional caregivers, or Family + AI for $14.99/month with unlimited caregivers and AI assistance.",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "Caregiver App Pricing | PocketSAM",
    description:
      "Free, Family at $7.99/month, or Family + AI at $14.99/month. Planned launch pricing. PocketSAM is currently in beta.",
    url: "https://pocketsam.com/pricing",
  },
};

export default function PricingPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: pricingFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <section className="bg-cream pt-8 pb-10 lg:pt-10 lg:pb-12">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading
              as="h1"
              centered={false}
              className="mb-4"
              label="Pricing"
              title="Care that fits your life."
              subtitle="Start free with someone you trust. Bring more caregivers together with Family, or add AI assistance to make everyday care easier."
            />
            <p className="text-sm font-semibold text-teal-deep sm:text-base">
              {launchPricingNotice}
            </p>
          </div>
        </Container>
      </section>

      <PricingCards />

      <section className="pb-10 lg:pb-12">
        <Container>
          <p className="mx-auto max-w-3xl text-center text-sm leading-relaxed text-gray-soft">
            {renewalNotice}
          </p>
        </Container>
      </section>

      <PricingComparison />

      <section className="scroll-mt-24 pb-12 lg:pb-16" aria-labelledby="pricing-faq-heading">
        <Container>
          <SectionHeading
            centered
            className="mb-4 lg:mb-6"
            title={
              <span id="pricing-faq-heading" className="scroll-mt-28">
                Frequently asked questions
              </span>
            }
          />

          <div className="mx-auto max-w-3xl space-y-3">
            {pricingFaqs.map(({ question, answer }) => (
              <details
                key={question}
                className="group rounded-2xl border border-gray-border bg-white p-5 shadow-soft"
              >
                <summary className="cursor-pointer list-none rounded-lg text-teal-deep marker:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-deep [&::-webkit-details-marker]:hidden">
                  <span className="flex items-center justify-between gap-4">
                    <h3 className="text-base font-semibold text-teal-deep">{question}</h3>
                    <span
                      aria-hidden="true"
                      className="text-green-accent transition-transform group-open:rotate-45"
                    >
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
