import type { TimelineEntry } from "@/data/personal";
import { whoAmIHighlights, whoAmIIntro } from "@/data/personal";
import type { ReactNode } from "react";

type WhoAmISectionProps = {
  intro?: ReactNode[];
  timeline: TimelineEntry[];
  highlights?: ReactNode[];
};

const defaultIntro = whoAmIIntro;
const defaultHighlights = whoAmIHighlights;

export function WhoAmISection({
  intro = defaultIntro,
  timeline,
  highlights = defaultHighlights,
}: WhoAmISectionProps) {
  return (
    <section
      id="who-am-i"
      className="space-y-8 rounded-3xl border border-[#1c2541] bg-[#111627]/70 p-8 shadow-lg shadow-[#1c2541]/40 backdrop-blur"
    >
      <div className="space-y-3">
        <h2 className="text-sm font-semibold uppercase tracking-[0.35em] text-[#6fffe9]">
          Who Am I?
        </h2>
        <p className="text-2xl font-semibold text-white">A storyteller through systems.</p>
      </div>
      <div className="space-y-4 text-sm leading-relaxed text-[#d2dbe7]">
        {intro.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <div className="space-y-4">
        <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8a9bcd]">
          Timeline
        </h3>
        <div className="space-y-4">
          {timeline.map((item) => (
            <article
              key={item.year}
              className="flex flex-col gap-2 rounded-2xl border border-[#1c2541]/60 bg-[#1c2541]/50 p-5 shadow-inner shadow-[#0b132b]/40"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#5bc0be]/60 bg-[#5bc0be]/20 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-[#a9fff2]">
                  {item.badge}
                </span>
                <span className="text-xs uppercase tracking-[0.35em] text-[#8a9bcd]">
                  {item.year}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-[#d2dbe7]">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
      <div className="space-y-3 text-sm leading-relaxed text-[#d2dbe7]">
        {highlights.map((highlight, index) => (
          <p key={index}>{highlight}</p>
        ))}
      </div>
    </section>
  );
}
