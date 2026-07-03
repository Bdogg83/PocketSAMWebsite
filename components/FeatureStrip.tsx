import { CalendarDays, Pill, Heart, Share2 } from "lucide-react";
import { Container } from "./ui";
import type { LucideIcon } from "lucide-react";

const features: { icon: LucideIcon; color: string; title: string; text: string }[] = [
  {
    icon: CalendarDays,
    color: "text-teal-primary bg-teal-primary/10",
    title: "Stay Organized",
    text: "Keep all medications, appointments, and tasks in one place.",
  },
  {
    icon: Pill,
    color: "text-green-accent bg-green-accent/10",
    title: "Manage Medications",
    text: "Stay on top of doses with reminders and tracking.",
  },
  {
    icon: Heart,
    color: "text-orange-400 bg-orange-400/10",
    title: "Track How You Feel",
    text: "Log symptoms and see trends over time.",
  },
  {
    icon: Share2,
    color: "text-purple-500 bg-purple-500/10",
    title: "Share & Stay Connected",
    text: "Keep your care team in the loop, anytime.",
  },
];

export default function FeatureStrip() {
  return (
    <section className="relative z-20 -mt-24 pb-4 sm:-mt-32 lg:-mt-44 lg:pb-6">
      <Container>
        <div className="rounded-3xl bg-white p-5 shadow-soft-lg sm:p-6 lg:p-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {features.map(({ icon: Icon, color, title, text }) => (
              <div key={title} className="group text-center lg:text-left">
                <div
                  className={`mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl transition-transform group-hover:scale-105 lg:mx-0 ${color.split(" ")[1]}`}
                >
                  <Icon className={`h-5 w-5 ${color.split(" ")[0]}`} aria-hidden="true" />
                </div>
                <h3 className="mb-1 text-sm font-bold text-teal-deep">{title}</h3>
                <p className="text-xs leading-relaxed text-gray-soft sm:text-sm">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
