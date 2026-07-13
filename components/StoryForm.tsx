"use client";

import { useState, FormEvent } from "react";
import { ButtonPrimary } from "./ui";

const roles = [
  "Caregiver",
  "Family member",
  "Patient",
  "Friend / support person",
  "Other",
];

export default function StoryForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [story, setStory] = useState("");
  const [canFeature, setCanFeature] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name.trim() || !email.trim() || !role || !story.trim()) {
      setError("Please fill in all required fields.");
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
          formType: "story",
          name: name.trim(),
          email: email.trim(),
          role,
          story: story.trim(),
          canFeature,
        }),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        setError(
          typeof result.error === "string"
            ? result.error
            : "Unable to send your story. Please try again or email info@pocketsam.com."
        );
        return;
      }

      setSubmitted(true);
    } catch {
      setError(
        "Unable to send your story. Please try again or email info@pocketsam.com."
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div
        className="rounded-2xl bg-green-accent/10 px-6 py-5 text-center"
        role="status"
      >
        <p className="font-semibold text-teal-deep">Thank you for sharing your story.</p>
        <p className="mt-2 text-sm text-gray-soft">
          We read every submission. If you gave permission, we may feature it on this page.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div>
        <label htmlFor="story-name" className="mb-1.5 block text-sm font-medium text-teal-deep">
          Name <span className="text-gray-soft">(or first name / nickname)</span>
        </label>
        <input
          id="story-name"
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
        <label htmlFor="story-email" className="mb-1.5 block text-sm font-medium text-teal-deep">
          Email
        </label>
        <input
          id="story-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-2xl border border-gray-border bg-white px-4 py-3 text-sm transition-colors focus:border-teal-primary focus:outline-none focus:ring-2 focus:ring-teal-primary/20"
          placeholder="you@example.com"
          autoComplete="email"
          disabled={submitting}
        />
        <p className="mt-1.5 text-xs text-gray-soft">
          We only use this to follow up if needed. It will not be published.
        </p>
      </div>

      <div>
        <label htmlFor="story-role" className="mb-1.5 block text-sm font-medium text-teal-deep">
          I am a…
        </label>
        <select
          id="story-role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full rounded-2xl border border-gray-border bg-white px-4 py-3 text-sm transition-colors focus:border-teal-primary focus:outline-none focus:ring-2 focus:ring-teal-primary/20"
          disabled={submitting}
        >
          <option value="">Select one</option>
          {roles.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="story-body" className="mb-1.5 block text-sm font-medium text-teal-deep">
          Your story
        </label>
        <textarea
          id="story-body"
          value={story}
          onChange={(e) => setStory(e.target.value)}
          rows={6}
          className="w-full resize-y rounded-2xl border border-gray-border bg-white px-4 py-3 text-sm transition-colors focus:border-teal-primary focus:outline-none focus:ring-2 focus:ring-teal-primary/20"
          placeholder="Tell us about your experience with PocketSAM or caregiving. A few sentences is enough."
          disabled={submitting}
        />
      </div>

      <label className="flex items-start gap-3 text-sm text-gray-soft">
        <input
          type="checkbox"
          checked={canFeature}
          onChange={(e) => setCanFeature(e.target.checked)}
          className="mt-1 h-4 w-4 rounded border-gray-border text-teal-deep focus:ring-teal-primary/20"
          disabled={submitting}
        />
        <span>
          Yes, PocketSAM may feature my story on this Blog page (with my name as written above).
        </span>
      </label>

      {error && (
        <p className="text-sm text-red-600" role="alert">
          {error}
        </p>
      )}

      <ButtonPrimary type="submit" className="w-full">
        {submitting ? "Sending…" : "Submit Your Story"}
      </ButtonPrimary>
    </form>
  );
}
