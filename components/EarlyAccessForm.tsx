"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { Container, ButtonPrimary } from "./ui";
import SectionHeading from "./SectionHeading";

const inputClass =
  "w-full rounded-2xl border border-gray-border bg-white px-4 py-3 text-sm transition-colors focus:border-teal-primary focus:outline-none focus:ring-2 focus:ring-teal-primary/20";

export default function EarlyAccessForm() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [companyWebsite, setCompanyWebsite] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [confirmation, setConfirmation] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!marketingConsent) {
      setError("Please confirm that PocketSAM may email you about the launch.");
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "waitlist",
          firstName: firstName.trim(),
          email: email.trim(),
          marketingConsent,
          companyWebsite,
        }),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        setError(
          typeof result.error === "string"
            ? result.error
            : "Unable to join the waitlist. Please try again or email admin@pocketsam.com.",
        );
        return;
      }

      setConfirmation(
        result.duplicate
          ? "This email is already on the waitlist."
          : result.stored
            ? "You're on the waitlist. We saved your email."
            : "Thanks.",
      );
      setSubmitted(true);
    } catch {
      setError(
        "Unable to join the waitlist. Please try again or email admin@pocketsam.com.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="py-16 lg:py-24">
      <Container>
        <div className="mx-auto max-w-xl rounded-3xl bg-cream-warm px-6 py-12 shadow-soft sm:px-10">
          <SectionHeading
            as="h1"
            centered
            title="Join the PocketSAM waitlist."
            subtitle="PocketSAM is in beta. Leave your email and we will write when the app is ready to launch."
          />

          {submitted ? (
            <div
              className="rounded-2xl bg-green-accent/10 px-6 py-5 text-center"
              role="status"
            >
              <p className="font-semibold text-teal-deep">{confirmation}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
                <label htmlFor="company-website">Company website</label>
                <input
                  id="company-website"
                  name="companyWebsite"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={companyWebsite}
                  onChange={(e) => setCompanyWebsite(e.target.value)}
                />
              </div>

              <div>
                <label
                  htmlFor="early-access-name"
                  className="mb-1.5 block text-sm font-medium text-teal-deep"
                >
                  First name <span className="font-normal text-gray-soft">(optional)</span>
                </label>
                <input
                  id="early-access-name"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className={inputClass}
                  placeholder="First name"
                  autoComplete="given-name"
                  maxLength={80}
                  disabled={submitting}
                />
              </div>

              <div>
                <label
                  htmlFor="early-access-email"
                  className="mb-1.5 block text-sm font-medium text-teal-deep"
                >
                  Email
                </label>
                <input
                  id="early-access-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={inputClass}
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                  maxLength={254}
                  disabled={submitting}
                  aria-invalid={error ? true : undefined}
                />
              </div>

              <label className="flex items-start gap-3 text-sm leading-relaxed text-gray-soft">
                <input
                  type="checkbox"
                  checked={marketingConsent}
                  onChange={(e) => setMarketingConsent(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-gray-border text-teal-deep focus:ring-teal-primary/20"
                  disabled={submitting}
                  required
                />
                <span>
                  Email me when PocketSAM launches. I can ask to be removed by writing to{" "}
                  <a
                    href="mailto:admin@pocketsam.com"
                    className="font-semibold text-teal-primary underline-offset-2 hover:underline"
                  >
                    admin@pocketsam.com
                  </a>
                  . See the{" "}
                  <Link
                    href="/privacy"
                    className="font-semibold text-teal-primary underline-offset-2 hover:underline"
                  >
                    Privacy Policy
                  </Link>
                  .
                </span>
              </label>

              {error && (
                <p className="text-sm text-red-600" role="alert">
                  {error}
                </p>
              )}

              <ButtonPrimary type="submit" className="w-full" disabled={submitting}>
                {submitting ? "Sending…" : "Join the Waitlist"}
              </ButtonPrimary>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
