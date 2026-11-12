import { whatsappLink, interestMessage } from "@/lib/config";
import { CTA } from "@/lib/content";

function WhatsappGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.47 14.38c-.29-.15-1.7-.84-1.96-.93-.26-.1-.45-.15-.64.14-.19.29-.74.93-.9 1.12-.17.19-.33.22-.62.07-.29-.15-1.22-.45-2.33-1.44-.86-.77-1.44-1.72-1.6-2-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.5.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.15-.64-1.55-.88-2.12-.23-.55-.47-.48-.64-.49l-.55-.01c-.19 0-.5.07-.76.36-.26.29-1 .98-1 2.38 0 1.4 1.02 2.76 1.17 2.95.14.19 2.02 3.08 4.9 4.32.68.3 1.22.47 1.63.6.69.22 1.31.19 1.8.11.55-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.34zM12.02 21.5h-.01a9.44 9.44 0 0 1-4.8-1.32l-.34-.2-3.57.94.95-3.48-.22-.36a9.43 9.43 0 0 1-1.44-5.02c0-5.22 4.25-9.47 9.48-9.47 2.53 0 4.9.99 6.69 2.78a9.4 9.4 0 0 1 2.77 6.7c0 5.22-4.25 9.47-9.48 9.47zM20.52 3.49A11.8 11.8 0 0 0 12.02 0C5.46 0 .13 5.33.12 11.89c0 2.1.55 4.14 1.6 5.95L0 24l6.3-1.65a11.9 11.9 0 0 0 5.71 1.45h.01c6.56 0 11.89-5.33 11.9-11.89a11.82 11.82 0 0 0-3.4-8.42z" />
    </svg>
  );
}

/** Link direto para o WhatsApp do Núcleo, sem passar pelo formulário. */
export function WhatsappButton({ label = CTA.whatsapp, className = "" }: { label?: string; className?: string }) {
  return (
    <a
      href={whatsappLink(interestMessage())}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-[52px] items-center gap-3 rounded-full border border-sand/30 px-6 text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors hover:border-[#25D366] hover:text-[#25D366] ${className}`}
    >
      <WhatsappGlyph />
      {label}
    </a>
  );
}
