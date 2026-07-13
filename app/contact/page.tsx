import type { Metadata } from "next";
import { ContactPageContent } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the PocketSAM team. We'd love to hear from you.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
