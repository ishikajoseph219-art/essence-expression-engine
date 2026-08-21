import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/products";
import hero from "@/assets/hero.webp";
import heroSm from "@/assets/hero-960.webp";
import story from "@/assets/story.webp";
import storySm from "@/assets/story-800.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Indrele — Unisex Extrait Parfums, Dark & Absolute" },
      {
        name: "description",
        content:
          "Indrele is a parfum house of four absolutes — oud, leather, frozen citrus and green woods. High-concentration unisex extraits in small batches.",
      },
      { property: "og:title", content: "Indrele — Unisex Extrait Parfums, Dark & Absolute" },
      {
        property: "og:description",
        content:
          "Indrele is a parfum house of four absolutes — oud, leather, frozen citrus and green woods. High-concentration unisex extraits in small batches.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "preload",
        as: "image",
        href: hero,
        imagesrcset: `${heroSm} 960w, ${hero} 1600w`,
        imagesizes: "100vw",
        fetchpriority: "high",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Brand",
          name: "Indrele",
          description:
            "Indrele is a parfum house of four absolutes — oud, leather, frozen citrus and green woods.",
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        <section className="relative flex min-h-[92vh] items-end justify-center overflow-hidden">
          <img
            src={hero}
            srcSet={`${heroSm} 960w, ${hero} 1600w`}
            sizes="100vw"
            alt="Indrele parfum bottle on dark stone amid golden smoke"
            width={1600}
            height={907}
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="fade-veil absolute inset-0" />
          <div className="relative z-10 px-6 pb-24 text-center">
            <p className="eyebrow">Est. small batch · Unisex</p>
            <h1 className="display-xl mt-6 text-4xl sm:text-6xl lg:text-7xl">
              Indrele
            </h1>
            <p className="mt-6 text-sm tracking-[0.28em] text-muted-foreground uppercase">
              Absolute. Dark. Unrivalled.
            </p>
            <Link to="/shop" className="btn-gold mt-10 hover:bg-gold hover:text-ink">
              Discover
            </Link>
          </div>
        </section>

        <section className="border-y border-border/40 bg-ink py-6">
          <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-x-14 gap-y-3 px-6">
            {[
              "30% concentration",
              "12+ hour wear",
              "Free shipping in India",
              "Two 7ml freebies",
            ].map((item) => (
              <p key={item} className="eyebrow">
                {item}
              </p>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24">
          <div className="text-center">
            <p className="eyebrow">The house</p>
            <h2 className="display-xl mt-4 text-2xl sm:text-4xl">
              Shop the Collection
            </h2>
          </div>
          <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </section>

        <section className="relative overflow-hidden">
          <img
            src={storySm}
            srcSet={`${storySm} 800w, ${story} 1400w`}
            sizes="100vw"
            alt="Dark marble hall with gold light and drifting smoke"
            loading="lazy"
            decoding="async"
            width={1400}
            height={798}
            className="h-[70vh] w-full object-cover"
          />
          <div className="fade-veil absolute inset-0" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <p className="eyebrow">Unisex in spirit</p>
            <h2 className="display-xl mt-5 max-w-2xl text-2xl sm:text-4xl">
              Power isn't inherited. It's built.
            </h2>
            <Link to="/about" className="btn-gold mt-10 hover:bg-gold hover:text-ink">
              Know Indrele
            </Link>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-6 py-24 text-center">
          <p className="eyebrow">Inside the bottle</p>
          <h2 className="display-xl mt-4 text-2xl sm:text-3xl">Made to last</h2>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            Every Indrele parfum is blended at extrait-level concentration, aged
            four weeks before filling, and bottled in heavy glass with a weighted
            cap. Four fragrances. No seasonal noise, no filler flankers — only
            compositions we would wear ourselves every day.
          </p>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
