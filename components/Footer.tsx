import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-display text-h3 text-foreground mb-3">
              Cultura <span className="text-accent">en Proyectos</span>
            </h3>
            <p className="text-small text-muted">
              Fundación argentina que desarrolla proyectos culturales, artísticos,
              educativos y tecnológicos con foco en inclusión y sustentabilidad.
            </p>
          </div>

          <div>
            <h4 className="text-label uppercase text-muted mb-4">Enlaces</h4>
            <div className="flex flex-col gap-2">
              <Link href="/proyectos" className="text-small text-muted hover:text-foreground transition-colors no-underline">
                Proyectos
              </Link>
              <Link href="/nosotros" className="text-small text-muted hover:text-foreground transition-colors no-underline">
                Nosotros
              </Link>
              <Link href="/contacto" className="text-small text-muted hover:text-foreground transition-colors no-underline">
                Contacto
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-label uppercase text-muted mb-4">Redes</h4>
            <div className="flex flex-col gap-2">
              <a href="https://instagram.com/culturaenproyectos" target="_blank" rel="noopener noreferrer"
                 className="text-small text-muted hover:text-foreground transition-colors">
                Instagram
              </a>
              <a href="https://youtube.com/@culturaenproyectos" target="_blank" rel="noopener noreferrer"
                 className="text-small text-muted hover:text-foreground transition-colors">
                YouTube
              </a>
              <a href="https://vimeo.com/culturaenproyectos" target="_blank" rel="noopener noreferrer"
                 className="text-small text-muted hover:text-foreground transition-colors">
                Vimeo
              </a>
              <a href="mailto:info@culturaenproyectos.org"
                 className="text-small text-muted hover:text-foreground transition-colors">
                info@culturaenproyectos.org
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 text-center">
          <p className="text-label uppercase text-muted">
            &copy; {new Date().getFullYear()} Cultura en Proyectos. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
