import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import {
  MessageCircle,
  ListChecks,
  ShieldCheck,
  FileSearch,
  ScrollText,
  Gauge,
  TriangleAlert,
} from "lucide-react";
import { Container, ButtonSecondary, GreenAccent } from "./ui";
import type { LucideIcon } from "lucide-react";

const detailCards: {
  icon: LucideIcon;
  color: string;
  title: string;
  text: string;
}[] = [
  {
    icon: MessageCircle,
    color: "text-teal-primary bg-teal-primary/10",
    title: "Text or voice",
    text: "Ask in everyday language by typing or by speaking. A voice request is transcribed and then follows the same review path as something you type.",
  },
  {
    icon: ListChecks,
    color: "text-green-accent bg-green-accent/10",
    title: "Proposed actions",
    text: "PocketSAM can prepare supported updates such as a medication log, symptom or check-in entry, vital, appointment, care task, journal entry, or note.",
  },
  {
    icon: ShieldCheck,
    color: "text-teal-deep bg-teal-deep/10",
    title: "Review before save",
    text: "Proposed actions stay proposals until you review and confirm them. PocketSAM does not save an AI action on its own.",
  },
  {
    icon: FileSearch,
    color: "text-teal-light bg-teal-light/10",
    title: "Photo extraction",
    text: "Supported medication-label and document photos can be read into a draft. You review the draft before anything is kept.",
  },
  {
    icon: ScrollText,
    color: "text-lavender-deep bg-lavender",
    title: "AI summaries",
    text: "Assistant can prepare summaries and briefings from care information. These are separate from doctor-ready reports, which organize saved check-ins without AI and are available on every plan.",
  },
  {
    icon: Gauge,
    color: "text-teal-primary bg-teal-primary/10",
    title: "Usage limits",
    text: "AI is included with Assistant and is not unlimited. Requests are subject to usage and rate limits. A specific public number is not published here.",
  },
];

const linkClass =
  "rounded-sm font-semibold text-teal-primary underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-deep";

export default function AssistantDetail() {
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
              Assistant
            </p>
            <h1 className="text-balance text-2xl font-bold leading-tight tracking-tight text-teal-deep sm:text-3xl lg:text-4xl">
              Less typing. You still decide what gets{" "}
              <GreenAccent>saved.</GreenAccent>
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-gray-soft sm:text-base">
              PocketSAM Assistant helps you turn a spoken or typed update into proposed
              care entries. You can use it on your own. Inviting caregivers is optional,
              and Assistant is its own plan — it does not require Together.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-gray-soft sm:text-base">
              AI features are included only with PocketSAM Assistant.{" "}
              <Link href="/pricing" className={linkClass}>
                View plans
              </Link>
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

          <div className="mx-auto mt-12 max-w-3xl rounded-3xl border border-gray-border bg-cream-warm p-6 sm:p-8 lg:mt-16">
            <h2 className="text-xl font-bold text-teal-deep sm:text-2xl">
              What review looks like
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-soft sm:text-base">
              This is an illustration of the review flow. It is not a live demo.
            </p>
            <ol className="mt-6 space-y-4">
              <li>
                <p className="text-sm font-semibold text-teal-deep">1. You ask</p>
                <p className="mt-1 text-sm leading-relaxed text-gray-soft">
                  &ldquo;Log that Mom took her morning medication and add a doctor
                  appointment for Thursday.&rdquo;
                </p>
              </li>
              <li>
                <p className="text-sm font-semibold text-teal-deep">2. PocketSAM proposes</p>
                <p className="mt-1 text-sm leading-relaxed text-gray-soft">
                  You see separate proposed actions, such as a medication log and an
                  appointment. A missing detail, such as the appointment time, stays
                  unresolved. PocketSAM does not invent a time.
                </p>
              </li>
              <li>
                <p className="text-sm font-semibold text-teal-deep">3. You confirm</p>
                <p className="mt-1 text-sm leading-relaxed text-gray-soft">
                  Nothing from that request is saved until you review it and confirm the
                  actions you want to keep.
                </p>
              </li>
            </ol>
          </div>

          <div className="mx-auto mt-8 flex max-w-3xl items-start gap-4 rounded-3xl border border-green-accent/20 bg-green-pale p-6 sm:p-8">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white shadow-soft">
              <TriangleAlert className="h-5 w-5 text-teal-deep" aria-hidden="true" />
            </div>
            <div className="space-y-2 text-sm leading-relaxed text-teal-deep sm:text-base">
              <p className="font-semibold">AI can be wrong. You remain in charge.</p>
              <p>
                Review AI-generated information before you rely on it. PocketSAM does not
                diagnose, prescribe, or change a medication on its own. It is not an
                emergency service. If someone needs emergency help, contact local
                emergency services. You are responsible for confirming medication and
                appointment details.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center lg:mt-12">
            <ButtonSecondary href="/pricing">View plans</ButtonSecondary>
          </div>
        </Container>
      </section>
    </>
  );
}
