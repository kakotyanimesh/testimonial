import "./globals.css";
import "@repo/ui/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  variable: "--font-Inter",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Testimonial",
  description: "Collect & Showcase Customer Love",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`} >{children}</body>
    </html>
  );
}
