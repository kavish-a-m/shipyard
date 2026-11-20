import type { Metadata } from "next";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { products } from "./data/products";

export const metadata: Metadata = {
  title: "ShipYard — Good things, well made",
  description: "A considered selection of useful objects, designed to be used often and kept for a long time.",
  openGraph: {
    title: "ShipYard — Good things, well made",
    description: "A considered selection of useful objects, designed to be used often and kept for a long time.",
  },
};

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <Link className="logo" href="/">
          SHIPYARD<span>.</span>
        </Link>
        <span className="header-note">Objects for everyday living</span>
      </header>
      <section className="hero">
        <p className="eyebrow">The current collection / 2026</p>
        <h1>
          Good things,
          <br />
          <em>well made.</em>
        </h1>
        <p className="hero-copy">
          A considered selection of useful objects, designed to be used often and kept for a long time.
        </p>
      </section>
      <section className="catalog" aria-labelledby="catalog-heading">
        <div className="section-heading">
          <h2 id="catalog-heading">All objects</h2>
          <span>{products.length} pieces</span>
        </div>
        <div className="product-grid">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} priority={index < 2} />
          ))}
        </div>
      </section>
      <footer className="site-footer">
        <span>SHIPYARD © 2026</span>
        <span>Made for the everyday</span>
      </footer>
    </main>
  );
}
