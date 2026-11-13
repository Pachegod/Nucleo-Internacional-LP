import { LOGIN_URL, CONTACT_EMAIL, INSTAGRAM_URL, INSTAGRAM_HANDLE, whatsappLink, interestMessage } from "@/lib/config";
import { Logo } from "./Logo";
import { InstagramIcon } from "./icons";
import type { Dictionary } from "@/lib/i18n/pt";

type SocialLink = { key: string; label: string; url: string };

const LINK = "text-sand/70 transition-colors hover:text-accent";
const HEADING = "text-[11px] font-bold uppercase tracking-[0.18em] text-sand/50";

export function SiteFooter({
  logo,
  socialLinks = [],
  t,
}: {
  logo?: { src: string; alt: string };
  socialLinks?: SocialLink[];
  t: Dictionary;
}) {
  const f = t.footer;
  const nav = t.header.nav;
  // O Instagram do Núcleo aparece sempre; as demais redes vêm do mini-CMS.
  const otherNetworks = socialLinks.filter((net) => net.key !== "social-instagram");
  const instagramUrl = socialLinks.find((net) => net.key === "social-instagram")?.url || INSTAGRAM_URL;

  return (
    <footer className="border-t border-sand/10 bg-deep">
      <div className="mx-auto grid max-w-[1240px] gap-10 px-5 py-12 sm:px-10 md:grid-cols-[1.2fr_1fr_1fr_1fr] lg:px-14">
        <div>
          <Logo logo={logo} alt={t.logoAlt} className="h-10" />
          <p className="mt-5 font-display text-[22px] tracking-[0.08em] text-accent">{f.tagline}</p>
          <p className="mt-2 max-w-[300px] text-sm leading-relaxed text-sand/60">
            {f.description}
          </p>
        </div>

        <div className="flex flex-col gap-2.5 text-sm">
          <span className={HEADING}>{f.nucleo}</span>
          <a href="#quem-somos" className={LINK}>{nav["quem-somos"]}</a>
          <a href="#trajetoria" className={LINK}>{nav.trajetoria}</a>
          <a href="#solucoes" className={LINK}>{nav.solucoes}</a>
          <a href="#summer" className={LINK}>{nav.summer}</a>
          <a href="#parceiros" className={LINK}>{nav.parceiros}</a>
        </div>

        <div className="flex flex-col gap-2.5 text-sm">
          <span className={HEADING}>{f.contact}</span>
          <a href={whatsappLink(interestMessage(t.whatsappMessage))} target="_blank" rel="noopener noreferrer" className={LINK}>
            {f.whatsapp}
          </a>
          <a href={`mailto:${CONTACT_EMAIL}`} title={CONTACT_EMAIL} className={LINK}>
            {f.email}
          </a>
          <a href="#inscrever" className={LINK}>{f.enroll}</a>
          <a href={LOGIN_URL} className={LINK}>{f.staffLogin}</a>
        </div>

        <div className="flex flex-col gap-2.5 text-sm">
          <span className={HEADING}>{f.networks}</span>
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
          {f.legal}
        </p>
      </div>
    </footer>
  );
}
