import { createFileRoute, notFound } from "@tanstack/react-router";

import { ServicePageTemplate } from "../components/service-page-template";
import { serviceBySlug } from "../lib/service-content";

export const Route = createFileRoute("/services/$service")({
  loader: ({ params }) => {
    const service = serviceBySlug[params.service];
    if (!service) throw notFound();
    return service;
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Service Not Found | Social Sanitation" }, { name: "robots", content: "noindex" }] };
    const title = `${loaderData.name} Central Florida | Social Sanitation`;
    const description = `${loaderData.value} Professional ${loaderData.name.toLowerCase()} for commercial facilities across Central Florida.`;
    return { meta: [
      { title }, { name: "description", content: description },
      { property: "og:title", content: title }, { property: "og:description", content: description },
      { property: "og:type", content: "website" }, { property: "og:url", content: `/services/${params.service}` },
      { name: "twitter:card", content: "summary_large_image" },
    ], links: [{ rel: "canonical", href: `/services/${params.service}` }] };
  },
  component: ServiceRoute,
});

function ServiceRoute() { const service = Route.useLoaderData(); return <ServicePageTemplate service={service} />; }