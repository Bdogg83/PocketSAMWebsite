import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import {
  UserPlus,
  SlidersHorizontal,
  HeartHandshake,
  Settings2,
  Pill,
  CalendarDays,
  ClipboardCheck,
  ListChecks,
  Shield,
  Contact,
  Droplets,
  Users,
  RefreshCw,
  LayoutDashboard,
  Lock,
} from "lucide-react";
import { Container, ButtonSecondary, GreenAccent } from "./ui";
import type { LucideIcon } from "lucide-react";

const steps: { icon: LucideIcon; color: string; title: string; text: string }[] = [
  {
    icon: UserPlus,
    color: "text-teal-primary bg-teal-primary/10",
    title: "Invite",
    text: "Add a caregiver by name, relationship, email, and phone.",
  },
  {
    icon: SlidersHorizontal,
    color: "text-lavender-deep bg-lavender",
    title: "Choose Access",
    text: "Select what they can view, edit, log, or manage.",
  },
  {
    icon: HeartHandshake,
    color: "text-green-accent bg-green-accent/10",
    title: "Coordinate Care",
    text: "Caregivers use their SAM Support view to help with only the areas you approve.",
  },
];

const permissionCards: { icon: LucideIcon; color: string; title: string; text: string }[] = [
  {
    icon: UserPlus,
    color: "text-teal-primary bg-teal-primary/10",
    title: "Invite Trusted Caregivers",
    text: "Add caregivers and send them an invite code to join your Care Circle.",
  },
  {
    icon: Settings2,
    color: "text-lavender-deep bg-lavender",
    title: "Custom Permissions",
    text: "Choose exactly what each caregiver can view, edit, log, or manage.",
  },
  {
    icon: Pill,
    color: "text-green-accent bg-green-accent/10",
    title: "Medication Support",
    text: "Allow a caregiver to view medications, mark doses as taken, or help manage medication details.",
  },
  {
    icon: CalendarDays,
    color: "text-teal-deep bg-teal-deep/10",
    title: "Appointment Help",
    text: "Let trusted caregivers view upcoming appointments or help schedule and update visits.",
  },
  {
    icon: ClipboardCheck,
    color: "text-teal-light bg-teal-light/10",
    title: "Check-In Visibility",
    text: "Share mood, symptom, pain, energy, and health check-in history with the people helping you.",
  },
  {
    icon: ListChecks,
    color: "text-green-accent bg-green-accent/10",
    title: "Care Task Coordination",
    text: "Let caregivers view care tasks, complete assigned tasks, and help track daily responsibilities.",
  },
  {
    icon: Shield,
    color: "text-teal-primary bg-teal-primary/10",
    title: "Emergency Access",
    text: "Share important emergency information like allergies, conditions, medications, doctors, insurance, and emergency contacts.",
  },
  {
    icon: Contact,
    color: "text-lavender-deep bg-lavender",
    title: "Shared Phone Book",
    text: "Give caregivers access to important contacts such as doctors, pharmacies, family members, and support people.",
  },
  {
    icon: Droplets,
    color: "text-teal-light bg-teal-light/10",
    title: "Wellness Tracking Access",
    text: "Share hydration and food tracking when those wellness features are enabled.",
  },
  {
    icon: Users,
    color: "text-green-accent bg-green-accent/10",
    title: "Manage the Care Team",
    text: "Allow a trusted caregiver to help invite other caregivers, while keeping access limited by permissions.",
  },
  {
    icon: RefreshCw,
    color: "text-teal-deep bg-teal-deep/10",
    title: "Change Access Anytime",
    text: "Update permissions or remove a caregiver whenever access is no longer needed.",
  },
  {
    icon: LayoutDashboard,
    color: "text-lavender-deep bg-lavender",
    title: "SAM Support View",
    text: "Caregivers get their own support view showing only the information they are allowed to access.",
  },
];

export default function CareCircleSharingDetail() {
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
              Care Circle Sharing
            </p>
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-teal-deep sm:text-3xl lg:text-4xl text-balance">
              Share care without giving up{" "}
              <GreenAccent>control.</GreenAccent>
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-gray-soft sm:text-base">
              PocketSAM lets you invite trusted family, friends, caregivers, or care team
              members into your Care Circle and choose exactly what each person can see or help
              manage.
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
                  <p className="mb-1 text-xs font-bold uppercase tracking-wide text-lavender-deep">
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
            {permissionCards.map(({ icon: Icon, color, title, text }) => (
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

          <div className="mt-10 flex items-start gap-4 rounded-3xl border border-green-accent/20 bg-green-pale p-6 sm:items-center sm:p-8 lg:mt-12">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white shadow-soft">
              <Lock className="h-5 w-5 text-green-accent" aria-hidden="true" />
            </div>
            <p className="text-sm leading-relaxed text-teal-deep sm:text-base">
              Each caregiver only sees what you choose to share. You can change access at any
              time.
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
