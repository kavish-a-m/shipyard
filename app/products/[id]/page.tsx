import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct, products } from "../../data/products";

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = getProduct(id);

  if (!product) {
    notFound();
  }

  return (
    <main>
      <header className="site-header">
        <Link className="logo" href="/">
          SHIPYARD<span>.</span>
        </Link>
        <span className="header-note">Product detail</span>
      </header>
      <article className="detail">
        <Link className="back-link" href="/">
          ← Back to collection
        </Link>
        <div className="detail-layout">
          <div className="detail-art" style={{ backgroundColor: product.accent }}>
            <span>{product.name.slice(0, 1)}</span>
          </div>
          <div className="detail-copy">
            <p className="eyebrow">{product.category} / Shipyard collection</p>
            <h1>{product.name}</h1>
            <p className="detail-description">{product.description}</p>
            <p className="detail-price">${product.price}</p>
            <button type="button">
              Add to collection <span>+</span>
            </button>
            <div className="details">
              <span>Details</span>
              <p>Thoughtfully made for daily use. Ships in 2–4 business days with recyclable packaging.</p>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
