"use client";

import { useEffect, useState } from "react";

type Mode = "light" | "dark" | null; // null = seguir o sistema

const KEY = "ni-theme";

function systemTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function useTheme() {
  const [mode, setMode] = useState<Mode>(null);
  const [system, setSystem] = useState<"light" | "dark">("light");

  useEffect(() => {
    const stored = localStorage.getItem(KEY);
    if (stored === "light" || stored === "dark") setMode(stored);

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const sync = () => setSystem(mq.matches ? "dark" : "light");
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const active = mode ?? system;

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", active);
  }, [active]);

  function choose(next: Mode) {
    setMode(next);
    if (next === null) localStorage.removeItem(KEY);
    else localStorage.setItem(KEY, next);
  }

  return { mode, active, choose, toggle: () => choose(active === "dark" ? "light" : "dark") };
}

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { mode, active, toggle } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={active === "dark" ? "Mudar para o tema claro" : "Mudar para o tema escuro"}
      title={mode === null ? "Seguindo o sistema — clique para fixar" : "Fixado manualmente"}
      className={`border-2 border-rule px-3 py-[7px] font-mono text-[11px] uppercase tracking-[0.12em] text-ink transition-colors hover:bg-accent-tint ${className}`}
    >
      {mounted ? (active === "dark" ? "Noite" : "Dia") : "Tema"}
    </button>
  );
}
