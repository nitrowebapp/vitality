import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { LOCALES, type Locale } from "@/lib/i18n";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const Route = createFileRoute("/$locale")({
  beforeLoad: ({ params }) => {
    if (!LOCALES.includes(params.locale as Locale)) {
      throw redirect({ to: "/en" });
    }
  },
  component: LocaleLayout,
});

function LocaleLayout() {
  const { locale } = Route.useParams();
  const { i18n } = useTranslation();

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
