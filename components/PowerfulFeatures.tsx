import Link from "next/link";
import {
  Pill,
  Users,
  ClipboardCheck,
  FileText,
  ListChecks,
  Shield,
} from "lucide-react";
import { Container } from "./ui";
import SectionHeading from "./SectionHeading";
import { GreenAccent } from "./ui";
import type { LucideIcon } from "lucide-react";

const features: {
  icon: LucideIcon;
  color: string;
  title: string;
  text: string;
  href: string;
}[] = [
  {
    icon: Pill,
    color: "text-teal-primary",
    title: "Medication Tracking",
    text: "Manage medications, reminders, missed doses, and refill needs in one place.",
    href: "/features/medication-tracking",
  },
  {
    icon: Users,
    color: "text-green-accent",
    title: "Care Circle Sharing",
    text: "Give family, friends, or caregivers access based on the permissions you choose.",
    href: "/features/care-circle-sharing",
  },
  {
    icon: ClipboardCheck,
    color: "text-teal-light",
    title: "Daily Check-Ins",
    text: "Track symptoms, mood, pain, vitals, and notes between doctor visits.",
    href: "/features/daily-check-ins",
  },
  {
    icon: FileText,
    color: "text-teal-deep",
    title: "Doctor-Ready Reports",
    text: "Turn daily check-ins into clear summaries you can share with your care team.",
    href: "/features/doctor-ready-reports",
  },
  {
    icon: ListChecks,
    color: "text-teal-primary",
    title: "Care Tasks",
    text: "Assign, track, and complete everyday care responsibilities together.",
    href: "/features/care-tasks",
  },
  {
    icon: Shield,
    color: "text-green-accent",
    title: "Emergency Info",
    text: "Important medical details are organized and ready when every second matters.",
    href: "/features/emergency-info",
  },
];

export default function PowerfulFeatures() {
  return (
    <section id="features" className="scroll-mt-24 py-6 lg:py-8">
      <Container>
        <div className="rounded-3xl bg-cream px-5 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10">
          <SectionHeading
            centered
            className="mb-4 lg:mb-6"
            title={
              <>
                Powerful features. <GreenAccent>Peace of mind.</GreenAccent>
              </>
            }
          />

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-6 xl:gap-8">
            {features.map(({ icon: Icon, color, title, text, href }) => (
              <Link
                key={title}
                href={href}
                className="group block rounded-2xl p-3 text-center transition-colors hover:bg-white/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-primary xl:text-left"
              >
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl border border-gray-border bg-white shadow-soft transition-transform group-hover:scale-105 xl:mx-0">
                  <Icon className={`h-5 w-5 ${color}`} aria-hidden="true" />
                </div>
                <h3 className="mb-1 text-sm font-bold text-teal-deep group-hover:text-teal-primary">
                  {title}
                </h3>
                <p className="text-xs leading-relaxed text-gray-soft">{text}</p>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
