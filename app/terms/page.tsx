import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "PocketSAM website terms. These terms are not final and have not been lawyer-approved.",
  alternates: {
    canonical: "/terms",
  },
};

const sections: { title: string; paragraphs: string[] }[] = [
  {
    title: "This is a draft",
    paragraphs: [
      "These terms describe the public PocketSAM website while the app is in beta. They are not final, and they have not been lawyer-approved. They do not choose a governing law or a court, because a business address and a preferred venue have not been provided.",
    ],
  },
  {
    title: "What PocketSAM is",
    paragraphs: [
      "PocketSAM helps people organize care information for one care user, and, on paid plans, share parts of that information with caregivers. PocketSAM is designed to help people organize care information. It is not intended to diagnose, treat, or replace professional medical advice.",
      "PocketSAM is in beta. It is not yet offered for download on the App Store or Google Play. Store buttons on this website are marked Coming Soon and do not open a store listing.",
    ],
  },
  {
    title: "Accounts",
    paragraphs: [
      "This website does not create app accounts and does not collect a date of birth. A minimum age has not been set, so these terms do not state one.",
    ],
  },
  {
    title: "Plans described on this website",
    paragraphs: [
      "The prices on this website describe the planned plans: Personal at no charge, Together at $9.99 per month, and Assistant at $14.99 per month, in US dollars. Personal includes no additional caregivers. Together includes up to five. Assistant includes unlimited additional caregivers and AI, with usage limits. One subscription is described as covering the care circle, not a fee per caregiver. There is no unlimited-AI promise.",
    ],
  },
  {
    title: "Your information",
    paragraphs: [
      "Information you send through this website, including a waitlist signup or a contact message, is used to respond and, if you asked, to tell you when PocketSAM launches. This website does not ask you to submit health records.",
    ],
  },
  {
    title: "Acceptable use",
    paragraphs: [
      "Do not use PocketSAM for an emergency. Contact local emergency services when someone needs immediate help. Do not use the service to break the law, to access a care circle you were not invited to, or to upload information you have no right to share.",
      "Do not send medical emergencies or sensitive health records through the website contact form.",
    ],
  },
  {
    title: "Plans and billing",
    paragraphs: [
      "This website does not take payment, start a subscription, or promise a refund. The App Store and Google Play buttons are marked Coming Soon and do not open a listing. When paid plans are offered, their renewal, cancellation, and refund rules are not stated here because those mechanisms are not available on this website.",
    ],
  },
  {
    title: "AI",
    paragraphs: [
      "Assistant can prepare proposed care actions from text or voice, and it can prepare drafts from supported photos and summaries from saved information. You must review and confirm anything before it is saved. PocketSAM does not independently change a medication, make a diagnosis, or prescribe treatment.",
      "AI can be wrong. You are responsible for checking medication and appointment details. Usage and rate limits apply. Those numeric limits are not stated here.",
    ],
  },
  {
    title: "Availability and ending use",
    paragraphs: [
      "Beta software can change, pause, or fail. PocketSAM does not promise uninterrupted service.",
      "You can ask to be removed from the waitlist or to have a contact message deleted by emailing admin@pocketsam.com. No retention period, in days, has been set.",
    ],
  },
  {
    title: "Liability",
    paragraphs: [
      "To the extent the law allows, PocketSAM is not liable for decisions you or a clinician make from information stored in the app, or for harm from relying on an AI proposal you did not check. The exact limit, and any damages that cannot legally be limited, must be written by counsel for the places where PocketSAM is offered. This paragraph is a placeholder for that review, not a finished liability clause.",
    ],
  },
  {
    title: "Changes",
    paragraphs: [
      "Updated drafts will be posted on this page with a new date. Paid-subscription terms should not be treated as accepted until billing exists and counsel has approved the final language.",
    ],
  },
];

export default function TermsPage() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 inline-flex rounded-full bg-green-pale px-3 py-1 text-xs font-semibold text-teal-deep">
            Not final terms
          </p>
          <h1 className="mb-4 text-3xl font-bold text-teal-deep sm:text-4xl">Terms of Service</h1>
          <p className="mb-10 text-base leading-relaxed text-gray-soft">
            Please read this page before relying on it. It describes the public website as of
            October 10, 2026. It has not been lawyer-approved.
          </p>

          <div className="space-y-10">
            {sections.map(({ title, paragraphs }) => (
              <div key={title}>
                <h2 className="mb-3 text-xl font-bold text-teal-deep">{title}</h2>
                <div className="space-y-3">
                  {paragraphs.map((paragraph) => (
                    <p key={paragraph} className="leading-relaxed text-gray-soft">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            <div>
              <h2 className="mb-3 text-xl font-bold text-teal-deep">Contact</h2>
              <p className="leading-relaxed text-gray-soft">
                Questions about these terms can go to{" "}
                <a
                  href="mailto:admin@pocketsam.com"
                  className="font-medium text-teal-primary hover:underline"
                >
                  admin@pocketsam.com
                </a>{" "}
                or the{" "}
                <Link href="/contact" className="font-medium text-teal-primary hover:underline">
                  contact page
                </Link>
                . The{" "}
                <Link href="/privacy" className="font-medium text-teal-primary hover:underline">
                  Privacy Policy
                </Link>{" "}
                is also a draft.
              </p>
            </div>
          </div>

          <p className="mt-12 text-sm text-gray-soft">
            Updated October 10, 2026. Not final terms and not lawyer-approved.
          </p>
        </div>
      </Container>
    </section>
  );
}
