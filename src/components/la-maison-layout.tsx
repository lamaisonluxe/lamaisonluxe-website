import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, MapPin, MessageCircle, Phone } from "lucide-react";
import { contact, detailPath, quickActions, services } from "../lib/la-maison";

export function SiteNav() {
  return (
    <nav className="lml-nav" aria-label="Primary navigation">
      <Link to="/" className="lml-brand" aria-label="La Maison Luxe home">
        <span className="lml-monogram">LM</span>
        <span className="lml-wordmark">
          <span>La Maison</span>
          <em>Luxe</em>
        </span>
      </Link>
      <div className="lml-nav-links">
        <Link to="/the-salon">The Salon</Link>
        <Link to="/services">Services</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="lml-nav-actions">
        <a className="lml-icon-link" href={contact.phoneHref} aria-label="Call La Maison Luxe">
          <Phone size={17} />
        </a>
        <a className="lml-nav-cta" href={contact.whatsapp}>
          <MessageCircle size={15} />
          <span>WhatsApp</span>
        </a>
      </div>
    </nav>
  );
}

export function SiteFooter() {
  return (
    <footer className="lml-footer">
      <div className="lml-footer-grid">
        <div>
          <div className="lml-footer-brand">La Maison Luxe</div>
          <p>
            A luxury grooming house in Noida shaped around thoughtful consultations, refined
            interiors, and elevated beauty care.
          </p>
          <div className="lml-footer-social">
            <a href={contact.instagram} aria-label="Instagram">
              <Instagram size={16} />
            </a>
            <a href="#" aria-label="Facebook">
              <Facebook size={16} />
            </a>
            <a href={contact.whatsapp} aria-label="WhatsApp">
              <MessageCircle size={16} />
            </a>
          </div>
        </div>
        <div>
          <h3>Explore</h3>
          <Link to="/the-salon">The Salon</Link>
          <Link to="/services">Services</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div>
          <h3>Services</h3>
          {services.slice(0, 5).map((service) => (
            <Link
              key={service.slug}
              to={detailPath(service.slug)}
              disabled={!["hair-artistry", "skin-care", "nail-architecture"].includes(service.slug)}
            >
              {service.title}
            </Link>
          ))}
        </div>
        <div>
          <h3>Visit</h3>
          <p className="lml-footer-line">
            <MapPin size={15} />
            {contact.address}
          </p>
          <p className="lml-footer-line">
            <Phone size={15} />
            {contact.phoneLabel}
          </p>
          <a className="lml-footer-button" href={contact.directions}>
            Get Directions
          </a>
        </div>
      </div>
      <div className="lml-footer-bottom">
        <span>© 2026 La Maison Luxe. All rights reserved.</span>
        <span>The House of Luxury Grooming in Noida.</span>
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="lml-root">
      <SiteNav />
      {children}
      <SiteFooter />
    </div>
  );
}

export function SectionIntro({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <header className="lml-section-intro">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      {copy ? <p>{copy}</p> : null}
    </header>
  );
}

export function ConversionBand({
  title = "Begin With A Consultation",
  copy = "Speak with La Maison Luxe on WhatsApp or plan your visit through Google Maps.",
}: {
  title?: string;
  copy?: string;
}) {
  return (
    <section className="lml-conversion">
      <div>
        <span>Visit La Maison Luxe</span>
        <h2>{title}</h2>
        <p>{copy}</p>
      </div>
      <div className="lml-conversion-actions">
        {quickActions.map((action) => {
          const Icon = action.icon;
          return (
            <a key={action.label} href={action.href}>
              <Icon size={17} />
              {action.label}
            </a>
          );
        })}
      </div>
    </section>
  );
}
