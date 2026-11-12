import Link from "next/link";
import { LOGIN_URL, INSTAGRAM_URL, INSTAGRAM_HANDLE, whatsappLink, interestMessage } from "@/lib/config";
import { Logo } from "./Logo";
import { InstagramIcon } from "./icons";

type SocialLink = { key: string; label: string; url: string };

const LINK = "text-sand/70 transition-colors hover:text-accent";
const HEADING = "text-[11px] font-bold uppercase tracking-[0.18em] text-sand/50";

export function SiteFooter({
  logo,
  socialLinks = [],
}: {
  logo?: { src: string; alt: string };
  socialLinks?: SocialLink[];
}) {
  // O Instagram do Núcleo aparece sempre; as demais redes vêm do mini-CMS.
  const otherNetworks = socialLinks.filter((net) => net.key !== "social-instagram");
  const instagramUrl = socialLinks.find((net) => net.key === "social-instagram")?.url || INSTAGRAM_URL;

  return (
    <footer className="border-t border-sand/10 bg-deep">
      <div className="mx-auto grid max-w-[1240px] gap-10 px-5 py-12 sm:px-10 md:grid-cols-[1.2fr_1fr_1fr_1fr] lg:px-14">
        <div>
          <Logo logo={logo} className="h-10" />
          <p className="mt-5 font-display text-[22px] tracking-[0.08em] text-accent">Da escola ao mundo</p>
          <p className="mt-2 max-w-[300px] text-sm leading-relaxed text-sand/60">
            Formação global, dupla diplomação e consultoria de admissão internacional — Colégio COC Santa Catarina.
          </p>
        </div>

        <div className="flex flex-col gap-2.5 text-sm">
          <span className={HEADING}>Núcleo</span>
          <Link href="#trajetoria" className={LINK}>Trajetória</Link>
          <Link href="#solucoes" className={LINK}>Soluções</Link>
          <Link href="#summer" className={LINK}>Summer Camps</Link>
          <Link href="#parceiros" className={LINK}>Parceiros</Link>
        </div>

        <div className="flex flex-col gap-2.5 text-sm">
          <span className={HEADING}>Contato</span>
          <a href={whatsappLink(interestMessage())} target="_blank" rel="noopener noreferrer" className={LINK}>
            WhatsApp
          </a>
          <Link href="#inscrever" className={LINK}>Inscreva-se</Link>
          <a href={LOGIN_URL} className={LINK}>Entrar (equipe)</a>
        </div>

        <div className="flex flex-col gap-2.5 text-sm">
          <span className={HEADING}>Redes</span>
          <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 ${LINK}`}>
            <InstagramIcon />
            @{INSTAGRAM_HANDLE}
          </a>
          {otherNetworks.map((net) => (
            <a key={net.key} href={net.url} target="_blank" rel="noopener noreferrer" className={LINK}>
              {net.label}
            </a>
          ))}
        </div>
      </div>
      <div className="border-t border-sand/10">
        <p className="mx-auto max-w-[1240px] px-5 py-5 text-xs text-sand/50 sm:px-10 lg:px-14">
          Grupo Nota Máxima · Rede COC Santa Catarina
        </p>
      </div>
    </footer>
  );
}
