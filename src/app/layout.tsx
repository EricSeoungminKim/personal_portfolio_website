import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Instrument_Serif } from "next/font/google";
import { ScrollProgress } from "@/app/_components/reveal";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const instrumentSerif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-instrument" });

export const metadata: Metadata = {
  title: "Seoungmin Kim — Software Engineer",
  description: "Seoungmin Kim is a software engineer and UCLA Electrical Engineering student building dependable systems and useful digital products.",
  openGraph: {
    title: "Seoungmin Kim — Software Engineer",
    description: "Software engineering, selected work, and experience.",
    url: "https://seoungmin-portfolio.vercel.app/",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={geist.variable + " " + instrumentSerif.variable}>
        <ScrollProgress />
        <header className="site-header">
          <div className="section-shell header-inner">
            <Link href="/" className="brand" aria-label="Seoungmin Kim, home">S<span>—</span>K<span className="brand-dot">.</span></Link>
            <nav className="main-nav" aria-label="Main navigation"><Link href="/#work">Work</Link><Link href="/#experience">Experience</Link><Link href="/#hackathons">Hackathons</Link><Link href="/#about">About</Link></nav>
            <Link className="header-contact" href="/#contact">Let’s talk <span aria-hidden="true">↗</span></Link>
          </div>
        </header>
        <main>{children}</main>
        <footer className="site-footer"><div className="section-shell footer-inner"><span>© SEOUNGMIN KIM</span><span>DESIGNED & BUILT WITH INTENT.</span><Link href="/#top">BACK TO TOP ↑</Link></div></footer>
      </body>
    </html>
  );
}
