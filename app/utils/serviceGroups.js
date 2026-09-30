// Groups services by client need. Slugs match the `services` table; unknown slugs fall into "Other".
export const SERVICE_GROUPS = [
  {
    key: "build",
    title: "Build",
    intro: "Full contractual responsibility for delivering the physical building.",
    slugs: ["general-contracting", "specialty-construction"],
  },
  {
    key: "design-manage",
    title: "Design & Manage",
    intro: "Planning, oversight and cost control before and during construction.",
    slugs: ["design-build", "pre-construction-services", "construction-management", "value-engineering"],
  },
  {
    key: "interiors",
    title: "Interiors & Renewal",
    intro: "Fit-out and renovation of new and existing spaces.",
    slugs: ["interior-fit-out", "renovation-remodeling", "renovation-and-remodeling"],
  },
  {
    key: "sustainability",
    title: "Sustainability",
    intro: "Energy-efficient, compliant construction for the Gulf climate.",
    slugs: ["green-building-solutions"],
  },
];

// One-sentence summaries and sectors used when the DB record has no short_description.
export const SERVICE_META = {
  "general-contracting": {
    summary: "Reinforced concrete structures, masonry, facade, roofing and civil works delivered under one contract.",
    sectors: ["Residential", "Commercial", "High-Rise"],
  },
  "specialty-construction": {
    summary: "Technically complex builds requiring specialist trades, sequencing and quality control.",
    sectors: ["Commercial", "Hospitality", "Industrial"],
  },
  "design-build": {
    summary: "Integrated design and construction under a single contract, from concept to handover.",
    sectors: ["Residential", "Commercial", "Hospitality"],
  },
  "pre-construction-services": {
    summary: "Buildability reviews, cost planning and programme development that reduce risk before site work begins.",
    sectors: ["Residential", "Commercial", "Developers"],
  },
  "construction-management": {
    summary: "Professional programme, budget and quality oversight for owner-led projects.",
    sectors: ["Commercial", "Developers", "High-Rise"],
  },
  "value-engineering": {
    summary: "Reducing cost through material and method alternatives without compromising quality.",
    sectors: ["Residential", "Commercial", "Developers"],
  },
  "interior-fit-out": {
    summary: "Complete interior fit-out for homes, offices, restaurants and retail spaces.",
    sectors: ["Residential", "Hospitality", "Retail", "Offices"],
  },
  "renovation-remodeling": {
    summary: "Structural and aesthetic upgrades for existing villas, apartments and commercial units.",
    sectors: ["Residential", "Commercial"],
  },
  "renovation-and-remodeling": {
    summary: "Structural and aesthetic upgrades for existing villas, apartments and commercial units.",
    sectors: ["Residential", "Commercial"],
  },
  "green-building-solutions": {
    summary: "Thermal performance, energy efficiency and Al Sa'fat compliance built into the design and construction.",
    sectors: ["Residential", "Commercial", "Developers"],
  },
};

// Process-focused FAQs shared across service pages (facts taken from existing site copy).
export const SERVICE_FAQS = [
  {
    q: "Which areas do you cover?",
    a: "We are licensed in Dubai and deliver projects across Dubai, Abu Dhabi, Sharjah and the Northern Emirates.",
  },
  {
    q: "Do you handle permits and authority approvals?",
    a: "Yes. We manage building permits, Civil Defence certification, DEWA connections and final occupancy certificates, sequenced into the construction programme.",
  },
  {
    q: "How is quality controlled on site?",
    a: "Structured QA/QC on every project: concrete tested at 7 and 28 days, rebar inspected before every pour, and waterproofing flood-tested before finishes.",
  },
  {
    q: "How do I get a quote?",
    a: "Send a short enquiry with your project type and location. We respond within 24–48 hours to arrange a free initial consultation.",
  },
];

export function getServiceMeta(service) {
  const meta = SERVICE_META[service.slug] || {};
  const summary =
    (service.short_description && service.short_description.replace(/<[^>]*>/g, "").trim()) ||
    meta.summary ||
    "";
  return { summary, sectors: meta.sectors || [] };
}

export function groupServices(services = []) {
  const bySlug = new Map(services.map((s) => [s.slug, s]));
  const used = new Set();

  const groups = SERVICE_GROUPS.map((group) => {
    const items = group.slugs.map((slug) => bySlug.get(slug)).filter(Boolean);
    items.forEach((s) => used.add(s.slug));
    return { ...group, items };
  }).filter((g) => g.items.length > 0);

  const rest = services.filter((s) => !used.has(s.slug));
  if (rest.length > 0) {
    groups.push({ key: "other", title: "Other Services", intro: "", items: rest });
  }
  return groups;
}
