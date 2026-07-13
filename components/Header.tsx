"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { PocketSAMLogo, ButtonPrimary, Container } from "./ui";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/about", label: "About Us" },
  { href: "/pricing", label: "Pricing" },
  { href: "/tutorials", label: "Tutorials" },
  { href: "/blog", label: "Blog" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-border/60 bg-white/95 backdrop-blur-md">
      <Container>
        <div className="relative flex h-16 items-center justify-between gap-2 sm:h-[72px] sm:gap-3">
          <Link
            href="/"
            aria-label="PocketSAM home"
            className="relative z-10 min-w-0 shrink-0 overflow-hidden"
          >
            <PocketSAMLogo
              priority
              className="h-10 w-10 max-w-full object-contain object-left sm:h-12 sm:w-12"
            />
          </Link>

          <nav
            className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-8 lg:flex"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium transition-colors hover:text-teal-deep ${
                  isActive(link.href) ? "text-teal-deep" : "text-gray-soft"
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-teal-deep" />
                )}
              </Link>
            ))}
          </nav>

          <div className="relative z-10 hidden items-center gap-3 lg:flex">
            <span className="rounded-full bg-green-pale px-3 py-1 text-xs font-semibold text-teal-deep">
              Beta
            </span>
            <ButtonPrimary href="/contact">Coming Soon</ButtonPrimary>
          </div>

          <button
            type="button"
            className="relative z-10 shrink-0 rounded-xl p-2 text-teal-deep transition-colors hover:bg-cream lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </Container>

      {mobileOpen && (
        <div
          id="mobile-menu"
          className="border-t border-gray-border/60 bg-white px-4 pb-6 pt-4 lg:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                  isActive(link.href)
                    ? "bg-cream text-teal-deep"
                    : "text-gray-soft hover:bg-cream/60 hover:text-teal-deep"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 space-y-3 px-4">
              <p className="text-center text-xs font-semibold uppercase tracking-wide text-green-accent">
                Beta testing in progress
              </p>
              <ButtonPrimary href="/contact" className="w-full">
                Coming Soon
              </ButtonPrimary>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
