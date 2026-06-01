import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { useParams } from "@tanstack/react-router";
import { Brain, Ear, Activity, Zap, Heart, Waves, Video, ArrowRight, Phone } from "lucide-react";

const serviceIcons: Record<string, React.ReactNode> = {
  neuro: <Brain className="w-8 h-8" />,
  vestibular: <Ear className="w-8 h-8" />,
  balance: <Activity className="w-8 h-8" />,
  concussion: <Zap className="w-8 h-8" />,
  facial: <Heart className="w-8 h-8" />,
  aquatic: <Waves className="w-8 h-8" />,
  telehealth: <Video className="w-8 h-8" />,
};

const serviceImages: Record<string, string> = {
  vestibular: "/ellen-clinic.jpg",
  aquatic: "/aquatic-therapy.jpg",
};

export default function ServicesPage() {
  const { t } = useTranslation();
  const { locale } = useParams({ from: "/$locale/services" });

  const services = ["neuro", "vestibular", "balance", "concussion", "facial", "aquatic", "telehealth"];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-navy)] to-[#1e4a82] text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-teal-light)]">
            {t("services.badge")}
          </span>
          <h1 className="text-4xl lg:text-5xl font-black mt-2 mb-3">{t("services.title")}</h1>
          <p className="text-white/70 max-w-xl">{t("services.subtitle")}</p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 space-y-8">
          {services.map((key, i) => (
            <div
              key={key}
              className={`grid lg:grid-cols-2 gap-8 items-center ${i % 2 !== 0 && serviceImages[key] ? "lg:flex-row-reverse" : ""}`}
            >
              {serviceImages[key] && (
                <div className={`rounded-2xl overflow-hidden shadow-lg ${i % 2 !== 0 ? "lg:order-2" : ""}`}>
                  <img
                    src={serviceImages[key]}
                    alt={t(`services.${key}_title`)}
                    className="w-full h-64 object-cover"
                  />
                </div>
              )}
              <div className={`border border-border rounded-2xl p-8 hover:shadow-lg hover:border-[var(--color-teal)] transition-all ${!serviceImages[key] ? "lg:col-span-2" : ""}`}>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[var(--color-teal)]/10 flex items-center justify-center text-[var(--color-teal)] shrink-0">
                    {serviceIcons[key]}
                  </div>
                  <div>
                    <h2 className="text-xl font-black text-[var(--color-navy)] mb-2">
                      {t(`services.${key}_title`)}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">{t(`services.${key}_desc`)}</p>
                    <Link
                      to={`/${locale}/contact`}
                      className="inline-flex items-center gap-2 mt-4 text-[var(--color-teal)] font-semibold text-sm hover:text-[var(--color-navy)] transition-colors"
                    >
                      {t("common.book_service")} <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-[var(--color-muted)]">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-black text-[var(--color-navy)] mb-3">
            {t("common.services_cta_title")}
          </h2>
          <p className="text-muted-foreground mb-6 text-sm">
            {t("common.services_cta_desc")}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to={`/${locale}/contact`}
              className="inline-flex items-center gap-2 bg-[var(--color-navy)] text-white font-bold px-6 py-3.5 rounded-xl hover:bg-[var(--color-teal)] transition-all"
            >
              {t("nav.book")} <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+16892697762"
              className="inline-flex items-center gap-2 border-2 border-[var(--color-navy)] text-[var(--color-navy)] font-bold px-6 py-3.5 rounded-xl hover:bg-[var(--color-navy)] hover:text-white transition-all"
            >
              <Phone className="w-4 h-4" /> (689) 269-7762
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
