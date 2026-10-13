import { Outlet, createRootRoute, HeadContent, Scripts, useParams } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import "@/lib/i18n";
import { isLocale, CLINIC_JSON_LD, SITE_NAME } from "@/lib/seo";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#1B3A6B" },
      { name: "application-name", content: SITE_NAME },
      { title: `${SITE_NAME} — Specialized Neurological Physical Therapy` },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/logo-circle.png" },
      { rel: "apple-touch-icon", href: "/logo-circle.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Source+Serif+4:ital,wght@0,400;0,600;1,400&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(CLINIC_JSON_LD),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  const { locale } = useParams({ strict: false });
  const lang = isLocale(locale) ? locale : "en";

  return (
    <html lang={lang}>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <Outlet />
      <Toaster position="top-right" richColors closeButton />
    </>
  );
}
