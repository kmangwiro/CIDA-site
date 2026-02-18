import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram } from "lucide-react"

const links = {
  navigation: [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Thematic Areas", href: "#thematic-areas" },
    { label: "Projects", href: "#projects" },
  ],
  support: [
    { label: "Gallery", href: "#gallery" },
    { label: "Get Involved", href: "#get-involved" },
    { label: "Contact", href: "#contact" },
  ],
}

const socials = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-foreground py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <Image
                src="/images/cida-original.png"
                alt="CIDA Logo"
                width={56}
                height={56}
                className="h-14 w-14 object-contain brightness-0 invert"
              />
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-background/60">
              Community Innovation and Development Aid. Empowering communities
              through innovation since 2021. Building resilient, healthy and
              sustainable communities across Zimbabwe.
            </p>
            <div className="mt-5 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-background/10 text-background/60 transition-colors hover:bg-background/20 hover:text-background"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-background/40">
              Navigation
            </h4>
            <ul className="mt-4 space-y-3">
              {links.navigation.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-background/60 transition-colors hover:text-background"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-background/40">
              Support
            </h4>
            <ul className="mt-4 space-y-3">
              {links.support.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-background/60 transition-colors hover:text-background"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-background/10 pt-8 text-center text-xs text-background/40">
          {`\u00A9 ${new Date().getFullYear()} Community Innovation and Development Aid (CIDA). All rights reserved.`}
        </div>
      </div>
    </footer>
  )
}
