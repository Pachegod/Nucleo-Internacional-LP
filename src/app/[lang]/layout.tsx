import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Bebas_Neue, Montserrat } from "next/font/google";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { getLpContent, getAccentColor, getAccentInk, getImage, getSocialLinks, DEFAULT_ACCENT } from "@/lib/cms";
import { LOCALES, HTML_LANG, getDictionary, hasLocale, localePath } from "@/lib/i18n";
import "../globals.css";

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

// Só /pt (servido em "/"), /en e /es existem; qualquer outro segmento é 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = getDictionary(lang);
  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: {
      canonical: localePath(lang),
      languages: {
        ...Object.fromEntries(LOCALES.map((l) => [HTML_LANG[l], localePath(l)])),
        "x-default": "/",
      },
    },
    openGraph: {
      title: t.meta.title,
      description: t.meta.description,
      locale: { pt: "pt_BR", en: "en_US", es: "es_ES" }[lang],
    },
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = getDictionary(lang);

  const items = await getLpContent();
  const accent = getAccentColor(items);
  // Só sobrescreve --accent/--accent-ink quando o admin de fato escolheu uma
  // cor diferente do padrão — sem nada configurado (ou com a API fora do ar),
  // vale o dourado definido em globals.css.
  const accentStyle =
    accent !== DEFAULT_ACCENT
      ? ({ "--accent": accent, "--accent-ink": getAccentInk(accent) } as CSSProperties)
      : undefined;
  const logo = getImage(items, "logo", lang, t.logoAlt);
  const socialLinks = getSocialLinks(items);

  return (
    <html lang={HTML_LANG[lang]} className={`${display.variable} ${body.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-night font-body text-sand" style={accentStyle}>
        <SiteHeader logo={logo} lang={lang} t={t.header} langSwitcher={t.langSwitcher} logoAlt={t.logoAlt} />
        <main className="flex-1">{children}</main>
        <SiteFooter logo={logo} socialLinks={socialLinks} t={t} />
      </body>
    </html>
  );
}
