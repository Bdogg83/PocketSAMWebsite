import type { Metadata } from "next";
import { Container } from "@/components/ui";
import SectionHeading from "@/components/SectionHeading";
import {
  Rocket,
  Pill,
  CalendarDays,
  Heart,
  ClipboardCheck,
  Droplets,
  UtensilsCrossed,
  FileText,
  Users,
  AlertTriangle,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Tutorials",
  description:
    "Step-by-step PocketSAM tutorials to help you get started and make the most of every feature.",
};

const tutorials: {
  icon: LucideIcon;
  color: string;
  title: string;
  description: string;
  slug: string;
}[] = [
  {
    icon: Rocket,
    color: "text-teal-primary bg-teal-primary/10",
    title: "Getting Started",
    description:
      "Set up your account, add a patient profile, and learn the basics of navigating PocketSAM.",
    slug: "getting-started",
  },
  {
    icon: Pill,
    color: "text-green-accent bg-green-accent/10",
    title: "Medication Tracking",
    description:
      "Add medications, set reminders, log doses, and keep your care team up to date.",
    slug: "medication-tracking",
  },
  {
    icon: CalendarDays,
    color: "text-teal-primary bg-teal-primary/10",
    title: "Appointments",
    description:
      "Schedule appointments, add notes, and make sure everyone knows what is coming next.",
    slug: "appointments",
  },
  {
    icon: Heart,
    color: "text-orange-400 bg-orange-400/10",
    title: "Daily Check-ins",
    description:
      "Log how you are feeling each day and spot patterns over time.",
    slug: "daily-check-ins",
  },
  {
    icon: ClipboardCheck,
    color: "text-teal-deep bg-teal-deep/10",
    title: "Care Tasks",
    description:
      "Create, assign, and track care tasks so nothing important gets overlooked.",
    slug: "care-tasks",
  },
  {
    icon: Droplets,
    color: "text-teal-light bg-teal-light/10",
    title: "Hydration Tracking",
    description:
      "Track daily hydration with simple logging and helpful reminders.",
    slug: "hydration-tracking",
  },
  {
    icon: UtensilsCrossed,
    color: "text-purple-500 bg-purple-500/10",
    title: "Food Intake",
    description:
      "Record meals and nutrition notes to give your care team a fuller picture of daily wellness.",
    slug: "food-intake",
  },
  {
    icon: FileText,
    color: "text-teal-deep bg-teal-deep/10",
    title: "Doctor-Ready Reports",
    description:
      "Generate summary reports you can review, export, and share with doctors or caregivers.",
    slug: "doctor-ready-reports",
  },
  {
    icon: Users,
    color: "text-green-accent bg-green-accent/10",
    title: "Care Circle Sharing",
    description:
      "Invite caregivers and choose what each person can see or help manage.",
    slug: "care-circle-sharing",
  },
  {
    icon: AlertTriangle,
    color: "text-orange-400 bg-orange-400/10",
    title: "Emergency Info",
    description:
      "Store contacts, allergies, medications, and other critical details for quick access.",
    slug: "emergency-info",
  },
];

export default function TutorialsPage() {
  return (
    <>
      <section className="bg-cream pt-8 pb-10 lg:pt-10 lg:pb-12">
        <Container>
          <SectionHeading
            centered
            className="mb-0"
            label="Tutorials"
            title="Learn how to use PocketSAM."
            subtitle="Step-by-step guides for every part of the app. Mini tutorials are on the way."
          />
        </Container>
      </section>

      <section className="pb-12 lg:pb-16">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tutorials.map(({ icon: Icon, color, title, description, slug }) => (
              <article
                key={slug}
                id={slug}
                className="group rounded-3xl border border-gray-border bg-white p-6 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-soft-lg"
              >
                <div
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl transition-transform group-hover:scale-105 ${color.split(" ")[1]}`}
                >
                  <Icon className={`h-6 w-6 ${color.split(" ")[0]}`} aria-hidden="true" />
                </div>
                <h2 className="mb-2 text-lg font-bold text-teal-deep">{title}</h2>
                <p className="mb-4 text-sm leading-relaxed text-gray-soft">{description}</p>
                <span className="inline-flex rounded-full bg-green-pale px-3 py-1 text-xs font-semibold text-teal-deep">
                  Tutorial coming soon
                </span>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
