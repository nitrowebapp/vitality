import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { useParams } from "@tanstack/react-router";
import {
  Brain, Activity, Ear, Zap, Shield, Heart, Video, Waves,
  CheckCircle, Star, Phone, ArrowRight, Award, Users, Clock
} from "lucide-react";

export default function HomePage() {
  const { t } = useTranslation();
  const { locale } = useParams({ from: "/$locale/" });

  const services = [
    { key: "stroke", icon: <Brain className="w-6 h-6" />, color: "text-red-500" },
    { key: "parkinsons", icon: <Activity className="w-6 h-6" />, color: "text-purple-500" },
    { key: "vestibular", icon: <Ear className="w-6 h-6" />, color: "text-[var(--color-teal)]" },
    { key: "tbi", icon: <Zap className="w-6 h-6" />, color: "text-orange-500" },
    { key: "ms", icon: <Shield className="w-6 h-6" />, color: "text-blue-500" },
    { key: "balance", icon: <Heart className="w-6 h-6" />, color: "text-green-500" },
  ];

  const whyItems = [
    { key: "specialist", icon: <Award className="w-6 h-6" /> },
    { key: "oneonone", icon: <Users className="w-6 h-6" /> },
    { key: "technology", icon: <Activity className="w-6 h-6" /> },
    { key: "trilingual", icon: <Video className="w-6 h-6" /> },
    { key: "telehealth", icon: <Video className="w-6 h-6" /> },
    { key: "aquatic", icon: <Waves className="w-6 h-6" /> },
  ];

  const insurances = [
    "Medicare", "Medicaid", "Blue Cross Blue Shield",
    "Aetna", "United Healthcare", "Cigna", "Humana"
  ];

  return (
    <div>
      {/* HERO */}
      <section className="relative bg-gradient-to-br from-[var(--color-navy)] via-[#1e4a82] to-[#1a3a5c] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-[var(--color-teal)] blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[var(--color-gold)] blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 bg-[var(--color-teal)]/20 border border-[var(--color-teal)]/30 text-[var(--color-teal-light)] text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
                <Award className="w-3.5 h-3.5" />
                {t("hero.badge")}
              </span>
              <h1 className="text-4xl lg:text-6xl font-black leading-tight mb-2">
                {t("hero.title")}
              </h1>
              <h1 className="text-4xl lg:text-6xl font-black leading-tight text-[var(--color-teal-light)] mb-6">
                {t("hero.title2")}
              </h1>
              <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-lg">
                {t("hero.subtitle")}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to={`/${locale}/contact`}
                  className="inline-flex items-center justify-center gap-2 bg-[var(--color-teal)] hover:bg-[var(--color-teal-light)] text-white font-bold px-6 py-3.5 rounded-xl transition-all hover:scale-105 shadow-lg shadow-teal-900/30"
                >
                  {t("hero.cta_book")}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:+16892697762"
                  className="inline-flex items-center justify-center gap-2 border border-white/30 hover:bg-white/10 text-white font-semibold px-6 py-3.5 rounded-xl transition-all"
                >
                  <Phone className="w-4 h-4" />
                  {t("hero.cta_discover")}
                </a>
              </div>
            </div>

            {/* Photo + trust stats */}
            <div className="flex flex-col items-center gap-6">
              <div className="relative">
                <div className="w-72 h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-[var(--color-teal)]/30">
                  <img
                    src="/ellen-headshot.jpg"
                    alt="Dr. Ellen Teixeira, PT, DPT, NCS"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-[var(--color-gold)] text-[var(--color-navy)] font-black text-sm px-3 py-2 rounded-xl shadow-lg">
                  NCS Certified
                </div>
              </div>

              {/* Trust stats */}
              <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
                {[
                  { value: "20+", label: t("hero.trust_years") },
                  { value: "500+", label: t("hero.trust_patients") },
                  { value: "1:1", label: t("hero.trust_oneonone") },
                  { value: "NCS", label: t("hero.trust_ncs") },
                ].map((s) => (
                  <div key={s.label} className="bg-white/10 backdrop-blur rounded-xl p-3 text-center">
                    <div className="text-2xl font-black text-[var(--color-teal-light)]">{s.value}</div>
                    <div className="text-xs text-white/70 mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-teal)]">
              {t("services_preview.badge")}
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-[var(--color-navy)] mt-2 mb-3">
              {t("services_preview.title")}
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">{t("services_preview.subtitle")}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map(({ key, icon, color }) => (
              <div
                key={key}
                className="group border border-border rounded-2xl p-6 hover:shadow-lg hover:border-[var(--color-teal)] transition-all"
              >
                <div className={`${color} mb-4 group-hover:scale-110 transition-transform`}>{icon}</div>
                <h3 className="font-bold text-[var(--color-navy)] mb-2">
                  {t(`services_preview.${key}.title`)}
                </h3>
                <p className="text-sm text-muted-foreground">{t(`services_preview.${key}.desc`)}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to={`/${locale}/services`}
              className="inline-flex items-center gap-2 border-2 border-[var(--color-navy)] text-[var(--color-navy)] font-bold px-6 py-3 rounded-xl hover:bg-[var(--color-navy)] hover:text-white transition-all"
            >
              {t("services_preview.cta")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="py-20 bg-[var(--color-muted)]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/ellen-clinic.jpg"
                  alt="Dr. Ellen Teixeira in her vestibular rehabilitation clinic"
                  className="w-full h-[480px] object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[var(--color-navy)] text-white p-4 rounded-xl shadow-lg max-w-[200px]">
                <div className="text-2xl font-black text-[var(--color-teal-light)]">20+</div>
                <div className="text-xs text-white/80 leading-tight">Years in Neurological Rehabilitation</div>
              </div>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-teal)]">
                {t("about_preview.badge")}
              </span>
              <h2 className="text-3xl lg:text-4xl font-black text-[var(--color-navy)] mt-2 mb-1">
                {t("about_preview.title")}
              </h2>
              <p className="text-[var(--color-teal)] font-semibold mb-4">{t("about_preview.subtitle")}</p>
              <p className="text-muted-foreground leading-relaxed mb-6">{t("about_preview.body")}</p>

              <div className="space-y-3 mb-8">
                {["cert1", "cert2", "cert3", "cert4"].map((c) => (
                  <div key={c} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[var(--color-teal)] shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-[var(--color-navy)]">
                      {t(`about_preview.${c}`)}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                to={`/${locale}/about`}
                className="inline-flex items-center gap-2 bg-[var(--color-navy)] text-white font-bold px-6 py-3 rounded-xl hover:bg-[var(--color-teal)] transition-all"
              >
                {t("about_preview.cta")}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-teal)]">
              {t("why.badge")}
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-[var(--color-navy)] mt-2">
              {t("why.title")}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyItems.map(({ key, icon }) => (
              <div key={key} className="flex gap-4 p-5 rounded-2xl hover:bg-[var(--color-muted)] transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-teal)]/10 flex items-center justify-center text-[var(--color-teal)] shrink-0">
                  {icon}
                </div>
                <div>
                  <h3 className="font-bold text-[var(--color-navy)] mb-1">
                    {t(`why.${key}_title`)}
                  </h3>
                  <p className="text-sm text-muted-foreground">{t(`why.${key}_desc`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-gradient-to-br from-[var(--color-navy)] to-[#1e4a82] text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-teal-light)]">
              {t("process.badge")}
            </span>
            <h2 className="text-3xl lg:text-4xl font-black mt-2">{t("process.title")}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: "01", key: "s1" },
              { num: "02", key: "s2" },
              { num: "03", key: "s3" },
            ].map(({ num, key }) => (
              <div key={key} className="text-center">
                <div className="w-16 h-16 rounded-full bg-[var(--color-teal)]/20 border border-[var(--color-teal)]/40 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-black text-[var(--color-teal-light)]">{num}</span>
                </div>
                <h3 className="text-lg font-bold mb-2">{t(`process.${key}_title`)}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{t(`process.${key}_desc`)}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to={`/${locale}/contact`}
              className="inline-flex items-center gap-2 bg-[var(--color-teal)] hover:bg-[var(--color-teal-light)] text-white font-bold px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-lg"
            >
              {t("hero.cta_book")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* AQUATIC THERAPY PHOTO SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-teal)]">
                {t("services_preview.badge")}
              </span>
              <h2 className="text-3xl lg:text-4xl font-black text-[var(--color-navy)] mt-2 mb-4">
                Aquatic Therapy
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t("services.aquatic_desc")}
              </p>
              <div className="flex gap-3">
                <Link
                  to={`/${locale}/services`}
                  className="inline-flex items-center gap-2 bg-[var(--color-navy)] text-white font-bold px-5 py-2.5 rounded-xl hover:bg-[var(--color-teal)] transition-all text-sm"
                >
                  {t("services_preview.cta")}
                </Link>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/aquatic-therapy.jpg"
                alt="Aquatic therapy session at Vitality Neuro Rehab"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* INSURANCE */}
      <section className="py-16 bg-[var(--color-muted)]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-teal)]">
            {t("insurance.badge")}
          </span>
          <h2 className="text-2xl lg:text-3xl font-black text-[var(--color-navy)] mt-2 mb-3">
            {t("insurance.title")}
          </h2>
          <p className="text-muted-foreground mb-2">{t("insurance.subtitle")}</p>
          <p className="text-sm text-muted-foreground mb-8">{t("insurance.question")}</p>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {insurances.map((ins) => (
              <span key={ins} className="bg-white border border-border px-4 py-2 rounded-full text-sm font-medium text-[var(--color-navy)] shadow-sm">
                {ins}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to={`/${locale}/contact`}
              className="inline-flex items-center gap-2 bg-[var(--color-teal)] text-white font-bold px-6 py-3 rounded-xl hover:bg-[var(--color-navy)] transition-all"
            >
              {t("insurance.cta")}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <p className="text-sm text-muted-foreground">{t("insurance.selfpay")}</p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 bg-[var(--color-gold)]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[var(--color-navy)] text-[var(--color-navy)]" />
            ))}
          </div>
          <h2 className="text-2xl lg:text-3xl font-black text-[var(--color-navy)] mb-3">
            Ready to Start Your Recovery?
          </h2>
          <p className="text-[var(--color-navy)]/70 mb-6 text-sm">
            Board-certified neurological PT · 1:1 sessions · English, Portuguese & Spanish
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to={`/${locale}/contact`}
              className="inline-flex items-center justify-center gap-2 bg-[var(--color-navy)] text-white font-bold px-8 py-4 rounded-xl hover:bg-[var(--color-teal)] transition-all shadow-lg"
            >
              {t("hero.cta_book")}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+16892697762"
              className="inline-flex items-center justify-center gap-2 border-2 border-[var(--color-navy)] text-[var(--color-navy)] font-bold px-8 py-4 rounded-xl hover:bg-[var(--color-navy)] hover:text-white transition-all"
            >
              <Phone className="w-4 h-4" />
              (689) 269-7762
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
