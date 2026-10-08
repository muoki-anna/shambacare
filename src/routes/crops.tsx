import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight, Search } from "lucide-react";
import { crops, type CropGuidance } from "@/data/crops";

export const Route = createFileRoute("/crops")({
  head: () => ({
    meta: [
      { title: "Crop Guides — ShambaCare" },
      {
        name: "description",
        content:
          "Browse detailed growing guides for Kenya's major crops: maize, tea, coffee, beans, Irish potatoes, tomatoes, bananas and wheat.",
      },
      { property: "og:title", content: "Crop Guides — ShambaCare" },
      {
        property: "og:description",
        content:
          "Browse detailed growing guides for Kenya's major crops: maize, tea, coffee, beans, Irish potatoes, tomatoes, bananas and wheat.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CropsPage,
});

const categories = ["All", ...Array.from(new Set(crops.map((c) => c.category)))];

function CropCard({ crop }: { crop: CropGuidance }) {
  return (
    <Link
      to="/crops/$slug"
      params={{ slug: crop.slug }}
      className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
          {crop.category}
        </span>
        <span className="text-xs text-muted-foreground">{crop.maturity}</span>
      </div>
      <h2 className="mt-4 font-display text-2xl font-semibold group-hover:text-primary">
        {crop.name}
      </h2>
      <p className="text-sm text-muted-foreground italic">{crop.localName}</p>
      <p className="mt-3 line-clamp-3 flex-1 text-sm text-muted-foreground">{crop.summary}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {crop.regions.slice(0, 3).map((r) => (
          <span
            key={r}
            className="rounded-md bg-secondary px-2 py-0.5 text-xs text-secondary-foreground"
          >
            {r}
          </span>
        ))}
        {crop.regions.length > 3 && (
          <span className="rounded-md bg-secondary px-2 py-0.5 text-xs text-secondary-foreground">
            +{crop.regions.length - 3}
          </span>
        )}
      </div>
      <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">
        View full guide{" "}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}

function CropsDirectory() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return crops.filter((c) => {
      const matchesCategory = category === "All" || c.category === category;
      const matchesQuery =
        !q ||
        c.name.toLowerCase().includes(q) ||
        c.localName.toLowerCase().includes(q) ||
        c.regions.some((r) => r.toLowerCase().includes(q));
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <h1 className="font-display text-4xl font-bold md:text-5xl">Crop Guides</h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        Detailed growing guidance for Kenya's major crops — search by name, local name or county, or
        filter by category.
      </p>

      <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center">
        <div className="relative flex-1">
          <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search crops or counties — e.g. mahindi, Meru…"
            className="w-full rounded-lg border border-input bg-card py-2.5 pr-4 pl-10 text-sm outline-none placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/30"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={
                cat === category
                  ? "rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground"
                  : "rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold text-muted-foreground transition-colors hover:bg-secondary"
              }
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="mt-16 text-center text-muted-foreground">
          No crops match your search. Try a different name or county.
        </p>
      ) : (
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((crop) => (
            <CropCard key={crop.slug} crop={crop} />
          ))}
        </div>
      )}
    </div>
  );
}

function CropsPage() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  if (pathname !== "/crops") return <Outlet />;
  return <CropsDirectory />;
}
