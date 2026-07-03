import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui";
import SectionHeading from "@/components/SectionHeading";
import {
  Pill,
  CalendarDays,
  Heart,
  Droplets,
  UtensilsCrossed,
  FileText,
  Users,
  AlertTriangle,
  Globe,
  Shield,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import AppDownload from "@/components/AppDownload";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore PocketSAM features including medication tracking, appointments, check-ins, hydration, food intake, reports, care team sharing, and more.",
};

const featureSections: {
  icon: LucideIcon;
  color: string;
  title: string;
  description: string;
  href?: string;
}[] = [
  {
    icon: Pill,
    color: "text-green-accent bg-green-accent/10",
    title: "Medication Tracking",
    description:
      "Track medications, set reminders, and log doses so nothing gets missed. Keep a clear history for you and your care team.",
    href: "/features/medication-tracking",
  },
  {
    icon: CalendarDays,
    color: "text-teal-primary bg-teal-primary/10",
    title: "Appointments",
    description:
      "Organize upcoming appointments, add notes, and keep everyone informed about what's coming next.",
  },
  {
    icon: Heart,
    color: "text-orange-400 bg-orange-400/10",
    title: "Check-ins",
    description:
      "Log how you're feeling day to day. Spot patterns over time and share updates with the people who care.",
    href: "/features/daily-check-ins",
  },
  {
    icon: Droplets,
    color: "text-teal-light bg-teal-light/10",
    title: "Hydration",
    description:
      "Track daily hydration with simple logging. Helpful reminders keep healthy habits on track.",
  },
  {
    icon: UtensilsCrossed,
    color: "text-purple-500 bg-purple-500/10",
    title: "Food Intake",
    description:
      "Record meals and nutrition notes to give your care team a fuller picture of daily wellness.",
  },
  {
    icon: FileText,
    color: "text-teal-deep bg-teal-deep/10",
    title: "Reports",
    description:
      "Generate beautiful summary reports you can review, export, and share with doctors or family members.",
    href: "/features/doctor-ready-reports",
  },
  {
    icon: Users,
    color: "text-green-accent bg-green-accent/10",
    title: "Care Team Sharing",
    description:
      "Invite caregivers and keep everyone connected with shared access to the information that matters.",
    href: "/features/care-circle-sharing",
  },
  {
    icon: AlertTriangle,
    color: "text-orange-400 bg-orange-400/10",
    title: "Emergency Mode",
    description:
      "Quick access to important information when it matters most—designed for peace of mind in urgent moments.",
    href: "/features/emergency-info",
  },
  {
    icon: Globe,
    color: "text-teal-primary bg-teal-primary/10",
    title: "Multi-Language Support",
    description:
      "Built for global families with support for multiple languages so care feels personal and accessible.",
  },
  {
    icon: Shield,
    color: "text-teal-deep bg-teal-deep/10",
    title: "Privacy-Minded Design",
    description:
      "Your family's information deserves respect. PocketSAM is designed with privacy and security in mind.",
  },
];

export default function FeaturesPage() {
  return (
    <>
      <section className="bg-cream py-16 lg:py-24">
        <Container>
          <SectionHeading
            centered
            label="Features"
            title="Everything your care team needs, in one place."
            subtitle="PocketSAM brings together the tools families use every day to stay organized, connected, and confident."
          />
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid gap-8 sm:grid-cols-2 lg:gap-10">
            {featureSections.map(({ icon: Icon, color, title, description, href }) => {
              const card = (
                <>
                  <div
                    className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl transition-transform group-hover:scale-105 ${color.split(" ")[1]}`}
                  >
                    <Icon className={`h-7 w-7 ${color.split(" ")[0]}`} aria-hidden="true" />
                  </div>
                  <h2 className="mb-3 text-xl font-bold text-teal-deep group-hover:text-teal-primary">
                    {title}
                  </h2>
                  <p className="leading-relaxed text-gray-soft">{description}</p>
                </>
              );

              if (href) {
                return (
                  <Link
                    key={title}
                    href={href}
                    className="group rounded-3xl border border-gray-border bg-white p-8 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-soft-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-primary"
                  >
                    {card}
                  </Link>
                );
              }

              return (
                <article
                  key={title}
                  className="group rounded-3xl border border-gray-border bg-white p-8 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-soft-lg"
                >
                  {card}
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <AppDownload />
    </>
  );
}
