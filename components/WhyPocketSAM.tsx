import Image from "next/image";
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
            <div className="relative h-[280px] overflow-hidden rounded-3xl shadow-soft sm:h-[320px] lg:h-[380px]">
              <Image
                src="/sam-photo.png"
                alt="A warm portrait of family showing love, strength, and care"
                fill
                className="object-cover object-[center_20%]"
                sizes="(max-width: 1024px) 100vw, 560px"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-teal-deep/35 via-teal-deep/5 to-transparent"
                aria-hidden="true"
              />
            </div>

            <div className="absolute -bottom-[calc(0.75rem+0.5in)] left-4 right-4 rounded-2xl bg-white p-4 shadow-soft-lg sm:left-6 sm:right-auto sm:max-w-sm">
              <div className="mb-2 flex items-center gap-2">
                <Heart className="h-4 w-4 shrink-0 text-green-accent" aria-hidden="true" />
                <p className="text-sm font-bold text-teal-deep">Dedicated to you, Mom,</p>
              </div>
              <p className="text-xs leading-relaxed text-gray-soft sm:text-sm">
                whose strength, courage, and unwavering love inspire us every day.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
