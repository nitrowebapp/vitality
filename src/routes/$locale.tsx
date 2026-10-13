import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { LOCALES, type Locale } from "@/lib/i18n";
import { isLocale } from "@/lib/seo";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const Route = createFileRoute("/$locale")({
  beforeLoad: ({ params }) => {
    if (!isLocale(params.locale)) {
      throw redirect({ to: "/$locale", params: { locale: "en" } });
    }
  },
  component: LocaleLayout,
});

function LocaleLayout() {
  const { locale } = Route.useParams();
  const { i18n } = useTranslation();

  // Keep SSR output in sync with the URL locale on the very first render.
  if (LOCALES.includes(locale as Locale) && i18n.language !== locale) {
    i18n.changeLanguage(locale);
  }

  useEffect(() => {
    if (LOCALES.includes(locale as Locale) && i18n.language !== locale) {
      i18n.changeLanguage(locale);
    }
  }, [locale, i18n]);

  return (
    <div className="flex min-h-screen flex-col">
      <Header locale={locale as Locale} />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer locale={locale as Locale} />
    </div>
  );
}
