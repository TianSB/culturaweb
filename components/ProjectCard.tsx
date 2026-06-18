import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/constants";
import { getPilarColor, PILARES } from "@/lib/constants";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const pilarColor = getPilarColor(project.pilar);
  const pilarLabel = PILARES.find((p) => p.slug === project.pilar)?.label ?? project.pilar;

  return (
    <Link
      href={`/proyectos/${project.slug}`}
      className="group block no-underline"
    >
      <article className="relative bg-white rounded-sm overflow-hidden border border-border transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <div className="aspect-[4/3] relative overflow-hidden bg-[#F0F0EB]">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div
          className="p-5 border-l-[3px]"
          style={{ borderLeftColor: pilarColor }}
        >
          <span
            className="text-label uppercase tracking-wider font-medium"
            style={{ color: pilarColor }}
          >
            {pilarLabel}
          </span>
          <h3 className="text-h3 font-display mt-1 text-foreground group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <p className="text-small text-muted mt-2 line-clamp-2">
            {project.excerpt}
          </p>
        </div>
      </article>
    </Link>
  );
}
