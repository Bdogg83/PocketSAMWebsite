import Link from "next/link";
import { ArrowLeft, Info } from "lucide-react";
import {
  ClipboardCheck,
  TrendingUp,
  CalendarDays,
  FileText,
  Activity,
  Smile,
  Gauge,
  HeartPulse,
  StickyNote,
  Camera,
  Pill,
  Droplets,
  CalendarRange,
  Users,
  Share2,
  ClipboardList,
  Stethoscope,
  Bandage,
  HeartHandshake,
} from "lucide-react";
import { Container, ButtonSecondary, GreenAccent } from "./ui";
import type { LucideIcon } from "lucide-react";

const steps: { icon: LucideIcon; color: string; title: string; text: string }[] = [
  {
    icon: ClipboardCheck,
    color: "text-teal-primary bg-teal-primary/10",
    title: "Track Daily Changes",
    text: "Use check-ins to log symptoms, mood, pain, vitals, notes, and photos.",
  },
  {
    icon: TrendingUp,
    color: "text-sky-600 bg-sky-100",
    title: "Review the Pattern",
    text: "PocketSAM organizes the information so changes over time are easier to see.",
  },
  {
    icon: CalendarDays,
    color: "text-green-accent bg-green-accent/10",
    title: "Prepare for the Visit",
    text: "Use the report to help guide conversations with doctors, nurses, or care teams.",
  },
];

const featureCards: { icon: LucideIcon; color: string; title: string; text: string }[] = [
  {
    icon: FileText,
    color: "text-teal-primary bg-teal-primary/10",
    title: "Check-In Summaries",
    text: "Pull daily check-ins together so important changes are easier to review before an appointment.",
  },
  {
    icon: Activity,
    color: "text-green-accent bg-green-accent/10",
    title: "Symptom Trends",
    text: "See which symptoms were logged, how often they appeared, and how they changed over time.",
  },
  {
    icon: Smile,
    color: "text-sky-600 bg-sky-100",
    title: "Mood & Energy History",
    text: "Review mood and energy patterns between visits so emotional and physical changes are not forgotten.",
  },
  {
    icon: Gauge,
    color: "text-lavender-deep bg-lavender",
    title: "Pain Tracking Summary",
    text: "Include pain level, location, quality, timing, triggers, and notes from completed pain assessments.",
  },
  {
    icon: HeartPulse,
    color: "text-teal-deep bg-teal-deep/10",
    title: "Vitals Overview",
    text: "Organize readings like blood pressure, pulse, temperature, and respiration in one place.",
  },
  {
    icon: StickyNote,
    color: "text-teal-light bg-teal-light/10",
    title: "Daily Notes",
    text: "Bring forward important patient or caregiver notes that may need to be discussed with the care team.",
  },
  {
    icon: Camera,
    color: "text-teal-primary bg-teal-primary/10",
    title: "Photo References",
    text: "Include helpful photos from check-ins when visual changes need to be remembered or reviewed.",
  },
  {
    icon: Pill,
    color: "text-green-accent bg-green-accent/10",
    title: "Medication Context",
    text: "Help connect daily symptoms and notes with the larger care routine, including medication activity.",
  },
  {
    icon: Droplets,
    color: "text-sky-600 bg-sky-100",
    title: "Wellness Activity",
    text: "Include hydration and food tracking when those features are enabled.",
  },
  {
    icon: CalendarRange,
    color: "text-lavender-deep bg-lavender",
    title: "Date Range Reports",
    text: "Create reports for a specific period of time, such as the last week, month, or time between appointments.",
  },
  {
    icon: Users,
    color: "text-teal-light bg-teal-light/10",
    title: "Caregiver Input",
    text: "Trusted caregivers can help capture details when they have permission to view or log care information.",
  },
  {
    icon: Share2,
    color: "text-teal-deep bg-teal-deep/10",
    title: "Easy to Share",
    text: "Create a cleaner summary that can be reviewed before or during a medical appointment.",
  },
];

const reportIncludes = [
  "Symptoms",
  "Mood",
  "Energy",
  "Pain details",
  "Vitals",
  "Daily notes",
  "Photos",
  "Hydration",
  "Food tracking",
  "Medication context",
  "Caregiver observations",
  "Date range summary",
];

const appointmentCards: { icon: LucideIcon; color: string; title: string; text: string }[] = [
  {
    icon: ClipboardList,
    color: "text-teal-primary bg-teal-primary/10",
    title: "Before an Appointment",
    text: "Review what changed since the last visit.",
  },
  {
    icon: Stethoscope,
    color: "text-green-accent bg-green-accent/10",
    title: "During Treatment",
    text: "Track symptoms, pain, and energy across days or weeks.",
  },
  {
    icon: Bandage,
    color: "text-sky-600 bg-sky-100",
    title: "After Surgery or Discharge",
    text: "Keep a clearer record of recovery notes and concerns.",
  },
  {
    icon: HeartHandshake,
    color: "text-lavender-deep bg-lavender",
    title: "Caregiver Support",
    text: "Help family members or caregivers contribute information that may otherwise be missed.",
  },
];

export default function DoctorReadyReportsDetail() {
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
              Doctor-Ready Reports
            </p>
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-teal-deep sm:text-3xl lg:text-4xl text-balance">
              Turn daily care notes into clearer{" "}
              <GreenAccent>doctor visits.</GreenAccent>
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-gray-soft sm:text-base">
              PocketSAM helps organize check-ins, symptoms, pain notes, vitals, mood, and wellness
              activity into a clear report so patients and caregivers can walk into appointments
              better prepared.
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

          <div className="mt-12 rounded-3xl border border-gray-border bg-cream-warm p-6 sm:p-8 lg:mt-16">
            <h2 className="mb-6 text-center text-xl font-bold text-teal-deep sm:text-2xl">
              What can be included in a report?
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {reportIncludes.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-gray-border bg-white px-4 py-2 text-sm font-medium text-teal-deep shadow-soft"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-12 lg:mt-16">
            <h2 className="mb-8 text-center text-xl font-bold text-teal-deep sm:text-2xl">
              Helpful for real appointments.
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
              {appointmentCards.map(({ icon: Icon, color, title, text }) => (
                <article
                  key={title}
                  className="rounded-3xl border border-gray-border bg-white p-6 shadow-soft transition-shadow hover:shadow-soft-lg"
                >
                  <div
                    className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl ${color.split(" ")[1]}`}
                  >
                    <Icon className={`h-5 w-5 ${color.split(" ")[0]}`} aria-hidden="true" />
                  </div>
                  <h3 className="mb-2 text-base font-bold text-teal-deep">{title}</h3>
                  <p className="text-sm leading-relaxed text-gray-soft">{text}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-10 flex items-start gap-4 rounded-3xl border border-sky-200 bg-sky-50 p-6 sm:items-center sm:p-8 lg:mt-12">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white shadow-soft">
              <Info className="h-5 w-5 text-sky-600" aria-hidden="true" />
            </div>
            <p className="text-sm leading-relaxed text-teal-deep sm:text-base">
              PocketSAM helps organize information. It does not diagnose, provide medical advice,
              or replace your care team.
            </p>
          </div>

          <div className="mt-10 text-center lg:mt-12">
            <ButtonSecondary href="/#features">Back to all features</ButtonSecondary>
          </div>
        </Container>
      </section>
    </>
  );
}
