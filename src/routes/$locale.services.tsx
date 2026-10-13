import { createFileRoute } from "@tanstack/react-router";
import ServicesPage from "@/components/pages/ServicesPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/$locale/services")({
  head: ({ params }) => pageHead("services", params.locale),
  component: ServicesPage,
});
