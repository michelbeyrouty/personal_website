import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/@pages/NavBar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Michel Beyrouty - Personal Website",
  description:
    "Welcome to Michel Beyrouty's personal website. Explore my projects, skills, and get in touch!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-brand-black text-foreground font-sans`}
      >
        <Navbar />
        <main className="">{children}</main>
        {/* Footer */}
      </body>
    </html>
  );
}
