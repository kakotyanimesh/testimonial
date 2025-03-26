import "./globals.css";
import "@repo/ui/styles.css";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono   } from "next/font/google";

const inter = Inter({
  variable: "--font-Inter",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable : "--font-jetbrains-mono",
  subsets : ["latin"]
})

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
      <body className={`${jetBrainsMono.variable} antialiased`} >{children}</body>
    </html>
  );
}
