import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import story from "@/assets/story.webp";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Know Indrele — Our Parfum House" },
      {
        name: "description",
        content:
          "The story behind Indrele: four absolutes, extrait concentration, small-batch blending and a refusal to make anything forgettable.",
      },
      { property: "og:title", content: "Know Indrele — Our Parfum House" },
      {
        property: "og:description",
        content:
          "Four absolutes, extrait concentration, small-batch blending. This is how Indrele is built.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="relative">
          <img
            src={story}
            alt="Dark marble hall lit by gold light shafts"
            width={1400}
            height={798}
            className="h-[60vh] w-full object-cover"
          />
          <div className="fade-veil absolute inset-0" />
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-16 text-center">
            <p className="eyebrow">Know Indrele</p>
            <h1 className="display-xl mt-4 text-3xl sm:text-5xl">The House</h1>
          </div>
        </section>

        <section className="mx-auto max-w-3xl space-y-8 px-6 py-24 text-sm leading-relaxed text-muted-foreground">
          <p>
            Indrele began with a simple refusal: we would not make a fragrance
            that disappears in an hour. Every composition is blended at
            extrait-level concentration, aged four weeks, and filled by hand in
            batches small enough to smell every one.
          </p>
          <p>
            Four absolutes carry the house. Sovereign for amber leather.
            Nocturne for aged oud and incense. Orion for cold citrus at
            altitude. Verdant for rain on green stems. None of them are made for
            a gender — they are made for a temperament.
          </p>
          <p>
            We do not chase seasons or release flankers. When a fragrance earns
            its place in the four, it stays. That is the whole of our roadmap.
          </p>
        </section>

        <section className="border-t border-border/40 bg-ink py-20 text-center">
          <p className="eyebrow">Begin</p>
          <h2 className="display-xl mt-4 text-2xl sm:text-3xl">
            Find your absolute
          </h2>
          <Link to="/shop" className="btn-gold-solid mt-10 hover:opacity-85">
            Shop All Parfums
          </Link>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
