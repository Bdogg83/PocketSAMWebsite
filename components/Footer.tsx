import Link from "next/link";
import { Mail } from "lucide-react";
import { PocketSAMLogo, Container } from "./ui";

const footerLinks = [
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
];

const socialLinks = [
  { href: "mailto:admin@pocketsam.com", label: "Email", icon: Mail },
];

export default function Footer() {
  return (
    <footer className="bg-teal-deep text-white">
      <Container className="py-8 lg:py-10">
        <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="text-center lg:text-left">
            <PocketSAMLogo className="mx-auto h-14 w-14 object-contain lg:mx-0" />
          </div>

          <nav
            className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2"
            aria-label="Footer navigation"
          >
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/85 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-6 border-t border-white/15 pt-5 text-center">
          <p className="text-xs text-white/70 sm:text-sm">
            &copy; 2026 PocketSAM. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
