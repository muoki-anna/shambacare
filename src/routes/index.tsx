import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CloudRain,
  Mountain,
  Sprout,
  Sun,
  TrendingUp,
  Bug,
  CheckCircle2,
} from "lucide-react";
import { crops } from "@/data/crops";
import heroFarm from "@/assets/hero-farm.jpg";
import logoImg from "@/assets/logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ShambaCare — Crop Growing Guidance for Kenyan Farmers" },
      {
        name: "description",
        content:
          "Free, detailed growing guides for Kenya's major crops — maize, tea, coffee, beans, potatoes, tomatoes, bananas and wheat. From land preparation to harvest and market.",
      },
      { property: "og:title", content: "ShambaCare — Crop Growing Guidance for Kenyan Farmers" },
      {
        property: "og:description",
        content:
          "Free, detailed growing guides for Kenya's major crops — from land preparation to harvest and market.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const features = [
  {
    icon: Mountain,
    title: "Know your conditions",
    text: "Altitude, rainfall, temperature and soil requirements for every crop, matched to Kenyan growing regions.",
  },
  {
    icon: Sprout,
    title: "Step-by-step planting",
    text: "Land preparation, spacing, seed rates and recommended varieties that perform in Kenya.",
  },
  {
    icon: Bug,
    title: "Pest & disease control",
    text: "Identify the major threats — fall armyworm, late blight, Tuta absoluta — and how to manage them.",
  },
  {
    icon: TrendingUp,
    title: "Harvest & market",
    text: "Expected yields, maturity periods and where to sell, so you plan your income before you plant.",
  },
];

function Index() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src={heroFarm}
          alt="Tea and maize fields in the Kenyan highlands at sunrise"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/75 to-foreground/40" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-32">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            {/* Left Column: Headline and Call-to-actions */}
            <div className="lg:col-span-7">
              {/* ShambaCare Brand Pill */}
              <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-black/40 px-3 py-1 shadow-lg backdrop-blur-md">
                <img
                  src={logoImg}
                  alt="ShambaCare"
                  className="h-6 w-auto rounded-full bg-white object-contain"
                />
                <span className="font-display text-sm font-bold tracking-tight text-white">
                  Shamba<span className="text-emerald-400">Care</span>
                </span>
                <span className="h-3 w-px bg-white/20" />
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold tracking-wider text-harvest uppercase">
                  <Sun className="h-3 w-3" /> Built for Kenyan Farmers
                </span>
              </div>

              <h1 className="font-display text-4xl leading-tight font-bold text-white md:text-5xl lg:text-6xl">
                Grow smarter with <span className="text-emerald-400">ShambaCare</span> guidance
              </h1>
              <p className="mt-5 max-w-xl text-base text-white/85 md:text-lg">
                Pick any major Kenyan crop and access field-proven agronomy — ecological zones,
                certified seed selection, fertiliser schedules, pest defence, and market prices.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/crops"
                  className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-emerald-500 hover:shadow-lg"
                >
                  Browse crop guides <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/crops/$slug"
                  params={{ slug: "maize" }}
                  className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                >
                  Start with maize
                </Link>
              </div>
            </div>

            {/* Right Column: Hero ShambaCare Logo Emblem Card */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md rounded-2xl border border-white/20 bg-gradient-to-b from-white/15 to-white/5 p-6 shadow-2xl backdrop-blur-xl">
                <div className="flex flex-col items-center gap-3 border-b border-white/15 pb-5 text-center">
                  <div className="relative flex items-center justify-center rounded-2xl bg-white p-3 shadow-xl ring-2 ring-white/80">
                    <img
                      src={logoImg}
                      alt="ShambaCare Official Logo"
                      className="h-32 w-auto object-contain"
                    />
                  </div>
                  <p className="text-xs font-semibold tracking-wider text-emerald-300 uppercase">
                    Guiding your harvest, every step of the way
                  </p>
                </div>

                <div className="mt-5 space-y-3">
                  <div className="flex items-start gap-3 rounded-lg bg-black/20 p-3 text-xs text-white/90">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                    <span>8 Major commercial & food crops with county-level recommendations</span>
                  </div>
                  <div className="flex items-start gap-3 rounded-lg bg-black/20 p-3 text-xs text-white/90">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                    <span>Rainfall, altitude & soil pH requirements matched to Kenya</span>
                  </div>
                  <div className="flex items-start gap-3 rounded-lg bg-black/20 p-3 text-xs text-white/90">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                    <span>Pest management & market access tips for sustainable yields</span>
                  </div>
                </div>

                <div className="mt-5 rounded-lg border border-emerald-400/30 bg-emerald-950/40 px-3.5 py-2.5 text-center text-xs font-semibold text-emerald-300">
                  🌿 100% Free practical intelligence for Kenyan agriculture
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <h2 className="font-display text-3xl font-bold md:text-4xl">
          Everything a farmer needs, in one place
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Each guide follows the crop from an empty shamba to the market — no jargon, just practical
          steps.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-border bg-card p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary">
                <f.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Crop preview */}
      <section className="border-y border-border bg-secondary/60">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-3xl font-bold md:text-4xl">Popular crop guides</h2>
              <p className="mt-3 text-muted-foreground">
                Kenya's most grown crops — tap any card for the full guide.
              </p>
            </div>
            <Link
              to="/crops"
              className="hidden items-center gap-1 text-sm font-semibold text-primary hover:underline sm:inline-flex"
            >
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {crops.slice(0, 4).map((crop) => (
              <Link
                key={crop.slug}
                to="/crops/$slug"
                params={{ slug: crop.slug }}
                className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                  {crop.category}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold group-hover:text-primary">
                  {crop.name}
                </h3>
                <p className="text-sm text-muted-foreground italic">{crop.localName}</p>
                <p className="mt-3 line-clamp-3 text-sm text-muted-foreground">{crop.summary}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Read guide{" "}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Seasons strip */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-bold md:text-4xl">
              Plan around Kenya's rainfall
            </h2>
            <p className="mt-4 text-muted-foreground">
              Most Kenyan cropping follows two rainy seasons. Our guides tell you exactly when to
              prepare land, plant, top-dress and harvest so your crop rides the rains — not fights
              them.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-6">
              <CloudRain className="h-6 w-6 text-primary" />
              <h3 className="mt-3 font-semibold">Long rains</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                March – May. The main season for maize, beans and potatoes in most regions.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <CloudRain className="h-6 w-6 text-leaf" />
              <h3 className="mt-3 font-semibold">Short rains</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                October – December. Ideal for fast crops like beans and vegetables.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/crops"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Explore all {crops.length} crop guides <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
