import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 bg-ink">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="display-xl text-2xl text-gold">Indrele</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            A parfum house of four absolutes. Unisex in spirit, high in
            concentration, made in small batches.
          </p>
        </div>
        <div>
          <p className="eyebrow">Parfums</p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/shop" className="hover:text-gold">
                Shop all
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gold">
                Know Indrele
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="eyebrow">Care</p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>Free shipping across India</li>
            <li>7-day returns</li>
            <li>care@indrele.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/40 px-6 py-6 text-center">
        <p className="eyebrow">© {new Date().getFullYear()} Indrele Parfums</p>
      </div>
    </footer>
  );
}
