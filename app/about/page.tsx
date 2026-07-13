import type { Metadata } from "next";
import { Container, GreenAccent } from "@/components/ui";
import SectionHeading from "@/components/SectionHeading";
import { Heart, Eye, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Our Story — PocketSAM was born from love, family, and one simple belief: caregivers deserve care, too.",
};

const caregivingTruths = [
  "It is remembering when they are too tired to remember.",
  "It is advocating when they do not have the strength.",
  "It is organizing, comforting, coordinating, and showing up again and again.",
  "It is carrying hope on the hardest days.",
];

const samValues = [
  {
    letter: "S",
    word: "Support",
    icon: Heart,
    color: "text-green-accent bg-green-accent/10",
    description: "Being there for families when care feels overwhelming.",
  },
  {
    letter: "A",
    word: "Awareness",
    icon: Eye,
    color: "text-teal-primary bg-teal-primary/10",
    description: "Helping caregivers notice patterns and stay informed.",
  },
  {
    letter: "M",
    word: "Management",
    icon: Layers,
    color: "text-teal-deep bg-teal-deep/10",
    description: "Bringing medications, appointments, and teams together simply.",
  },
];

function StoryParagraph({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-base leading-relaxed text-gray-soft sm:text-lg">{children}</p>
  );
}

export default function AboutPage() {
  return (
    <>
      <section className="bg-cream pt-8 pb-10 lg:pt-10 lg:pb-12">
        <Container>
          <div className="mx-auto max-w-3xl">
            <SectionHeading
              centered
              className="mb-0"
              title="Our Story"
              subtitle={
                <>
                  PocketSAM was born from love, family, and one simple belief:{" "}
                  <span className="font-semibold text-teal-deep">
                    caregivers deserve care, too.
                  </span>
                </>
              }
            />
          </div>
        </Container>
      </section>

      <section className="pb-12 lg:pb-16">
        <Container>
          <div className="mx-auto max-w-3xl space-y-5">
            <StoryParagraph>
              My husband, Brian, built PocketSAM after watching me, Samantha — Sam — care
              for my mom during her cancer journey. He saw the daily weight that caregiving
              carries. The medications. The appointments. The phone calls. The updates to
              family. The fear of forgetting something important. The emotional strength it
              takes to keep going, even when your own heart is breaking.
            </StoryParagraph>

            <StoryParagraph>
              Caregiving is not just helping someone you love.
            </StoryParagraph>

            <ul className="space-y-3 border-l-4 border-green-accent/40 py-1 pl-6">
              {caregivingTruths.map((line) => (
                <li
                  key={line}
                  className="text-base leading-relaxed text-teal-deep sm:text-lg"
                >
                  {line}
                </li>
              ))}
            </ul>

            <StoryParagraph>
              Brian watched our family live that reality, and he wanted to build something
              that could make even one part of it feel less overwhelming. Something that
              could help families stay connected, keep important information in one place,
              and give caregivers a little more peace in moments that already feel heavy.
            </StoryParagraph>

            <p className="text-lg font-semibold text-teal-deep sm:text-xl">
              That is how PocketSAM was created.
            </p>

            <StoryParagraph>
              PocketSAM is a caregiver coordination app designed to help families manage
              medications, appointments, care tasks, notes, contacts, and shared care information in
              one simple, supportive place. It was built for real families, real
              caregivers, and real moments when keeping everything together matters most.
            </StoryParagraph>

            <p className="text-lg font-semibold text-teal-deep sm:text-xl">
              But PocketSAM&apos;s mission goes beyond organization.
            </p>

            <StoryParagraph>
              Cancer has changed our family forever, and we know so many families are
              fighting that same fight every day. That is why giving back is part of our
              purpose. As PocketSAM grows, our goal is to donate a portion of our earnings
              to cancer research, because research is hope. Hope for better treatments.
              Hope for more time. Hope for a cure.
            </StoryParagraph>

            <div className="space-y-2 rounded-3xl bg-green-pale p-5 sm:p-6">
              <p className="text-base font-semibold text-teal-deep sm:text-lg">
                Patients fighting cancer deserve nothing less.
              </p>
              <p className="text-base font-semibold text-teal-deep sm:text-lg">
                Families caring for them deserve support.
              </p>
              <p className="text-base font-semibold text-teal-deep sm:text-lg">
                And caregivers should never feel like they are doing it alone.
              </p>
            </div>

            <p className="text-center text-lg font-semibold text-teal-deep sm:text-xl">
              PocketSAM was built in honor of that love, that fight, and{" "}
              <GreenAccent>that hope.</GreenAccent>
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-cream pt-10 pb-12 lg:pt-12 lg:pb-16">
        <Container>
          <SectionHeading
            centered
            className="mb-4 lg:mb-6"
            title="What SAM means"
            subtitle="Our name reflects the heart of what we do."
          />

          <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-3">
            {samValues.map(({ letter, word, icon: Icon, color, description }) => (
              <div
                key={word}
                className="rounded-3xl border border-gray-border bg-white p-6 text-center shadow-soft transition-all hover:shadow-soft-lg"
              >
                <div
                  className={`mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl ${color.split(" ")[1]}`}
                >
                  <Icon className={`h-7 w-7 ${color.split(" ")[0]}`} aria-hidden="true" />
                </div>
                <p className="mb-1 text-2xl font-bold text-teal-deep">{letter}</p>
                <h3 className="mb-2 text-lg font-bold text-teal-deep">{word}</h3>
                <p className="text-sm leading-relaxed text-gray-soft">{description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
