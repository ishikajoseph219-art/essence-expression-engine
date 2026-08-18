import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ProductCard } from "@/components/product-card";
import { formatPrice, getProduct, products } from "@/lib/products";

export const Route = createFileRoute("/parfum/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.product;
    const title = p ? `${p.name} — ${p.family} Parfum | Indrele` : "Parfum | Indrele";
    const description = p
      ? `${p.name}: ${p.tagline} ${p.notes}. ${p.size} by Indrele.`
      : "Indrele parfums.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ParfumDetail,
});

function ParfumDetail() {
  const { product } = Route.useLoaderData();
  const others = products.filter((p) => p.slug !== product.slug);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="pt-32">
        <section className="mx-auto grid max-w-7xl gap-14 px-6 py-16 lg:grid-cols-2">
          <img
            src={product.image}
            alt={`${product.name} parfum bottle by Indrele`}
            width={912}
            height={1200}
            className="w-full bg-ink object-cover"
          />

          <div className="flex flex-col justify-center">
            <p className="eyebrow">{product.family}</p>
            <h1 className="display-xl mt-4 text-3xl sm:text-5xl">{product.name}</h1>
            <p className="mt-4 text-sm tracking-[0.28em] text-muted-foreground uppercase">
              {product.tagline}
            </p>
            <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
              {product.story}
            </p>

            <div className="mt-8 border-t border-border/50 pt-6">
              <p className="display-xl text-xl text-gold">
                {formatPrice(product.price)}
              </p>
              <p className="eyebrow mt-2">{product.size}</p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="btn-gold-solid hover:opacity-85">Add to Bag</button>
              <Link to="/shop" className="btn-gold hover:bg-gold hover:text-ink">
                All Parfums
              </Link>
            </div>

            <dl className="mt-12 space-y-5">
              {product.pyramid.map((row) => (
                <div key={row.label} className="border-b border-border/40 pb-4">
                  <dt className="eyebrow">{row.label}</dt>
                  <dd className="mt-2 text-sm text-muted-foreground">{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="display-xl text-center text-2xl">Also from the House</h2>
          <div className="mt-14 grid gap-12 sm:grid-cols-3">
            {others.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
