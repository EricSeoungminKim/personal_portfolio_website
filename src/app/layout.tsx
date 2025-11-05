import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Seoungmin Kim | Portfolio",
  description:
    "Resume-based portfolio for Seoungmin Kim highlighting experience, projects, and contact information.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#0b132b] text-[#e2f6ff] antialiased`}
      >
        <div className="relative min-h-screen overflow-x-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(111,255,233,0.18),_transparent_55%)]" />
          <div className="relative z-10 flex min-h-screen flex-col">
            <header className="sticky top-0 z-50 border-b border-[#1c2541]/60 bg-[#0b132b]/95 shadow-lg shadow-[#0b132b]/40 backdrop-blur-lg">
              <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#c6fff6]">
                <Link
                  href="/"
                  className="transition hover:text-[#6fffe9] focus-visible:text-[#6fffe9]"
                >
                  Home
                </Link>
                <Link
                  href="/projects"
                  className="transition hover:text-[#6fffe9] focus-visible:text-[#6fffe9]"
                >
                  Projects
                </Link>
                <Link
                  href="/contact"
                  className="transition hover:text-[#6fffe9] focus-visible:text-[#6fffe9]"
                >
                  Contact
                </Link>
                <a
                  href="/Seoungmin_Kim_Resume.pdf"
                  download
                  className="rounded-full border border-[#5bc0be]/50 bg-[#1c2541]/70 px-4 py-2 text-[0.65rem] font-semibold tracking-[0.4em] text-[#6fffe9] shadow-sm shadow-[#5bc0be]/30 transition hover:border-[#6fffe9]/70 hover:bg-[#1c2541]/90 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6fffe9]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b132b]"
                >
                  Resume
                </a>
              </nav>
            </header>
            <main className="flex-1">{children}</main>
            <footer className="border-t border-[#1c2541]/60 bg-[#0b132b]/90 py-6 text-center text-xs uppercase tracking-[0.3em] text-[#8a9bcd]">
              (c) {new Date().getFullYear()} Seoungmin Kim. All rights reserved.
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
