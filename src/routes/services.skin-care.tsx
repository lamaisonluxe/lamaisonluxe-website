import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "../components/service-detail-page";

export const Route = createFileRoute("/services/skin-care")({
  head: () => ({ meta: [{ title: "Skin Care Rituals - La Maison Luxe" }] }),
  component: () => <ServiceDetailPage slug="skin-care" />,
});
