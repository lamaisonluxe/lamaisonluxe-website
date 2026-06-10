import { createFileRoute } from "@tanstack/react-router";
import { Check, MapPin, MessageCircle } from "lucide-react";
import { ConversionBand, PageShell, SectionIntro } from "../components/la-maison-layout";
import { contact, images, salonSpaces } from "../lib/la-maison";

export const Route = createFileRoute("/the-salon")({
  head: () => ({
    meta: [
      { title: "The Salon - La Maison Luxe" },
      {
        name: "description",
        content:
          "Explore the physical salon experience at La Maison Luxe in Noida: reception, styling area, skin care rooms, nail studio, luxury details, and location.",
      },
    ],
  }),
  component: TheSalon,
});

function TheSalon() {
  const reasons = ["Ambience", "Privacy", "Cleanliness", "Premium Experience"];

  return (
    <PageShell>
      <section className="lml-page-hero">
        <img src={images.reception} alt="La Maison Luxe salon reception" />
        <div>
          <span>The Salon</span>
          <h1>Interior calm, polished detail, and a space made for considered care.</h1>
          <p>
            A closer look at the environment guests experience before, during, and after their
            service.
          </p>
        </div>
      </section>

      <section className="lml-salon-gallery">
        <SectionIntro
          eyebrow="Interior Gallery"
          title="Every room has a role in the experience."
          copy="Reception, styling, treatment, nail, and detail spaces are presented as part of the service standard."
        />
        <div className="lml-salon-grid">
          {salonSpaces.map((space, index) => (
            <article className={index === 0 ? "feature" : ""} key={space.title}>
              <img src={space.image} alt={space.title} />
              <div>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h2>{space.title}</h2>
                <p>{space.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="lml-space-love">
        <div>
          <span>Why Clients Love The Space</span>
          <h2>Quiet confidence, visible cleanliness, and a premium pace.</h2>
        </div>
        <div className="lml-love-list">
          {reasons.map((reason) => (
            <article key={reason}>
              <Check size={18} />
              <h3>{reason}</h3>
              <p>
                The salon experience is designed to feel composed, hygienic, and personal without
                visual noise or rushed service.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="lml-location-block">
        <div>
          <span>Location</span>
          <h2>Visit La Maison Luxe in Noida.</h2>
          <p>{contact.address}</p>
          <div className="lml-inline-actions">
            <a className="lml-btn lml-btn-gold" href={contact.directions}>
              <MapPin size={17} />
              Get Directions
            </a>
            <a className="lml-btn lml-btn-dark" href={contact.whatsapp}>
              <MessageCircle size={17} />
              WhatsApp Consultation
            </a>
          </div>
        </div>
        <iframe
          title="La Maison Luxe location map"
          src={contact.mapEmbed}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

      <ConversionBand />
    </PageShell>
  );
}
