import type { Metadata } from "next";
import { MessageSquareHeart, PenLine } from "lucide-react";
import { Container } from "@/components/ui";
import SectionHeading from "@/components/SectionHeading";
import StoryForm from "@/components/StoryForm";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read stories from the PocketSAM community and share your own experience with caregiving and care coordination.",
};

const featuredStories: {
  title: string;
  excerpt: string;
  author: string;
  role: string;
  slug: string;
}[] = [];

export default function BlogPage() {
  return (
    <>
      <section className="bg-cream pt-8 pb-10 lg:pt-10 lg:pb-12">
        <Container>
          <SectionHeading
            centered
            className="mb-0"
            label="Blog"
            title="Stories from the PocketSAM community."
            subtitle="Real experiences from caregivers, families, and patients. Yours could be next."
          />
        </Container>
      </section>

      <section className="pb-10 lg:pb-12">
        <Container>
          <div className="mx-auto max-w-xl rounded-3xl border border-teal-primary/20 bg-white p-6 shadow-soft-lg sm:p-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-green-accent/10">
              <PenLine className="h-6 w-6 text-green-accent" aria-hidden="true" />
            </div>
            <h2 className="text-xl font-bold text-teal-deep sm:text-2xl">
              Tell us about your experience with PocketSAM
            </h2>
            <p className="mt-3 mb-6 text-sm leading-relaxed text-gray-soft sm:text-base">
              Whether PocketSAM helped you stay organized, coordinate with your care team, or
              feel a little less alone on a hard day, we would love to hear from you.
            </p>
            <StoryForm />
          </div>
        </Container>
      </section>

      <section className="pb-12 lg:pb-16">
        <Container>
          <SectionHeading
            centered
            className="mb-4 lg:mb-6"
            title="Community stories"
            subtitle="Submitted stories may be featured here with your permission."
          />

          {featuredStories.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featuredStories.map(({ title, excerpt, author, role, slug }) => (
                <article
                  key={slug}
                  className="rounded-3xl border border-gray-border bg-white p-6 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-soft-lg"
                >
                  <h3 className="mb-2 text-lg font-bold text-teal-deep">{title}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-gray-soft">{excerpt}</p>
                  <p className="text-sm font-semibold text-teal-deep">
                    {author}
                    <span className="font-normal text-gray-soft"> &mdash; {role}</span>
                  </p>
                </article>
              ))}
            </div>
          ) : (
            <div className="mx-auto max-w-2xl rounded-3xl border border-dashed border-gray-border bg-white/80 px-6 py-10 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-primary/10">
                <MessageSquareHeart
                  className="h-6 w-6 text-teal-primary"
                  aria-hidden="true"
                />
              </div>
              <p className="text-base font-semibold text-teal-deep">Stories coming soon</p>
              <p className="mt-2 text-sm leading-relaxed text-gray-soft">
                Be one of the first to share how PocketSAM has made a difference for you or
                someone you care for.
              </p>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
