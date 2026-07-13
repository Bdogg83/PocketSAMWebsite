"use client";

import { useState, FormEvent } from "react";
import { Container, ButtonPrimary } from "./ui";
import SectionHeading from "./SectionHeading";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please fill in all fields.");
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
          formType: "contact",
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
        }),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        setError(
          typeof result.error === "string"
            ? result.error
            : "Unable to send your message. Please try again or email info@pocketsam.com."
        );
        return;
      }

      setSubmitted(true);
    } catch {
      setError(
        "Unable to send your message. Please try again or email info@pocketsam.com."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="mx-auto max-w-xl rounded-3xl border border-gray-border bg-white p-8 shadow-soft sm:p-10">
      {submitted ? (
        <div
          className="rounded-2xl bg-green-accent/10 px-6 py-5 text-center"
          role="status"
        >
          <p className="font-semibold text-teal-deep">
            Thank you for reaching out! We&apos;ll get back to you soon.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          <div>
            <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-teal-deep">
              Name
            </label>
            <input
              id="contact-name"
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
            <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-teal-deep">
              Email
            </label>
            <input
              id="contact-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-2xl border border-gray-border bg-white px-4 py-3 text-sm transition-colors focus:border-teal-primary focus:outline-none focus:ring-2 focus:ring-teal-primary/20"
              placeholder="you@example.com"
              autoComplete="email"
              disabled={submitting}
            />
          </div>

          <div>
            <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-teal-deep">
              Message
            </label>
            <textarea
              id="contact-message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              className="w-full resize-none rounded-2xl border border-gray-border bg-white px-4 py-3 text-sm transition-colors focus:border-teal-primary focus:outline-none focus:ring-2 focus:ring-teal-primary/20"
              placeholder="How can we help?"
              disabled={submitting}
            />
          </div>

          {error && (
            <p className="text-sm text-red-600" role="alert">
              {error}
            </p>
          )}

          <ButtonPrimary type="submit" className="w-full">
            {submitting ? "Sending…" : "Send Message"}
          </ButtonPrimary>
        </form>
      )}
    </div>
  );
}

export function ContactPageContent() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <SectionHeading
          centered
          title="Get in touch"
          subtitle="PocketSAM is in beta and coming soon. Join the waitlist or ask a question — we'd love to hear from you."
        />
        <ContactForm />
      </Container>
    </section>
  );
}
