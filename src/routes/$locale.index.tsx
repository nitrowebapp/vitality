import { createFileRoute } from "@tanstack/react-router";
import HomePage from "@/components/pages/HomePage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/$locale/")({
  head: ({ params }) => pageHead("home", params.locale),
  component: HomePage,
});
