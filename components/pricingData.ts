export type PlanKey = "free" | "family" | "familyAi";

export type ComparisonValue =
  | { type: "text"; text: string }
  | { type: "included" }
  | { type: "excluded" };

export interface PricingPlan {
  key: PlanKey;
  name: string;
  price: string;
  period?: string;
  schemaPrice: string;
  schemaDescription: string;
  tagline: string;
  description: string;
  caregiverLimit: string;
  features: string[];
  supporting: string;
}

export const FAMILY_MONTHLY_PRICE = "$7.99/month";
export const FAMILY_AI_MONTHLY_PRICE = "$14.99/month";

export const launchPricingNotice =
  "Planned launch pricing. PocketSAM is currently in beta.";

export const renewalNotice =
  "At launch, paid plans will renew automatically each month unless canceled through the App Store or Google Play. Prices shown are in USD; local pricing and applicable taxes may vary.";

export const pricingSummary = `Start free with one caregiver. Connect up to five caregivers with Family for ${FAMILY_MONTHLY_PRICE}, or choose unlimited caregivers and AI assistance with Family + AI for ${FAMILY_AI_MONTHLY_PRICE}.`;

const included: ComparisonValue = { type: "included" };
const excluded: ComparisonValue = { type: "excluded" };
const allIncluded: Record<PlanKey, ComparisonValue> = {
  free: included,
  family: included,
  familyAi: included,
};
const aiOnly: Record<PlanKey, ComparisonValue> = {
  free: excluded,
  family: excluded,
  familyAi: included,
};

export const pricingPlans: PricingPlan[] = [
  {
    key: "free",
    name: "PocketSAM Free",
    price: "Free",
    schemaPrice: "0",
    schemaDescription:
      "Free plan for one care user and one additional caregiver. Includes personal care tools, caregiver collaboration, and shared care tasks. AI features are not included. Planned launch pricing. PocketSAM is currently in beta.",
    tagline: "Your care, with someone beside you.",
    description:
      "Organize one person’s care and share it with one trusted caregiver.",
    caregiverLimit: "1 additional caregiver",
    features: [
      "One care-user account",
      "One additional caregiver",
      "Medication tracking and appointments",
      "Manual journals and daily check-ins",
      "Personal wellness tracking",
      "Emergency information",
      "Shared care tasks and updates",
    ],
    supporting: "No subscription payment required. AI features are not included.",
  },
  {
    key: "family",
    name: "PocketSAM Family",
    price: "$7.99",
    period: "/month",
    schemaPrice: "7.99",
    schemaDescription:
      "Monthly plan at $7.99 USD for one care user and up to five additional caregivers. Includes personal care tools and caregiver collaboration. AI features are not included. Paid plans renew automatically. Planned launch pricing. PocketSAM is currently in beta.",
    tagline: "Better care, together.",
    description: "Keep a small care team connected around one person’s care.",
    caregiverLimit: "Up to 5 additional caregivers",
    features: [
      "Everything in Free",
      "Up to five additional caregivers",
      "Shared care information and updates",
      "Caregiver collaboration and task coordination",
      "One subscription for the entire care circle",
    ],
    supporting:
      "Invited caregivers do not pay separately. AI features are not included.",
  },
  {
    key: "familyAi",
    name: "PocketSAM Family + AI",
    price: "$14.99",
    period: "/month",
    schemaPrice: "14.99",
    schemaDescription:
      "Monthly plan at $14.99 USD for one care user and unlimited additional caregivers, plus AI assistance. Unlimited applies to caregivers only. AI usage is subject to usage and rate limits. Paid plans renew automatically. Planned launch pricing. PocketSAM is currently in beta.",
    tagline: "Your care team, powered by AI.",
    description:
      "Connect your whole care team and reduce manual entry with AI assistance.",
    caregiverLimit: "Unlimited additional caregivers",
    features: [
      "Everything in Family",
      "Unlimited additional caregivers",
      "AI Assistant",
      "Turn typed or spoken requests into proposed care actions",
      "Review multiple proposed actions together",
      "AI-powered insights and supported document extraction",
    ],
    supporting: "Review and confirm proposed care changes before they are saved.",
  },
];

