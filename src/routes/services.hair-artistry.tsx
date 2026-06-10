import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "../components/service-detail-page";

export const Route = createFileRoute("/services/hair-artistry")({
  head: () => ({ meta: [{ title: "Hair Artistry - La Maison Luxe" }] }),
  component: () => <ServiceDetailPage slug="hair-artistry" />,
});
