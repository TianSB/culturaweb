"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import type { Project, PilarType } from "@/lib/constants";
import { PILARES } from "@/lib/constants";
import PilarFilter from "@/components/PilarFilter";
import ProjectCard from "@/components/ProjectCard";

interface ProyectosClientProps {
  projects: Project[];
}

function ProyectosContent({ projects }: ProyectosClientProps) {
  const searchParams = useSearchParams();
  const pilarParam = searchParams.get("pilar") as PilarType | null;
  const [activePilar, setActivePilar] = useState<PilarType | null>(pilarParam);

  const filteredProjects = useMemo(
    () => (activePilar ? projects.filter((p) => p.pilar === activePilar) : projects),
    [projects, activePilar]
  );

  const handlePilarChange = (pilar: PilarType | null) => {
    setActivePilar(pilar);
    const url = new URL(window.location.href);
    if (pilar) {
      url.searchParams.set("pilar", pilar);
    } else {
      url.searchParams.delete("pilar");
    }
    window.history.replaceState({}, "", url.toString());
  };

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h1 className="font-display text-h1 mb-4">Proyectos</h1>
          <p className="text-body text-muted max-w-xl">
            Explorá nuestros proyectos organizados por área de trabajo.
            Usá los filtros para descubrir iniciativas específicas.
          </p>
        </div>

        <div className="mb-10">
          <PilarFilter activePilar={activePilar} onChange={handlePilarChange} />
        </div>

        <p className="text-small text-muted mb-6">
          {filteredProjects.length}{" "}
          {filteredProjects.length === 1 ? "proyecto" : "proyectos"}
          {activePilar
            ? ` en ${PILARES.find((p) => p.slug === activePilar)?.label.toLowerCase()}`
            : ""}
        </p>

        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-body text-muted">No hay proyectos en esta categoría todavía.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ProyectosClient({ projects }: ProyectosClientProps) {
  return (
    <Suspense fallback={<div className="pt-28 pb-20 text-center">Cargando...</div>}>
      <ProyectosContent projects={projects} />
    </Suspense>
  );
}
