import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { UtensilsCrossed, CalendarDays, Eye, Salad } from "lucide-react";
import { Container, ButtonSecondary, GreenAccent } from "./ui";
import PlanAvailabilityNote from "./PlanAvailabilityNote";
import type { LucideIcon } from "lucide-react";

const detailCards: { icon: LucideIcon; color: string; title: string; text: string }[] = [
  {
    icon: UtensilsCrossed,
    color: "text-purple-500 bg-purple-500/10",
    title: "Meals through the day",
    text: "Record breakfast, lunch, dinner, and snacks so the day's intake is easier to look back on.",
  },
  {
    icon: Salad,
    color: "text-green-accent bg-green-accent/10",
    title: "A daily record",
    text: "Review what was logged today, including a calorie total when the entries include one.",
  },
  {
    icon: CalendarDays,
    color: "text-teal-primary bg-teal-primary/10",
    title: "Reports when you choose",
    text: "Food entries can be included in a doctor-ready check-in report. That report organizes saved information and does not use AI.",
  },
  {
    icon: Eye,
    color: "text-teal-deep bg-teal-deep/10",
    title: "Caregiver viewing",
    text: "A caregiver account can be limited to viewing food entries. Logging stays with the people who have permission.",
  },
];

export default function FoodIntakeDetail() {
  return (
    <>
      <section className="bg-cream py-12 lg:py-16">
        <Container>
          <Link
            href="/features"
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-teal-primary transition-colors hover:text-teal-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-deep"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            All features
          </Link>

          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-green-accent">
              Food Intake
            </p>
            <h1 className="text-balance text-2xl font-bold leading-tight tracking-tight text-teal-deep sm:text-3xl lg:text-4xl">
              Keep a simple record of meals and{" "}
              <GreenAccent>snacks.</GreenAccent>
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-gray-soft sm:text-base">
              Log what was eaten during the day so you, and the people you choose to
              include, can look back without reconstructing it from memory.
            </p>
            <PlanAvailabilityNote />
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
