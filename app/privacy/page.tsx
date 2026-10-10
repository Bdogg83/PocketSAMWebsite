import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How the PocketSAM website handles waitlist and contact information. This policy is not final and has not been lawyer-approved.",
  alternates: {
    canonical: "/privacy",
  },
};

const sections: { title: string; paragraphs: string[] }[] = [
  {
    title: "This is a draft",
    paragraphs: [
      "This page describes the public PocketSAM website while the app is in beta. It is not a final privacy policy, it has not been lawyer-approved, and it does not claim HIPAA compliance, SOC 2, or medical-device approval.",
      "A business street address, a retention period in days, and a minimum age have not been set. Those decisions are still open. Questions can be sent to admin@pocketsam.com or through the contact page.",
    ],
  },
  {
    title: "The website",
    paragraphs: [
      "The marketing site at pocketsam.com is hosted on Vercel. It loads Vercel Web Analytics. This site does not set its own advertising cookies and does not show a cookie banner. Whether the host sets a cookie still needs to be confirmed.",
      "The waitlist stores an email address and an optional first name in Resend, the email service PocketSAM already uses. A contact is created only after you ask for launch emails, and Resend records when that contact was created. Saving the contact is separate from the notice sent to PocketSAM. If the notice fails, the signup can still be saved, and the page says so only after the record is stored. A duplicate email is not added again.",
      "You can ask to be removed by emailing admin@pocketsam.com. An administrator can also delete the stored contact with a server-side credential that is not published on the site. No number of days has been chosen for how long a signup is kept.",
      "The contact form and the story form send a message to admin@pocketsam.com. They are not the waitlist record. Please do not send emergencies or sensitive health records through them.",
      "This website does not sell form submissions and does not connect them to an advertising broker. A formal legal promise about selling personal information still needs review.",
    ],
  },
  {
    title: "The app is separate",
    paragraphs: [
      "PocketSAM the app is still in beta and is not offered for download from this website. This page does not try to be the finished privacy policy for app accounts, health information, caregiver sharing, or AI processing. Those details are not finalized here.",
      "This website does not take payment and does not start a subscription.",
    ],
  },
  {
    title: "Children",
    paragraphs: [
      "This website does not collect a date of birth. A minimum age has not been set, so this page does not state one. PocketSAM is not offered here as a product for a child to use alone.",
    ],
  },
  {
    title: "How long information is kept",
    paragraphs: [
      "Waitlist contacts stay until they are removed. Contact and story messages go to the admin@pocketsam.com inbox. No retention period, in days, has been chosen for either one.",
    ],
  },
  {
    title: "Security",
    paragraphs: [
      "The website sets browser protections such as a content security policy, frame blocking, and HTTPS on the hosted site. No method of storage or transmission is perfectly secure, and this page does not claim a security certification.",
    ],
  },
  {
    title: "International processing",
    paragraphs: [
      "Vercel and Resend may process website information in the United States or in other countries where they operate. The exact regions and transfer terms were not confirmed from a signed agreement, so they are not stated here.",
    ],
  },
  {
    title: "Your requests",
    paragraphs: [
      "You can email admin@pocketsam.com to ask for access, a correction, or deletion of personal information PocketSAM holds, or to stop launch emails. What PocketSAM can complete depends on the app controls that exist and on legal review of which privacy rights apply. This draft does not list state-specific rights as if they had already been adopted.",
    ],
  },
  {
    title: "Changes",
    paragraphs: [
      "When this draft is replaced with a reviewed policy, the date at the bottom of the page will change. The current date marks this draft, not a final version.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 inline-flex rounded-full bg-green-pale px-3 py-1 text-xs font-semibold text-teal-deep">
            Not a final policy
          </p>
          <h1 className="mb-4 text-3xl font-bold text-teal-deep sm:text-4xl">Privacy Policy</h1>
          <p className="mb-10 text-base leading-relaxed text-gray-soft">
            PocketSAM helps families organize care information. This page explains what the
            public website collects. It has not been lawyer-approved. A lawyer still needs to
            review it before it is treated as final.
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
                Email{" "}
                <a
                  href="mailto:admin@pocketsam.com"
                  className="font-medium text-teal-primary hover:underline"
                >
                  admin@pocketsam.com
                </a>{" "}
                or use the{" "}
                <Link href="/contact" className="font-medium text-teal-primary hover:underline">
                  contact page
                </Link>
                .
              </p>
            </div>
          </div>

          <p className="mt-12 text-sm text-gray-soft">
            Updated October 10, 2026. Not a final policy and not lawyer-approved.
          </p>
        </div>
      </Container>
    </section>
  );
}
