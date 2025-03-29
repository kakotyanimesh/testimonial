import "./globals.css";
import "@repo/ui/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

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
      <body className={`${inter.variable} antialiased md:px-20 px-3 py-5`} >
        <Navbar/>
        {children}
        {/* <Footer/> */}
      </body>
    </html>
  );
}
