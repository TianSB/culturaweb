export interface Project {
  slug: string;
  title: string;
  pilar: PilarType;
  excerpt: string;
  coverImage: string;
  gallery: string[];
  content: string;
  credits: { role: string; name: string }[];
  downloads: { label: string; url: string }[];
  videos: string[];
  externalLinks: string[];
}

export type PilarType =
  | "libros-inclusivos"
  | "proyectos-artisticos"
  | "formacion-profesional"
  | "actividades-ludicas";

export const PILARES: { slug: PilarType; label: string; description: string; color: string }[] = [
  {
    slug: "libros-inclusivos",
    label: "Libros Inclusivos",
    description: "Proyectos de divulgación científica con diseño universal.",
    color: "#4A90A4",
  },
  {
    slug: "proyectos-artisticos",
    label: "Proyectos Artísticos",
    description: "Residencias, murales, performances y laboratorios de arte.",
    color: "#C0392B",
  },
  {
    slug: "formacion-profesional",
    label: "Formación Profesional",
    description: "Incubación, capacitación y aceleración cultural.",
    color: "#D4A017",
  },
  {
    slug: "actividades-ludicas",
    label: "Actividades Lúdicas",
    description: "Talleres itinerantes de juego y experimentación.",
    color: "#2D6A4F",
  },
];

export function getPilarColor(pilar: PilarType): string {
  const found = PILARES.find((p) => p.slug === pilar);
  return found?.color ?? "#6B6B6B";
}
