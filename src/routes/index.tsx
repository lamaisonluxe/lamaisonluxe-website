import { Link, createFileRoute } from "@tanstack/react-router";
import { ChevronRight, Diamond, MapPin, MessageCircle, Star } from "lucide-react";
import {
  contact,
  detailPath,
  galleryItems,
  images,
  salonSpaces,
  services,
  testimonials,
} from "../lib/la-maison";
import { ConversionBand, PageShell, SectionIntro } from "../components/la-maison-layout";

const serviceTickerItems = [
  "Scalp Treatments",
  "Body Rituals",
  "Gel Overlays",
  "Facials",
  "Hair Artistry",
  "Skin Rituals",
  "Nail Architecture",
  "Luxury Grooming",
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "La Maison Luxe - Luxury Salon in Noida" },
      {
        name: "description",
        content:
          "La Maison Luxe is the house of luxury grooming in Noida, with premium hair, skin, nail, scalp, and body care in an elegant salon setting.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <PageShell>
      <section className="lml-hero">
        <img className="lml-hero-img" src={images.hero} alt="La Maison Luxe salon interior" />
        <div className="lml-hero-shade" />
        <div className="lml-hero-content">
          <span className="lml-kicker">The House of Luxury Grooming in Noida.</span>
          <h1 className="lml-hero-title">
            <span>Where Beauty</span>
            <span>
              Meets <em>Artistry</em>
            </span>
          </h1>
          <p>Designed for comfort. Crafted for elegance. Built for exceptional care.</p>
          <div className="lml-hero-actions">
            <a className="lml-btn lml-btn-gold" href={contact.whatsapp}>
              <MessageCircle size={17} />
              WhatsApp Consultation
            </a>
            <a className="lml-btn lml-btn-ghost" href={contact.directions}>
              <MapPin size={17} />
              Get Directions
            </a>
          </div>
        </div>
      </section>

      <section className="lml-service-marquee" aria-label="Featured La Maison Luxe services">
        <div className="lml-marquee-track">
          <div className="lml-marquee-set">
            {serviceTickerItems.map((item) => (
              <span key={item}>
                {item}
                <b aria-hidden="true">✦</b>
              </span>
            ))}
          </div>
          <div className="lml-marquee-set" aria-hidden="true">
            {serviceTickerItems.map((item) => (
              <span key={item}>
                {item}
                <b>✦</b>
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="lml-experience lml-reveal">
        <div className="lml-experience-copy lml-reveal">
          <span>Experience The Space</span>
          <h2>A salon environment designed to be felt before the service begins.</h2>
          <p>
            Large mirrors, composed treatment rooms, quiet guest areas, and considered detailing
            turn the physical space into part of the La Maison Luxe experience.
          </p>
        </div>
        <div className="lml-space-editorial lml-stagger">
          <figure className="lml-space-main lml-image-reveal">
            <img src={images.hero} alt="La Maison Luxe main salon floor" />
            <figcaption>
              Designed for comfort. Crafted for elegance. Built for exceptional care.
            </figcaption>
          </figure>
          <div className="lml-space-stack">
            {salonSpaces.slice(1, 5).map((space) => (
              <figure className="lml-image-reveal" key={space.title}>
                <img src={space.image} alt={space.title} />
                <figcaption>{space.title}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="lml-about lml-reveal" id="about">
        <div className="lml-about-collage lml-stagger">
          <img src={images.stations} alt="Styling stations at La Maison Luxe" />
          <img src={images.treatment} alt="Treatment room at La Maison Luxe" />
          <img src={images.detail} alt="Luxury details at La Maison Luxe" />
        </div>
        <div className="lml-about-copy lml-reveal">
          <span>Inside La Maison Luxe</span>
          <h2>Personal care in a setting that feels composed, private, and exacting.</h2>
          <p>
            La Maison Luxe is built around personalised consultations and premium service standards.
            Every guest is received with time to understand their preferences, comfort, hair or skin
            history, and the finish they want to carry out of the salon.
          </p>
          <p>
            The experience is deliberately hospitality-led: clean rooms, thoughtful lighting, calm
            service rhythm, and beauty professionals focused on detail rather than haste.
          </p>
          <Link className="lml-text-link" to="/the-salon">
            Explore The Salon <ChevronRight size={16} />
          </Link>
        </div>
      </section>

      <section className="lml-services-preview" id="services">
        <div className="lml-reveal">
          <SectionIntro
            eyebrow="Services"
            title="Beauty care shaped around consultation and craft."
            copy="Explore premium hair, skin, nails, body, and scalp services without pricing tables or sales pressure."
          />
        </div>
        <div className="lml-service-grid lml-stagger lml-reveal">
          {services.map((service) => {
            const Icon = service.icon;
            const hasDetail = ["hair-artistry", "skin-care", "nail-architecture"].includes(
              service.slug,
            );
            return (
              <article className="lml-service-card" key={service.slug}>
                <img src={service.image} alt={service.title} />
                <div>
                  <Icon size={20} />
                  <span>{service.eyebrow}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  {hasDetail ? (
                    <Link to={detailPath(service.slug)}>View Service</Link>
                  ) : (
                    <a href={contact.whatsapp}>WhatsApp Inquiry</a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="lml-gallery-preview" id="gallery">
        <div className="lml-reveal">
          <SectionIntro eyebrow="Gallery" title="A visual look at the salon atmosphere." />
        </div>
        <div className="lml-home-gallery lml-stagger lml-reveal">
          {galleryItems.slice(0, 6).map((item, index) => (
            <figure className={index === 0 ? "wide" : ""} key={item.label}>
              <img src={item.image} alt={item.label} />
              <figcaption>{item.label}</figcaption>
            </figure>
          ))}
        </div>
        <Link className="lml-center-link" to="/gallery">
          View Full Gallery <ChevronRight size={16} />
        </Link>
      </section>

      <section className="lml-testimonials lml-reveal">
        <div className="lml-featured-testimonial lml-reveal">
          <span>Client Voices</span>
          <blockquote>{testimonials[0].quote}</blockquote>
          <div>
            {Array.from({ length: testimonials[0].rating }).map((_, index) => (
              <Star key={index} size={15} fill="currentColor" />
            ))}
          </div>
          <p>
            {testimonials[0].initials} - {testimonials[0].location}
          </p>
        </div>
        <div className="lml-testimonial-rail lml-stagger" aria-label="More testimonials">
          {testimonials.slice(1).map((testimonial) => (
            <article key={testimonial.initials}>
              <Diamond size={14} />
              <p>{testimonial.quote}</p>
              <strong>
                {testimonial.initials} - {testimonial.location}
              </strong>
            </article>
          ))}
        </div>
      </section>

      <ConversionBand />
    </PageShell>
  );
}
