import type { Experience } from "@/data/personal";

type ExperienceSectionProps = {
  experiences: Experience[];
};

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between gap-3">
        <h2 className="bg-gradient-to-r from-[#6fffe9] via-[#5bc0be] to-[#8a9bcd] bg-clip-text text-2xl font-bold text-transparent">
          Career Experience
        </h2>
      </div>
      <div className="space-y-6">
        {experiences.map((experience) => (
          <article
            key={experience.company}
            className="rounded-3xl border border-[#1c2541] bg-[#111627]/70 p-6 transition hover:border-[#6fffe9]/70 hover:bg-[#1c2541]/70"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {experience.role}
                </h3>
                <p className="text-sm text-[#a5b8ce]">{experience.company}</p>
              </div>
              <div className="text-right text-xs uppercase tracking-[0.3em] text-[#8a9bcd]">
                <p>{experience.period}</p>
                <p>{experience.location}</p>
              </div>
            </div>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[#d2dbe7]">
              {experience.bullets.map((bullet, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span
                    className="mt-1 h-1.5 w-1.5 rounded-full bg-[#6fffe9]"
                    aria-hidden
                  />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
