export type PlanKey = "personal" | "together" | "assistant";

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
  aiAvailability: string;
  features: string[];
  supporting: string;
}

export const TOGETHER_MONTHLY_PRICE = "$9.99/month";
export const ASSISTANT_MONTHLY_PRICE = "$14.99/month";

export const launchPricingNotice =
  "Planned launch pricing. PocketSAM is currently in beta.";

export const renewalNotice =
  "At launch, paid plans will renew automatically each month unless canceled through the App Store or Google Play. Prices shown are in USD; local pricing and applicable taxes may vary.";

export const pricingSummary = `Start free with personal care tools. Connect up to five caregivers with Together for ${TOGETHER_MONTHLY_PRICE}, or choose unlimited caregivers and AI assistance with Assistant for ${ASSISTANT_MONTHLY_PRICE}.`;

const included: ComparisonValue = { type: "included" };
const excluded: ComparisonValue = { type: "excluded" };
const allIncluded: Record<PlanKey, ComparisonValue> = {
  personal: included,
  together: included,
  assistant: included,
};
const careTeam: Record<PlanKey, ComparisonValue> = {
  personal: excluded,
  together: included,
  assistant: included,
};
const assistantOnly: Record<PlanKey, ComparisonValue> = {
  personal: excluded,
  together: excluded,
  assistant: included,
};

export const pricingPlans: PricingPlan[] = [
  {
    key: "personal",
    name: "PocketSAM Personal",
    price: "Free",
    schemaPrice: "0",
    schemaDescription:
      "Free plan for one care user managing their own care. Includes standard personal care tools. Additional caregiver accounts and AI features are not included. Planned launch pricing. PocketSAM is currently in beta.",
    tagline: "Your daily care, organized.",
    description: "For one person managing their own care.",
    caregiverLimit: "No additional caregivers",
    aiAvailability: "AI not included",
    features: [
      "One care-user account",
      "Medication tracking and reminders",
      "Appointments",
      "Manual journals and daily check-ins",
      "Hydration and food intake tracking",
      "Emergency information",
    ],
    supporting:
      "No subscription payment required. Additional caregiver accounts and AI features are not included.",
  },
  {
    key: "together",
    name: "PocketSAM Together",
    price: "$9.99",
    period: "/month",
    schemaPrice: "9.99",
    schemaDescription:
      "Monthly plan at $9.99 USD for one care user and up to five additional caregivers. Includes personal care tools, caregiver collaboration, and shared care tasks. AI features are not included. One subscription covers the care circle. Paid plans renew automatically. Planned launch pricing. PocketSAM is currently in beta.",
    tagline: "Keep everyone on the same page.",
    description: "Coordinate one person's care with the people who help.",
    caregiverLimit: "Up to 5 additional caregivers",
    aiAvailability: "AI not included",
    features: [
      "Everything in Personal",
      "Up to five additional caregivers",
      "Shared care information and updates",
      "Assigned care tasks",
      "Individual caregiver permissions",
    ],
    supporting:
      "One subscription covers your care circle. Invited caregivers do not pay separately. AI features are not included.",
  },
  {
    key: "assistant",
    name: "PocketSAM Assistant",
    price: "$14.99",
    period: "/month",
    schemaPrice: "14.99",
    schemaDescription:
      "Monthly plan at $14.99 USD for one care user. Inviting caregivers is optional, and additional caregivers are unlimited. Includes AI assistance that prepares proposed care actions for review. Unlimited applies to caregiver accounts only. AI usage is subject to care-circle-level usage and rate controls. Paid plans renew automatically. Planned launch pricing. PocketSAM is currently in beta.",
    tagline: "Less manual entry. More time for care.",
    description:
      "Use typed or spoken updates to prepare care entries, then review and confirm them before they are saved.",
    caregiverLimit: "Unlimited additional caregivers",
    aiAvailability: "AI included",
    features: [
      "Everything in Together",
      "Unlimited additional caregivers",
      "AI-powered voice and text entry",
      "Review multiple proposed care actions together",
      "AI-powered summaries and insights",
      "Supported document extraction",
    ],
    supporting:
      "Use Assistant on your own or with your care team. Unlimited caregivers are included; AI usage is subject to usage and rate limits.",
  },
];

export interface ComparisonRow {
  feature: string;
  values: Record<PlanKey, ComparisonValue>;
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
          personal: { type: "text", text: "Free" },
          together: { type: "text", text: TOGETHER_MONTHLY_PRICE },
          assistant: { type: "text", text: ASSISTANT_MONTHLY_PRICE },
        },
      },
      {
        feature: "Care users",
        values: {
          personal: { type: "text", text: "1" },
          together: { type: "text", text: "1" },
          assistant: { type: "text", text: "1" },
        },
      },
      {
        feature: "Additional caregivers",
        values: {
          personal: { type: "text", text: "0" },
          together: { type: "text", text: "Up to 5" },
          assistant: { type: "text", text: "Unlimited" },
        },
      },
    ],
  },
  {
    label: "Included with every plan",
    rows: [
      { feature: "Standard personal care tools", values: allIncluded },
      { feature: "Medication tracking and reminders", values: allIncluded },
      { feature: "Appointments", values: allIncluded },
      { feature: "Manual journals and check-ins", values: allIncluded },
      { feature: "Hydration and food intake tracking", values: allIncluded },
      { feature: "Emergency information", values: allIncluded },
    ],
  },
  {
    label: "Care team",
    rows: [
      { feature: "Caregiver collaboration", values: careTeam },
      { feature: "Shared care tasks and updates", values: careTeam },
    ],
  },
  {
    label: "AI assistance",
    rows: [
      { feature: "AI-powered voice and text entry", values: assistantOnly },
      { feature: "AI-powered summaries and insights", values: assistantOnly },
      { feature: "Supported document extraction", values: assistantOnly },
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
      "Yes. PocketSAM Personal includes tools for one person managing their own care. Additional caregiver accounts and AI features are not included.",
  },
  {
    question: "What is a care user?",
    answer:
      "A care user is the person whose medications, appointments, and other care information are managed in PocketSAM. Every plan supports one care user.",
  },
  {
    question: "How many caregivers can I add?",
    answer:
      "Together supports up to five additional caregivers. Assistant supports unlimited additional caregivers. Personal does not include additional caregiver accounts.",
  },
  {
    question: "Does each caregiver pay?",
    answer:
      "No. One paid subscription covers the care circle. Invited caregivers use their own accounts without purchasing separate subscriptions.",
  },
  {
    question: "Can I use Assistant without caregivers?",
    answer:
      "Yes. You can use PocketSAM Assistant to manage your own care. Inviting caregivers is optional.",
  },
  {
    question: "Which plan includes AI?",
    answer: "AI features are included only with PocketSAM Assistant.",
  },
  {
    question: "Does Assistant include unlimited AI?",
    answer:
      "Assistant includes unlimited caregivers. AI usage is subject to usage and rate limits.",
  },
  {
    question: "Can I change plans?",
    answer:
      "The app will support upgrades and downgrades. When a change takes effect depends on the applicable App Store or Google Play subscription rules.",
  },
  {
    question: "What happens if I downgrade?",
    answer:
      "The care user keeps their saved care records. Moving from Assistant to Together removes AI access and limits the circle to five additional caregivers. Returning to Personal removes additional caregiver access when the paid entitlement ends. Excess memberships are suspended rather than deleted.",
  },
  {
    question: "Is PocketSAM a medical device?",
    answer:
      "PocketSAM is designed to help people organize care information. It is not intended to diagnose, treat, or replace professional medical advice.",
  },
];
