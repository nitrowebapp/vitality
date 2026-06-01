import { createFileRoute } from "@tanstack/react-router";
import ContactPage from "@/components/pages/ContactPage";

export const Route = createFileRoute("/$locale/contact")({
  component: ContactPage,
});
