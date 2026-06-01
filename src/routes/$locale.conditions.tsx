import { createFileRoute } from "@tanstack/react-router";
import ConditionsPage from "@/components/pages/ConditionsPage";

export const Route = createFileRoute("/$locale/conditions")({
  component: ConditionsPage,
});
