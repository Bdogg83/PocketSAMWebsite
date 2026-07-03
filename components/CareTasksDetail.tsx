import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";
import {
  ClipboardPlus,
  UserPlus,
  CircleCheck,
  UserCheck,
  Eye,
  Tags,
  CalendarClock,
  Repeat,
  MessageSquare,
  Lock,
  Bell,
  HeartHandshake,
  History,
} from "lucide-react";
import { Container, ButtonSecondary, GreenAccent } from "./ui";
import type { LucideIcon } from "lucide-react";

const steps: { icon: LucideIcon; color: string; title: string; text: string }[] = [
  {
    icon: ClipboardPlus,
    color: "text-teal-primary bg-teal-primary/10",
    title: "Create the Task",
    text: "Add what needs to be done, include instructions, and choose when it should be completed.",
  },
  {
    icon: UserPlus,
    color: "text-lavender-deep bg-lavender",
    title: "Assign the Right Person",
    text: "Send the task to one caregiver, multiple caregivers, or the whole care circle.",
  },
  {
    icon: CircleCheck,
    color: "text-green-accent bg-green-accent/10",
    title: "Track Completion",
    text: "Caregivers can mark tasks complete and add notes so everyone stays informed.",
  },
];

const featureCards: { icon: LucideIcon; color: string; title: string; text: string }[] = [
  {
    icon: UserCheck,
    color: "text-teal-primary bg-teal-primary/10",
    title: "Assign Tasks to Caregivers",
    text: "Create care tasks and assign them to one or more trusted caregivers.",
  },
  {
    icon: Eye,
    color: "text-sky-600 bg-sky-100",
    title: "Shared Task Visibility",
    text: "Keep the care circle informed by showing what tasks are open, assigned, or completed.",
  },
  {
    icon: Tags,
    color: "text-green-accent bg-green-accent/10",
    title: "Task Categories",
    text: "Organize tasks by medical care, wound care, groceries, household help, transportation, personal care, errands, and more.",
  },
  {
    icon: CalendarClock,
    color: "text-teal-deep bg-teal-deep/10",
    title: "Due Dates & Timing",
    text: "Add due dates and timing details so important care responsibilities are easier to manage.",
  },
  {
    icon: Repeat,
    color: "text-lavender-deep bg-lavender",
    title: "Recurring Care Tasks",
    text: "Set up repeating responsibilities for tasks that happen daily, weekly, or on a regular schedule.",
  },
  {
    icon: CircleCheck,
    color: "text-green-accent bg-green-accent/10",
    title: "Completion Tracking",
    text: "Caregivers can mark tasks complete so everyone can see what has already been handled.",
  },
  {
    icon: MessageSquare,
    color: "text-sky-600 bg-sky-100",
    title: "Completion Notes",
    text: "Add notes when completing a task to explain what was done or anything that needs follow-up.",
  },
  {
    icon: Lock,
    color: "text-teal-light bg-teal-light/10",
    title: "Private or Shared Tasks",
    text: "Create tasks for the whole care circle or assign them privately to specific caregivers.",
  },
  {
    icon: Shield,
    color: "text-teal-primary bg-teal-primary/10",
    title: "Caregiver Permissions",
    text: "Control whether caregivers can view, log, or manage care tasks based on the access you choose.",
  },
  {
    icon: Bell,
    color: "text-lavender-deep bg-lavender",
    title: "Task Notifications",
    text: "Help caregivers stay aware when a task is assigned or needs attention.",
  },
  {
    icon: HeartHandshake,
    color: "text-green-accent bg-green-accent/10",
    title: "Everyday Support",
    text: "Use tasks for real-life help like rides, meals, groceries, medication pickup, cleaning, and appointment prep.",
  },
  {
    icon: History,
    color: "text-teal-deep bg-teal-deep/10",
    title: "Care History",
    text: "Keep a simple record of completed tasks so care responsibilities are easier to review later.",
  },
];

const exampleTasks = [
  "Pick up medication",
  "Drive to appointment",
  "Change wound dressing",
  "Bring groceries",
  "Prepare a meal",
  "Check in by phone",
  "Help with laundry",
  "Take out trash",
  "Confirm appointment details",
  "Bring insurance card or paperwork",
];

export default function CareTasksDetail() {
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
              Care Tasks
            </p>
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-teal-deep sm:text-3xl lg:text-4xl text-balance">
              Coordinate daily care without the{" "}
              <GreenAccent>confusion.</GreenAccent>
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-gray-soft sm:text-base">
              PocketSAM helps families and caregivers assign, track, and complete everyday care
              tasks so everyone knows what needs to be done, who is helping, and what has already
              been completed.
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
              Care tasks for real life.
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {exampleTasks.map((task) => (
                <span
                  key={task}
                  className="rounded-full border border-gray-border bg-white px-4 py-2 text-sm font-medium text-teal-deep shadow-soft"
                >
                  {task}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10 flex items-start gap-4 rounded-3xl border border-green-accent/20 bg-green-pale p-6 sm:items-center sm:p-8 lg:mt-12">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white shadow-soft">
              <Shield className="h-5 w-5 text-green-accent" aria-hidden="true" />
            </div>
            <div className="space-y-1">
              <p className="text-sm font-semibold text-teal-deep sm:text-base">
                The SAM User stays in control.
              </p>
              <p className="text-sm leading-relaxed text-teal-deep sm:text-base">
                Caregivers only see and manage care tasks based on the permissions they are given.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center lg:mt-12">
            <ButtonSecondary href="/#features">Back to all features</ButtonSecondary>
          </div>
        </Container>
      </section>
    </>
  );
}
