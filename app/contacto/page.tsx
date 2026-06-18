import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contactate con Cultura en Proyectos. Envianos tu mensaje y te responderemos a la brevedad.",
  openGraph: {
    title: "Contacto | Cultura en Proyectos",
    description:
      "Contactate con Cultura en Proyectos. Envianos tu mensaje y te responderemos a la brevedad.",
  },
};

export default function ContactoPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h1 className="font-display text-h1 mb-4">Contacto</h1>
            <p className="text-body text-muted mb-8">
              Si querés saber más sobre nuestros proyectos, colaborar o simplemente
              saludarnos, escribinos. Te respondemos a la brevedad.
            </p>
            <ContactForm />
          </div>

          <div>
            <div className="p-8 bg-white border border-border rounded-sm">
              <h2 className="font-display text-h3 mb-6">Información de contacto</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-label uppercase text-muted mb-2">Email</h3>
                  <a
                    href="mailto:info@culturaenproyectos.org"
                    className="text-body text-foreground hover:text-accent transition-colors"
                  >
                    info@culturaenproyectos.org
                  </a>
                </div>

                <div>
                  <h3 className="text-label uppercase text-muted mb-2">Redes sociales</h3>
                  <div className="flex flex-col gap-2">
                    <a
                      href="https://instagram.com/culturaenproyectos"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-body text-foreground hover:text-accent transition-colors"
                    >
                      Instagram
                    </a>
                    <a
                      href="https://youtube.com/@culturaenproyectos"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-body text-foreground hover:text-accent transition-colors"
                    >
                      YouTube
                    </a>
                    <a
                      href="https://vimeo.com/culturaenproyectos"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-body text-foreground hover:text-accent transition-colors"
                    >
                      Vimeo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
