import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  Bug,
  CalendarDays,
  CloudRain,
  Mountain,
  Scissors,
  Shovel,
  Sprout,
  Store,
  Thermometer,
  TrendingUp,
  Wheat,
} from "lucide-react";
import { crops, getCrop } from "@/data/crops";

export const Route = createFileRoute("/crops/$slug")({
  loader: ({ params }) => {
    const crop = getCrop(params.slug);
    if (!crop) throw notFound();
    return { crop };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Crop not found — ShambaCare" }, { name: "robots", content: "noindex" }],
      };
    }
    const { crop } = loaderData;
    const title = `Growing ${crop.name} in Kenya — ShambaCare`;
    const description = `Complete ${crop.name} (${crop.localName}) growing guide for Kenya: best regions, planting, fertiliser, pest and disease control, harvesting, yields and markets.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: CropDetailPage,
});

function Section({
  icon: Icon,
  title,
  items,
}: {
  icon: typeof Sprout;
  title: string;
  items: string[];
}) {
  return (
    <section className="rounded-2xl border border-border bg-card p-6">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-primary">
          <Icon className="h-5 w-5" />
        </span>
        <h2 className="font-display text-xl font-semibold">{title}</h2>
      </div>
      <ul className="mt-4 space-y-2.5">
        {items.map((item) => (
          <li key={item} className="flex gap-2.5 text-sm text-muted-foreground">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-leaf" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function ThreatTable({
  title,
  rows,
}: {
  title: string;
  rows: { name: string; control: string }[];
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <h3 className="font-semibold">{title}</h3>
      <div className="mt-4 space-y-4">
        {rows.map((row) => (
          <div key={row.name} className="border-l-2 border-harvest pl-4">
            <p className="text-sm font-semibold">{row.name}</p>
            <p className="mt-1 text-sm text-muted-foreground">{row.control}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function CropDetailPage() {
  const { crop } = Route.useLoaderData();
  const others = crops.filter((c) => c.slug !== crop.slug).slice(0, 3);

  const conditions = [
    { icon: Mountain, label: "Altitude", value: crop.altitude },
    { icon: CloudRain, label: "Rainfall", value: crop.rainfall },
    { icon: Thermometer, label: "Temperature", value: crop.temperature },
    { icon: Shovel, label: "Soil", value: crop.soil },
  ];

  return (
    <div>
      {/* Header */}
      <section className="border-b border-border bg-secondary/60">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <Link
            to="/crops"
            className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> All crop guides
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
              {crop.category}
            </span>
            <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
              <CalendarDays className="h-4 w-4" /> Maturity: {crop.maturity}
            </span>
          </div>
          <h1 className="mt-4 font-display text-4xl font-bold md:text-5xl">
            {crop.name} <span className="text-muted-foreground">({crop.localName})</span>
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">{crop.summary}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {crop.regions.map((r) => (
              <span
                key={r}
                className="rounded-md border border-border bg-card px-3 py-1 text-xs font-medium"
              >
                {r}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-12">
        {/* Growing conditions */}
        <h2 className="font-display text-2xl font-bold">Growing conditions</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {conditions.map((c) => (
            <div key={c.label} className="rounded-2xl border border-border bg-card p-5">
              <c.icon className="h-5 w-5 text-primary" />
              <p className="mt-3 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                {c.label}
              </p>
              <p className="mt-1 text-sm font-medium">{c.value}</p>
            </div>
          ))}
        </div>

        {/* Step-by-step */}
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Section icon={Shovel} title="Land preparation" items={crop.landPrep} />
          <Section icon={Sprout} title="Planting" items={crop.planting} />
          <Section icon={Wheat} title="Fertiliser & feeding" items={crop.fertilizer} />
          <Section icon={Scissors} title="Harvesting & storage" items={crop.harvesting} />
        </div>

        {/* Pests & diseases */}
        <h2 className="mt-12 flex items-center gap-2 font-display text-2xl font-bold">
          <Bug className="h-6 w-6 text-primary" /> Pests & diseases
        </h2>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <ThreatTable title="Common pests" rows={crop.pests} />
          <ThreatTable title="Common diseases" rows={crop.diseases} />
        </div>

        {/* Yield & market */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-primary p-6 text-primary-foreground">
            <TrendingUp className="h-6 w-6" />
            <h2 className="mt-3 font-display text-xl font-semibold">Expected yield</h2>
            <p className="mt-2 text-sm text-primary-foreground/85">{crop.yield}</p>
          </div>
          <div className="rounded-2xl bg-harvest p-6 text-harvest-foreground">
            <Store className="h-6 w-6" />
            <h2 className="mt-3 font-display text-xl font-semibold">Market</h2>
            <p className="mt-2 text-sm text-harvest-foreground/85">{crop.market}</p>
          </div>
        </div>

        {/* Other crops */}
        <h2 className="mt-14 font-display text-2xl font-bold">Explore other crops</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-3">
          {others.map((c) => (
            <Link
              key={c.slug}
              to="/crops/$slug"
              params={{ slug: c.slug }}
              className="group rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="font-display text-lg font-semibold group-hover:text-primary">
                {c.name}
              </h3>
              <p className="text-sm text-muted-foreground italic">{c.localName}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                View guide{" "}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
