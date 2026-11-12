import { NextResponse, type NextRequest } from "next/server";
import { DEFAULT_LOCALE, LOCALE_COOKIE, hasLocale, localePath, matchAcceptLanguage } from "@/lib/i18n/locales";

// PT-BR mora na raiz ("/") sem prefixo; as páginas ficam em app/[lang], então
// "/" é reescrito internamente para "/pt". Na raiz, quem decide o idioma é:
//   1. o cookie do seletor (ni-lang) — escolha manual sempre vence;
//   2. sem cookie, o Accept-Language do navegador (EN/ES redirecionam).
// "/pt" nunca aparece na URL pública: redireciona para "/".
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/pt" || pathname.startsWith("/pt/")) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(3) || "/";
    return NextResponse.redirect(url);
  }

  // pathname === "/"
  const cookie = request.cookies.get(LOCALE_COOKIE)?.value;
  const locale = hasLocale(cookie) ? cookie : matchAcceptLanguage(request.headers.get("accept-language"));

  if (locale !== DEFAULT_LOCALE) {
    const url = request.nextUrl.clone();
    url.pathname = localePath(locale);
    const res = NextResponse.redirect(url);
    res.headers.set("Vary", "Cookie, Accept-Language");
    return res;
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${DEFAULT_LOCALE}`;
  const res = NextResponse.rewrite(url);
  res.headers.set("Vary", "Cookie, Accept-Language");
  return res;
}

export const config = {
  matcher: ["/", "/pt", "/pt/:path*"],
};
