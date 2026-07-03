import Link from "next/link";
import { ArrowLeft, ClipboardList } from "lucide-react";
import {
  NotebookPen,
  TrendingUp,
  Share2,
  Smile,
  Activity,
  Gauge,
  HeartPulse,
  Battery,
  StickyNote,
  Camera,
  History,
  Eye,
  FileText,
} from "lucide-react";
import { Container, ButtonSecondary, GreenAccent } from "./ui";
import type { LucideIcon } from "lucide-react";

const steps: { icon: LucideIcon; color: string; title: string; text: string }[] = [
  {
    icon: NotebookPen,
    color: "text-teal-primary bg-teal-primary/10",
    title: "Log the Day",
    text: "Record mood, symptoms, pain, vitals, notes, and photos.",
  },
  {
    icon: TrendingUp,
    color: "text-sky-600 bg-sky-100",
    title: "See Patterns",
    text: "Review check-in history to notice changes over time.",
  },
  {
    icon: Share2,
    color: "text-green-accent bg-green-accent/10",
    title: "Share Clearly",
    text: "Help caregivers and doctors understand what has been happening between visits.",
  },
];

const featureCards: { icon: LucideIcon; color: string; title: string; text: string }[] = [
  {
    icon: Smile,
    color: "text-green-accent bg-green-accent/10",
    title: "Mood Tracking",
    text: "Log how you are feeling each day so emotional changes are easier to notice over time.",
  },
  {
    icon: Activity,
    color: "text-teal-primary bg-teal-primary/10",
    title: "Symptom Logging",
    text: "Track symptoms like fatigue, nausea, pain, shortness of breath, anxiety, headache, and more.",
  },
  {
    icon: Gauge,
    color: "text-sky-600 bg-sky-100",
    title: "Pain Assessment",
    text: "Record pain level, location, quality, timing, triggers, and notes in a structured way.",
  },
  {
    icon: HeartPulse,
    color: "text-teal-deep bg-teal-deep/10",
    title: "Vitals Tracking",
    text: "Add important readings like blood pressure, pulse, temperature, and respiration.",
  },
  {
    icon: Battery,
    color: "text-teal-light bg-teal-light/10",
    title: "Energy Level",
    text: "Use a simple energy slider to capture how strong, tired, or drained you feel.",
  },
  {
    icon: StickyNote,
    color: "text-sky-600 bg-sky-100",
    title: "Daily Notes",
    text: "Write down important details from the day, including changes, concerns, or things to ask the doctor.",
  },
  {
    icon: Camera,
    color: "text-teal-primary bg-teal-primary/10",
    title: "Photo Attachments",
    text: "Add photos when helpful, such as visible changes, wounds, swelling, or other concerns.",
  },
  {
    icon: History,
    color: "text-green-accent bg-green-accent/10",
    title: "Check-In History",
    text: "Review past check-ins to see how symptoms, mood, pain, and vitals have changed.",
  },
  {
    icon: Eye,
    color: "text-teal-light bg-teal-light/10",
    title: "Caregiver Visibility",
    text: "Share check-ins with trusted caregivers when permission is granted.",
  },
  {
    icon: FileText,
    color: "text-teal-deep bg-teal-deep/10",
    title: "Doctor-Ready Summaries",
    text: "Use check-in history to help create clearer reports for medical appointments.",
  },
];

export default function DailyCheckInsDetail() {
  return (
    <>
      <section
        id="daily-check-ins"
        className="scroll-mt-24 bg-cream py-12 lg:py-16"
        aria-labelledby="daily-check-ins-heading"
      >
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
              Daily Check-Ins
            </p>
            <h1
              id="daily-check-ins-heading"
              className="text-2xl font-bold leading-tight tracking-tight text-teal-deep sm:text-3xl lg:text-4xl text-balance"
            >
              Know how each day is really{" "}
              <GreenAccent>going.</GreenAccent>
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-gray-soft sm:text-base">
              PocketSAM helps SAM Users record mood, symptoms, pain, vitals, notes, and photos
              so changes are easier to remember, review, and share with trusted caregivers or
              doctors.
            </p>
          </div>

          <div className="mt-10 lg:mt-12">
            <div className="grid gap-6 sm:grid-cols-3 sm:gap-4 lg:gap-8">
              {steps.map(({ icon: Icon, color, title, text }, index) => (
                <div key={title} className="relative text-center">
                  {index > 0 && (
                    <div
                      className="absolute -left-3 top-8 hidden h-px w-6 bg-gray-border sm:block lg:-left-4 lg:w-8"
                      aria-hidden="true"
                    />
                  )}
                  <div
                    className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl shadow-soft ${color.split(" ")[1]}`}
                  >
                    <Icon className={`h-6 w-6 ${color.split(" ")[0]}`} aria-hidden="true" />
                  </div>
                  <p className="mb-1 text-xs font-bold uppercase tracking-wide text-sky-600">
                    Step {index + 1}
                  </p>
                  <h2 className="mb-2 text-base font-bold text-teal-deep">{title}</h2>
                  <p className="text-sm leading-relaxed text-gray-soft">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12 lg:py-16">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {featureCards.map(({ icon: Icon, color, title, text }) => (
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

          <div className="mt-10 flex items-start gap-4 rounded-3xl border border-sky-200 bg-sky-50 p-6 sm:items-center sm:p-8 lg:mt-12">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white shadow-soft">
              <ClipboardList className="h-5 w-5 text-sky-600" aria-hidden="true" />
            </div>
            <p className="text-sm leading-relaxed text-teal-deep sm:text-base">
              Daily Check-Ins help turn scattered notes into a clearer picture of care over time.
            </p>
          </div>

          <div className="mt-10 text-center lg:mt-12">
            <ButtonSecondary href="/features">Explore all features</ButtonSecondary>
          </div>
        </Container>
      </section>
    </>
  );
}
