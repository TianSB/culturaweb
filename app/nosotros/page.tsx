import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quiénes somos",
  description:
    "Conocé Cultura en Proyectos, una fundación argentina que desarrolla proyectos culturales, artísticos, educativos y tecnológicos.",
  openGraph: {
    title: "Quiénes somos | Cultura en Proyectos",
    description:
      "Conocé Cultura en Proyectos, una fundación argentina que desarrolla proyectos culturales, artísticos, educativos y tecnológicos.",
  },
};

export default function NosotrosPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="font-display text-h1 mb-8">Quiénes somos</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-h3 text-muted leading-relaxed mb-8">
            <strong className="text-foreground">Cultura en Proyectos</strong> es una
            fundación argentina que desarrolla y gestiona proyectos culturales,
            artísticos, educativos y tecnológicos, con especial acento en la
            inclusión y la sustentabilidad ambiental.
          </p>

          <p className="text-body text-muted leading-relaxed mb-6">
            Estamos conformados por un grupo transdisciplinar de profesionales de
            la cultura, el diseño y las ciencias que trabaja de manera colectiva
            en cada proyecto. Colaboramos con instituciones públicas, organismos
            de financiamiento, universidades y organizaciones de la sociedad civil
            para impulsar iniciativas que generen impacto real en las comunidades.
          </p>
        </div>

        <div className="mt-16">
          <h2 className="font-display text-h2 mb-8">
            Trabajamos colaborativamente con
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "FADU UBA", desc: "Facultad de Arquitectura, Diseño y Urbanismo" },
              { name: "Espacio Memoria", desc: "Ex ESMA - Derechos Humanos" },
              { name: "Museo Fernández Blanco", desc: "Patrimonio cultural" },
              { name: "Municipio de Mercedes", desc: "Provincia de Buenos Aires" },
            ].map((inst) => (
              <div
                key={inst.name}
                className="p-6 bg-white border border-border rounded-sm text-center hover:shadow-sm transition-shadow"
              >
                <div className="font-display text-h3 text-foreground mb-2">
                  {inst.name}
                </div>
                <p className="text-small text-muted">{inst.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h2 className="font-display text-h2 mb-6">Medios</h2>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://youtube.com/@culturaenproyectos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-border rounded-sm text-small font-medium text-foreground hover:border-foreground transition-colors no-underline"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2c-.3-1-1-1.8-2-2-2-.5-10-.5-10-.5s-8 0-10 .5c-.7.2-1.5 1-2 2C-1 9.5-1 12-1 12s0 2.5.5 5.8c.3 1 1.2 1.8 2 2 2 .5 10 .5 10 .5s8 0 10-.5c.7-.2 1.5-1 2-2 .5-3.3.5-5.8.5-5.8s0-2.5-.5-5.8zM9.5 15.5V8.5l6.5 3.5-6.5 3.5z"/></svg>
              YouTube
            </a>
            <a
              href="https://vimeo.com/culturaenproyectos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-border rounded-sm text-small font-medium text-foreground hover:border-foreground transition-colors no-underline"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2c-.3-1-1-1.8-2-2-2-.5-10-.5-10-.5s-8 0-10 .5c-.7.2-1.5 1-2 2C-1 9.5-1 12-1 12s0 2.5.5 5.8c.3 1 1.2 1.8 2 2 2 .5 10 .5 10 .5s8 0 10-.5c.7-.2 1.5-1 2-2 .5-3.3.5-5.8.5-5.8s0-2.5-.5-5.8zM9.5 15.5V8.5l6.5 3.5-6.5 3.5z"/></svg>
              Vimeo
            </a>
            <a
              href="mailto:info@culturaenproyectos.org"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white border border-accent rounded-sm text-small font-medium hover:opacity-90 transition-colors no-underline"
            >
              info@culturaenproyectos.org
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
