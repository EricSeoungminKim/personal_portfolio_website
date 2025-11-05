import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  onSelect: (project: Project) => void;
};

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <article
      role="button"
      tabIndex={0}
      onClick={() => onSelect(project)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onSelect(project);
        }
      }}
      className="grid cursor-pointer gap-6 rounded-3xl border border-[#1c2541] bg-[#111627]/70 p-6 transition hover:border-[#6fffe9]/70 hover:bg-[#1c2541]/70 md:grid-cols-[minmax(240px,_1fr)_minmax(360px,_1.5fr)]"
    >
      <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#1c2541]/80 bg-[#1c2541]/60 p-5 shadow-inner shadow-[#0b132b]/40">
        <div className="pointer-events-none absolute -right-10 top-1/3 h-32 w-32 rounded-full bg-[#5bc0be]/20 blur-3xl" />
        <div className="flex flex-1 flex-col justify-between">
          <div>
            <h2 className="text-lg font-semibold text-white">{project.title}</h2>
            <p className="mt-2 text-sm text-[#a5b8ce]">{project.position}</p>
          </div>
          <div className="mt-6 space-y-2 text-xs uppercase tracking-[0.3em] text-[#8a9bcd]">
            <p>Date | {project.date}</p>
            <p className="text-[#6fffe9]">Status | {project.status.toUpperCase()}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <p className="text-sm leading-relaxed text-[#d2dbe7]">{project.description}</p>
        <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[#c4cde6]">
          {project.highlights.map((highlight, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#6fffe9]" aria-hidden />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-[#5bc0be]/50 bg-[#5bc0be]/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#a9fff2]"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-4 grid gap-2 text-xs text-[#8a9bcd] sm:grid-cols-2">
          <div className="rounded-xl border border-[#1c2541]/70 bg-[#0b132b]/60 px-3 py-2">
            <span className="font-semibold text-white">Title:</span> {project.title}
          </div>
          <div className="rounded-xl border border-[#1c2541]/70 bg-[#0b132b]/60 px-3 py-2">
            <span className="font-semibold text-white">Date:</span> {project.date}
          </div>
          <div className="rounded-xl border border-[#1c2541]/70 bg-[#0b132b]/60 px-3 py-2 sm:col-span-2">
            <span className="font-semibold text-white">Position:</span> {project.position}
          </div>
        </div>
      </div>
    </article>
  );
}
