import { HeartHandshake } from "lucide-react";
import { Container, GreenAccent } from "./ui";

export default function GivingMission() {
  return (
    <section className="py-4 lg:py-6">
      <Container>
        <div className="flex flex-col items-start gap-5 rounded-3xl bg-green-pale p-5 sm:flex-row sm:items-center sm:p-6">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white shadow-soft">
            <HeartHandshake className="h-8 w-8 text-teal-primary" aria-hidden="true" />
          </div>

          <div>
            <h2 className="text-xl font-bold text-teal-deep sm:text-2xl text-balance">
              We grow. <GreenAccent>We give.</GreenAccent>
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-soft sm:text-base">
              A portion of every PocketSAM purchase supports care-focused initiatives and
              organizations that help patients, caregivers, and families.
            </p>
            <p className="mt-2 text-sm font-semibold text-green-accent">
              Better care for more people. Together.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
