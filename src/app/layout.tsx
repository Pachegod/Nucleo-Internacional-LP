import type { Metadata } from "next";
import { Archivo, Archivo_Narrow } from "next/font/google";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { ThemeScript } from "@/components/site/ThemeScript";
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

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${archivo.variable} ${archivoBody.variable} ${archivoNarrow.variable} h-full antialiased`}
    >
      <head>
        <ThemeScript />
      </head>
      <body className="min-h-full flex flex-col bg-paper text-ink font-body">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
