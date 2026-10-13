import { createFileRoute } from "@tanstack/react-router";
import AboutPage from "@/components/pages/AboutPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/$locale/about")({
  head: ({ params }) => pageHead("about", params.locale),
  component: AboutPage,
});
