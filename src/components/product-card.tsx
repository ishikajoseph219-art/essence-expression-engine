import { Link } from "@tanstack/react-router";
import { formatPrice, type Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group">
      <Link to="/parfum/$slug" params={{ slug: product.slug }} className="block">
        <div className="overflow-hidden bg-ink" style={{ aspectRatio: "760 / 1000" }}>
          <img
            src={product.imageSmall}
            srcSet={`${product.imageSmall} 400w, ${product.image} 760w`}
            sizes="(min-width: 1024px) 300px, (min-width: 640px) 45vw, 90vw"
            alt={`${product.name} parfum bottle by Indrele`}
            loading="lazy"
            decoding="async"
            width={760}
            height={1000}
            className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="mt-5 text-center">
          <h3 className="display-xl text-lg">{product.name}</h3>
          <p className="eyebrow mt-2">{product.notes}</p>
          <p className="mt-3 text-sm text-muted-foreground">
            {formatPrice(product.price)}
          </p>
          <span className="btn-gold mt-5 group-hover:bg-gold group-hover:text-ink">
            Explore Parfum
          </span>
        </div>
      </Link>
    </article>
  );
}
