"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/YOUR_ENDPOINT", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="text-label uppercase text-muted block mb-2">
          Nombre
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-3 bg-white border border-border rounded-sm text-body text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors"
          placeholder="Tu nombre"
        />
      </div>

      <div>
        <label htmlFor="email" className="text-label uppercase text-muted block mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 bg-white border border-border rounded-sm text-body text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors"
          placeholder="tu@email.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="text-label uppercase text-muted block mb-2">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-3 bg-white border border-border rounded-sm text-body text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors resize-y"
          placeholder="Escribí tu mensaje..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="px-8 py-3 bg-accent text-white font-medium text-small uppercase tracking-wider rounded-sm hover:opacity-90 transition-all disabled:opacity-50 cursor-pointer"
      >
        {status === "loading" ? "Enviando..." : "Enviar mensaje"}
      </button>

      {status === "success" && (
        <p className="text-accent text-small font-medium">
          ✓ Mensaje enviado con éxito. Te responderemos pronto.
        </p>
      )}
      {status === "error" && (
        <p className="text-[#C0392B] text-small font-medium">
          ✗ Hubo un error al enviar el mensaje. Por favor intentá de nuevo.
        </p>
      )}
    </form>
  );
}
