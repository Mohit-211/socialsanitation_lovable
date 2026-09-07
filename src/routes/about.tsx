import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";

import { ArrowLink, SiteFooter, SiteHeader } from "../components/site-chrome";
import { InternalPageHero } from "../components/internal-page-hero";
import aboutHero from "../assets/about-hero.jpg";
import aboutImage from "../assets/social-sanitation-about.jpg";
import commercialFocus from "../assets/commercial-focus.jpg";
import detailsCare from "../assets/details-care.jpg";
import specializedImage from "../assets/specialized-sanitation.jpg";
import teamImage from "../assets/team-in-action.jpg";
import veteranImage from "../assets/veteran-owned.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Social Sanitation | Veteran-Owned Commercial Cleaning" },
      { name: "description", content: "Social Sanitation is a veteran-owned commercial cleaning and sanitation company serving Central Florida with discipline, consistency, and professional standards." },
      { property: "og:title", content: "About Social Sanitation | Veteran-Owned Commercial Cleaning" },
      { property: "og:description", content: "Built on service. Driven by standards. Meet the veteran-owned team behind Central Florida commercial cleaning and sanitation." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const principles = [
  { name: "Reliability", copy: "Scheduled work happens on schedule. No chasing, no surprises." },
  { name: "Professionalism", copy: "Uniformed, prepared crews who represent your building well." },
  { name: "Attention to detail", copy: "The corners, edges, vents, and touchpoints most people skip." },
  { name: "Consistency", copy: "The same standard on week one and on week fifty." },
  { name: "Service", copy: "Responsive communication and a willingness to adjust to your facility." },
];

const capabilities = [
  "Recurring janitorial", "Custodial services", "Day porter coverage", "Floor care & strip and wax",
  "Carpet extraction", "Tile & grout cleaning", "Electrostatic disinfection", "High dusting", "Window cleaning",
];

function AboutPage() {
  return (
    <div className="overflow-x-hidden bg-background text-foreground">
      <SiteHeader />

      <main>
        <InternalPageHero eyebrow="About Us" title={<>Built on Service.<br />Driven by Standards.</>} description="A veteran-owned commercial cleaning and sanitation company serving Central Florida — dependable, detail-driven care for the places where business happens." image={aboutHero} imageAlt="Professional commercial cleaning team working inside a modern commercial facility" />

        {/* Company story */}
        <section className="section-space">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-12 lg:px-10">
            <div className="relative lg:col-span-5">
              <img src={aboutImage} alt="Social Sanitation team lead inspecting completed facility work" width={1024} height={1280} loading="lazy" className="aspect-[4/5] w-full object-cover" />
              <div className="absolute -right-4 -top-4 -z-10 size-full border border-secondary/60" />
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <p className="eyebrow mb-6"><span /> Our story</p>
              <h2 className="section-title">Real people, real standards, behind every clean.</h2>
              <div className="mt-8 max-w-xl space-y-5 text-base leading-8 text-muted-foreground">
                <p>Social Sanitation is a veteran-owned commercial cleaning company built around a simple idea: a facility says something about the business inside it. Our job is to make sure it says the right thing.</p>
                <p>We keep commercial environments clean, safe, and professionally maintained — offices, medical spaces, retail, and the working buildings that keep Central Florida running. That means recurring janitorial care done properly, plus the specialized work that only comes up a few times a year.</p>
                <p>No franchise scripts, no rotating strangers. Just a crew that shows up, knows your building, and holds a standard you shouldn't have to ask for twice.</p>
              </div>
              <div className="mt-9"><ArrowLink href="/#estimate">Request a Free Estimate</ArrowLink></div>
            </div>
          </div>
        </section>

        {/* Veteran owned */}
        <section className="bg-foreground text-background">
          <div className="mx-auto grid max-w-[1440px] gap-0 lg:grid-cols-12">
            <div className="relative lg:col-span-5">
              <img src={veteranImage} alt="Social Sanitation crew leader in uniform inside a commercial facility" width={1024} height={1280} loading="lazy" className="h-full min-h-[360px] w-full object-cover" />
            </div>
            <div className="flex items-center px-5 py-20 lg:col-span-7 lg:px-16 lg:py-28">
              <div>
                <p className="eyebrow eyebrow-light mb-6"><span /> Veteran owned</p>
                <h2 className="section-title max-w-2xl">Service didn't end. It changed uniforms.</h2>
                <p className="mt-7 max-w-xl leading-8 text-background/75">Veteran ownership isn't a badge on our website — it's how the work gets run. Standards are written down. Accountability sits with a person, not a process. And the details nobody inspects still get done.</p>
                <div className="mt-10 grid gap-x-12 gap-y-6 sm:grid-cols-2">
                  {["Discipline", "Accountability", "Reliability", "Attention to detail"].map((value) => (
                    <div key={value} className="flex items-baseline gap-4 border-t border-background/20 pt-5">
                      <span className="size-1.5 shrink-0 translate-y-[-2px] bg-primary" />
                      <p className="font-display text-lg font-semibold">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What we stand for */}
        <section className="section-space">
          <div className="mx-auto max-w-7xl px-5 lg:px-10">
            <div className="max-w-3xl">
              <p className="eyebrow mb-6"><span /> What we stand for</p>
              <h2 className="section-title">Five words we're willing to be measured against.</h2>
            </div>
            <div className="mt-14 divide-y divide-border border-y border-border">
              {principles.map((principle, index) => (
                <div key={principle.name} className="grid items-baseline gap-4 py-8 lg:grid-cols-12 lg:gap-10">
                  <span className="text-xs font-bold text-muted-foreground lg:col-span-1">0{index + 1}</span>
                  <h3 className="font-display text-xl font-semibold leading-tight sm:text-2xl lg:col-span-5">
                    {principle.name}
                    <span className={index % 2 ? "text-secondary" : "text-primary"}>.</span>
                  </h3>
                  <p className="max-w-xl leading-8 text-muted-foreground lg:col-span-6">{principle.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Commercial focus */}
        <section className="bg-surface">
          <div className="mx-auto grid max-w-[1440px] items-stretch lg:grid-cols-12">
            <div className="flex items-center px-5 py-20 lg:col-span-5 lg:px-10 lg:py-28">
              <div>
                <p className="eyebrow mb-6"><span /> Commercial focus</p>
                <h2 className="section-title">We work in buildings, not living rooms.</h2>
                <p className="mt-7 max-w-lg leading-8 text-muted-foreground">Social Sanitation serves businesses and facilities. Commercial spaces have traffic patterns, compliance concerns, and after-hours realities that residential cleaning never touches — and that's the work we're built for.</p>
                <div className="mt-9 flex flex-wrap gap-2">
                  {capabilities.map((item) => (
                    <span key={item} className="border border-border bg-background px-3.5 py-2 text-xs font-semibold">{item}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="lg:col-span-7">
              <img src={commercialFocus} alt="Janitorial professional cleaning a large commercial office floor" width={1536} height={1024} loading="lazy" className="h-full min-h-[360px] w-full object-cover" />
            </div>
          </div>
        </section>

        {/* Built to handle the details */}
        <section className="section-space">
          <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
            <div className="grid items-end gap-8 border-b border-border pb-12 lg:grid-cols-2">
              <div>
                <p className="eyebrow mb-5"><span /> Built to handle the details</p>
                <h2 className="section-title">Clean isn't what you see. It's what you don't.</h2>
              </div>
              <p className="max-w-xl leading-8 text-muted-foreground lg:justify-self-end">Vents, baseboards, door hardware, grout lines, elevator tracks, restroom fixtures. Commercial cleaning is a discipline of the overlooked — and the reason routine work and specialized projects belong with the same team.</p>
            </div>
            <div className="mt-12 grid gap-4 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <img src={detailsCare} alt="Gloved hand disinfecting a high-touch door handle in a commercial building" width={1280} height={960} loading="lazy" className="aspect-[4/3] w-full object-cover" />
              </div>
              <div className="grid gap-4 lg:col-span-5">
                <img src={specializedImage} alt="Specialist performing electrostatic disinfection in a clinical space" width={1280} height={1024} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                <div className="flex flex-col justify-center bg-brand-wash p-8">
                  <p className="font-display text-xl font-semibold leading-snug">Routine care and specialized projects, handled by one accountable team.</p>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">From nightly janitorial to strip and wax, carpet extraction, high dusting, and disinfection.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service area */}
        <section className="border-y border-border bg-surface py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-12 lg:px-10">
            <div className="lg:col-span-6">
              <p className="eyebrow mb-6"><span /> Service area</p>
              <h2 className="font-display text-2xl font-semibold leading-tight sm:text-3xl">Proudly serving Central Florida.</h2>
              <p className="mt-6 max-w-lg leading-8 text-muted-foreground">We serve commercial properties, facilities, and businesses throughout the Central Florida region. If your building is in our service area, we'll walk it with you and put together a plan that fits.</p>
              <div className="mt-8"><ArrowLink href="/#estimate">Check Your Location</ArrowLink></div>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <div className="relative aspect-square overflow-hidden border border-border bg-background p-8">
                <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
                <div className="relative flex h-full flex-col justify-between">
                  <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">Central Florida</p>
                  <div className="flex items-center gap-4">
                    <span className="relative grid size-4 place-items-center">
                      <span className="absolute size-4 animate-ping rounded-full bg-primary/40" />
                      <span className="size-2.5 rounded-full bg-primary" />
                    </span>
                    <p className="font-display text-lg font-semibold">Commercial coverage across the region</p>
                  </div>
                  <p className="text-sm leading-7 text-muted-foreground">Offices · Medical · Retail · Industrial · Multi-tenant facilities</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative">
          <img src={teamImage} alt="Social Sanitation commercial cleaning crew at work" width={1536} height={1024} loading="lazy" className="h-[440px] w-full object-cover" />
          <div className="absolute inset-0 bg-image-overlay" />
          <div className="absolute inset-0 grid place-items-center px-5">
            <div className="mx-auto max-w-3xl text-center text-background">
              <p className="eyebrow eyebrow-light mb-6 justify-center"><span /> Let's talk</p>
              <h2 className="font-display text-2xl font-semibold leading-tight sm:text-3xl">Start with a walkthrough. End with a standard.</h2>
              <p className="mt-6 leading-8 text-background/80">Tell us about your facility and we'll put together a free estimate built around how your building actually gets used.</p>
              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <a href="/#estimate" className="group inline-flex min-h-14 items-center justify-center gap-3 bg-primary px-7 text-sm font-extrabold text-primary-foreground transition-transform hover:-translate-y-1">Request a Free Estimate <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></a>
                <a href="tel:+10000000000" className="inline-flex min-h-14 items-center justify-center gap-3 border border-background/50 px-7 text-sm font-extrabold text-background transition-colors hover:bg-background hover:text-foreground"><Phone className="size-4" /> Contact Social Sanitation</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
