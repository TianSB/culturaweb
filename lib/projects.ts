import fs from "fs";
import path from "path";
import type { Project, PilarType } from "./constants";

export function getAllProjects(): Project[] {
  const projectsDir = path.join(process.cwd(), "data", "projects");
  if (!fs.existsSync(projectsDir)) return [];

  const files = fs.readdirSync(projectsDir).filter((f) => f.endsWith(".json"));
  const projects: Project[] = files
    .map((file) => {
      const filePath = path.join(projectsDir, file);
      try {
        const content = fs.readFileSync(filePath, "utf-8");
        return JSON.parse(content) as Project;
      } catch {
        return null;
      }
    })
    .filter((p): p is Project => p !== null);

  return projects.sort((a, b) => a.title.localeCompare(b.title, "es"));
}

export function getProjectsByPilar(pilar: PilarType): Project[] {
  return getAllProjects().filter((p) => p.pilar === pilar);
}

export function getProjectBySlug(slug: string): Project | null {
  const filePath = path.join(process.cwd(), "data", "projects", `${slug}.json`);
  if (!fs.existsSync(filePath)) return null;
  try {
    const content = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(content) as Project;
  } catch {
    return null;
  }
}

export function getAdjacentProjects(slug: string): {
  prev: Project | null;
  next: Project | null;
} {
  const project = getProjectBySlug(slug);
  if (!project) return { prev: null, next: null };

  const samePilar = getProjectsByPilar(project.pilar);
  const currentIndex = samePilar.findIndex((p) => p.slug === slug);

  return {
    prev: currentIndex > 0 ? samePilar[currentIndex - 1] : null,
    next: currentIndex < samePilar.length - 1 ? samePilar[currentIndex + 1] : null,
  };
}
