import Link from "next/link";

const linkClass =
  "rounded-sm font-semibold text-teal-primary underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-deep";

export default function PlanAvailabilityNote() {
  return (
    <p className="mt-4 text-sm leading-relaxed text-gray-soft sm:text-base">
      These tools are available for your own care on every plan. Additional caregiver
      accounts and shared access are included with PocketSAM Together and PocketSAM
      Assistant.{" "}
      <Link href="/pricing" className={linkClass}>
        View plans
      </Link>
    </p>
  );
}
