import { pricingPlans } from "./pricingData";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "PocketSAM",
  url: "https://pocketsam.com",
  logo: "https://pocketsam.com/PocketSAM.png",
  email: "admin@pocketsam.com",
  description:
    "PocketSAM is a caregiver app that helps families organize medications, appointments, symptoms, care tasks, notes, and important health information in one place.",
};

const softwareApplicationJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "PocketSAM",
  applicationCategory: "HealthApplication",
  operatingSystem: "iOS, Android",
  url: "https://pocketsam.com",
  description:
    "A caregiver and care management app that helps patients, caregivers, and families organize medications, appointments, symptoms, care tasks, notes, and care team coordination. PocketSAM is currently in beta and is not yet available for download.",
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    lowPrice: "0",
    highPrice: "14.99",
    offerCount: pricingPlans.length,
    offers: pricingPlans.map((plan) => ({
      "@type": "Offer",
      name: plan.name,
      price: plan.schemaPrice,
      priceCurrency: "USD",
      url: "https://pocketsam.com/pricing",
      description: plan.schemaDescription,
    })),
  },
};

export default function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationJsonLd),
        }}
      />
    </>
  );
}
