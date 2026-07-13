"use client";

import { useState, FormEvent } from "react";
import { Container } from "./ui";
import SectionHeading from "./SectionHeading";
import { ButtonPrimary } from "./ui";

export default function EarlyAccessForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name.trim() || !email.trim()) {
      setError("Please fill in both your name and email.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "waitlist",
          name: name.trim(),
          email: email.trim(),
        }),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        setError(
          typeof result.error === "string"
            ? result.error
            : "Unable to join the waitlist. Please try again or email info@pocketsam.com."
        );
        return;
      }

      setSubmitted(true);
    } catch {
      setError(
        "Unable to join the waitlist. Please try again or email info@pocketsam.com."
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
            centered
            title="Your pocket caregiver is almost here."
            subtitle="PocketSAM is in beta testing now. Join the waitlist and be the first to know when the app and full website launch."
          />

          {submitted ? (
            <div
              className="rounded-2xl bg-green-accent/10 px-6 py-5 text-center"
              role="status"
            >
              <p className="font-semibold text-teal-deep">
                Thank you! You&apos;re on the early access list.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div>
                <label htmlFor="early-access-name" className="mb-1.5 block text-sm font-medium text-teal-deep">
                  Name
                </label>
                <input
                  id="early-access-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-2xl border border-gray-border bg-white px-4 py-3 text-sm transition-colors focus:border-teal-primary focus:outline-none focus:ring-2 focus:ring-teal-primary/20"
                  placeholder="Your name"
                  autoComplete="name"
                  disabled={submitting}
                />
              </div>

              <div>
                <label htmlFor="early-access-email" className="mb-1.5 block text-sm font-medium text-teal-deep">
                  Email
                </label>
                <input
                  id="early-access-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-2xl border border-gray-border bg-white px-4 py-3 text-sm transition-colors focus:border-teal-primary focus:outline-none focus:ring-2 focus:ring-teal-primary/20"
                  placeholder="you@example.com"
                  autoComplete="email"
                  disabled={submitting}
                />
              </div>

              {error && (
                <p className="text-sm text-red-600" role="alert">
                  {error}
                </p>
              )}

              <ButtonPrimary type="submit" className="w-full">
                {submitting ? "Sending…" : "Join the Waitlist"}
              </ButtonPrimary>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
