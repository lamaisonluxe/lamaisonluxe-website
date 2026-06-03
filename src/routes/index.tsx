import { createFileRoute } from "@tanstack/react-router";
import {
  Diamond,
  Star,
  Instagram,
  Facebook,
  MessageCircle,
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "La Maison Luxé — The House of Luxury Grooming · Noida" },
      {
        name: "description",
        content:
          "La Maison Luxé is a luxury salon in Noida delivering high-end hair, skin, and nail services. Where beauty meets artistry.",
      },
      { property: "og:title", content: "La Maison Luxé — Luxury Grooming" },
      {
        property: "og:description",
        content:
          "High-end hair, skin, and nail rituals crafted for those who value artistry and elegance.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

const marqueeText = (
  <>
    Hair Artistry <span className="marquee-dot">✦</span> Skin Rituals{" "}
    <span className="marquee-dot">✦</span> Nail Architecture{" "}
    <span className="marquee-dot">✦</span> Luxury Grooming{" "}
    <span className="marquee-dot">✦</span> Scalp Treatments{" "}
    <span className="marquee-dot">✦</span> Body Rituals{" "}
    <span className="marquee-dot">✦</span> Gel Overlays{" "}
    <span className="marquee-dot">✦</span> Facials{" "}
    <span className="marquee-dot">✦</span>
  </>
);

function Index() {
  return (
    <div className="lml-root">
      {/* NAV */}
      <nav className="nav">
        <div className="nav-logo">
          <div className="nav-monogram">
            <span>LM</span>
          </div>
          <div className="nav-wordmark">
            <span className="main">La Maison</span>
            <span className="sub">Luxé</span>
          </div>
        </div>
        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#gallery">Gallery</a>
          <a href="#team">Team</a>
          <a href="#contact">Contact</a>
        </div>
        <button className="nav-cta">Book Now</button>
      </nav>

      {/* HERO */}
      <section className="hero">
        <img
          className="hero-img"
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1400&q=80&fit=crop"
          alt="Luxury salon interior"
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="hero-eyebrow">The House of Luxury Grooming · Noida</p>
          <div className="hero-orn">
            <span />
            <Diamond size={10} />
            <span />
          </div>
          <h1 className="hero-title">
            Where Beauty
            <br />
            Meets <em>Artistry</em>
          </h1>
          <p className="hero-sub">Hair · Skin · Nails · Rituals</p>
          <div className="hero-btns">
            <button className="btn-primary">Reserve Your Visit</button>
            <button className="btn-outline">Explore Services</button>
          </div>
        </div>
        <div className="hero-scroll">
          <span>Scroll</span>
          <div className="hero-scroll-line" />
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee">
        <div className="marquee-track">
          <div className="marquee-item">{marqueeText}</div>
          <div className="marquee-item">{marqueeText}</div>
        </div>
      </div>

      {/* SERVICES */}
      <section className="services" id="services">
        <div className="section-header">
          <span className="section-tag">Our Expertise</span>
          <h2 className="section-title">Curated Service Verticals</h2>
          <div className="section-line">
            <span />
            <Diamond size={12} />
            <span />
          </div>
        </div>
        <div className="services-grid">
          {[
            {
              img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=700&q=80&fit=crop",
              alt: "Hair Artistry",
              num: "01",
              cat: "Hair Artistry",
              name: "Colour & Cuts",
              desc: "Precision cuts, balayage, hair spa & scalp treatments by master stylists.",
            },
            {
              img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=700&q=80&fit=crop",
              alt: "Skin Care",
              num: "02",
              cat: "Skin Care",
              name: "Facials & Rituals",
              desc: "Bespoke facials, cleanups, waxing & indulgent body rituals.",
            },
            {
              img: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=700&q=80&fit=crop",
              alt: "Nail Architecture",
              num: "03",
              cat: "Nail Architecture",
              name: "Extensions & Gel",
              desc: "Nail extensions, gel overlays, spa manicures & pedicures.",
            },
          ].map((s) => (
            <div className="svc-card" key={s.num}>
              <img src={s.img} alt={s.alt} />
              <div className="svc-card-inner">
                <div className="svc-num">{s.num}</div>
                <div className="svc-cat">{s.cat}</div>
                <div className="svc-name">{s.name}</div>
                <div className="svc-desc">{s.desc}</div>
                <div className="svc-link">
                  <span className="svc-link-line" /> Discover
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="about" id="about">
        <div className="about-images">
          <img
            className="about-img-main"
            src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800&q=80&fit=crop"
            alt="About La Maison Luxé"
          />
          <div className="about-gold-line" />
          <div className="about-img-overlay">
            <img
              src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&q=80&fit=crop"
              alt="Luxury treatment"
            />
          </div>
        </div>
        <div className="about-content">
          <span className="about-tag">Our Story</span>
          <h2 className="about-title">
            A Space Where
            <br />
            Beauty & <em>Indulgence</em>
            <br />
            Come Together
          </h2>
          <div className="about-divider" />
          <p className="about-body">
            La Maison Luxé is a luxury salon in Noida, delivering high-end skin,
            hair, and nail services. Built on modern elegance and deeply
            personalised consultations, every visit is a ritual, every treatment
            an art form.
            <br />
            <br />
            Our philosophy is simple — you deserve nothing less than
            extraordinary.
          </p>
          <div className="about-stats">
            <div>
              <div className="stat-num">5+</div>
              <div className="stat-label">Service Verticals</div>
            </div>
            <div>
              <div className="stat-num">100%</div>
              <div className="stat-label">Luxury Focus</div>
            </div>
            <div>
              <div className="stat-num">∞</div>
              <div className="stat-label">Client Devotion</div>
            </div>
          </div>
          <button className="btn-primary" style={{ width: "fit-content" }}>
            Our Philosophy
          </button>
        </div>
      </section>

      {/* GALLERY */}
      <section className="gallery" id="gallery">
        <div className="section-header">
          <span className="section-tag">Gallery</span>
          <h2 className="section-title">Moments of Luxury</h2>
          <div className="section-line">
            <span />
            <Diamond size={12} />
            <span />
          </div>
        </div>
        <div className="gallery-grid">
          <div className="gallery-item tall">
            <img
              src="https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=80&fit=crop"
              alt="Salon"
            />
            <div className="gallery-item-label">Hair Artistry</div>
          </div>
          <div className="gallery-item">
            <img
              src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80&fit=crop"
              alt="Skin"
            />
            <div className="gallery-item-label">Skin Ritual</div>
          </div>
          <div className="gallery-item">
            <img
              src="https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80&fit=crop"
              alt="Nails"
            />
            <div className="gallery-item-label">Nail Art</div>
          </div>
          <div className="gallery-item">
            <img
              src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80&fit=crop"
              alt="Colour"
            />
            <div className="gallery-item-label">Colour Studio</div>
          </div>
          <div className="gallery-item">
            <img
              src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80&fit=crop"
              alt="Beauty"
            />
            <div className="gallery-item-label">Beauty Ritual</div>
          </div>
        </div>
        <div className="gallery-cta">
          <button className="btn-outline">View Full Gallery</button>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials">
        <div className="section-header">
          <span className="section-tag">Client Voices</span>
          <h2 className="section-title">What Our Guests Say</h2>
          <div className="section-line">
            <span />
            <Diamond size={12} />
            <span />
          </div>
        </div>
        <div className="testi-grid">
          {[
            {
              featured: false,
              quote:
                "An experience that truly transcends a regular salon visit. Every detail speaks of luxury and care.",
              initials: "PS",
              name: "Priya Sharma",
              role: "Verified Client · Noida",
            },
            {
              featured: true,
              quote:
                "The hair colour transformed me completely. The expertise and precision here is unlike anything I have experienced before.",
              initials: "AK",
              name: "Anjali Kapoor",
              role: "Verified Client · Delhi",
            },
            {
              featured: false,
              quote:
                "From the moment I walked in, I felt like royalty. My skin has never looked this radiant. Absolutely worth it.",
              initials: "MR",
              name: "Meera Rawat",
              role: "Verified Client · Gurgaon",
            },
          ].map((t) => (
            <div
              className={`testi-card${t.featured ? " featured" : ""}`}
              key={t.initials}
            >
              <div className="testi-stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={13} fill="currentColor" />
                ))}
              </div>
              <p className="testi-quote">"{t.quote}"</p>
              <div className="testi-author">
                <div className="testi-avatar">{t.initials}</div>
                <div>
                  <div className="testi-name">{t.name}</div>
                  <div className="testi-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BOOKING CTA */}
      <section className="booking" id="contact">
        <div className="bc-tl booking-corner" />
        <div className="bc-tr booking-corner" />
        <div className="bc-bl booking-corner" />
        <div className="bc-br booking-corner" />
        <div className="booking-badge">Launching 23 June 2026</div>
        <h2 className="booking-title">
          Reserve Your
          <br />
          <em
            style={{
              fontFamily: "'Cormorant Garamond',serif",
              fontStyle: "italic",
              color: "#C8A860",
            }}
          >
            Exclusive
          </em>{" "}
          Experience
        </h2>
        <p className="booking-sub">
          Be among the first to experience The House of Luxury Grooming.
          <br />
          Limited appointments available at launch.
        </p>
        <div className="booking-form">
          <input type="text" placeholder="Your name or phone number" />
          <button className="btn-primary" style={{ whiteSpace: "nowrap" }}>
            Book Now
          </button>
        </div>
        <p className="booking-note">Or call us · +91 98765 43210</p>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-grid">
          <div>
            <div className="footer-brand-name">La Maison</div>
            <div className="footer-brand-sub">
              Luxé · The House of Luxury Grooming
            </div>
            <p className="footer-brand-desc">
              A premium salon experience crafted for those who value artistry,
              elegance, and deeply personalised care. Located in Noida.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="Instagram">
                <Instagram size={14} />
              </a>
              <a href="#" aria-label="Facebook">
                <Facebook size={14} />
              </a>
              <a href="#" aria-label="WhatsApp">
                <MessageCircle size={14} />
              </a>
            </div>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">Services</div>
            <a href="#">Hair Cuts & Styling</a>
            <a href="#">Hair Colouring</a>
            <a href="#">Scalp Treatments</a>
            <a href="#">Facials & Cleanups</a>
            <a href="#">Body Rituals</a>
            <a href="#">Nail Extensions</a>
            <a href="#">Gel Overlays</a>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">Contact</div>
            <div className="footer-contact-item">
              <MapPin size={14} />
              <span>Noida, Uttar Pradesh, India</span>
            </div>
            <div className="footer-contact-item">
              <Phone size={14} />
              <span>+91 98765 43210</span>
            </div>
            <div className="footer-contact-item">
              <Mail size={14} />
              <span>lamaisonluxe@gmail.com</span>
            </div>
            <div className="footer-contact-item">
              <Clock size={14} />
              <span>
                Mon – Sat: 10am – 8pm
                <br />
                Sunday: 11am – 6pm
              </span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="footer-copy">
            © 2026 La Maison Luxé. All rights reserved.
          </span>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms</a>
            <a href="#">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
