import { CalendarDays, Pill, Heart, Share2 } from "lucide-react";
import { Container } from "./ui";
import type { LucideIcon } from "lucide-react";

const features: { icon: LucideIcon; color: string; title: string; text: string }[] = [
  {
    icon: CalendarDays,
    color: "text-teal-primary bg-teal-primary/10",
    title: "Stay Organized",
    text: "Keep medications, appointments, and care tasks in one caregiver app.",
  },
  {
    icon: Pill,
    color: "text-green-accent bg-green-accent/10",
    title: "Manage Medications",
    text: "Track doses and reminders when managing medications for a loved one.",
  },
  {
    icon: Heart,
    color: "text-orange-400 bg-orange-400/10",
    title: "Track Symptoms",
    text: "Log symptoms, mood, and notes in a simple care journal.",
  },
  {
    icon: Share2,
    color: "text-purple-500 bg-purple-500/10",
    title: "Coordinate Care",
    text: "Share updates so family caregivers and the care team stay connected.",
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
