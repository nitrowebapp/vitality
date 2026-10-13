import { createFileRoute } from "@tanstack/react-router";
import ConditionsPage from "@/components/pages/ConditionsPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/$locale/conditions")({
  head: ({ params }) => pageHead("conditions", params.locale),
  component: ConditionsPage,
});
