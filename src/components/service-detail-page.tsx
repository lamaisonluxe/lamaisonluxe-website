import { MessageCircle } from "lucide-react";
import { ConversionBand, PageShell } from "./la-maison-layout";
import { contact, images, services } from "../lib/la-maison";

export function ServiceDetailPage({ slug }: { slug: string }) {
  const service = services.find((item) => item.slug === slug) ?? services[0];
  const Icon = service.icon;

  return (
    <PageShell>
      <section className="lml-page-hero">
        <img src={service.image} alt={service.title} />
        <div>
          <span>{service.eyebrow}</span>
          <h1>{service.title}</h1>
          <p>{service.description}</p>
          <a className="lml-btn lml-btn-gold" href={contact.whatsapp}>
            <MessageCircle size={17} />
            WhatsApp Consultation
          </a>
        </div>
      </section>

      <section className="lml-detail-intro">
        <div>
          <Icon size={26} />
          <span>Luxury Introduction</span>
          <h2>A service experience shaped around your comfort and the final finish.</h2>
        </div>
        <p>
          At La Maison Luxe, the service begins before the chair or treatment room. The team listens
          first, then recommends an approach that suits your routine, preferences, and desired level
          of maintenance.
        </p>
      </section>

      <section className="lml-detail-grid">
        <div>
          <span>Service Offerings</span>
          <h2>What you can inquire about</h2>
          <ul>
            {service.offerings.map((offering) => (
              <li key={offering}>{offering}</li>
            ))}
          </ul>
        </div>
        <img src={images.reception} alt="La Maison Luxe interior" />
        <img src={images.treatment} alt="La Maison Luxe treatment area" />
        <div>
          <span>Benefits</span>
          <h2>What the experience is built to support</h2>
          <ul>
            {service.benefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
        </div>
      </section>

      {service.faq.length ? (
        <section className="lml-faq">
          <span>FAQ</span>
          <h2>Before your consultation</h2>
          {service.faq.map((item) => (
            <details key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </section>
      ) : null}

      <ConversionBand title={`Ask About ${service.title}`} />
    </PageShell>
  );
}
