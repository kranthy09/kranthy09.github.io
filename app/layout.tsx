import type { Metadata } from "next";
import { Inter, Montserrat, Outfit } from 'next/font/google';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavProgressComponent from "./components/NavProgressComponent";
import Navigation from "@/app/components/Navigation";
import PageTransition from "./components/PageTransition";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// For headings - modern, tech-focused font
const headingFont = Outfit({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-heading',
  display: 'swap',
});

// For body text - clean, readable font
const bodyFont = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Influence AI website",
  description: "Social Media Application to connect with influencers and manage campaigns",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${headingFont.variable} ${bodyFont.variable} antialiased`}
      >
        <NavProgressComponent />

        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-grow pt-24">
            <Suspense>
              <PageTransition>
                {children}
              </PageTransition>
            </Suspense>
          </main>
          <footer className="bg-gray-100 py-6">
            <div className="container text-center text-gray-500">
              <p>© {new Date().getFullYear()} Influenceai. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
