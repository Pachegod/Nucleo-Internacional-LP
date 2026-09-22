import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { Archivo, Archivo_Narrow } from "next/font/google";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { ThemeScript } from "@/components/site/ThemeScript";
import { getLpContent, getAccentColor, getAccentInk, getImage, getSocialLinks, DEFAULT_ACCENT } from "@/lib/cms";
import "./globals.css";

// Modernist: Archivo em tudo. --font-mono passa a ser Archivo Narrow,
// usada nos rótulos em caixa alta (as classes font-mono existentes continuam valendo).
const archivo = Archivo({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const archivoBody = Archivo({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const archivoNarrow = Archivo_Narrow({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  title: "Núcleo Internacional — Polaris COC Santa Catarina",
  description:
    "Formação global, dupla diplomação e consultoria de admissão internacional para alunos do Colégio COC.",
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const items = await getLpContent();
  const accent = getAccentColor(items);
  // Só sobrescreve --accent/--accent-ink quando o admin de fato escolheu uma
  // cor diferente do padrão — assim, sem nada configurado (ou com a API fora
  // do ar), cada tema mantém seu próprio azul já ajustado em globals.css.
  const accentStyle =
    accent !== DEFAULT_ACCENT
      ? ({ "--accent": accent, "--accent-ink": getAccentInk(accent) } as CSSProperties)
      : undefined;
  const logo = getImage(items, "logo");
  const socialLinks = getSocialLinks(items);

  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${archivo.variable} ${archivoBody.variable} ${archivoNarrow.variable} h-full antialiased`}
    >
      <head>
        <ThemeScript />
      </head>
      <body className="min-h-full flex flex-col bg-paper text-ink font-body" style={accentStyle}>
        <SiteHeader logo={logo} />
        <main className="flex-1">{children}</main>
        <SiteFooter socialLinks={socialLinks} />
      </body>
    </html>
  );
}
