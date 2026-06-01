import { useState } from "react";
import { useTranslation } from "react-i18next";
import { MapPin, Phone, Mail, Clock, Globe, CheckCircle, Stethoscope } from "lucide-react";

type FormState = "idle" | "submitting" | "success";

export default function ContactPage() {
  const { t } = useTranslation();
  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState({
    name: "", email: "", phone: "", language: "en",
    condition: "", insurance: "", requestType: "eval", message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    await new Promise((r) => setTimeout(r, 1200));
    setFormState("success");
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-navy)] to-[#1e4a82] text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-teal-light)]">
            {t("contact.badge")}
          </span>
          <h1 className="text-4xl lg:text-5xl font-black mt-2 mb-2">{t("contact.title")}</h1>
          <p className="text-white/70 max-w-lg">{t("contact.subtitle")}</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-[1fr_380px] gap-10">

            {/* FORM */}
            <div>
              {formState === "success" ? (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <CheckCircle className="w-16 h-16 text-[var(--color-teal)] mb-4" />
                  <h2 className="text-2xl font-black text-[var(--color-navy)] mb-2">{t("contact.success_title")}</h2>
                  <p className="text-muted-foreground">{t("contact.success_desc")}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Request type */}
                  <div>
                    <label className="block text-sm font-semibold text-[var(--color-navy)] mb-2">
                      {t("contact.request_type")}
                    </label>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {[
                        { val: "eval", label: t("contact.type_eval") },
                        { val: "discovery", label: t("contact.type_discovery") },
                        { val: "telehealth", label: t("contact.type_telehealth") },
                        { val: "question", label: t("contact.type_question") },
                      ].map(({ val, label }) => (
                        <label
                          key={val}
                          className={`flex items-center gap-2.5 border rounded-xl px-4 py-3 cursor-pointer transition-all ${
                            form.requestType === val
                              ? "border-[var(--color-teal)] bg-[var(--color-teal)]/5"
                              : "border-border hover:border-[var(--color-teal)]/50"
                          }`}
                        >
                          <input
                            type="radio"
                            name="requestType"
                            value={val}
                            checked={form.requestType === val}
                            onChange={handleChange}
                            className="accent-[var(--color-teal)]"
                          />
                          <span className="text-sm font-medium text-[var(--color-navy)]">{label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Name + Email */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-[var(--color-navy)] mb-1.5">
                        {t("contact.name")} *
                      </label>
                      <input
                        name="name" required value={form.name} onChange={handleChange}
                        className="w-full border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[var(--color-teal)] focus:ring-1 focus:ring-[var(--color-teal)]/30 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[var(--color-navy)] mb-1.5">
                        {t("contact.email")} *
                      </label>
                      <input
                        type="email" name="email" required value={form.email} onChange={handleChange}
                        className="w-full border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[var(--color-teal)] focus:ring-1 focus:ring-[var(--color-teal)]/30 transition-all"
                      />
                    </div>
                  </div>

                  {/* Phone + Language */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-[var(--color-navy)] mb-1.5">
                        {t("contact.phone")}
                      </label>
                      <input
                        type="tel" name="phone" value={form.phone} onChange={handleChange}
                        className="w-full border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[var(--color-teal)] focus:ring-1 focus:ring-[var(--color-teal)]/30 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[var(--color-navy)] mb-1.5">
                        {t("contact.lang_pref")}
                      </label>
                      <select
                        name="language" value={form.language} onChange={handleChange}
                        className="w-full border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[var(--color-teal)] transition-all bg-white"
                      >
                        <option value="en">{t("contact.lang_en")}</option>
                        <option value="pt">{t("contact.lang_pt")}</option>
                        <option value="es">{t("contact.lang_es")}</option>
                      </select>
                    </div>
                  </div>

                  {/* Condition + Insurance */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-[var(--color-navy)] mb-1.5">
                        {t("contact.condition")}
                      </label>
                      <input
                        name="condition" placeholder={t("contact.condition_ph")} value={form.condition} onChange={handleChange}
                        className="w-full border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[var(--color-teal)] focus:ring-1 focus:ring-[var(--color-teal)]/30 transition-all placeholder:text-muted-foreground"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[var(--color-navy)] mb-1.5">
                        {t("contact.insurance")}
                      </label>
                      <input
                        name="insurance" placeholder={t("contact.insurance_ph")} value={form.insurance} onChange={handleChange}
                        className="w-full border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[var(--color-teal)] focus:ring-1 focus:ring-[var(--color-teal)]/30 transition-all placeholder:text-muted-foreground"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-[var(--color-navy)] mb-1.5">
                      {t("contact.message")}
                    </label>
                    <textarea
                      name="message" rows={4} value={form.message} onChange={handleChange}
                      className="w-full border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[var(--color-teal)] focus:ring-1 focus:ring-[var(--color-teal)]/30 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formState === "submitting"}
                    className="w-full bg-[var(--color-teal)] hover:bg-[var(--color-navy)] text-white font-bold py-3.5 rounded-xl transition-all disabled:opacity-70"
                  >
                    {formState === "submitting" ? t("contact.submitting") : t("contact.submit")}
                  </button>

                  <p className="text-xs text-center text-muted-foreground">
                    {t("common.hipaa_note")}
                  </p>
                </form>
              )}
            </div>

            {/* INFO SIDEBAR */}
            <div className="space-y-5">
              {/* Contact info */}
              <div className="bg-[var(--color-navy)] text-white rounded-2xl p-6 space-y-4">
                <h3 className="font-bold text-sm uppercase tracking-wider text-[var(--color-teal-light)]">
                  {t("contact.location_title")}
                </h3>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[var(--color-teal-light)] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">{t("contact.address")}</p>
                    <p className="text-white/60 text-sm">{t("contact.area")}</p>
                  </div>
                </div>
                <a href="tel:+16892697762" className="flex items-center gap-3 hover:text-[var(--color-teal-light)] transition-colors">
                  <Phone className="w-5 h-5 text-[var(--color-teal-light)] shrink-0" />
                  <span className="font-semibold">(689) 269-7762</span>
                </a>
                <a href="mailto:ellencsteixeira@gmail.com" className="flex items-start gap-3 hover:text-[var(--color-teal-light)] transition-colors">
                  <Mail className="w-5 h-5 text-[var(--color-teal-light)] shrink-0 mt-0.5" />
                  <span className="text-sm break-all">ellencsteixeira@gmail.com</span>
                </a>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[var(--color-teal-light)] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">{t("contact.hours_title")}</p>
                    <p className="text-white/60 text-sm">{t("contact.hours")}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 border-t border-white/10 pt-4">
                  <Globe className="w-5 h-5 text-[var(--color-teal-light)] shrink-0" />
                  <p className="text-sm text-white/80">{t("contact.languages_note")}</p>
                </div>
              </div>

              {/* For referring providers */}
              <div className="border border-border rounded-2xl p-6">
                <div className="flex items-center gap-2 font-bold text-[var(--color-navy)] mb-3">
                  <Stethoscope className="w-5 h-5 text-[var(--color-teal)]" />
                  {t("contact.referring_title")}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {t("contact.referring_desc")}
                </p>
                <a
                  href="mailto:ellencsteixeira@gmail.com?subject=Patient Referral"
                  className="inline-flex items-center gap-2 bg-[var(--color-teal)]/10 text-[var(--color-teal)] font-semibold text-sm px-4 py-2 rounded-lg hover:bg-[var(--color-teal)] hover:text-white transition-all"
                >
                  {t("contact.referring_cta")}
                </a>
              </div>

              {/* Aquatic therapy image */}
              <div className="rounded-2xl overflow-hidden shadow-md">
                <img src="/ellen-headshot.jpg" alt="Dr. Ellen Teixeira" className="w-full h-48 object-cover object-top" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
