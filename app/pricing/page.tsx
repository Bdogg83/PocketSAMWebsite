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
    "Planned PocketSAM launch pricing while the app is in beta: Personal is free for one care user, Together is $9.99/month with up to five additional caregivers, and Assistant is $14.99/month with unlimited caregivers and AI assistance.",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "Caregiver App Pricing | PocketSAM",
    description:
      "Personal is free, Together is $9.99/month, and Assistant is $14.99/month. Planned launch pricing. PocketSAM is currently in beta.",
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
              title="Care organized. Support connected."
              subtitle="Start with free tools for your daily care. Bring your care team together, or let PocketSAM help turn everyday updates into organized care information."
            />
            <p className="text-sm font-semibold text-teal-deep sm:text-base">
              {launchPricingNotice}
            </p>
          </div>
        </Container>
      </section>

      <PricingCards />

      <section className="pb-8 lg:pb-10">
        <Container>
          <p className="mx-auto max-w-3xl text-center text-sm leading-relaxed text-gray-soft">
            {renewalNotice}
          </p>
        </Container>
      </section>

      <section className="pb-10 lg:pb-12" aria-labelledby="care-team-access-heading">
        <Container>
          <div className="mx-auto max-w-3xl rounded-3xl border border-gray-border bg-cream px-6 py-8 text-center sm:px-10">
            <h2
              id="care-team-access-heading"
              className="text-2xl font-bold tracking-tight text-teal-deep sm:text-3xl text-balance"
            >
              Give your care team their own access.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-soft sm:text-base">
              Share care information with individual permissions and coordinate responsibilities
              through shared care tasks.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-gray-soft">
              Individual caregiver accounts are included with PocketSAM Together and PocketSAM
              Assistant. PocketSAM Personal does not include additional caregiver accounts. On
              Together and Assistant, caregivers can be notified when a shared task is assigned or
              needs attention, and completed tasks stay in a simple record.
            </p>
          </div>
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