export interface ComparisonRow {
  feature: string;
  values: Record<PlanKey, ComparisonValue>;
  noteId?: string;
}

export interface ComparisonGroup {
  label: string;
  rows: ComparisonRow[];
}

export const comparisonGroups: ComparisonGroup[] = [
  {
    label: "Plan basics",
    rows: [
      {
        feature: "Monthly price",
        values: {
          free: { type: "text", text: "Free" },
          family: { type: "text", text: FAMILY_MONTHLY_PRICE },
          familyAi: { type: "text", text: FAMILY_AI_MONTHLY_PRICE },
        },
      },
      {
        feature: "Care users",
        values: {
          free: { type: "text", text: "1" },
          family: { type: "text", text: "1" },
          familyAi: { type: "text", text: "1" },
        },
      },
      {
        feature: "Additional caregivers",
        values: {
          free: { type: "text", text: "1" },
          family: { type: "text", text: "Up to 5" },
          familyAi: { type: "text", text: "Unlimited" },
        },
      },
    ],
  },
  {
    label: "Included with every plan",
    rows: [
      { feature: "Personal care tools", values: allIncluded },
      { feature: "Medication tracking", values: allIncluded },
      { feature: "Appointments", values: allIncluded },
      { feature: "Manual journals and check-ins", values: allIncluded },
      { feature: "Personal wellness tracking", values: allIncluded },
      { feature: "Emergency information", values: allIncluded },
      { feature: "Caregiver collaboration", values: allIncluded },
      { feature: "Shared care tasks and updates", values: allIncluded },
      {
        feature: "Doctor-ready reports",
        values: allIncluded,
        noteId: "doctor-ready-reports-note",
      },
    ],
  },
  {
    label: "AI assistance",
    rows: [
      { feature: "AI Assistant", values: aiOnly },
      { feature: "AI voice-to-action", values: aiOnly },
      { feature: "AI insights and supported extraction", values: aiOnly },
    ],
  },
];

export const pricingFaqs: { question: string; answer: string }[] = [
  {
    question: "Is PocketSAM available yet?",
    answer:
      "PocketSAM is currently in beta. Join the waitlist to receive launch updates.",
  },
  {
    question: "Is there a free plan?",
    answer:
      "Yes. PocketSAM Free supports one care user and one additional caregiver, with personal care tools and shared care coordination. AI features are not included.",
  },
  {
    question: "What is a care user?",
    answer:
      "A care user is the person whose medications, appointments, and other care information are managed in PocketSAM. Every plan supports one care user.",
  },
  {
    question: "How many caregivers can I add?",
    answer:
      "Free includes one additional caregiver. Family includes up to five additional caregivers. Family + AI includes unlimited additional caregivers. The care user does not count toward these limits.",
  },
  {
    question: "Does each caregiver need a subscription?",
    answer:
      "No. One subscription covers the care circle. Each invited caregiver uses their own account without paying separately.",
  },
  {
    question: "Which plan includes AI?",
    answer:
      "AI features are included only with Family + AI. Free and Family provide manual care management and caregiver collaboration without AI.",
  },
  {
    question: "Does Family + AI include unlimited AI?",
    answer:
      "Family + AI includes unlimited caregivers. AI usage remains subject to usage and rate limits.",
  },
  {
    question: "Can I change plans?",
    answer:
      "The app will support upgrades and downgrades. When a change takes effect depends on the applicable App Store or Google Play subscription rules.",
  },
  {
    question: "What happens if I downgrade?",
    answer:
      "The care user keeps their saved care records. If your care circle exceeds the new plan’s caregiver limit, you can choose which caregivers retain access. Excess memberships are suspended rather than deleted. AI becomes unavailable when moving to Free or Family.",
  },
  {
    question: "Will I see features outside my plan?",
    answer:
      "Everyday app navigation shows the features included in your plan and allowed by your role. You can explore other plans in Plans & Subscription.",
  },
  {
    question: "Is PocketSAM a medical device?",
    answer:
      "PocketSAM is designed to help people organize care information. It is not intended to diagnose, treat, or replace professional medical advice.",
  },
];
