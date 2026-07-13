import { Pill, Heart, Users, FileText } from "lucide-react";

function PhoneFrame({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[3rem] border-[8px] border-gray-900 bg-white shadow-soft-lg ${className}`}
    >
      <div className="absolute left-1/2 top-3 z-10 h-6 w-24 -translate-x-1/2 rounded-full bg-gray-900" />
      <div className="px-5 pb-8 pt-12">{children}</div>
    </div>
  );
}

function DashboardPhone() {
  return (
    <PhoneFrame className="relative z-20 w-[260px] -rotate-6 sm:w-[280px] lg:w-[300px]">
      <div className="mb-5 flex items-center gap-3">
        <div className="h-11 w-11 rounded-full bg-gradient-to-br from-teal-primary to-green-accent" />
        <div>
          <p className="text-xs text-gray-soft">Good Morning,</p>
          <p className="text-base font-bold text-teal-deep">Alex</p>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-3 rounded-2xl bg-cream p-3.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-green-accent/15">
            <Pill className="h-5 w-5 text-green-accent" />
          </div>
          <div>
            <p className="text-sm font-semibold text-teal-deep">Medications</p>
            <p className="text-xs text-gray-soft">2 due today</p>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-2xl bg-cream p-3.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-400/15">
            <Heart className="h-5 w-5 text-orange-400" />
          </div>
          <div>
            <p className="text-sm font-semibold text-teal-deep">Check-In</p>
            <p className="text-xs text-gray-soft">How are you feeling?</p>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-2xl bg-cream p-3.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-400/15">
            <Users className="h-5 w-5 text-purple-500" />
          </div>
          <div>
            <p className="text-sm font-semibold text-teal-deep">Care Team</p>
            <p className="text-xs text-gray-soft">3 caregivers</p>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-2xl bg-cream p-3.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-primary/15">
            <FileText className="h-5 w-5 text-teal-primary" />
          </div>
          <div>
            <p className="text-sm font-semibold text-teal-deep">Reports</p>
            <p className="text-xs text-gray-soft">View your summary</p>
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}

function ReportsPhone() {
  return (
    <PhoneFrame className="absolute right-0 top-6 z-10 w-[240px] rotate-6 sm:right-2 sm:w-[260px] lg:right-0 lg:top-4 lg:w-[280px]">
      <p className="mb-4 text-base font-bold text-teal-deep">Reports</p>

      <div className="mb-5 flex gap-2">
        <span className="rounded-full bg-teal-deep px-3.5 py-1.5 text-xs font-semibold text-white">
          7 Days
        </span>
        <span className="rounded-full bg-gray-100 px-3.5 py-1.5 text-xs font-medium text-gray-soft">
          30 Days
        </span>
      </div>

      <p className="mb-2 text-sm font-semibold text-teal-deep">Summary Report</p>

      <div className="mb-5 h-28 rounded-xl bg-gradient-to-t from-teal-primary/10 to-teal-primary/30 p-2">
        <svg viewBox="0 0 200 80" className="h-full w-full" preserveAspectRatio="none">
          <polyline
            points="0,60 30,45 60,50 90,30 120,35 150,20 180,25 200,15"
            fill="none"
            stroke="#14727a"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <polyline
            points="0,60 30,45 60,50 90,30 120,35 150,20 180,25 200,15 200,80 0,80"
            fill="url(#chartGradient)"
            opacity="0.3"
          />
          <defs>
            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#14727a" />
              <stop offset="100%" stopColor="#14727a" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <p className="mb-2 text-sm font-semibold text-teal-deep">Highlights</p>
      <div className="mb-5 space-y-2">
        <div className="h-2.5 w-full rounded-full bg-gray-100" />
        <div className="h-2.5 w-4/5 rounded-full bg-gray-100" />
        <div className="h-2.5 w-3/5 rounded-full bg-gray-100" />
      </div>

      <button
        type="button"
        className="w-full rounded-xl bg-teal-deep py-2.5 text-xs font-semibold text-white"
      >
        Export PDF
      </button>
    </PhoneFrame>
  );
}

export default function PhoneMockups() {
  return (
    <div className="relative mx-auto h-[420px] w-full max-w-[520px] sm:h-[460px] lg:mx-0 lg:ml-auto lg:h-[500px] lg:max-w-none">
      <div className="absolute left-1/2 top-1/2 w-full max-w-[480px] -translate-x-1/2 -translate-y-1/2 lg:left-auto lg:right-0 lg:translate-x-0">
        <DashboardPhone />
        <ReportsPhone />
      </div>
    </div>
  );
}
