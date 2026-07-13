import { Container } from "./ui";

export default function Testimonial() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <div className="relative rounded-3xl bg-lavender px-6 py-14 text-center sm:px-12 sm:py-16">
          <span
            className="absolute left-6 top-6 text-6xl font-serif leading-none text-lavender-deep/30 sm:left-10 sm:top-8 sm:text-7xl"
            aria-hidden="true"
          >
            &ldquo;
          </span>
          <span
            className="absolute bottom-6 right-6 text-6xl font-serif leading-none text-lavender-deep/30 sm:bottom-8 sm:right-10 sm:text-7xl"
            aria-hidden="true"
          >
            &rdquo;
          </span>

          <blockquote className="relative mx-auto max-w-2xl">
            <p className="text-lg font-medium leading-relaxed text-lavender-deep sm:text-xl">
              PocketSAM has been a game changer for our family. Everything is in one place,
              and everyone is on the same page.
            </p>
            <footer className="mt-6 text-sm font-semibold text-lavender-deep/80">
              &mdash; Melissa R., Caregiver
            </footer>
          </blockquote>

          <div className="mt-8 flex justify-center gap-2" aria-label="Testimonial pagination">
            <span className="h-2 w-2 rounded-full bg-lavender-deep/25" />
            <span className="h-2.5 w-2.5 rounded-full bg-lavender-deep" />
            <span className="h-2 w-2 rounded-full bg-lavender-deep/25" />
          </div>
        </div>
      </Container>
    </section>
  );
}
