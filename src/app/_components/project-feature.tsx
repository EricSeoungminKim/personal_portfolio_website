import type { Project } from "@/data/portfolio";
import { ProjectVisual } from "./project-visual";

export function ProjectFeature({ project }: { project: Project }) {
  return (
    <article className={`project-card project-${project.slug}`} id={project.slug}>
      <div className="project-visual-wrap"><ProjectVisual slug={project.slug} /></div>
      <div className="project-copy">
        <div className="project-meta"><span>{project.number} / {project.eyebrow}</span><span>{project.period}</span></div>
        <div><h3>{project.title}</h3><p>{project.summary}</p></div>
        <div className="project-bottom">
          <div className="project-stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
          <div className="project-links">
            {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer">Visit site <span aria-hidden="true">↗</span></a>}
            <a href={project.github} target="_blank" rel="noopener noreferrer">Source <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </div>
    </article>
  );
}
