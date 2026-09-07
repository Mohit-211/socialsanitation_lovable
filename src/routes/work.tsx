import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Pause, Play, X } from "lucide-react";
import { useState } from "react";

import { ArrowLink, SiteFooter, SiteHeader } from "../components/site-chrome";
import { InternalPageHero } from "../components/internal-page-hero";
import carpetProof from "../assets/carpet-before-after.jpg";
import carpetAction from "../assets/carpet-extraction.jpg";
import floorProof from "../assets/floor-before-after.jpg";
import floorAction from "../assets/floor-care.jpg";
import highDusting from "../assets/high-dusting-action.jpg";
import servicesHero from "../assets/services-hero.jpg";
import stripWaxProof from "../assets/strip-wax-before-after.jpg";
import teamImage from "../assets/team-in-action.jpg";
import tileProof from "../assets/tile-grout-before-after.jpg";

export const Route = createFileRoute("/work")({
  head: () => ({ meta: [
    { title: "Our Commercial Cleaning Work | Social Sanitation" },
    { name: "description", content: "See commercial floor restoration, carpet extraction, tile and grout cleaning, and specialized cleaning results from Social Sanitation." },
    { property: "og:title", content: "See the Difference | Social Sanitation" },
    { property: "og:description", content: "A visual portfolio of professional commercial cleaning results across Central Florida." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: WorkPage,
});

function WorkPage() {
  const [position, setPosition] = useState(50);
  const [activePreview, setActivePreview] = useState<string | null>(null);
  return <div className="overflow-x-hidden bg-background text-foreground">
    <SiteHeader />
    <main>
      <InternalPageHero eyebrow="Our Work" title="See the Difference." description="The work speaks through visible results—restored floors, refreshed carpet, clean surfaces, and commercial spaces ready for business." image={servicesHero} imageAlt="Professional cleaner restoring a floor in a large commercial facility" />

      <section className="section-space"><div className="mx-auto max-w-[1440px] px-5 lg:px-10"><div className="mb-10 grid gap-7 lg:grid-cols-2 lg:items-end"><div><p className="eyebrow mb-5"><span /> Featured transformation</p><h2 className="section-title">Restoration, revealed.</h2></div><p className="max-w-lg leading-8 text-muted-foreground lg:justify-self-end">Drag across the image to compare a commercial floor before and after focused restoration.</p></div><Comparison image={floorProof} label="Floor restoration" position={position} setPosition={setPosition} /></div></section>

      <section className="section-space bg-surface"><div className="mx-auto max-w-[1440px] px-5 lg:px-10"><p className="eyebrow mb-6"><span /> Before &amp; after</p><h2 className="section-title max-w-3xl">Commercial spaces, brought back to standard.</h2>
        <div className="mt-14 space-y-16 lg:space-y-18">
          <figure><img src={carpetProof} alt="Before and after commercial carpet extraction" width={1600} height={1104} loading="lazy" className="aspect-[16/9] w-full object-cover" /><figcaption className="mt-4 flex items-center justify-between border-t border-border pt-4 text-sm font-bold"><span>Carpet Extraction</span><span className="text-muted-foreground">Before / After</span></figcaption></figure>
          <div className="grid gap-7 lg:grid-cols-12 lg:items-end"><figure className="lg:col-span-7"><img src={tileProof} alt="Before and after tile and grout cleaning" width={1600} height={1104} loading="lazy" className="aspect-[4/3] w-full object-cover" /><figcaption className="mt-4 text-sm font-bold">Tile &amp; Grout</figcaption></figure><figure className="lg:col-span-5 lg:pb-12"><img src={stripWaxProof} alt="Before and after commercial strip and wax" width={1600} height={1104} loading="lazy" className="aspect-square w-full object-cover" /><figcaption className="mt-4 text-sm font-bold">Strip &amp; Wax</figcaption></figure></div>
          <div className="grid gap-7 lg:grid-cols-12"><figure className="lg:col-span-5"><img src={highDusting} alt="Technician performing high dusting in a commercial atrium" width={1504} height={1104} loading="lazy" className="aspect-[4/5] w-full object-cover" /><figcaption className="mt-4 text-sm font-bold">High Dusting</figcaption></figure><figure className="lg:col-span-7 lg:pt-20"><img src={floorAction} alt="Professional floor care in progress" width={1280} height={960} loading="lazy" className="aspect-[4/3] w-full object-cover" /><figcaption className="mt-4 text-sm font-bold">Floor Care</figcaption></figure></div>
        </div>
      </div></section>

      <section className="section-space bg-foreground text-background"><div className="mx-auto max-w-[1440px] px-5 lg:px-10"><div className="mb-10"><p className="eyebrow eyebrow-light mb-5"><span /> Cleaning in action</p><h2 className="section-title">Watch the work behind the result.</h2></div><div className="grid gap-6 lg:grid-cols-12"><VideoPreview image={teamImage} title="Day Porter Services" className="lg:col-span-8" onPlay={setActivePreview} /><VideoPreview image={highDusting} title="High Dusting" className="lg:col-span-4" onPlay={setActivePreview} /><VideoPreview image={carpetAction} title="Carpet Extraction" className="lg:col-span-5" onPlay={setActivePreview} /><VideoPreview image={floorAction} title="Strip & Wax · Acid Wash" className="lg:col-span-7" onPlay={setActivePreview} /></div></div></section>

      <section className="section-space"><div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-12 lg:px-10"><div className="lg:col-span-5"><p className="eyebrow mb-6"><span /> Every facility is different</p><h2 className="section-title">The scope changes. The standard stays.</h2><p className="mt-7 leading-8 text-muted-foreground">Traffic, surfaces, operating hours, and sanitation needs shape every plan. We handle recurring maintenance and specialized cleaning projects with the equipment and process each facility requires.</p><div className="mt-8"><ArrowLink href="/services">Explore Our Services</ArrowLink></div></div><img src={floorAction} alt="Professional commercial floor-cleaning equipment in active use" width={1280} height={960} loading="lazy" className="aspect-[5/4] w-full object-cover lg:col-span-6 lg:col-start-7" /></div></section>

      <section className="relative"><img src={teamImage} alt="Commercial cleaning team working together" width={1536} height={1024} loading="lazy" className="h-[420px] w-full object-cover" /><div className="absolute inset-0 bg-foreground/75" /><div className="absolute inset-0 grid place-items-center px-5 text-center text-background"><div><p className="eyebrow eyebrow-light mb-6 justify-center"><span /> Your facility, next</p><h2 className="font-display text-2xl font-semibold sm:text-3xl">Put a professional standard to work.</h2><div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"><a href="/contact#estimate" className="inline-flex min-h-14 items-center justify-center gap-3 bg-primary px-7 text-sm font-extrabold text-primary-foreground">Request a Free Estimate <ArrowRight className="size-4" /></a><a href="tel:+18136972664" className="inline-flex min-h-14 items-center justify-center border border-background/50 px-7 text-sm font-bold text-background">Call (813) 697-2664</a></div></div></div></section>
    </main><SiteFooter />
    {activePreview && <div role="dialog" aria-modal="true" className="fixed inset-0 z-[70] grid place-items-center bg-foreground/95 p-5" onClick={() => setActivePreview(null)}><div className="relative w-full max-w-4xl bg-background p-8 text-center" onClick={(event) => event.stopPropagation()}><Pause className="mx-auto size-9 text-primary" /><h2 className="mt-5 font-display text-2xl font-semibold">{activePreview}</h2><p className="mt-3 text-muted-foreground">Video preview ready for the original Social Sanitation footage.</p><button type="button" onClick={() => setActivePreview(null)} aria-label="Close video preview" className="absolute right-3 top-3 grid size-10 place-items-center border border-border"><X /></button></div></div>}
  </div>;
}

function Comparison({ image, label, position, setPosition }: { image: string; label: string; position: number; setPosition: (value: number) => void }) { return <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[16/9] lg:aspect-[2/1]"><div className="absolute inset-0 bg-cover bg-left" style={{ backgroundImage: `url(${image})`, backgroundSize: "200% 100%" }} /><div className="absolute inset-0 bg-cover bg-right" style={{ backgroundImage: `url(${image})`, backgroundSize: "200% 100%", clipPath: `inset(0 0 0 ${position}%)` }} /><div className="pointer-events-none absolute inset-y-0 w-px bg-background" style={{ left: `${position}%` }}><span className="absolute left-1/2 top-1/2 grid size-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-background shadow-editorial">↔</span></div><span className="absolute left-5 top-5 bg-foreground px-4 py-2 text-xs font-bold uppercase text-background">Before</span><span className="absolute right-5 top-5 bg-primary px-4 py-2 text-xs font-bold uppercase text-primary-foreground">After</span><span className="absolute bottom-5 left-5 bg-background px-4 py-2 text-xs font-bold">{label}</span><input aria-label={`Compare before and after ${label}`} type="range" min="15" max="85" value={position} onChange={(event) => setPosition(Number(event.target.value))} className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0" /></div>; }

function VideoPreview({ image, title, className, onPlay }: { image: string; title: string; className: string; onPlay: (title: string) => void }) { return <figure className={`group relative min-h-[340px] overflow-hidden ${className}`}><img src={image} alt={`${title} commercial cleaning video preview`} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" /><div className="absolute inset-0 bg-video-overlay" /><button type="button" onClick={() => onPlay(title)} aria-label={`Play ${title} preview`} className="absolute left-1/2 top-1/2 grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-primary text-primary-foreground"><Play className="ml-1 size-6 fill-current" /></button><figcaption className="absolute inset-x-0 bottom-0 p-7 font-display text-xl font-semibold text-background">{title}</figcaption></figure>; }