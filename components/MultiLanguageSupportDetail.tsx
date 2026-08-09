import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import {
  Globe,
  Users,
  Eye,
  Bookmark,
  LayoutGrid,
} from "lucide-react";
import { Container, ButtonSecondary, GreenAccent } from "./ui";
import type { LucideIcon } from "lucide-react";

const detailCards: { icon: LucideIcon; color: string; title: string; text: string }[] = [
  {
    icon: Globe,
    color: "text-teal-primary bg-teal-primary/10",
    title: "Four Languages",
    text: "Use PocketSAM in English, Spanish, French, or Portuguese.",
  },
  {
    icon: Users,
    color: "text-green-accent bg-green-accent/10",
    title: "For Care Users & Caregivers",
    text: "Language settings are available to both care users and caregivers.",
  },
  {
    icon: Eye,
    color: "text-teal-light bg-teal-light/10",
    title: "Live Preview",
    text: "Preview a language before applying it so you can choose what feels right.",
  },
  {
    icon: Bookmark,
    color: "text-teal-deep bg-teal-deep/10",
    title: "Saved Preference",
    text: "Your selected language is saved and applied across the app experience.",
  },
  {
    icon: LayoutGrid,
    color: "text-teal-primary bg-teal-primary/10",
    title: "Localized Experience",
    text: "Navigation, forms, settings, reminders, and feature screens are localized.",
  },
];

export default function MultiLanguageSupportDetail() {
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
              Multi-Language Support
            </p>
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-teal-deep sm:text-3xl lg:text-4xl text-balance">
              Care that feels personal in the language you{" "}
              <GreenAccent>choose.</GreenAccent>
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-gray-soft sm:text-base">
              Use PocketSAM in English, Spanish, French, or Portuguese. Care users and caregivers
              can preview and save the language that works best for them.
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
