import { ArrowRight, Phone } from "lucide-react";
import type { ReactNode } from "react";

type InternalPageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description: string;
  image: string;
  imageAlt: string;
  primaryHref?: string;
  primaryLabel?: string;
};

export function InternalPageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  primaryHref = "/contact#estimate",
  primaryLabel = "Request a Free Estimate",
}: InternalPageHeroProps) {
  return (
    <section className="bg-surface px-4 pb-6 pt-24 sm:px-6 sm:pb-8 lg:px-8 lg:pb-10 lg:pt-28">
      <div className="mx-auto grid max-w-[1380px] overflow-hidden border border-border bg-background shadow-editorial lg:h-[500px] lg:grid-cols-2">
        <div className="flex flex-col justify-center px-6 py-12 sm:px-10 lg:px-14 lg:py-16 xl:px-18">
          <nav aria-label="Breadcrumb" className="mb-7 flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-wide text-muted-foreground">
            <a href="/" className="transition-colors hover:text-foreground">Home</a>
            <span aria-hidden="true">/</span>
            <span className="text-foreground">{eyebrow}</span>
          </nav>
          <p className="mb-5 inline-flex w-fit items-center gap-2 bg-brand-wash px-3 py-1.5 text-[0.65rem] font-extrabold uppercase tracking-wide text-foreground">
            <span className="size-1.5 bg-primary" /> Social Sanitation
          </p>
          <h1 className="max-w-xl font-display text-3xl font-semibold leading-[1.12] sm:text-4xl lg:text-[2.65rem]">{title}</h1>
          <p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">{description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={primaryHref} className="inline-flex min-h-12 items-center justify-center gap-3 bg-primary px-6 text-sm font-extrabold text-primary-foreground transition-transform hover:-translate-y-0.5">
              {primaryLabel} <ArrowRight className="size-4" />
            </a>
            <a href="tel:+18136972664" className="inline-flex min-h-12 items-center justify-center gap-3 border border-border px-6 text-sm font-bold text-foreground transition-colors hover:bg-surface">
              <Phone className="size-4 text-primary" /> Call Us
            </a>
          </div>
        </div>
        <div className="relative min-h-[250px] overflow-hidden lg:min-h-full">
          <img src={image} alt={imageAlt} width={1600} height={1056} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background/15 to-transparent" />
        </div>
      </div>
    </section>
  );
}