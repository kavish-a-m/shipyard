import Image from "next/image";
import Link from "next/link";
import type { Product } from "../data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link className="product-card" href={`/products/${product.id}`}>
      <div className="product-art" style={{ backgroundColor: product.accent }}>
        <Image
          src={product.image}
          alt={product.name}
          width={600}
          height={648}
          className="product-image"
        />
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
