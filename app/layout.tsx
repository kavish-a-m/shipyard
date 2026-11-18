import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ShipYard — Objects for everyday living",
  description: "A considered selection of useful objects, designed to be used often and kept for a long time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
