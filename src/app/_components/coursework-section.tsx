import type { CourseworkGroup } from "@/data/personal";

type CourseworkSectionProps = {
  groups: CourseworkGroup[];
  gradients: string[];
};

export function CourseworkSection({ groups, gradients }: CourseworkSectionProps) {
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between gap-3">
        <h2 className="bg-gradient-to-r from-[#6fffe9] via-[#5bc0be] to-[#8a9bcd] bg-clip-text text-2xl font-semibold text-transparent">
          Relevant Coursework
        </h2>
        <p className="text-xs uppercase tracking-[0.3em] text-[#8a9bcd]">UCLA highlights</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {groups.map((group, index) => (
          <div
            key={group.category}
            className="relative overflow-hidden rounded-2xl border border-[#1c2541]/70 bg-[#111627]/60 p-5 transition hover:border-[#6fffe9]/70 hover:bg-[#1c2541]/70"
          >
            <div
              className={`pointer-events-none absolute inset-0 opacity-60 ${
                gradients[index % gradients.length]
              }`}
              aria-hidden
            />
            <div className="relative z-10 space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#6fffe9]">
                {group.category}
              </h3>
              <ul className="space-y-2 text-sm text-[#e2fffb]">
                {group.courses.map((course) => (
                  <li key={course.code}>
                    <span className="font-semibold text-white">{course.code}</span>
                    <span className="text-[#a5b8ce]"> - {course.title}</span>
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
