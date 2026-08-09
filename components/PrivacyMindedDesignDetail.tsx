import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import {
  Shield,
  Layers,
  Lock,
  BarChart3,
  History,
  QrCode,
  Trash2,
  Server,
} from "lucide-react";
import { Container, ButtonSecondary, GreenAccent } from "./ui";
import type { LucideIcon } from "lucide-react";

const detailCards: { icon: LucideIcon; color: string; title: string; text: string }[] = [
  {
    icon: Shield,
    color: "text-teal-primary bg-teal-primary/10",
    title: "Granular Permissions",
    text: "Control what each caregiver can view or update with per-caregiver sharing permissions.",
  },
  {
    icon: Layers,
    color: "text-green-accent bg-green-accent/10",
    title: "Account-Level Separation",
    text: "Care data is organized with account-level separation to help keep information scoped appropriately.",
  },
  {
    icon: Lock,
    color: "text-teal-light bg-teal-light/10",
    title: "Secure Permission Storage",
    text: "Permission-related settings are stored securely as part of the signed-in PocketSAM experience.",
  },
  {
    icon: BarChart3,
    color: "text-teal-deep bg-teal-deep/10",
    title: "Analytics Controls",
    text: "Choose whether to allow anonymous analytics to help improve the app.",
  },
  {
    icon: History,
    color: "text-teal-primary bg-teal-primary/10",
    title: "History Management",
    text: "Manage history settings, including the ability to clear check-in history when needed.",
  },
  {
    icon: QrCode,
    color: "text-green-accent bg-green-accent/10",
    title: "Emergency Sharing Controls",
    text: "Configure emergency-information visibility and QR sharing based on what you want available.",
  },
  {
    icon: Trash2,
    color: "text-teal-light bg-teal-light/10",
    title: "Clear Check-In History",
    text: "Remove check-in history when you want a fresh start or tighter control over stored records.",
  },
  {
    icon: Server,
    color: "text-teal-deep bg-teal-deep/10",
    title: "Server-Side Access Controls",
    text: "Firebase and Firestore security rules provide an additional access-control boundary for synced care data.",
  },
];

export default function PrivacyMindedDesignDetail() {
  return (
    <>
      <section className="bg-cream py-12 lg:py-16">
        <Container>
          <Link
            href="/features"
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-teal-primary transition-colors hover:text-teal-deep"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            All features
          </Link>

          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-green-accent">
              Privacy-Minded Design
            </p>
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-teal-deep sm:text-3xl lg:text-4xl text-balance">
              Sharing controls designed for real-world{" "}
              <GreenAccent>caregiving.</GreenAccent>
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-gray-soft sm:text-base">
              Control what each caregiver can view or update with granular sharing permissions.
              PocketSAM also includes secure permission storage, account-level data separation, and
              controls for analytics, history, and emergency sharing.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-12 lg:py-16">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {detailCards.map(({ icon: Icon, color, title, text }) => (
              <article
                key={title}
                className="rounded-3xl border border-gray-border bg-white p-6 shadow-soft transition-shadow hover:shadow-soft-lg"
              >
                <div
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl ${color.split(" ")[1]}`}
                >
                  <Icon className={`h-5 w-5 ${color.split(" ")[0]}`} aria-hidden="true" />
                </div>
                <h2 className="mb-2 text-base font-bold text-teal-deep">{title}</h2>
                <p className="text-sm leading-relaxed text-gray-soft">{text}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center lg:mt-12">
            <ButtonSecondary href="/features">Explore all features</ButtonSecondary>
          </div>
        </Container>
      </section>
    </>
  );
}
