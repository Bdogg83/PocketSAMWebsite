import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "PocketSAM terms of service — please read before using our app and website.",
};

const sections = [
  {
    title: "Use of service",
    content:
      "By using PocketSAM, you agree to use the service responsibly and in accordance with these terms. PocketSAM is intended to help families organize care-related information.",
  },
  {
    title: "No medical advice",
    content:
      "PocketSAM does not provide medical advice, diagnosis, or treatment. The app is not a substitute for professional medical care. Always consult qualified healthcare providers for medical decisions.",
  },
  {
    title: "Account responsibility",
    content:
      "You are responsible for maintaining the security of your account and for the accuracy of information you enter. Please use strong passwords and keep login credentials private.",
  },
  {
    title: "Limitation of liability",
    content:
      "PocketSAM is provided as-is to the extent permitted by law. We are not liable for any damages arising from your use of the service, including reliance on information stored in the app.",
  },
  {
    title: "Changes to terms",
    content:
      "We may update these terms from time to time. Continued use of PocketSAM after changes are posted constitutes acceptance of the updated terms.",
  },
  {
    title: "Contact",
    content: (
      <>
        Questions about these terms? Reach out through our{" "}
        <Link href="/contact" className="font-medium text-teal-primary hover:underline">
          contact page
        </Link>
        .
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-4 text-3xl font-bold text-teal-deep sm:text-4xl">
            Terms of Service
          </h1>
          <p className="mb-10 text-base leading-relaxed text-gray-soft">
            Please read these terms carefully. This is a placeholder document that will be
            finalized before launch.
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
