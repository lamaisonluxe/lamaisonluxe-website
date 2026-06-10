import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "../components/service-detail-page";

export const Route = createFileRoute("/services/nail-architecture")({
  head: () => ({ meta: [{ title: "Nail Architecture - La Maison Luxe" }] }),
  component: () => <ServiceDetailPage slug="nail-architecture" />,
});
