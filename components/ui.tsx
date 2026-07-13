import Image from "next/image";
import Link from "next/link";

export function PocketSAMLogo({
  className = "",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src="/PocketSAM.png"
      alt="PocketSAM logo"
      width={200}
      height={200}
      priority={priority}
      className={`object-contain ${className}`}
    />
  );
}

export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] ${className}`}
    >
      {children}
    </div>
  );
}

export function ButtonPrimary({
  children,
  href,
  className = "",
  type = "button",
  onClick,
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
}) {
  const classes = `inline-flex items-center justify-center rounded-2xl bg-teal-deep px-6 py-3 text-sm font-semibold text-white shadow-soft transition-all hover:bg-teal-primary hover:shadow-soft-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-deep ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

export function ButtonSecondary({
  children,
  href,
  className = "",
  type = "button",
  onClick,
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-teal-deep bg-white px-6 py-3 text-sm font-semibold text-teal-deep transition-all hover:bg-teal-deep/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-deep ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

export function GreenAccent({ children }: { children: React.ReactNode }) {
  return <span className="text-green-accent">{children}</span>;
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-green-accent">
      {children}
    </p>
  );
}
