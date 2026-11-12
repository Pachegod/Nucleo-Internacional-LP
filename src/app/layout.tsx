import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { Bebas_Neue, Montserrat } from "next/font/google";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { getLpContent, getAccentColor, getAccentInk, getImage, getSocialLinks, DEFAULT_ACCENT } from "@/lib/cms";
import "./globals.css";

// Títulos em Bebas Neue (caixa alta condensada), texto corrido em Montserrat.
const display = Bebas_Neue({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

const body = Montserrat({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
  // cor diferente do padrão — sem nada configurado (ou com a API fora do ar),
  // vale o dourado definido em globals.css.
  const accentStyle =
    accent !== DEFAULT_ACCENT
      ? ({ "--accent": accent, "--accent-ink": getAccentInk(accent) } as CSSProperties)
      : undefined;
  const logo = getImage(items, "logo");
  const socialLinks = getSocialLinks(items);

  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-night font-body text-sand" style={accentStyle}>
        <SiteHeader logo={logo} />
        <main className="flex-1">{children}</main>
        <SiteFooter logo={logo} socialLinks={socialLinks} />
      </body>
    </html>
  );
}
