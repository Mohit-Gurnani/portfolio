import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import "../styles/globals.css";
import Footer from "@/components/global/footer/Footer";

export const metadata: Metadata = {
  title: "Mohit Gurnani - Portfolio",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
        <Analytics />
        {children}
        <Footer />
      </body>
    </html>
  );
}
