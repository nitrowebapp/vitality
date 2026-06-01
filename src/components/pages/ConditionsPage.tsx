import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { useParams } from "@tanstack/react-router";
import { Brain, Activity, Ear, Zap, Shield, Heart, Star, ArrowRight } from "lucide-react";

const conditionIcons: Record<string, React.ReactNode> = {
  stroke: <Brain className="w-6 h-6" />,
  parkinsons: <Activity className="w-6 h-6" />,
  ms: <Shield className="w-6 h-6" />,
  tbi: <Zap className="w-6 h-6" />,
  vestibular: <Ear className="w-6 h-6" />,
  concussion: <Star className="w-6 h-6" />,
  bpd: <Heart className="w-6 h-6" />,
  balance: <Activity className="w-6 h-6" />,
};

const conditionColors: Record<string, string> = {
  stroke: "bg-red-50 text-red-600 border-red-100",
  parkinsons: "bg-purple-50 text-purple-600 border-purple-100",
  ms: "bg-blue-50 text-blue-600 border-blue-100",
  tbi: "bg-orange-50 text-orange-600 border-orange-100",
  vestibular: "bg-teal-50 text-teal-600 border-teal-100",
  concussion: "bg-yellow-50 text-yellow-600 border-yellow-100",
  bpd: "bg-pink-50 text-pink-600 border-pink-100",
  balance: "bg-green-50 text-green-600 border-green-100",
};

export default function ConditionsPage() {
  const { t } = useTranslation();
  const { locale } = useParams({ from: "/$locale/conditions" });

  const conditions = ["stroke", "parkinsons", "ms", "tbi", "vestibular", "concussion", "bpd", "balance"];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-navy)] to-[#1e4a82] text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-teal-light)]">
            {t("conditions.badge")}
          </span>
          <h1 className="text-4xl lg:text-5xl font-black mt-2 mb-3">{t("conditions.title")}</h1>
          <p className="text-white/70 max-w-2xl">{t("conditions.subtitle")}</p>
        </div>
      </section>

      {/* Conditions grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {conditions.map((key) => (
              <div
                key={key}
                className="group border border-border rounded-2xl p-6 hover:shadow-lg hover:border-[var(--color-teal)] transition-all"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl border mb-4 ${conditionColors[key]}`}>
                  {conditionIcons[key]}
                </div>
                <h2 className="text-lg font-black text-[var(--color-navy)] mb-2 group-hover:text-[var(--color-teal)] transition-colors">
                  {t(`conditions.${key}_title`)}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {t(`conditions.${key}_desc`)}
                </p>
                <Link
                  to={`/${locale}/contact`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-teal)] hover:text-[var(--color-navy)] transition-colors"
                >
                  {t("common.treat_this")}
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-gradient-to-br from-[var(--color-navy)] to-[#1e4a82] text-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-black mb-3">{t("common.conditions_cta_title")}</h2>
          <p className="text-white/70 mb-6 text-sm">
            {t("common.conditions_cta_desc")}
          </p>
          <Link
            to={`/${locale}/contact`}
            className="inline-flex items-center gap-2 bg-[var(--color-teal)] text-white font-bold px-8 py-4 rounded-xl hover:bg-[var(--color-teal-light)] transition-all"
          >
            {t("nav.book")} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
