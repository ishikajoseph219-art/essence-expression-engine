import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Parfums" },
  { to: "/about", label: "Know Indrele" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="bg-ink/90 py-2 text-center backdrop-blur">
        <p className="eyebrow">Claim two 7ml freebies with every order</p>
      </div>
      <div className="border-b border-border/40 bg-ink/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <button
            className="text-foreground/80 md:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>

          <nav className="hidden gap-8 md:flex">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="eyebrow transition-colors hover:text-gold"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link to="/" className="display-xl text-xl text-gold sm:text-2xl">
            Indrele
          </Link>

          <Link to="/shop" className="eyebrow transition-colors hover:text-gold">
            Shop
          </Link>
        </div>

        {open && (
          <nav className="flex flex-col gap-4 border-t border-border/40 px-6 py-5 md:hidden">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="eyebrow"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
