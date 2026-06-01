import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { useParams } from "@tanstack/react-router";
import { Award, GraduationCap, Briefcase, Globe, CheckCircle, Quote, ArrowRight, Phone } from "lucide-react";

export default function AboutPage() {
  const { t } = useTranslation();
  const { locale } = useParams({ from: "/$locale/about" });

  const education = [
    { degree: t("about.edu_dpt"), school: t("about.edu_dpt_school") },
    { degree: t("about.edu_geriatrics"), school: t("about.edu_geriatrics_school") },
    { degree: t("about.edu_bachelor"), school: t("about.edu_bachelor_school") },
  ];

  const certs = ["cert1", "cert2", "cert3", "cert4"];

  const experience = [
    { role: t("about.exp1_role"), company: t("about.exp1_company"), period: t("about.exp1_period") },
    { role: t("about.exp2_role"), company: t("about.exp2_company"), period: t("about.exp2_period") },
    { role: t("about.exp3_role"), company: t("about.exp3_company"), period: t("about.exp3_period") },
    { role: t("about.exp4_role"), company: t("about.exp4_company"), period: t("about.exp4_period") },
  ];

  return (
    <div>
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-[var(--color-navy)] to-[#1e4a82] text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-teal-light)]">
            {t("about.badge")}
          </span>
          <h1 className="text-4xl lg:text-5xl font-black mt-2">{t("about.title")}</h1>
          <p className="text-[var(--color-teal-light)] font-semibold mt-1">{t("about.credentials")}</p>
          <p className="text-white/70 mt-2">{t("about.tagline")}</p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-[380px_1fr] gap-12 items-start">
            {/* Left column — photo + quick facts */}
            <div className="space-y-6">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/ellen-headshot.jpg"
                  alt="Dr. Ellen Teixeira, PT, DPT, NCS"
                  className="w-full object-cover"
                />
              </div>

              {/* Quick credentials card */}
              <div className="bg-[var(--color-navy)] text-white rounded-2xl p-6 space-y-4">
                <div className="flex items-center gap-2 text-[var(--color-teal-light)] font-bold text-sm">
                  <Award className="w-4 h-4" />
                  {t("about.certifications_title")}
                </div>
                {certs.map((c) => (
                  <div key={c} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-[var(--color-teal-light)] shrink-0 mt-0.5" />
                    <span className="text-xs text-white/80 leading-snug">{t(`about.${c}`)}</span>
                  </div>
                ))}
              </div>

              {/* Languages */}
              <div className="border border-border rounded-2xl p-5">
                <div className="flex items-center gap-2 font-bold text-[var(--color-navy)] mb-3">
                  <Globe className="w-4 h-4 text-[var(--color-teal)]" />
                  {t("about.languages_title")}
                </div>
                <div className="flex gap-2 flex-wrap">
                  {[
                    { flag: "🇺🇸", lang: "English" },
                    { flag: "🇧🇷", lang: "Português" },
                    { flag: "🇪🇸", lang: "Español" },
                  ].map(({ flag, lang }) => (
                    <span key={lang} className="flex items-center gap-1.5 bg-[var(--color-teal)]/10 text-[var(--color-navy)] text-sm font-medium px-3 py-1.5 rounded-full">
                      {flag} {lang}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                to={`/${locale}/contact`}
                className="flex items-center justify-center gap-2 bg-[var(--color-teal)] text-white font-bold px-6 py-3.5 rounded-xl hover:bg-[var(--color-navy)] transition-all w-full"
              >
                {t("nav.book")}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Right column — story */}
            <div className="space-y-8">
              {/* Story */}
              <div>
                <h2 className="text-2xl font-black text-[var(--color-navy)] mb-4">{t("about.story_title")}</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>{t("about.story")}</p>
                  <p>{t("about.story2")}</p>
                  <p>{t("about.story3")}</p>
                </div>
              </div>

              {/* Philosophy quote */}
              <div className="bg-[var(--color-muted)] rounded-2xl p-6 border-l-4 border-[var(--color-teal)] relative">
                <Quote className="absolute top-4 right-4 w-8 h-8 text-[var(--color-teal)]/20" />
                <h3 className="font-bold text-[var(--color-navy)] mb-3">{t("about.philosophy_title")}</h3>
                <p className="text-[var(--color-navy)] italic leading-relaxed font-medium">
                  {t("about.philosophy")}
                </p>
              </div>

              {/* Education */}
              <div>
                <div className="flex items-center gap-2 font-bold text-[var(--color-navy)] mb-4 text-lg">
                  <GraduationCap className="w-5 h-5 text-[var(--color-teal)]" />
                  {t("about.education_title")}
                </div>
                <div className="space-y-4">
                  {education.map(({ degree, school }) => (
                    <div key={degree} className="border border-border rounded-xl p-4 hover:border-[var(--color-teal)] transition-colors">
                      <p className="font-bold text-[var(--color-navy)] text-sm">{degree}</p>
                      <p className="text-muted-foreground text-sm mt-0.5">{school}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div>
                <div className="flex items-center gap-2 font-bold text-[var(--color-navy)] mb-4 text-lg">
                  <Briefcase className="w-5 h-5 text-[var(--color-teal)]" />
                  {t("about.experience_title")}
                </div>
                <div className="space-y-4">
                  {experience.map(({ role, company, period }) => (
                    <div key={company} className="flex gap-4 border-b border-border pb-4 last:border-0">
                      <div className="w-2 h-2 rounded-full bg-[var(--color-teal)] mt-2 shrink-0" />
                      <div>
                        <p className="font-bold text-[var(--color-navy)] text-sm">{role}</p>
                        <p className="text-muted-foreground text-sm">{company}</p>
                        <p className="text-xs text-[var(--color-teal)] font-semibold mt-0.5">{period}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-[var(--color-muted)]">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-black text-[var(--color-navy)] mb-3">
            {t("common.about_cta_title")}
          </h2>
          <p className="text-muted-foreground mb-6 text-sm">
            {t("common.about_cta_desc")}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to={`/${locale}/contact`}
              className="inline-flex items-center gap-2 bg-[var(--color-navy)] text-white font-bold px-6 py-3.5 rounded-xl hover:bg-[var(--color-teal)] transition-all"
            >
              {t("nav.book")}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+16892697762"
              className="inline-flex items-center gap-2 border-2 border-[var(--color-navy)] text-[var(--color-navy)] font-bold px-6 py-3.5 rounded-xl hover:bg-[var(--color-navy)] hover:text-white transition-all"
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
