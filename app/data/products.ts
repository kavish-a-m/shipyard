export type Product = { id: string; name: string; price: number; category: string; description: string; accent: string; badge?: string };
export const products: Product[] = [
  { id: "wave-runner", name: "Wave Runner", price: 129, category: "Audio", description: "Immersive wireless headphones with all-day comfort and rich, detailed sound.", accent: "#d9f99d", badge: "Bestseller" },
  { id: "orbit-lamp", name: "Orbit Lamp", price: 89, category: "Home", description: "A warm, sculptural light that turns any desk or bedside table into a calm corner.", accent: "#fed7aa" },
  { id: "field-notebook", name: "Field Notebook", price: 24, category: "Stationery", description: "Lay-flat recycled paper notebook for ideas, sketches, and plans on the move.", accent: "#bfdbfe" },
  { id: "terra-mug", name: "Terra Mug", price: 32, category: "Kitchen", description: "Hand-finished stoneware with a generous handle and a beautiful matte glaze.", accent: "#fecdd3" },
  { id: "metro-pack", name: "Metro Pack", price: 148, category: "Travel", description: "A weather-resistant everyday pack with thoughtful storage for busy commutes.", accent: "#ddd6fe", badge: "New" },
  { id: "cloud-throw", name: "Cloud Throw", price: 76, category: "Home", description: "A lightweight woven throw that brings texture and softness to your favorite chair.", accent: "#bae6fd" },
  { id: "peak-bottle", name: "Peak Bottle", price: 42, category: "Outdoors", description: "Double-wall insulated stainless steel bottle that keeps drinks cold for 24 hours.", accent: "#a7f3d0" },
];
export function getProduct(id: string) { return products.find((product) => product.id === id); }
