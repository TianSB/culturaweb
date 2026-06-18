import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProjectBySlug, getAdjacentProjects } from "@/lib/projects";
import { PILARES, getPilarColor } from "@/lib/constants";
import Gallery from "@/components/Gallery";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.excerpt,
    openGraph: {
      title: `${project.title} | Cultura en Proyectos`,
      description: project.excerpt,
      images: [{ url: project.coverImage }],
    },
  };
}

export default function ProjectPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const pilarLabel = PILARES.find((p) => p.slug === project.pilar)?.label ?? "";
  const pilarColor = getPilarColor(project.pilar);
  const { prev, next } = getAdjacentProjects(params.slug);

  return (
    <article className="pt-28 pb-20">
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[400px] overflow-hidden bg-[#F0F0EB]">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="max-w-4xl mx-auto">
            <span
              className="inline-block text-label uppercase tracking-wider font-medium text-white/90 mb-3"
              style={{ borderLeft: `3px solid ${pilarColor}`, paddingLeft: "12px" }}
            >
              {pilarLabel}
            </span>
            <h1 className="font-display text-h1 md:text-display text-white">
              {project.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-h3 text-muted mt-8 mb-8 leading-relaxed">
          {project.excerpt}
        </p>

        <div
          className="prose prose-lg max-w-none text-body text-foreground [&_p]:mb-4 [&_p]:leading-relaxed"
          dangerouslySetInnerHTML={{ __html: project.content }}
        />

        <Gallery images={project.gallery} projectTitle={project.title} />

        {project.videos.length > 0 && (
          <div className="my-8 space-y-6">
            <h2 className="font-display text-h2">Videos</h2>
            {project.videos.map((video, i) => (
              <div key={i} className="aspect-video rounded-sm overflow-hidden">
                <iframe
                  src={video}
                  title={`${project.title} - Video ${i + 1}`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        )}

        {project.credits.length > 0 && (
          <div className="my-8 p-6 bg-white border border-border rounded-sm">
            <h2 className="font-display text-h2 mb-4">Créditos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.credits.map((credit, i) => (
                <div key={i} className="flex gap-2">
                  <span className="text-label uppercase text-muted min-w-[100px]">
                    {credit.role}
                  </span>
                  <span className="text-body text-foreground">{credit.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {project.downloads.length > 0 && (
          <div className="my-8">
            <h2 className="font-display text-h2 mb-4">Descargas</h2>
            <div className="flex flex-wrap gap-3">
              {project.downloads.map((dl, i) => (
                <a
                  key={i}
                  href={dl.url}
                  download
                  className="px-6 py-3 bg-accent text-white text-small uppercase tracking-wider font-medium rounded-sm hover:opacity-90 transition-all no-underline"
                >
                  {dl.label}
                </a>
              ))}
            </div>
          </div>
        )}

        <div className="flex justify-between items-center mt-16 pt-8 border-t border-border">
          {prev ? (
            <Link
              href={`/proyectos/${prev.slug}`}
              className="group flex items-center gap-2 text-small text-muted hover:text-foreground transition-colors no-underline"
            >
              <span className="text-lg">←</span>
              <div>
                <div className="text-label uppercase">Anterior</div>
                <div className="font-medium">{prev.title}</div>
              </div>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              href={`/proyectos/${next.slug}`}
              className="group flex items-center gap-2 text-small text-muted hover:text-foreground transition-colors text-right no-underline"
            >
              <div>
                <div className="text-label uppercase">Siguiente</div>
                <div className="font-medium">{next.title}</div>
              </div>
              <span className="text-lg">→</span>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </article>
  );
}
