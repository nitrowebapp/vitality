import { Outlet, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import "@/lib/i18n";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#1B3A6B" },
      { name: "application-name", content: "Vitality Neuro Rehab" },
      { title: "Vitality Neuro Rehab — Specialized Neurological Physical Therapy" },
      {
        name: "description",
        content:
          "Board-certified neurological physical therapy in Windermere, FL. Specializing in stroke recovery, Parkinson's, vestibular disorders, TBI, and more. Serving Orlando in English, Portuguese & Spanish.",
      },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Vitality Neuro Rehab — Neurological Physical Therapy" },
      {
        property: "og:description",
        content:
          "Specialized neurological rehabilitation for stroke, Parkinson's, vestibular disorders, TBI, and more. Windermere, FL.",
      },
      { name: "twitter:card", content: "summary_large_image" },
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
  }),
  shellComponent: RootShell,
  component: RootComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
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
