interface SectionHeadingProps {
  label?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  centered?: boolean;
  className?: string;
  /** Use h1 for page-level primary headings; default remains h2 for section headings. */
  as?: "h1" | "h2";
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  centered = false,
  className = "",
  as = "h2",
}: SectionHeadingProps) {
  const HeadingTag = as;
  const headingClassName =
    "text-3xl font-bold leading-tight tracking-tight text-teal-deep sm:text-4xl lg:text-[2.5rem] text-balance";

  return (
    <div
      className={`mb-6 lg:mb-8 ${centered ? "mx-auto max-w-2xl text-center" : ""} ${className}`}
    >
      {label && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-green-accent">
          {label}
        </p>
      )}
      <HeadingTag className={headingClassName}>{title}</HeadingTag>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-gray-soft sm:text-lg">{subtitle}</p>
      )}
    </div>
  );
}
