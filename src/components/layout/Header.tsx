import { useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Menu, X, Globe, Phone } from "lucide-react";
import { type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const LANG_LABELS: Record<Locale, string> = { en: "EN", pt: "PT", es: "ES" };
const LANG_FLAGS: Record<Locale, string> = { en: "🇺🇸", pt: "🇧🇷", es: "🇪🇸" };

interface HeaderProps { locale: Locale; }

export default function Header({ locale }: HeaderProps) {
  const { t } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const location = useLocation();

  const currentPath = location.pathname.replace(`/${locale}`, "") || "/";
  const switchTo = (lang: Locale) => `/${lang}${currentPath}`;

  const navItems = [
    { to: `/${locale}`, label: t("nav.home"), exact: true },
    { to: `/${locale}/about`, label: t("nav.about") },
    { to: `/${locale}/services`, label: t("nav.services") },
    { to: `/${locale}/conditions`, label: t("nav.conditions") },
    { to: `/${locale}/contact`, label: t("nav.contact") },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
      {/* Top bar */}
      <div className="bg-[var(--color-navy)] text-white text-xs py-1.5 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <span className="flex items-center gap-1.5">
            <Phone className="w-3 h-3" />
            <a href="tel:+16892697762" className="hover:text-[var(--color-teal-light)] transition-colors">
              (689) 269-7762
            </a>
          </span>
          <span className="hidden sm:block">
            {LANG_FLAGS[locale]} Serving Orlando in EN · PT · ES
          </span>
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to={`/${locale}`} className="flex items-center gap-2 shrink-0">
          <img src="/logo.png" alt="Vitality Neuro Rehab" className="h-10 w-auto" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "text-sm font-medium transition-colors hover:text-[var(--color-teal)]",
                location.pathname === item.to
                  ? "text-[var(--color-navy)] border-b-2 border-[var(--color-teal)] pb-0.5"
                  : "text-muted-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Language switcher */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-[var(--color-navy)] transition-colors px-2 py-1 rounded-md hover:bg-muted"
            >
              <Globe className="w-4 h-4" />
              <span>{LANG_LABELS[locale]}</span>
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-1 bg-white rounded-lg shadow-lg border border-border py-1 min-w-[100px] z-50">
                {(["en", "pt", "es"] as Locale[]).map((lang) => (
                  <Link
                    key={lang}
                    to={switchTo(lang)}
                    onClick={() => setLangOpen(false)}
                    className={cn(
                      "flex items-center gap-2 px-3 py-2 text-sm hover:bg-muted transition-colors",
                      lang === locale ? "text-[var(--color-navy)] font-semibold" : "text-foreground"
                    )}
                  >
                    <span>{LANG_FLAGS[lang]}</span>
                    <span>{LANG_LABELS[lang]}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* CTA button */}
          <Link
            to={`/${locale}/contact`}
            className="hidden sm:inline-flex items-center gap-2 bg-[var(--color-teal)] text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-[var(--color-navy)] transition-colors"
          >
            {t("nav.book")}
          </Link>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-muted"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-white px-4 pb-4">
          <div className="flex flex-col gap-1 pt-2">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "px-3 py-2.5 rounded-md text-sm font-medium transition-colors",
                  location.pathname === item.to
                    ? "bg-[var(--color-navy)] text-white"
                    : "text-foreground hover:bg-muted"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to={`/${locale}/contact`}
              onClick={() => setMobileOpen(false)}
              className="mt-2 bg-[var(--color-teal)] text-white text-sm font-semibold px-4 py-2.5 rounded-lg text-center hover:bg-[var(--color-navy)] transition-colors"
            >
              {t("nav.book")}
            </Link>
            <div className="flex gap-2 mt-2 px-3">
              {(["en", "pt", "es"] as Locale[]).map((lang) => (
                <Link
                  key={lang}
                  to={switchTo(lang)}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "flex items-center gap-1 text-xs px-2 py-1 rounded border transition-colors",
                    lang === locale
                      ? "border-[var(--color-teal)] bg-[var(--color-teal)]/10 text-[var(--color-navy)] font-semibold"
                      : "border-border text-muted-foreground hover:border-[var(--color-teal)]"
                  )}
                >
                  {LANG_FLAGS[lang]} {LANG_LABELS[lang]}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
