import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "PocketSAM privacy policy — how we handle your information.",
};

const sections = [
  {
    title: "Information we may collect",
    content:
      "When you use PocketSAM or interact with our website, we may collect information you provide directly—such as your name, email address, and care-related data you choose to enter in the app. We may also collect basic usage information to help improve the service.",
  },
  {
    title: "How information may be used",
    content:
      "We use the information we collect to provide and improve PocketSAM, communicate with you about updates and support, and help you manage care information within the app. We do not sell your personal information.",
  },
  {
    title: "Data security",
    content:
      "PocketSAM is designed with privacy and security in mind. We take reasonable measures to protect your information, though no method of transmission or storage is completely secure.",
  },
  {
    title: "Your choices",
    content:
      "You can update or delete information you provide through the app, where applicable. You may also contact us to ask questions about your data or to request changes.",
  },
  {
    title: "Contact",
    content: (
      <>
        If you have questions about this privacy policy, please contact us at{" "}
        <Link href="/contact" className="font-medium text-teal-primary hover:underline">
          our contact page
        </Link>
        .
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-4 text-3xl font-bold text-teal-deep sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mb-10 text-base leading-relaxed text-gray-soft">
            PocketSAM is designed with privacy and security in mind. This page provides a
            plain-language overview of how we may handle information. This is a placeholder
            policy and will be updated before launch.
          </p>

          <div className="space-y-10">
            {sections.map(({ title, content }) => (
              <div key={title}>
                <h2 className="mb-3 text-xl font-bold text-teal-deep">{title}</h2>
                <p className="leading-relaxed text-gray-soft">{content}</p>
              </div>
            ))}
          </div>

          <p className="mt-12 text-sm text-gray-soft">
            Last updated: June 2026
          </p>
        </div>
      </Container>
    </section>
  );
}
