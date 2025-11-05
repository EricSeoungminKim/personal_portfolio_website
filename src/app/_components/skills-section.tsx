import type { SkillGroup } from "@/data/personal";

type SkillsSectionProps = {
  groups: SkillGroup[];
  gradients: string[];
};

export function SkillsSection({ groups, gradients }: SkillsSectionProps) {
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between gap-3">
        <h2 className="bg-gradient-to-r from-[#6fffe9] via-[#5bc0be] to-[#8a9bcd] bg-clip-text text-2xl font-semibold text-transparent">
          Technical Skills
        </h2>
        <p className="text-xs uppercase tracking-[0.3em] text-[#8a9bcd]">
          Stack coverage
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {groups.map((group, index) => (
          <div
            key={group.category}
            className="relative overflow-hidden rounded-2xl border border-[#1c2541]/70 bg-[#111627]/70 p-5 shadow-lg shadow-[#1c2541]/30 transition hover:border-[#6fffe9]/70 hover:shadow-[#6fffe9]/20"
          >
            <div
              className={`pointer-events-none absolute inset-0 opacity-70 ${
                gradients[index % gradients.length]
              }`}
              aria-hidden
            />
            <div className="relative z-10">
              <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#6fffe9]">
                {group.category}
              </h3>
              <ul className="mt-4 space-y-2 text-base font-semibold text-[#e2fffb]">
                {group.items.map((item) => (
                  <li key={item} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
