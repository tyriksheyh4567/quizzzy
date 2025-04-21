import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
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
  title: "Personal Portfolio",
  description: "A feature-rich, visually appealing personal portfolio built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        <header className="w-full sticky top-0 z-50">
          <nav className="glass container mx-auto flex flex-wrap items-center justify-between py-4 px-6 mt-6 mb-8 border border-[var(--glass-border)] shadow-lg">
            <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent" style={{ backgroundImage: "var(--accent-gradient)" }}>
              <span className="align-middle">My Portfolio</span>
            </Link>
            <ul className="flex gap-6 text-lg font-medium">
              <li>
                <Link href="/about" className="hover:text-[var(--accent)] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/skills" className="hover:text-[var(--accent)] transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-[var(--accent)] transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[var(--accent)] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="container mx-auto px-4 pb-16">{children}</main>
      </body>
    </html>
  );
}
