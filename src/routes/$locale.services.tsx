import { createFileRoute } from "@tanstack/react-router";
import ServicesPage from "@/components/pages/ServicesPage";

export const Route = createFileRoute("/$locale/services")({
  component: ServicesPage,
});
