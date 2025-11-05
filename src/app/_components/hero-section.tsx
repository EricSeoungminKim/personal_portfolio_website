"use client";

import { useEffect, useState } from "react";
import type { ContactLink } from "@/data/personal";

type HeroSectionProps = {
  introText: string;
  contactLinks: ContactLink[];
};

export function HeroSection({ introText, contactLinks }: HeroSectionProps) {
  const [typedText, setTypedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const type = () => {
      const nextIndex = index + 1;
      setTypedText(introText.slice(0, nextIndex));
      index = nextIndex;

      if (index < introText.length) {
        window.setTimeout(type, 20);
      } else {
        setIsTypingComplete(true);
      }
    };

    const timeoutId = window.setTimeout(type, 120);
    return () => window.clearTimeout(timeoutId);
  }, [introText]);

  useEffect(() => {
    const intervalId = window.setInterval(
      () => setShowCursor((prev) => !prev),
      isTypingComplete ? 600 : 300,
    );

    return () => window.clearInterval(intervalId);
  }, [isTypingComplete]);

  const displayText = typedText.length > 0 ? typedText : "\u00a0";

  return (
    <section className="space-y-6">
      <p className="inline-flex items-center gap-2 rounded-full border border-[#5bc0be]/50 bg-[#5bc0be]/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-[#a9fff2]">
        Resume Overview
      </p>
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-3">
          <h1 className="bg-gradient-to-r from-[#6fffe9] via-[#5bc0be] to-[#8a9bcd] bg-clip-text text-4xl font-semibold text-transparent sm:text-5xl md:text-6xl">
            Seoungmin Kim
          </h1>
          <p className="relative max-w-3xl text-lg text-[#d2dbe7] sm:text-xl" aria-live="polite">
            <span>{displayText}</span>
            <span
              className={`ml-1 inline-block h-6 w-0.5 align-middle bg-[#6fffe9] transition-opacity ${
                showCursor ? "opacity-100" : "opacity-0"
              }`}
              aria-hidden
            />
          </p>
        </div>
        <div className="flex shrink-0 items-center justify-center">
          <div className="flex h-28 w-28 items-center justify-center rounded-full border border-[#5bc0be]/60 bg-gradient-to-br from-[#3a506b] via-[#1c2541] to-[#5bc0be]/40 text-3xl font-semibold text-white shadow-lg shadow-[#3a506b]/30 sm:h-32 sm:w-32 sm:text-4xl">
            SK
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-3">
        {contactLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="group inline-flex items-center gap-2 rounded-full border border-[#1c2541] bg-[#1c2541]/70 px-4 py-2 text-xs uppercase tracking-[0.25em] text-[#c4cde6] transition hover:border-[#6fffe9]/70 hover:text-[#6fffe9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6fffe9]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b132b]"
          >
            <span>{link.label}</span>
            <span className="font-semibold text-[#6fffe9] transition group-hover:text-white">
              {link.value}
            </span>
          </a>
        ))}
        <a
          href="#who-am-i"
          className="group inline-flex items-center gap-2 rounded-full border border-[#6fffe9]/70 bg-[#6fffe9]/15 px-4 py-2 text-xs uppercase tracking-[0.3em] text-[#e2fffb] transition hover:bg-[#6fffe9]/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6fffe9]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b132b]"
        >
          Who Am I?
        </a>
      </div>
    </section>
  );
}
