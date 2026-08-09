import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import {
  CalendarRange,
  MapPin,
  Bell,
  Copy,
  Shield,
  Stethoscope,
} from "lucide-react";
import { Container, ButtonSecondary, GreenAccent } from "./ui";
import type { LucideIcon } from "lucide-react";

const detailCards: { icon: LucideIcon; color: string; title: string; text: string }[] = [
  {
    icon: CalendarRange,
    color: "text-teal-primary bg-teal-primary/10",
    title: "Calendar Views",
    text: "Browse a monthly calendar and upcoming appointment views to see what is scheduled at a glance.",
  },
  {
    icon: Stethoscope,
    color: "text-green-accent bg-green-accent/10",
    title: "Appointment Details",
    text: "Store provider, location, date and time, and notes together for each visit.",
  },
  {
    icon: MapPin,
    color: "text-teal-light bg-teal-light/10",
    title: "Saved Locations",
    text: "Open saved appointment locations in navigation when it is time to head out.",
  },
  {
    icon: Bell,
    color: "text-teal-deep bg-teal-deep/10",
    title: "Custom Reminders",
    text: "Set reminders from 15 minutes to one week before each appointment.",
  },
  {
    icon: Copy,
    color: "text-teal-primary bg-teal-primary/10",
    title: "Reusable Templates",
    text: "Create visit templates for recurring care so scheduling repeat appointments is faster.",
  },
  {
    icon: Shield,
    color: "text-green-accent bg-green-accent/10",
    title: "Caregiver Permissions",
    text: "Choose granular view and edit permissions so caregivers see only what you allow.",
  },
];

export default function AppointmentsDetail() {
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
              Appointments
            </p>
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-teal-deep sm:text-3xl lg:text-4xl text-balance">
              Appointment tracking in one shared caregiver{" "}
              <GreenAccent>calendar.</GreenAccent>
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-gray-soft sm:text-base">
              Organize medical appointments with provider details, locations, notes, and
              customizable reminders. PocketSAM’s shared caregiver calendar and reusable visit
              templates make recurring care easier to schedule.
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
