import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Phone, Mail, MapPin, Shield, Award } from "lucide-react";
import { type Locale } from "@/lib/i18n";

interface FooterProps { locale: Locale; }

export default function Footer({ locale }: FooterProps) {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-navy)] text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <img src="/logo-white.png" alt="Vitality Neuro Rehab" className="h-10 w-auto mb-3" />
            <p className="text-sm text-white/70 leading-relaxed mb-4">{t("footer.tagline")}</p>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1 text-xs text-white/60 bg-white/10 px-2 py-1 rounded">
                <Shield className="w-3 h-3" /> {t("footer.hipaa")}
              </span>
              <span className="flex items-center gap-1 text-xs text-white/60 bg-white/10 px-2 py-1 rounded">
                <Award className="w-3 h-3" /> {t("footer.license")}
              </span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-white/80">
              {t("footer.quick_links")}
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { to: `/${locale}`, label: t("nav.home") },
                { to: `/${locale}/about`, label: t("nav.about") },
                { to: `/${locale}/services`, label: t("nav.services") },
                { to: `/${locale}/conditions`, label: t("nav.conditions") },
                { to: `/${locale}/contact`, label: t("nav.book") },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-white/70 hover:text-[var(--color-teal-light)] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-white/80">
              {t("footer.contact_title")}
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-white/70">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-teal-light)]" />
                <span>Windermere, FL 34786<br />Greater Orlando Area</span>
              </li>
              <li>
                <a href="tel:+16892697762" className="flex items-center gap-2 text-white/70 hover:text-[var(--color-teal-light)] transition-colors">
                  <Phone className="w-4 h-4 shrink-0 text-[var(--color-teal-light)]" />
                  (689) 269-7762
                </a>
              </li>
              <li>
                <a href="mailto:ellencsteixeira@gmail.com" className="flex items-center gap-2 text-white/70 hover:text-[var(--color-teal-light)] transition-colors">
                  <Mail className="w-4 h-4 shrink-0 text-[var(--color-teal-light)]" />
                  ellencsteixeira@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>© {year} Vitality Neuro Rehab. {t("footer.rights")}</p>
          <p>Ellen Teixeira, PT, DPT, NCS · FL License PT 39241</p>
        </div>
      </div>
    </footer>
  );
}
