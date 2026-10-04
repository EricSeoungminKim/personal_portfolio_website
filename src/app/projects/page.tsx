import Link from "next/link";
import { ProjectFeature } from "@/app/_components/project-feature";
import { Reveal } from "@/app/_components/reveal";
import { projects } from "@/data/portfolio";

export default function ProjectsPage() {
  return (
    <div className="work-section subpage">
      <div className="section-shell">
        <div className="subpage-top"><Link href="/" className="text-link text-link-light">← Back home</Link><span>SELECTED WORK / 2025 — 2026</span></div>
        <Reveal className="subpage-heading"><h1>Things I’ve <em>made.</em></h1><p>Five projects across infrastructure, mobile apps, and spatial computing. Here’s what went into each one.</p></Reveal>
        <div className="project-list">
          {projects.map((project) => (
            <Reveal key={project.slug}>
              <ProjectFeature project={project} />
              <div className="project-details"><span>BEHIND THE BUILD</span><ul>{project.details.map((detail) => <li key={detail}>{detail}</li>)}</ul></div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
