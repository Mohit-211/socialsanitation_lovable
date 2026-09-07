import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import { useState } from "react";

import { ArrowLink, SiteFooter, SiteHeader } from "../components/site-chrome";
import { InternalPageHero } from "../components/internal-page-hero";
import carpetImage from "../assets/carpet-extraction.jpg";
import detailsImage from "../assets/details-care.jpg";
import floorProofImage from "../assets/floor-before-after.jpg";
import floorImage from "../assets/floor-care.jpg";
import recurringImage from "../assets/recurring-cleaning.jpg";
import servicesHero from "../assets/services-hero.jpg";
import specializedImage from "../assets/specialized-sanitation.jpg";
import teamImage from "../assets/team-in-action.jpg";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Commercial Cleaning Services | Social Sanitation" },
      { name: "description", content: "Explore janitorial, floor care, carpet cleaning, disinfection, and specialized commercial cleaning services across Central Florida." },
      { property: "og:title", content: "Commercial Cleaning Services | Social Sanitation" },
      { property: "og:description", content: "Complete commercial cleaning, facility care, and specialized sanitation capabilities for Central Florida businesses." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

const janitorialServices = ["Janitorial Services", "Custodial Services", "Housekeeping Services", "Day Porter Services", "Move-In Services"];
const floorServices = ["Strip & Wax", "Acid Wash", "Tile & Grout Cleaning", "Window Cleaning", "High Dusting"];
const carpetServices = ["Commercial Carpet Cleaning", "Carpet Extraction"];
const specializedServices = ["Electrostatic Disinfection", "Surgical Room Sanitizing Services", "First Time Clean"];

function ServiceLinks({ items, light = false }: { items: string[]; light?: boolean }) {
  return (
    <div className={`divide-y ${light ? "divide-background/20 border-background/20" : "divide-border border-border"} border-y`}>
      {items.map((item) => (
        <Link key={item} to="/services/$service" params={{ service: item.toLowerCase().replaceAll(" & ", "-").replaceAll(" ", "-") }} className="group flex items-center justify-between gap-5 py-4 text-sm font-bold">
          <span>{item}</span>
          <ChevronRight className={`size-4 shrink-0 transition-transform group-hover:translate-x-1 ${light ? "text-secondary" : "text-primary"}`} />
        </Link>
      ))}
    </div>
  );
}

function ServicesPage() {
  const [proofPosition, setProofPosition] = useState(52);

  return (
    <div className="overflow-x-hidden bg-background text-foreground">
      <SiteHeader estimateHref="/#estimate" />

      <main>
        <InternalPageHero eyebrow="Services" title={<>Commercial Cleaning.<br />Done Right.</>} description="Professional cleaning, sanitation, janitorial, facility, and specialized services for commercial properties throughout Central Florida." image={servicesHero} imageAlt="Commercial cleaning professionals operating floor-care equipment in a large facility" />

        <section id="capabilities" className="section-space scroll-mt-20">
          <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-6">
                <p className="eyebrow mb-6"><span /> The full scope</p>
                <h2 className="section-title max-w-2xl">One facility partner. Every level of clean.</h2>
              </div>
              <p className="max-w-xl text-lg leading-8 text-muted-foreground lg:col-span-5 lg:col-start-8">From recurring facility cleaning to exacting one-time projects, Social Sanitation brings the people, equipment, and process each environment requires.</p>
            </div>
            <div className="mt-14 grid gap-5 lg:grid-cols-12 lg:items-start">
              <img src={recurringImage} alt="Janitorial team maintaining a modern commercial lobby" width={1504} height={1152} loading="lazy" className="aspect-[4/3] w-full object-cover lg:col-span-8" />
              <div className="grid gap-5 lg:col-span-4 lg:pt-20">
                <img src={floorImage} alt="Commercial floor-care equipment restoring a polished floor" width={1280} height={960} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                <div className="bg-brand-wash p-7">
                  <p className="font-display text-xl font-semibold leading-snug">Recurring care and technical work, coordinated under one standard.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface">
          <div className="mx-auto grid max-w-[1440px] lg:grid-cols-12">
            <div className="lg:col-span-7">
              <img src={recurringImage} alt="Commercial janitorial team performing routine facility service" width={1504} height={1152} loading="lazy" className="h-full min-h-[380px] w-full object-cover" />
            </div>
            <div className="flex items-center px-5 py-16 lg:col-span-5 lg:px-12 lg:py-24">
              <div className="w-full">
                <p className="eyebrow mb-5"><span /> 01 · Everyday standards</p>
                <h2 className="font-display text-2xl font-semibold leading-tight sm:text-3xl">Janitorial &amp;<br />Facility Services</h2>
                <p className="my-7 leading-8 text-muted-foreground">Dependable recurring care that keeps workplaces clean, presentable, and ready for the people who use them every day.</p>
                <ServiceLinks items={janitorialServices} />
              </div>
            </div>
          </div>
        </section>

        <section className="relative min-h-[460px]">
          <img src={floorImage} alt="Industrial floor scrubber restoring a large commercial floor" width={1280} height={960} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/75 to-foreground/10" />
          <div className="relative mx-auto flex min-h-[460px] max-w-[1440px] items-center px-5 py-20 lg:px-10">
            <div className="w-full max-w-xl text-background">
              <p className="eyebrow eyebrow-light mb-5"><span /> 02 · Restore and protect</p>
              <h2 className="font-display text-2xl font-semibold leading-tight sm:text-3xl">Floor &amp; Surface Care</h2>
              <p className="my-7 max-w-lg leading-8 text-background/75">Targeted maintenance and restoration for the surfaces that define the first impression of your facility.</p>
              <ServiceLinks items={floorServices} light />
            </div>
          </div>
        </section>

        <section className="section-space">
          <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
            <div className="grid items-center gap-12 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="eyebrow mb-5"><span /> 03 · Deep extraction</p>
                <h2 className="font-display text-2xl font-semibold leading-tight sm:text-3xl">Commercial Carpet Cleaning</h2>
                <p className="my-7 leading-8 text-muted-foreground">Professional extraction lifts embedded soil and refreshes high-traffic carpet without turning your facility into a worksite for longer than necessary.</p>
                <ServiceLinks items={carpetServices} />
              </div>
              <div className="relative lg:col-span-7 lg:col-start-6">
                <img src={carpetImage} alt="Technician performing commercial carpet extraction in an office corridor" width={1504} height={1104} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                <div className="absolute -bottom-6 left-5 bg-secondary px-6 py-5 font-display text-lg font-semibold text-secondary-foreground sm:left-auto sm:right-[-1px]">Built for high-traffic interiors.</div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-foreground text-background">
          <div className="mx-auto grid max-w-[1440px] lg:grid-cols-2">
            <div className="relative min-h-[430px]">
              <img src={specializedImage} alt="Sanitation specialist applying electrostatic disinfection in a clinical facility" width={1280} height={1024} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
            </div>
            <div className="flex items-center px-5 py-20 lg:px-14 lg:py-24">
              <div className="w-full">
                <p className="eyebrow eyebrow-light mb-5"><span /> 04 · Precision work</p>
                <h2 className="font-display text-2xl font-semibold leading-tight sm:text-3xl">Disinfection &amp;<br />Specialized Cleaning</h2>
                <p className="my-7 max-w-lg leading-8 text-background/70">Methodical care for high-touch, clinical, or demanding environments where process and attention matter as much as the visible finish.</p>
                <ServiceLinks items={specializedServices} light />
              </div>
            </div>
          </div>
        </section>

        <section className="section-space">
          <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
              <div className="relative lg:col-span-7">
                <img src={detailsImage} alt="Commercial cleaning specialist carefully sanitizing a high-touch surface" width={1280} height={960} loading="lazy" className="aspect-[5/4] w-full object-cover" />
                <div className="absolute -bottom-8 right-0 max-w-xs bg-primary p-7 text-primary-foreground sm:right-8">
                  <p className="text-xs font-extrabold uppercase tracking-wide">Technical capability</p>
                  <p className="mt-3 font-display text-lg font-semibold leading-snug">The right process for demanding facility work.</p>
                </div>
              </div>
              <div className="pt-8 lg:col-span-4 lg:col-start-9 lg:pt-0">
                <p className="eyebrow mb-6"><span /> Specialized capability</p>
                <h2 className="section-title">When routine cleaning is not enough.</h2>
                <p className="mt-7 leading-8 text-muted-foreground">Our technical capabilities cover the uncommon, difficult, and highly visible projects that need focused equipment and a careful plan.</p>
                <div className="mt-8 space-y-4">
                  {["Electrostatic disinfection", "Surgical room sanitizing", "High dusting", "Acid washing", "Floor restoration"].map((item) => <div key={item} className="flex items-center gap-4 border-b border-border pb-4 text-sm font-bold"><span className="grid size-6 shrink-0 place-items-center bg-secondary"><Check className="size-3.5" /></span>{item}</div>)}
                </div>
                <div className="mt-8"><ArrowLink href="/#estimate">Discuss Your Facility</ArrowLink></div>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="section-space bg-surface">
          <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
            <div className="mb-10 grid items-end gap-8 lg:grid-cols-2">
              <div><p className="eyebrow mb-5"><span /> See our work</p><h2 className="section-title">Results you can see.</h2></div>
              <div className="lg:justify-self-end"><p className="max-w-lg leading-8 text-muted-foreground">Move the slider to compare a commercial floor before and after professional restoration.</p></div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden bg-muted sm:aspect-[16/9] lg:aspect-[2/1]">
              <div className="absolute inset-0 bg-cover bg-left" style={{ backgroundImage: `url(${floorProofImage})`, backgroundSize: "200% 100%" }} />
              <div className="absolute inset-0 bg-cover bg-right" style={{ backgroundImage: `url(${floorProofImage})`, backgroundSize: "200% 100%", clipPath: `inset(0 0 0 ${proofPosition}%)` }} />
              <div className="pointer-events-none absolute inset-y-0 w-px bg-background" style={{ left: `${proofPosition}%` }}><span className="absolute left-1/2 top-1/2 grid size-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-background font-bold text-foreground shadow-editorial">↔</span></div>
              <span className="absolute left-5 top-5 bg-foreground px-4 py-2 text-xs font-bold uppercase text-background">Before</span>
              <span className="absolute right-5 top-5 bg-primary px-4 py-2 text-xs font-bold uppercase text-primary-foreground">After</span>
              <input aria-label="Move before and after comparison" type="range" min="15" max="85" value={proofPosition} onChange={(event) => setProofPosition(Number(event.target.value))} className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0" />
            </div>
            <div className="mt-8 flex justify-end"><ArrowLink href="/#our-work">View Our Work</ArrowLink></div>
          </div>
        </section>

        <section className="section-space">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-12 lg:px-10">
            <div className="lg:col-span-7">
              <p className="eyebrow mb-6"><span /> Flexible service</p>
              <h2 className="section-title max-w-3xl">A dependable routine. Or one focused project.</h2>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">Build an ongoing commercial cleaning plan around your operating schedule, or bring us in for a specialized cleaning need. The scope changes. The standard does not.</p>
              <div className="mt-9 flex flex-wrap gap-x-10 gap-y-4 text-sm font-bold"><span className="flex items-center gap-3"><Check className="size-4 text-primary" /> Recurring commercial cleaning</span><span className="flex items-center gap-3"><Check className="size-4 text-primary" /> One-time &amp; specialized projects</span></div>
            </div>
            <img src={teamImage} alt="Commercial cleaning crew coordinating facility services" width={1536} height={1024} loading="lazy" className="aspect-[5/4] w-full object-cover lg:col-span-4 lg:col-start-9" />
          </div>
        </section>

        <section className="relative">
          <img src={servicesHero} alt="Professional floor-care operation in a large commercial facility" width={1600} height={1050} loading="lazy" className="h-[420px] w-full object-cover object-center" />
          <div className="absolute inset-0 bg-foreground/75" />
          <div className="absolute inset-0 grid place-items-center px-5 text-center text-background">
            <div className="max-w-3xl">
              <p className="eyebrow eyebrow-light mb-6 justify-center"><span /> Start the conversation</p>
              <h2 className="font-display text-2xl font-semibold leading-tight sm:text-3xl">A cleaner facility starts with a clear plan.</h2>
              <p className="mx-auto mt-6 max-w-xl leading-8 text-background/75">Tell us about your property, schedule, and priorities. We’ll help define the right service for your space.</p>
              <a href="/#estimate" className="group mt-9 inline-flex min-h-14 items-center justify-center gap-3 bg-primary px-8 text-sm font-extrabold text-primary-foreground transition-transform hover:-translate-y-1">Request a Free Estimate <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}