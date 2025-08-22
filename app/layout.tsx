// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rinat Hirfanov - Portfolio",
  description: "Portfolio de Rinat Hirfanov — Développeur Web",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="text-gray-800">{children}</body>
    </html>
  );
}
