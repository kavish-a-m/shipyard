import Link from "next/link";
import type { Product } from "../data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link className="product-card" href={`/products/${product.id}`}>
      <div className="product-art" style={{ backgroundColor: product.accent }}>
        <span className="art-mark">{product.name.slice(0, 1)}</span>
        {product.badge && <span className="badge">{product.badge}</span>}
      </div>
      <div className="card-copy">
        <div className="card-meta">
          <span>{product.category}</span>
          <span>${product.price}</span>
        </div>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <span className="shop-link">
          View product <span aria-hidden="true">↗</span>
        </span>
      </div>
    </Link>
  );
}
