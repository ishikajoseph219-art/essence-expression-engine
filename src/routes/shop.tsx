import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/products";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop All Parfums | Indrele" },
      {
        name: "description",
        content:
          "Browse all four Indrele parfums — Sovereign, Orion, Verdant and Nocturne. Extrait-level unisex fragrances with free shipping in India.",
      },
      { property: "og:title", content: "Shop All Parfums | Indrele" },
      {
        property: "og:description",
        content:
          "All four Indrele absolutes: amber leather, frozen citrus, green woods and oud smoke.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Shop,
});

function Shop() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-6 pt-40 pb-24">
        <header className="text-center">
          <p className="eyebrow">The collection</p>
          <h1 className="display-xl mt-4 text-3xl sm:text-5xl">All Parfums</h1>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Four absolutes, each built around a single idea. Choose your signature
            — or collect the house.
          </p>
        </header>
        <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
