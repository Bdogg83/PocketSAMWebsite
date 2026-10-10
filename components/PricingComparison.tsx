import { Check, Minus } from "lucide-react";
import { Container } from "./ui";
import SectionHeading from "./SectionHeading";
import {
  comparisonGroups,
  pricingPlans,
  type ComparisonValue,
  type PlanKey,
} from "./pricingData";

function ComparisonValueLabel({ value }: { value: ComparisonValue }) {
  if (value.type === "included") {
    return (
      <span className="inline-flex items-center justify-center gap-1.5 whitespace-nowrap text-sm font-medium text-teal-deep">
        <Check className="h-4 w-4 shrink-0 text-green-accent" aria-hidden="true" />
        Included
      </span>
    );
  }

  if (value.type === "excluded") {
    return (
      <span className="inline-flex items-center justify-center gap-1.5 whitespace-nowrap text-sm text-gray-soft">
        <Minus className="h-4 w-4 shrink-0" aria-hidden="true" />
        Not included
      </span>
    );
  }

  return <span className="text-sm font-semibold text-teal-deep">{value.text}</span>;
}

function planValue(values: Record<PlanKey, ComparisonValue>, key: PlanKey) {
  return values[key];
}

export default function PricingComparison() {
  return (
    <section className="scroll-mt-24 pb-12 lg:pb-16" aria-labelledby="plan-comparison-heading">
      <Container>
        <SectionHeading
          centered
          className="mb-4 lg:mb-6"
          title={
            <span id="plan-comparison-heading" className="scroll-mt-28">
              Compare plans
            </span>
          }
          subtitle={
            <>
              Personal includes tools for one person’s own care. Together and Assistant add
              caregiver collaboration and shared care tasks. AI assistance is included only with{" "}
              <span className="whitespace-nowrap">PocketSAM Assistant</span>.
            </>
          }
        />

        <div className="space-y-8 lg:hidden">
          {comparisonGroups.map((group) => (
            <div key={group.label}>
              <h3 className="mb-3 text-lg font-bold text-teal-deep">{group.label}</h3>
              <ul className="space-y-3">
                {group.rows.map((row) => (
                  <li
                    key={row.feature}
                    className="rounded-2xl border border-gray-border bg-white p-4 shadow-soft"
                  >
                    <p className="font-semibold text-teal-deep">{row.feature}</p>
                    <dl className="mt-3 space-y-2">
                      {pricingPlans.map((plan) => (
                        <div
                          key={plan.key}
                          className="flex items-center justify-between gap-3 border-t border-gray-border/80 pt-2 first:border-t-0 first:pt-0"
                        >
                          <dt className="text-sm text-gray-soft">{plan.name}</dt>
                          <dd className="text-right">
                            <ComparisonValueLabel value={planValue(row.values, plan.key)} />
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="hidden overflow-x-auto lg:block">
          <table className="w-full border-separate border-spacing-0 text-left">
            <caption className="sr-only">
              PocketSAM Personal, Together, and Assistant plan comparison
            </caption>
            <thead>
              <tr>
                <th
                  scope="col"
                  className="rounded-tl-2xl border-b border-gray-border bg-cream px-4 py-4 text-sm font-semibold text-teal-deep"
                >
                  Feature
                </th>
                {pricingPlans.map((plan) => (
                  <th
                    key={plan.key}
                    scope="col"
                    className="border-b border-gray-border bg-cream px-4 py-4 text-center text-sm font-semibold text-teal-deep last:rounded-tr-2xl"
                  >
                    {plan.name}
                  </th>
                ))}
              </tr>
            </thead>
            {comparisonGroups.map((group) => (
              <tbody key={group.label}>
                <tr>
                  <th
                    colSpan={4}
                    scope="colgroup"
                    className="bg-green-pale px-4 py-3 text-left text-sm font-bold text-teal-deep"
                  >
                    {group.label}
                  </th>
                </tr>
                {group.rows.map((row) => (
                  <tr key={row.feature}>
                    <th
                      scope="row"
                      className="border-b border-gray-border bg-white px-4 py-3 text-sm font-medium text-teal-deep"
                    >
                      {row.feature}
                    </th>
                    {pricingPlans.map((plan) => (
                      <td
                        key={plan.key}
                        className="border-b border-gray-border bg-white px-4 py-3 text-center"
                      >
                        <ComparisonValueLabel value={planValue(row.values, plan.key)} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            ))}
          </table>
        </div>

        <div className="mx-auto mt-6 max-w-3xl space-y-3 text-sm leading-relaxed text-gray-soft">
          <p>
            The care user does not count toward the caregiver allowance. Unlimited applies to
            additional caregiver accounts on PocketSAM Assistant, not to AI usage. AI usage is
            subject to care-circle-level usage and rate controls. Proposed care changes are
            reviewed and confirmed before they are saved.
          </p>
        </div>
      </Container>
    </section>
  );
}
