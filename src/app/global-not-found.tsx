import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

// 404 para URLs que não casam com nenhuma rota (ex. "/fr"). O layout raiz
// fica em app/[lang], então este arquivo precisa montar o próprio <html>.
export const metadata: Metadata = {
  title: "404 — Núcleo Polaris",
};

export default function GlobalNotFound() {
  return (
    <html lang="pt-BR">
      <body className="flex min-h-screen flex-col items-center justify-center gap-6 bg-night px-5 text-center font-body text-sand">
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent">404</p>
        <h1 className="text-3xl font-bold text-white">Página não encontrada · Page not found · Página no encontrada</h1>
        <nav className="flex gap-4 text-sm font-semibold">
          <Link href="/" hrefLang="pt-BR" className="text-sand/80 hover:text-accent">Início</Link>
          <Link href="/en" hrefLang="en" className="text-sand/80 hover:text-accent">Home</Link>
          <Link href="/es" hrefLang="es" className="text-sand/80 hover:text-accent">Inicio</Link>
        </nav>
      </body>
    </html>
  );
}
