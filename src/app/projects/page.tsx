"use client";

import { useState } from "react";
import { projects, type Project } from "@/data/projects";
import { ProjectCard } from "./_components/project-card";
import { ProjectModal } from "./_components/project-modal";

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <header className="mb-12 max-w-3xl space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#6fffe9]">
          Selected Work
        </p>
        <h1 className="bg-gradient-to-r from-[#6fffe9] via-[#5bc0be] to-[#8a9bcd] bg-clip-text text-4xl font-semibold text-transparent sm:text-5xl">
          Projects & Case Studies
        </h1>
        <p className="text-base text-[#d2dbe7]">
          A mix of individual and collaborative efforts spanning backend
          services, cloud infrastructure, and full-stack experiences. Choose a
          project to jump directly to its GitHub repository or the deployed
          experience.
        </p>
      </header>

      <div className="space-y-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            onSelect={setSelectedProject}
          />
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
