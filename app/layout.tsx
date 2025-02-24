import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavigationProgressBar from "./components/NavigationProgress";
import Navigation from "@/app/components/Navigation";
import PageTransition from "./components/PageTransition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavigationProgressBar />
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-grow pt-24">
            <PageTransition>
              {children}
            </PageTransition>
          </main>
          <footer className="bg-gray-100 py-6">
            <div className="container text-center text-gray-500">
              <p>© {new Date().getFullYear()} YourBrand. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
