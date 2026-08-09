import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import {
  Target,
  Gauge,
  PlusCircle,
  Droplets,
  History,
  FileText,
  Users,
} from "lucide-react";
import { Container, ButtonSecondary, GreenAccent } from "./ui";
import type { LucideIcon } from "lucide-react";

const detailCards: { icon: LucideIcon; color: string; title: string; text: string }[] = [
  {
    icon: Target,
    color: "text-teal-primary bg-teal-primary/10",
    title: "Daily Hydration Goal",
    text: "Set a general daily hydration goal based on weight to support everyday wellness tracking.",
  },
  {
    icon: Gauge,
    color: "text-green-accent bg-green-accent/10",
    title: "Progress at a Glance",
    text: "See consumed amount, remaining ounces, and percentage progress throughout the day.",
  },
  {
    icon: PlusCircle,
    color: "text-teal-light bg-teal-light/10",
    title: "Quick Logging",
    text: "Use quick-add options for 8, 16, 32, and 64 oz to log fluids in seconds.",
  },
  {
    icon: Droplets,
    color: "text-teal-deep bg-teal-deep/10",
    title: "Detailed Entries",
    text: "Add fluid type, time, and notes when you want a more complete hydration record.",
  },
  {
    icon: History,
    color: "text-teal-primary bg-teal-primary/10",
    title: "Daily History",
    text: "Review past hydration entries to understand patterns over time.",
  },
  {
    icon: FileText,
    color: "text-green-accent bg-green-accent/10",
    title: "Report Summaries",
    text: "Include hydration summaries in reports so your care team can see daily intake trends.",
  },
  {
    icon: Users,
    color: "text-teal-light bg-teal-light/10",
    title: "Caregiver Access",
    text: "Grant separate viewing and logging permissions so caregivers can stay informed when you choose.",
  },
];

export default function HydrationDetail() {
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
              Hydration
            </p>
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-teal-deep sm:text-3xl lg:text-4xl text-balance">
              Track daily hydration with clear goals and{" "}
              <GreenAccent>progress.</GreenAccent>
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-gray-soft sm:text-base">
              Set a general daily hydration goal, quickly log fluids, and see intake, remaining
              ounces, and daily progress at a glance. Optional caregiver access helps the care team
              stay informed.
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
