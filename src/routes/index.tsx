import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, ChevronRight, Pause, Play, ShieldCheck, X } from "lucide-react";
import { useState, type FormEvent } from "react";

import { ArrowLink, SiteFooter, SiteHeader } from "../components/site-chrome";

import aboutImage from "../assets/social-sanitation-about.jpg";
import carpetImage from "../assets/carpet-extraction.jpg";
import floorProofImage from "../assets/floor-before-after.jpg";
import floorImage from "../assets/floor-care.jpg";
import heroImage from "../assets/social-sanitation-hero.jpg";
import specializedImage from "../assets/specialized-sanitation.jpg";
import teamImage from "../assets/team-in-action.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Commercial Cleaning Central Florida | Social Sanitation" },
      { name: "description", content: "Veteran-owned commercial cleaning, janitorial, floor care, carpet cleaning, and specialized sanitation services across Central Florida." },
      { property: "og:title", content: "Social Sanitation | Commercial Cleaning Central Florida" },
      { property: "og:description", content: "Professional commercial cleaning and specialized sanitation for Central Florida facilities." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const mainServices = [
  { name: "Janitorial Services", detail: "Consistent care for workplaces and commercial facilities." },
  { name: "Day Porter Services", detail: "Visible, responsive upkeep throughout your operating day." },
  { name: "Disinfection & Sanitation", detail: "Focused treatment for critical high-touch environments." },
  { name: "Specialized Cleaning", detail: "Technical solutions for challenging facility needs." },
];

const allServices = [
  "Housekeeping Services", "Custodial Services", "Move-In Services", "Electrostatic Disinfection",
  "Surgical Room Sanitizing Services", "Commercial Carpet Cleaning", "Carpet Extraction", "Tile & Grout Cleaning",
  "Strip & Wax", "Window Cleaning", "High Dusting", "Acid Wash", "First Time Clean",
];


function HomePage() {
  const [proofPosition, setProofPosition] = useState(50);
  const [submitted, setSubmitted] = useState(false);
  const [reelOpen, setReelOpen] = useState(false);

  function submitEstimate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div id="top" className="overflow-x-hidden bg-background text-foreground">
      <SiteHeader estimateHref="#estimate" />

      <main>
        <section className="relative pt-20">
          <div className="mx-auto grid min-h-[680px] max-w-[1440px] items-center gap-10 px-5 py-10 lg:grid-cols-12 lg:gap-14 lg:px-10 lg:py-12">
            <div className="relative z-10 order-2 lg:order-1 lg:col-span-6">
              <p className="eyebrow mb-6"><span /> Veteran owned · Central Florida</p>
              <h1 className="max-w-3xl font-display text-3xl font-semibold leading-[1.08] sm:text-4xl lg:text-5xl">Professional cleaning for <em className="font-normal text-muted-foreground">serious</em> facilities.</h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground">Dependable commercial cleaning and specialized sanitation that protects your facility, your people, and the standard your business represents.</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href="#estimate" className="group inline-flex min-h-14 items-center justify-center gap-3 bg-foreground px-7 text-sm font-extrabold text-background transition-transform hover:-translate-y-1">Request a Free Estimate <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></a>
                <a href="#services" className="inline-flex min-h-14 items-center justify-center border border-border px-7 text-sm font-extrabold transition-colors hover:bg-muted">View Our Services</a>
              </div>
            </div>
            <div className="relative order-1 lg:order-2 lg:col-span-6">
               <div className="aspect-[5/4] max-h-[590px] overflow-hidden bg-muted lg:aspect-[4/5]">
                <img src={heroImage} alt="Professional commercial cleaning team servicing a modern facility" width={1536} height={1024} fetchPriority="high" className="h-full w-full object-cover object-center" />
              </div>
              <div className="absolute -bottom-5 left-5 flex items-center gap-4 bg-background p-5 shadow-editorial sm:left-auto sm:right-[-1px] sm:max-w-xs">
                <ShieldCheck className="size-8 shrink-0 text-primary" /><p className="text-sm font-semibold leading-5">Professional care for commercial properties and facilities.</p>
              </div>
              <div className="absolute -right-4 -top-4 -z-10 size-full border border-secondary/60" />
            </div>
          </div>
        </section>

        <section aria-label="Company values" className="border-y border-border bg-surface">
          <div className="mx-auto grid max-w-[1440px] grid-cols-2 px-5 md:grid-cols-4 lg:px-10">
            {["Veteran Owned", "Commercial Cleaning", "Professional Service", "Central Florida"].map((item, index) => <div key={item} className={`flex min-h-24 items-center gap-3 py-5 text-sm font-extrabold uppercase ${index % 2 ? "pl-5" : "pr-5"} md:border-r md:px-6 md:last:border-r-0`}><span className="size-1.5 bg-primary" />{item}</div>)}
          </div>
        </section>

        <section id="about" className="section-space scroll-mt-20">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-12 lg:px-10">
            <div className="relative lg:col-span-5"><img src={aboutImage} alt="Commercial cleaning team lead inspecting facility work" width={1024} height={1280} loading="lazy" className="aspect-[4/5] w-full object-cover" /><div className="absolute -bottom-8 -right-5 w-44 bg-primary p-5 font-display text-xl font-semibold leading-tight text-primary-foreground sm:w-52">Veteran owned. Detail driven.</div></div>
            <div className="lg:col-span-6 lg:col-start-7"><p className="eyebrow mb-6"><span /> About Social Sanitation</p><h2 className="section-title">A higher standard for the places where business happens.</h2><div className="mt-8 max-w-xl space-y-5 text-base leading-8 text-muted-foreground"><p>Social Sanitation provides dependable cleaning and sanitation for commercial properties and facilities throughout Central Florida.</p><p>Our veteran-owned approach is built on discipline, clear standards, and attention to the work others overlook—from daily janitorial care to specialized sanitation and floor restoration.</p></div><div className="mt-9"><ArrowLink href="#why-us">Learn More About Us</ArrowLink></div></div>
          </div>
        </section>

        <section id="services" className="section-space scroll-mt-20 bg-surface">
          <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
            <div className="grid items-end gap-8 border-b border-border pb-12 lg:grid-cols-2"><div><p className="eyebrow mb-5"><span /> What we do</p><h2 className="section-title">Commercial care, from the everyday to the exacting.</h2></div><p className="max-w-xl text-lg leading-8 text-muted-foreground lg:justify-self-end">Flexible facility service built around your environment—not a one-size-fits-all residential cleaning checklist.</p></div>
            <div className="mt-16 grid gap-7 lg:grid-cols-12">
              <article className="group relative min-h-[430px] overflow-hidden lg:col-span-7"><img src={floorImage} alt="Technician performing commercial floor care" width={1280} height={960} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" /><div className="absolute inset-0 bg-image-overlay" /><div className="absolute inset-x-0 bottom-0 p-7 text-background sm:p-9"><p className="mb-3 text-xs font-bold uppercase tracking-wide text-primary">Floor care</p><h3 className="font-display text-2xl font-semibold sm:text-3xl">Restore the standard from the ground up.</h3><p className="mt-4 max-w-lg leading-7 text-background/80">Strip & Wax · Tile & Grout Cleaning · Acid Wash · First Time Clean</p></div></article>
              <article className="group relative min-h-[430px] overflow-hidden lg:col-span-5"><img src={carpetImage} alt="Commercial carpet extraction in a corporate facility" width={1024} height={1280} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" /><div className="absolute inset-0 bg-image-overlay" /><div className="absolute inset-x-0 bottom-0 p-7 text-background sm:p-9"><p className="mb-3 text-xs font-bold uppercase tracking-wide text-secondary">Carpet cleaning</p><h3 className="font-display text-2xl font-semibold sm:text-3xl">Deep extraction. Visible results.</h3></div></article>
            </div>
            <div className="mt-14 grid gap-x-12 lg:grid-cols-2">{mainServices.map((service, index) => <a key={service.name} href="#estimate" className="group flex items-start justify-between gap-6 border-t border-border py-7"><div className="flex gap-5"><span className="pt-1 text-xs font-bold text-muted-foreground">0{index + 1}</span><div><h3 className="font-display text-xl font-semibold">{service.name}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{service.detail}</p></div></div><ChevronRight className="mt-1 size-5 shrink-0 transition-transform group-hover:translate-x-1 group-hover:text-primary" /></a>)}</div>
            <div className="mt-7 flex flex-wrap items-center justify-between gap-6 border-t border-border pt-8"><p className="max-w-4xl text-sm leading-7 text-muted-foreground">{allServices.join(" · ")}</p><ArrowLink href="#estimate">View All Services</ArrowLink></div>
          </div>
        </section>

        <section id="why-us" className="section-space scroll-mt-20">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-12 lg:px-10">
            <div className="lg:col-span-5"><p className="eyebrow mb-6"><span /> Why Social Sanitation</p><h2 className="section-title">The work is visible. So is the discipline behind it.</h2><p className="mt-7 max-w-lg text-lg leading-8 text-muted-foreground">We bring a service-minded, accountable approach to routine facility care and technically demanding cleaning work alike.</p></div>
            <div className="lg:col-span-6 lg:col-start-7">{["Veteran-owned leadership", "Professional operating standards", "Attention to high-impact details", "Dependable routine service", "Capability for specialized requirements"].map((point, i) => <div key={point} className="flex items-center gap-5 border-b border-border py-6"><span className="grid size-7 place-items-center bg-secondary text-foreground"><Check className="size-4" /></span><p className="font-display text-lg font-semibold sm:text-xl">{point}</p><span className="ml-auto text-xs text-muted-foreground">0{i + 1}</span></div>)}</div>
          </div>
        </section>

        <section id="our-work" className="section-space scroll-mt-20 bg-foreground text-background">
          <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
            <div className="mb-10 grid items-end gap-8 lg:grid-cols-2"><div><p className="eyebrow eyebrow-light mb-5"><span /> Visible proof</p><h2 className="section-title">See the difference.</h2></div><div className="lg:justify-self-end"><p className="max-w-md leading-7 text-background/65">Floor restoration creates a result you can see the moment you walk in.</p><div className="mt-5"><ArrowLink href="#estimate" light>View Our Work</ArrowLink></div></div></div>
            <div className="relative overflow-hidden bg-muted">
              <img src={floorProofImage} alt="Before and after commercial floor restoration" width={1536} height={1024} loading="lazy" className="aspect-[3/2] w-full object-cover lg:aspect-[16/8]" />
              <div className="pointer-events-none absolute inset-y-0 w-px bg-background" style={{ left: `${proofPosition}%` }}><span className="absolute left-1/2 top-1/2 grid size-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-background text-foreground shadow-editorial">↔</span></div>
              <span className="absolute left-5 top-5 bg-foreground px-4 py-2 text-xs font-bold uppercase">Before</span><span className="absolute right-5 top-5 bg-primary px-4 py-2 text-xs font-bold uppercase text-primary-foreground">After</span>
              <input aria-label="Move before and after comparison" type="range" min="15" max="85" value={proofPosition} onChange={(e) => setProofPosition(Number(e.target.value))} className="absolute inset-x-5 bottom-5 h-10 cursor-ew-resize opacity-0" />
            </div>
          </div>
        </section>

        <section className="section-space">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-12 lg:px-10">
            <div className="order-2 lg:order-1 lg:col-span-5"><p className="eyebrow mb-6"><span /> Specialized cleaning</p><h2 className="section-title">Technical care for critical environments.</h2><p className="mt-7 text-lg leading-8 text-muted-foreground">Calm, methodical service for facilities that require more than routine upkeep. Our specialized work is approached with the right process, equipment, and attention.</p><div className="mt-8 divide-y divide-border border-y border-border">{["Electrostatic Disinfection", "Surgical Room Sanitizing", "High Dusting", "Acid Wash"].map((service) => <div key={service} className="flex items-center justify-between py-4 font-semibold"><span>{service}</span><span className="text-primary">+</span></div>)}</div><div className="mt-8"><ArrowLink href="#estimate">Discuss Your Facility</ArrowLink></div></div>
            <div className="order-1 lg:order-2 lg:col-span-6 lg:col-start-7"><img src={specializedImage} alt="Professional specialist performing healthcare sanitation" width={1280} height={1024} loading="lazy" className="aspect-[5/4] w-full object-cover" /></div>
          </div>
        </section>

        <section className="pb-20 sm:pb-24 lg:pb-28">
          <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
            <div className="relative overflow-hidden"><img src={teamImage} alt="Social Sanitation style commercial cleaning team in action" width={1536} height={1024} loading="lazy" className="aspect-[4/3] w-full object-cover sm:aspect-[16/9]" /><div className="absolute inset-0 bg-video-overlay" /><button type="button" onClick={() => setReelOpen(true)} aria-label="Play team in action preview" className="absolute left-1/2 top-1/2 grid size-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"><Play className="ml-1 size-7 fill-current" /></button><div className="absolute inset-x-0 bottom-0 p-7 text-background sm:p-10"><p className="text-xs font-bold uppercase text-secondary tracking-wide">Team in action</p><h2 className="mt-3 max-w-2xl font-display text-2xl font-semibold sm:text-3xl">See how professional facility care gets done.</h2><p className="mt-4 text-sm text-background/70">Day Porter · High Dusting · Carpet Extraction · Strip & Wax · Acid Wash</p></div></div>
          </div>
        </section>

        <section id="estimate" className="scroll-mt-20 bg-brand-wash py-24 sm:py-32">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-12 lg:px-10">
            <div className="lg:col-span-5"><p className="eyebrow mb-6"><span /> Request an estimate</p><h2 className="section-title">Your facility deserves a professional standard.</h2><p className="mt-6 max-w-lg text-lg leading-8 text-muted-foreground">Tell us what your property needs. We’ll help you start the conversation about a cleaning plan built for your facility.</p><a href="tel:+10000000000" className="mt-8 inline-block text-sm font-bold underline decoration-primary decoration-2 underline-offset-8">Prefer to call? Contact Social Sanitation</a></div>
            <form onSubmit={submitEstimate} className="grid gap-5 border-t-4 border-primary bg-background p-6 shadow-editorial sm:grid-cols-2 sm:p-9 lg:col-span-6 lg:col-start-7">
              <label className="form-label">Name<input required name="name" className="form-input" placeholder="Your name" /></label><label className="form-label">Company<input required name="company" className="form-input" placeholder="Company name" /></label><label className="form-label">Email<input required type="email" name="email" className="form-input" placeholder="you@company.com" /></label><label className="form-label">Phone<input required type="tel" name="phone" className="form-input" placeholder="Phone number" /></label><label className="form-label sm:col-span-2">What does your facility need?<textarea required name="message" rows={4} className="form-input resize-none" placeholder="Facility type, services, and timing" /></label><button type="submit" className="inline-flex min-h-14 items-center justify-center gap-3 bg-foreground px-7 text-sm font-extrabold text-background transition-colors hover:bg-primary hover:text-primary-foreground sm:col-span-2">Request a Free Estimate <ArrowRight className="size-4" /></button>{submitted && <p role="status" className="sm:col-span-2 text-sm font-semibold">Thank you. Your estimate request has been noted for this preview.</p>}
            </form>
          </div>
        </section>
      </main>

      <SiteFooter />

      {reelOpen && <div role="dialog" aria-modal="true" aria-label="Team in action" className="fixed inset-0 z-[60] grid place-items-center bg-foreground/90 p-5" onClick={() => setReelOpen(false)}><div className="relative max-w-4xl overflow-hidden bg-foreground" onClick={(e) => e.stopPropagation()}><img src={teamImage} alt="Commercial cleaning work preview" width={1536} height={1024} className="w-full" /><div className="flex items-center justify-between p-5 text-background"><div><p className="font-display text-xl font-semibold">Team in action</p><p className="text-sm text-background/60">Commercial cleaning work reel</p></div><Pause className="size-5" /></div><button type="button" aria-label="Close preview" onClick={() => setReelOpen(false)} className="absolute right-4 top-4 grid size-11 place-items-center bg-background text-foreground"><X /></button></div></div>}
    </div>
  );
}