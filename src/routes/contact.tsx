import { createFileRoute } from "@tanstack/react-router";
import { Clock, Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageShell } from "../components/la-maison-layout";
import { contact, images } from "../lib/la-maison";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact - La Maison Luxe" },
      {
        name: "description",
        content:
          "Contact La Maison Luxe in Noida. Get directions, call now, or start a WhatsApp consultation.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageShell>
      <section className="lml-contact-hero">
        <img src={images.exterior} alt="La Maison Luxe salon atmosphere" />
        <div>
          <span>Contact</span>
          <h1>Plan your visit to La Maison Luxe.</h1>
          <p>
            Use WhatsApp for a consultation, call the salon, or open directions to reach us in
            Noida.
          </p>
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
      </section>

      <section className="lml-contact-grid">
        <div className="lml-contact-panel">
          <article>
            <MapPin size={18} />
            <h2>Address</h2>
            <p>{contact.address}</p>
          </article>
          <article>
            <Clock size={18} />
            <h2>Business Hours</h2>
            {contact.hours.map((hour) => (
              <p key={hour}>{hour}</p>
            ))}
          </article>
          <article>
            <Phone size={18} />
            <h2>Phone</h2>
            <a href={contact.phoneHref}>{contact.phoneLabel}</a>
          </article>
          <article>
            <MessageCircle size={18} />
            <h2>WhatsApp</h2>
            <a href={contact.whatsapp}>Start Consultation</a>
          </article>
          <article>
            <Instagram size={18} />
            <h2>Instagram</h2>
            <a href={contact.instagram}>Visit Instagram</a>
          </article>
          <article>
            <Mail size={18} />
            <h2>Email</h2>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </article>
        </div>
        <iframe
          title="La Maison Luxe Google Map"
          src={contact.mapEmbed}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </PageShell>
  );
}
