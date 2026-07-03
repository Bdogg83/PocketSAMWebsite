import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import {
  CalendarDays,
  CircleCheck,
  Package,
  ClipboardList,
  Camera,
  Users,
} from "lucide-react";
import { Container, ButtonSecondary, GreenAccent } from "./ui";
import type { LucideIcon } from "lucide-react";

const detailCards: { icon: LucideIcon; color: string; title: string; text: string }[] = [
  {
    icon: CalendarDays,
    color: "text-teal-primary bg-teal-primary/10",
    title: "Daily Medication Schedule",
    text: "See what medications are due today, when they should be taken, and what has already been completed.",
  },
  {
    icon: CircleCheck,
    color: "text-green-accent bg-green-accent/10",
    title: "Dose Tracking",
    text: "Mark medications as taken, skipped, or missed so the care circle can stay aware of what happened.",
  },
  {
    icon: Package,
    color: "text-teal-light bg-teal-light/10",
    title: "Refill Awareness",
    text: "Track remaining quantity and receive low-stock reminders before medication runs out.",
  },
  {
    icon: ClipboardList,
    color: "text-teal-deep bg-teal-deep/10",
    title: "Medication Details",
    text: "Store dosage, purpose, frequency, scheduled times, start date, and notes for each medication.",
  },
  {
    icon: Camera,
    color: "text-teal-primary bg-teal-primary/10",
    title: "Medication Photos",
    text: "Add a photo to help identify each medication more easily.",
  },
  {
    icon: Users,
    color: "text-green-accent bg-green-accent/10",
    title: "Caregiver Support",
    text: "Allow trusted caregivers to view medications, mark doses, or help manage medication details based on the permissions you choose.",
  },
];

export default function MedicationTrackingDetail() {
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
              Medication Tracking
            </p>
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-teal-deep sm:text-3xl lg:text-4xl text-balance">
              Medication tracking made simple for patients and{" "}
              <GreenAccent>caregivers.</GreenAccent>
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-gray-soft sm:text-base">
              PocketSAM helps you organize medications, set reminders, track daily doses,
              monitor refills, and keep trusted caregivers informed when support is needed.
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
