import Link from "next/link";
import { ArrowLeft, AlertTriangle } from "lucide-react";
import {
  FilePlus,
  Eye,
  Search,
  Phone,
  HeartPulse,
  AlertCircle,
  Pill,
  Stethoscope,
  CreditCard,
  Droplet,
  StickyNote,
  Users,
  LayoutGrid,
  RefreshCw,
  ShieldCheck,
  HeartHandshake,
  CalendarDays,
  UsersRound,
  Sparkles,
} from "lucide-react";
import { Container, ButtonSecondary, GreenAccent } from "./ui";
import type { LucideIcon } from "lucide-react";

const steps: { icon: LucideIcon; color: string; title: string; text: string }[] = [
  {
    icon: FilePlus,
    color: "text-teal-primary bg-teal-primary/10",
    title: "Add Key Details",
    text: "Enter emergency contacts, allergies, conditions, medications, doctors, insurance, and notes.",
  },
  {
    icon: Eye,
    color: "text-lavender-deep bg-lavender",
    title: "Choose Who Can See It",
    text: "Give trusted caregivers access based on the permissions you select.",
  },
  {
    icon: Search,
    color: "text-rose-600 bg-rose-100",
    title: "Find It Quickly",
    text: "Keep important care information together in one organized place when it is needed.",
  },
];

const featureCards: { icon: LucideIcon; color: string; title: string; text: string }[] = [
  {
    icon: Phone,
    color: "text-rose-600 bg-rose-100",
    title: "Emergency Contacts",
    text: "Store key people to contact quickly, including family members, caregivers, and trusted support people.",
  },
  {
    icon: HeartPulse,
    color: "text-teal-primary bg-teal-primary/10",
    title: "Medical Conditions",
    text: "Keep diagnosed conditions organized so important health context is easier to find.",
  },
  {
    icon: AlertCircle,
    color: "text-rose-600 bg-rose-100",
    title: "Allergies",
    text: "Record medication, food, environmental, or other allergies that caregivers may need to know.",
  },
  {
    icon: Pill,
    color: "text-green-accent bg-green-accent/10",
    title: "Current Medications",
    text: "Keep medication information available alongside the rest of the emergency profile.",
  },
  {
    icon: Stethoscope,
    color: "text-teal-deep bg-teal-deep/10",
    title: "Primary Doctor",
    text: "Store provider details so caregivers know who to contact for care questions or follow-up.",
  },
  {
    icon: CreditCard,
    color: "text-sky-600 bg-sky-100",
    title: "Insurance Information",
    text: "Keep insurance details organized for appointments, urgent visits, or caregiver reference.",
  },
  {
    icon: Droplet,
    color: "text-rose-600 bg-rose-100",
    title: "Blood Type",
    text: "Save blood type when known so it is easy to locate with other emergency details.",
  },
  {
    icon: StickyNote,
    color: "text-teal-light bg-teal-light/10",
    title: "Emergency Notes",
    text: "Add important instructions, concerns, or details that may not fit anywhere else.",
  },
  {
    icon: Users,
    color: "text-green-accent bg-green-accent/10",
    title: "Caregiver Access",
    text: "Share emergency information with trusted caregivers based on the permissions you choose.",
  },
  {
    icon: LayoutGrid,
    color: "text-lavender-deep bg-lavender",
    title: "Quick Reference View",
    text: "Keep critical details in one organized screen instead of scattered across texts, papers, or memory.",
  },
  {
    icon: RefreshCw,
    color: "text-sky-600 bg-sky-100",
    title: "Update Anytime",
    text: "Edit emergency details as medications, doctors, insurance, or care needs change.",
  },
  {
    icon: ShieldCheck,
    color: "text-teal-primary bg-teal-primary/10",
    title: "Prepared for the Unexpected",
    text: "Help caregivers find important information faster during stressful moments.",
  },
];

const storedItems = [
  "Emergency contacts",
  "Allergies",
  "Medical conditions",
  "Current medications",
  "Blood type",
  "Primary doctor",
  "Insurance details",
  "Caregiver contacts",
  "Emergency notes",
  "Special instructions",
];

const whyCards: { icon: LucideIcon; color: string; title: string; text: string }[] = [
  {
    icon: HeartHandshake,
    color: "text-green-accent bg-green-accent/10",
    title: "For Caregivers",
    text: "Important information is easier to find when they are helping during a stressful moment.",
  },
  {
    icon: CalendarDays,
    color: "text-teal-primary bg-teal-primary/10",
    title: "For Appointments",
    text: "Insurance, doctor, medication, and condition details can be kept together.",
  },
  {
    icon: UsersRound,
    color: "text-lavender-deep bg-lavender",
    title: "For Family Coordination",
    text: "Trusted family members can reference the same emergency profile when permission is granted.",
  },
  {
    icon: Sparkles,
    color: "text-sky-600 bg-sky-100",
    title: "For Peace of Mind",
    text: "The information people often search for in a crisis is organized before it is needed.",
  },
];

export default function EmergencyInfoDetail() {
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
              Emergency Info
            </p>
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-teal-deep sm:text-3xl lg:text-4xl text-balance">
              Critical information ready when it matters{" "}
              <GreenAccent>most.</GreenAccent>
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-gray-soft sm:text-base">
              PocketSAM helps keep emergency contacts, allergies, conditions, medications,
              doctors, insurance details, and important care notes organized in one place for
              caregivers and urgent situations.
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
                  <p className="mb-1 text-xs font-bold uppercase tracking-wide text-rose-600">
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
              What can be stored?
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {storedItems.map((item) => (
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
              Why emergency info matters.
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
              {whyCards.map(({ icon: Icon, color, title, text }) => (
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

          <div className="mt-10 flex items-start gap-4 rounded-3xl border border-rose-200 bg-rose-50 p-6 sm:items-center sm:p-8 lg:mt-12">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white shadow-soft">
              <AlertTriangle className="h-5 w-5 text-rose-600" aria-hidden="true" />
            </div>
            <p className="text-sm leading-relaxed text-teal-deep sm:text-base">
              PocketSAM helps organize emergency information, but it does not replace emergency
              services, medical professionals, or urgent care. In an emergency, call 911 or your
              local emergency number.
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
