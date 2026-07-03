import { Heart } from "lucide-react";
import { Container, ButtonSecondary, SectionLabel } from "./ui";

export default function WhyPocketSAM() {
  return (
    <section className="py-6 lg:py-8">
      <Container>
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-8">
          <div>
            <SectionLabel>Why PocketSAM?</SectionLabel>
            <h2 className="text-2xl font-bold leading-tight tracking-tight text-teal-deep sm:text-3xl text-balance">
              Built from real life. Built for real care.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-soft sm:text-base">
              PocketSAM was inspired by the real challenges families face when coordinating
              care. SAM stands for Support, Awareness, and Management—bringing everything
              and everyone together in one simple, intuitive app.
            </p>
            <div className="mt-6">
              <ButtonSecondary href="/about">Our Story</ButtonSecondary>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-[240px] max-h-[360px] overflow-hidden rounded-3xl bg-gradient-to-br from-amber-100 via-orange-50 to-teal-100 shadow-soft sm:h-[300px] lg:h-[360px]">
              <div
                className="absolute inset-0 bg-gradient-to-t from-teal-deep/20 via-transparent to-amber-200/40"
                aria-hidden="true"
              />
              <div className="absolute inset-0 flex items-end justify-center pb-10">
                <div className="flex gap-4 px-8">
                  <div className="h-24 w-20 rounded-t-full bg-gradient-to-b from-teal-primary/30 to-teal-deep/40" />
                  <div className="h-28 w-24 -translate-y-3 rounded-t-full bg-gradient-to-b from-green-accent/30 to-teal-primary/40" />
                </div>
              </div>
            </div>

            <div className="absolute -bottom-3 left-4 right-4 rounded-2xl bg-white p-4 shadow-soft-lg sm:left-6 sm:right-auto sm:max-w-xs">
              <div className="mb-1 flex items-center gap-2">
                <Heart className="h-4 w-4 text-green-accent" aria-hidden="true" />
                <p className="text-sm font-bold text-teal-deep">This is for you, Sam.</p>
              </div>
              <p className="text-xs leading-relaxed text-gray-soft sm:text-sm">
                Thank you for showing us what strength, patience, and love look like.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
