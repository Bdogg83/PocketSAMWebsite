import type { Metadata } from "next";
import { ContactPageContent } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact PocketSAM",
  description:
    "Get in touch with the PocketSAM team about the caregiver app, early access, or questions about managing care for a loved one.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact PocketSAM",
    description:
      "Ask a question or join the PocketSAM waitlist. We'd love to hear from you.",
    url: "https://pocketsam.com/contact",
  },
};

export default function ContactPage() {
  return <ContactPageContent />;
}
