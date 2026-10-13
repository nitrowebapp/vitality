import { createFileRoute } from "@tanstack/react-router";
import ContactPage from "@/components/pages/ContactPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/$locale/contact")({
  head: ({ params }) => pageHead("contact", params.locale),
  component: ContactPage,
});
