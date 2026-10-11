import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nikhil-vaddey.vaddeynikhil.chatgpt.site"),
  title: {
    default: "Nikhil Vaddey — Always Building",
    template: "%s — Nikhil Vaddey",
  },
  description: "Founder, builder, and product strategist exploring software, systems, markets, and what comes next.",
  openGraph: {
    title: "Nikhil Vaddey — Always Building",
    description: "Products, ideas, experience, and life beyond the screen.",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" data-scroll-behavior="smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
