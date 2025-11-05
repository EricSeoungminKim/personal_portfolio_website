"use client";

import { useEffect } from "react";
import type { Project } from "@/data/projects";

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

const openUrl = (url?: string) => {
  if (!url) return;
  window.open(url, "_blank", "noopener,noreferrer");
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [project, onClose]);

  if (!project) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0b132b]/80 px-6 backdrop-blur"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div
        className="w-full max-w-md rounded-3xl border border-[#1c2541] bg-[#111627]/95 p-6 shadow-2xl shadow-[#0b132b]/60"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="space-y-2">
          <h3 id="project-modal-title" className="text-xl font-semibold text-white">
            {project.title}
          </h3>
          <p className="text-sm text-[#a5b8ce]">{project.position}</p>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-[#d2dbe7]">
          Choose where you&apos;d like to explore this project.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => {
              openUrl(project.link);
              onClose();
            }}
            className="flex-1 rounded-full border border-[#5bc0be]/60 bg-[#5bc0be]/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#a9fff2] transition hover:border-[#6fffe9]/80 hover:bg-[#1c2541]/80"
          >
            View on GitHub
          </button>
          {project.website && (
            <button
              type="button"
              onClick={() => {
                openUrl(project.website);
                onClose();
              }}
              className="flex-1 rounded-full border border-[#6fffe9]/70 bg-[#6fffe9]/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white transition hover:bg-[#6fffe9]/25"
            >
              View Website
            </button>
          )}
        </div>
        <button
          type="button"
          onClick={onClose}
          className="mt-6 w-full rounded-full border border-transparent bg-[#1c2541] px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#a5b8ce] transition hover:border-[#6fffe9]/40 hover:text-white"
        >
          Close
        </button>
      </div>
    </div>
  );
}
