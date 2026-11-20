import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct, products } from "../../data/products";

const Reviews = dynamic(() => import("./Reviews"), {
  loading: () => (
    <div className="reviews-loading">
      <p className="eyebrow">Loading verified reviews...</p>
    </div>
  ),
});

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const product = getProduct(id);

  if (!product) {
    return {
      title: "Product Not Found — ShipYard",
      description: "The requested object could not be found in the ShipYard collection.",
    };
  }

  return {
    title: `${product.name} — ShipYard`,
    description: product.description,
    openGraph: {
      title: `${product.name} — ShipYard`,
      description: product.description,
      images: [
        {
          url: product.image,
          alt: product.name,
        },
      ],
    },
  };
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
            <Image
              src={product.image}
              alt={product.name}
              width={700}
              height={700}
              priority
              className="detail-image"
            />
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
        <section className="product-reviews-section">
          <Reviews productId={product.id} productName={product.name} />
        </section>
      </article>
    </main>
  );
}
