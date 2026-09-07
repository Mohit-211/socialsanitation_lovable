import { Link } from "@tanstack/react-router";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Our Work", to: "/work" },
  { label: "Service Areas", to: "/service-areas" },
  { label: "Careers", to: "/careers" },
  { label: "Videos", to: "/videos" },
  { label: "Contact", to: "/contact" },
];

export function Brand() {
  return (
    <Link to="/" className="group flex items-center gap-3" aria-label="Social Sanitation home">
      <span className="relative grid size-9 place-items-center bg-foreground text-sm font-bold text-background after:absolute after:-right-1 after:-top-1 after:size-2.5 after:bg-primary">SS</span>
      <span className="leading-none">
        <strong className="block font-display text-base">Social Sanitation</strong>
        <span className="text-[0.6rem] font-bold uppercase tracking-wide text-muted-foreground">Commercial Cleaning</span>
      </span>
    </Link>
  );
}

export function ArrowLink({ href, children, light = false }: { href: string; children: React.ReactNode; light?: boolean }) {
  return (
    <a href={href} className={`group inline-flex items-center gap-3 border-b pb-2 text-sm font-bold ${light ? "border-background/40 text-background" : "border-foreground/25 text-foreground"}`}>
      {children}
      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
    </a>
  );
}

export function SiteHeader({ estimateHref = "/contact#estimate" }: { estimateHref?: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 lg:px-10">
        <Brand />
        <nav className="hidden items-center gap-5 xl:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.label} href={item.to} className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground">{item.label}</a>
          ))}
        </nav>
        <a href={estimateHref} className="hidden items-center gap-2 bg-primary px-5 py-3 text-sm font-extrabold text-primary-foreground transition-colors hover:bg-secondary xl:inline-flex">Request a Quote <ArrowRight className="size-4" /></a>
        <button type="button" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)} className="grid size-11 place-items-center border border-border xl:hidden">{menuOpen ? <X /> : <Menu />}</button>
      </div>
      {menuOpen && (
        <nav className="max-h-[calc(100svh-5rem)] overflow-y-auto border-t border-border bg-background px-5 py-5 xl:hidden" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <a key={item.label} onClick={() => setMenuOpen(false)} href={item.to} className="block border-b border-border py-4 font-bold">{item.label}</a>
          ))}
          <a href={estimateHref} onClick={() => setMenuOpen(false)} className="mt-5 flex justify-center bg-primary px-6 py-4 font-extrabold text-primary-foreground">Request a Free Estimate</a>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-[1440px] px-5 py-16 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Brand />
            <p className="mt-6 max-w-sm leading-7 text-muted-foreground">Veteran-owned commercial cleaning and sanitation for facilities throughout Central Florida.</p>
          </div>
          <div className="lg:col-span-3">
            <p className="footer-title">Explore</p>
            {navItems.map((item) => <a key={item.label} href={item.to} className="footer-link">{item.label}</a>)}
          </div>
          <div className="lg:col-span-4">
            <p className="footer-title">Selected services</p>
            <p className="text-sm leading-8 text-muted-foreground">Janitorial · Custodial · Day Porter<br />Floor Care · Carpet Extraction<br />Disinfection · Specialized Cleaning</p>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Social Sanitation. All rights reserved.</p>
          <p>Commercial cleaning across Central Florida.</p>
        </div>
      </div>
    </footer>
  );
}
