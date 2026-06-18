import Link from "next/link";
import { PILARES } from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-[#2D6A4F]/5 to-[#FAFAF7]">
        <div className="max-w-4xl mx-auto px-6 text-center pt-24 pb-16">
          <h1 className="font-display text-display text-foreground mb-6">
            Cultura <span className="text-accent">en Proyectos</span>
          </h1>
          <p className="text-h3 text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
            Desarrollamos y gestionamos proyectos culturales, artísticos,
            educativos y tecnológicos con especial acento en la inclusión y la
            sustentabilidad ambiental.
          </p>
          <Link
            href="/proyectos"
            className="inline-block px-8 py-4 bg-accent text-white font-medium text-small uppercase tracking-wider rounded-sm hover:opacity-90 transition-all no-underline"
          >
            Ver proyectos
          </Link>
        </div>
      </section>

      {/* Pilares */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="font-display text-h1 text-center mb-4">Nuestros pilares</h2>
        <p className="text-body text-muted text-center max-w-xl mx-auto mb-12">
          Organizamos nuestro trabajo en cuatro áreas fundamentales que abarcan
          desde la creación artística hasta la formación profesional.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PILARES.map((pilar) => (
            <Link
              key={pilar.slug}
              href={`/proyectos?pilar=${pilar.slug}`}
              className="group relative overflow-hidden rounded-sm bg-white border border-border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 no-underline"
            >
              <div className="h-48 relative overflow-hidden bg-[#F0F0EB]">
                <div
                  className="absolute inset-0 opacity-10"
                  style={{ backgroundColor: pilar.color }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="p-6 border-l-[3px]" style={{ borderLeftColor: pilar.color }}>
                <h3 className="font-display text-h3 text-foreground group-hover:text-accent transition-colors">
                  {pilar.label}
                </h3>
                <p className="text-small text-muted mt-2">
                  {pilar.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
