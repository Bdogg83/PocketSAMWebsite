import type { Metadata } from "next";
import { Container, ButtonPrimary } from "@/components/ui";

export const metadata: Metadata = {
  title: "Page not found",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-bold text-teal-deep sm:text-4xl">
            We could not find that page.
          </h1>
          <p className="mt-4 text-base leading-relaxed text-gray-soft">
            The link may be out of date. You can return to the PocketSAM home page.
          </p>
          <div className="mt-8">
            <ButtonPrimary href="/">Back to home</ButtonPrimary>
          </div>
        </div>
      </Container>
    </section>
  );
}
