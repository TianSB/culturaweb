import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-6">
        <h1 className="font-display text-[8rem] text-accent leading-none mb-4">404</h1>
        <h2 className="font-display text-h1 mb-4">Página no encontrada</h2>
        <p className="text-body text-muted mb-8">
          La página que buscás no existe o fue movida. Revisá la URL o volvé al inicio.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-3 bg-accent text-white font-medium text-small uppercase tracking-wider rounded-sm hover:opacity-90 transition-all no-underline"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
