import { Link, createFileRoute } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { PageShell, SectionIntro } from "../components/la-maison-layout";
import { contact, detailPath, images, services } from "../lib/la-maison";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services - La Maison Luxe" },
      {
        name: "description",
        content:
          "Explore La Maison Luxe services: hair artistry, skin care rituals, nail architecture, body treatments, and scalp treatments.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <PageShell>
      <section className="lml-page-hero">
        <img src={images.stations} alt="La Maison Luxe styling area" />
        <div>
          <span>Services</span>
          <h1>Premium beauty care without hurry, pressure, or unnecessary noise.</h1>
          <p>
            Each service begins with context: your preferences, routine, comfort, and the result you
            want to carry out of the salon.
          </p>
        </div>
      </section>

      <section className="lml-services-page">
        <SectionIntro
          eyebrow="Service Menu"
          title="Consultation-led services across hair, skin, nails, body, and scalp."
        />
        <div className="lml-services-list">
          {services.map((service) => {
            const Icon = service.icon;
            const hasDetail = ["hair-artistry", "skin-care", "nail-architecture"].includes(
              service.slug,
            );
            return (
              <article key={service.slug} className="lml-service-row">
                <img src={service.image} alt={service.title} />
                <div className="lml-service-row-body">
                  <Icon size={22} />
                  <span>{service.eyebrow}</span>
                  <h2>{service.title}</h2>
                  <p>{service.description}</p>
                  <div className="lml-chip-row">
                    {service.highlights.map((highlight) => (
                      <small key={highlight}>{highlight}</small>
                    ))}
                  </div>
                  <h3>Benefits</h3>
                  <ul>
                    {service.benefits.map((benefit) => (
                      <li key={benefit}>{benefit}</li>
                    ))}
                  </ul>
                  <div className="lml-service-actions">
                    <a href={contact.whatsapp}>
                      <MessageCircle size={16} />
                      WhatsApp Inquiry
                    </a>
                    {hasDetail ? <Link to={detailPath(service.slug)}>Explore Detail</Link> : null}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </PageShell>
  );
}
