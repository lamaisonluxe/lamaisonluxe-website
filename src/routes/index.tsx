import { Link, createFileRoute } from "@tanstack/react-router";
import { ChevronRight, Diamond, MapPin, MessageCircle, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { TouchEvent, WheelEvent } from "react";
import { LuxuryLightbox } from "../components/luxury-lightbox";
import type { LightboxImage } from "../components/luxury-lightbox";
import { contact, detailPath, images, services, testimonials } from "../lib/la-maison";
import { ConversionBand, PageShell } from "../components/la-maison-layout";

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

const editorialGalleryItems = [
  {
    category: "Salon Interior",
    title: "Main Salon Floor",
    image: images.hero,
    copy: "A composed arrival into warm wood, polished mirrors, and a service rhythm designed to feel unhurried.",
  },
  {
    category: "Styling Suite",
    title: "Mirror Styling Wall",
    image: images.stations,
    copy: "Light, proportion, and station detail come together for precise hair artistry and relaxed consultations.",
  },
  {
    category: "Hair Wash Lounge",
    title: "Shampoo Lounge",
    image: images.shampoo,
    copy: "A quieter pause in the visit, shaped around comfort before the final finish begins.",
  },
  {
    category: "Consultation Area",
    title: "Private Consultation",
    image: images.consultation,
    copy: "A calm space for listening first, understanding preferences, and choosing the right treatment path.",
  },
];

const experienceHighlights = [
  {
    title: "Main Salon Floor",
    label: "Comfort",
    image: images.hero,
    alt: "La Maison Luxe main salon floor",
    copy: "A warm, open salon floor with generous mirrors, calm lighting, and an unhurried service rhythm.",
  },
  {
    title: "Skin Care Rooms",
    label: "Privacy",
    image: images.treatment,
    alt: "Private skin care room at La Maison Luxe",
    copy: "Quiet private rooms for composed skin care.",
  },
  {
    title: "Nail Studio",
    label: "Detail",
    image: images.nails,
    alt: "Nail studio at La Maison Luxe",
    copy: "Dedicated seating for precise nail and pedicure work.",
  },
];

const founders = [
  {
    name: "Niharika Birkett",
    role: "Founder, La Maison Luxe",
    image: "/founders/niharika-cutout.webp",
    imageClass: "niharika",
    intro:
      "La Maison Luxe was born from a simple vision - to create a space where beauty feels personal, luxury feels effortless, and every guest feels truly cared for.",
    paragraphs: [
      "With over 12 years of experience across the corporate world and design, and now as a certified esthetician trained in professional skincare and beauty therapies, I have always believed that exceptional experiences are built through intention, attention to detail, and a deep understanding of people.",
      "What began as a dream has now become a reality, and I cannot wait to welcome you to La Maison Luxe: a place built with passion, purpose, and the desire to help you look and feel your absolute best.",
    ],
  },
  {
    name: "Archana Tyagi",
    role: "Founder, La Maison Luxe",
    image: "/founders/archana-cutout.webp",
    imageClass: "archana",
    intro:
      "La Maison Luxe is the result of a journey shaped by a passion for beauty and a desire to create experiences that make people feel confident, comfortable, and cared for.",
    paragraphs: [
      "With over 8 years of corporate experience and more than 5 years as a nail artist, I have worked closely with clients and built lasting relationships through creativity, consistency, and attention to detail.",
      "Today, La Maison Luxe brings together everything I have learned and loved throughout my journey. I look forward to welcoming familiar and new faces into a space designed with care, creativity, and a commitment to helping every guest feel their best.",
    ],
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "La Maison Luxe - Luxury Salon in Greater Noida" },
      {
        name: "description",
        content:
          "La Maison Luxe is the house of luxury grooming in Greater Noida, with premium hair, skin, nail, scalp, and body care in an elegant salon setting.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<LightboxImage | null>(null);
  const galleryStageRef = useRef<HTMLDivElement>(null);
  const galleryCopyRef = useRef<HTMLDivElement>(null);
  const galleryImageRef = useRef<HTMLImageElement>(null);
  const galleryWheelLockRef = useRef(0);
  const galleryTouchStartRef = useRef<{ x: number; y: number } | null>(null);
  const activeGalleryItem = editorialGalleryItems[activeGalleryIndex];

  useEffect(() => {
    editorialGalleryItems.forEach((item) => {
      const image = new Image();
      image.src = item.image;
    });
  }, []);

  useEffect(() => {
    if (!galleryStageRef.current || !galleryCopyRef.current || !galleryImageRef.current) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouchLayout = window.matchMedia("(max-width: 760px), (pointer: coarse)").matches;
    if (reducedMotion) return;
    if (isTouchLayout) return;

    let isCancelled = false;

    void (async () => {
      const { gsap } = await import("gsap");
      if (isCancelled || !galleryCopyRef.current || !galleryImageRef.current) return;

      gsap.killTweensOf([galleryCopyRef.current.children, galleryImageRef.current]);
      gsap.fromTo(
        galleryCopyRef.current.children,
        { autoAlpha: 0, y: 18 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.95,
          ease: "power3.out",
          stagger: 0.08,
        },
      );

      gsap.fromTo(
        galleryImageRef.current,
        { autoAlpha: 0.72, scale: 1.035 },
        { autoAlpha: 1, scale: 1, duration: 1.25, ease: "power2.out" },
      );
    })();

    return () => {
      isCancelled = true;
    };
  }, [activeGalleryIndex]);

  const showGalleryItem = (index: number) => {
    const nextIndex =
      ((index % editorialGalleryItems.length) + editorialGalleryItems.length) %
      editorialGalleryItems.length;
    setActiveGalleryIndex((currentIndex) => (currentIndex === nextIndex ? currentIndex : nextIndex));
  };

  const previewGalleryItem = (index: number) => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    showGalleryItem(index);
  };

  const handleGalleryWheel = (event: WheelEvent<HTMLElement>) => {
    const delta = Math.abs(event.deltaY) > Math.abs(event.deltaX) ? event.deltaY : event.deltaX;
    if (Math.abs(delta) < 18) return;

    const now = window.performance.now();
    if (now - galleryWheelLockRef.current < 720) return;

    event.preventDefault();
    galleryWheelLockRef.current = now;
    showGalleryItem(activeGalleryIndex + (delta > 0 ? 1 : -1));
  };

  const handleGalleryTouchStart = (event: TouchEvent<HTMLElement>) => {
    const touch = event.touches[0];
    galleryTouchStartRef.current = touch ? { x: touch.clientX, y: touch.clientY } : null;
  };

  const handleGalleryTouchEnd = (event: TouchEvent<HTMLElement>) => {
    const start = galleryTouchStartRef.current;
    if (start === null) return;

    const endTouch = event.changedTouches[0];
    galleryTouchStartRef.current = null;
    if (!endTouch) return;

    const deltaX = start.x - endTouch.clientX;
    const deltaY = start.y - endTouch.clientY;
    if (Math.abs(deltaX) < 64 || Math.abs(deltaX) < Math.abs(deltaY) * 1.35) return;

    showGalleryItem(activeGalleryIndex + (deltaX > 0 ? 1 : -1));
  };

  return (
    <PageShell>
      <section className="lml-hero">
        <img className="lml-hero-img" src={images.hero} alt="La Maison Luxe salon interior" />
        <div className="lml-hero-shade" />
        <div className="lml-hero-content">
          <span className="lml-kicker">The House of Luxury Grooming in Greater Noida.</span>
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
              Reserve Your Visit
            </a>
            <a className="lml-btn lml-btn-ghost" href="#services">
              <MapPin size={17} />
              Explore Services
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

      <section className="lml-services-preview" id="services">
        <div className="lml-services-editorial-heading lml-reveal">
          <span>Our Expertise</span>
          <h2>Curated Service Verticals</h2>
          <div aria-hidden="true" />
        </div>
        <div className="lml-service-grid lml-stagger lml-reveal">
          {services.slice(0, 3).map((service, index) => {
            const hasDetail = ["hair-artistry", "skin-care", "nail-architecture"].includes(
              service.slug,
            );
            return (
              <article className="lml-service-card" key={service.slug}>
                <img src={service.image} alt={service.title} />
                <div>
                  <strong>{String(index + 1).padStart(2, "0")}</strong>
                  <span>{service.title}</span>
                  <h3>{service.eyebrow}</h3>
                  <p>{service.description}</p>
                  {hasDetail ? (
                    <Link to={detailPath(service.slug)}>Discover</Link>
                  ) : (
                    <a href={contact.whatsapp}>Discover</a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="lml-experience lml-reveal">
        <div className="lml-experience-copy lml-reveal">
          <span>Experience the Space</span>
          <h2>A salon environment designed to be felt before the service begins.</h2>
          <p>
            Large mirrors, composed treatment rooms, quiet guest areas, and considered details make
            the physical space part of the La Maison Luxe experience.
          </p>
        </div>
        <div className="lml-space-editorial lml-stagger">
          <figure className="lml-space-main lml-image-reveal">
            <img src={experienceHighlights[0].image} alt={experienceHighlights[0].alt} />
            <figcaption>
              <span>{experienceHighlights[0].label}</span>
              {experienceHighlights[0].copy}
            </figcaption>
          </figure>
          <div className="lml-space-stack">
            {experienceHighlights.slice(1).map((space) => (
              <figure className="lml-image-reveal" key={space.title}>
                <img src={space.image} alt={space.alt} />
                <figcaption>
                  <span>{space.label}</span>
                  {space.copy}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section
        className="lml-gallery-preview lml-reveal"
        id="gallery"
        onWheel={handleGalleryWheel}
        onTouchStart={handleGalleryTouchStart}
        onTouchEnd={handleGalleryTouchEnd}
      >
        <div className="lml-gallery-editorial">
          <div className="lml-gallery-copy" ref={galleryCopyRef}>
            <span>Inside La Maison Luxe</span>
            <h2>An experience, not just a salon.</h2>
            <p>Every detail is designed to create a calm and luxurious grooming experience.</p>
            <div className="lml-gallery-index" aria-live="polite">
              <strong>{String(activeGalleryIndex + 1).padStart(2, "0")}</strong>
              <i />
              <span>{String(editorialGalleryItems.length).padStart(2, "0")}</span>
            </div>
            <p className="lml-gallery-current-copy">{activeGalleryItem.copy}</p>
            <Link className="lml-text-link" to="/gallery">
              View the Full Gallery <ChevronRight size={16} />
            </Link>
          </div>

          <div className="lml-gallery-stage" ref={galleryStageRef}>
            <figure
              className="lml-gallery-hero-card"
              role="button"
              tabIndex={0}
              aria-label={`Open ${activeGalleryItem.title}`}
              onClick={() =>
                setLightboxImage({
                  src: activeGalleryItem.image,
                  alt: activeGalleryItem.title,
                  label: `${activeGalleryItem.category} - ${activeGalleryItem.title}`,
                })
              }
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setLightboxImage({
                    src: activeGalleryItem.image,
                    alt: activeGalleryItem.title,
                    label: `${activeGalleryItem.category} - ${activeGalleryItem.title}`,
                  });
                }
              }}
            >
              <img
                ref={galleryImageRef}
                src={activeGalleryItem.image}
                alt={activeGalleryItem.title}
              />
              <figcaption>
                <span>{activeGalleryItem.category}</span>
                <div>
                  <strong>[{String(activeGalleryIndex + 1).padStart(2, "0")}]</strong>
                  <p>{activeGalleryItem.title}</p>
                </div>
              </figcaption>
            </figure>

            <div className="lml-gallery-filmstrip" aria-label="Gallery navigation">
              {editorialGalleryItems.map((item, index) => (
                <button
                  type="button"
                  className={index === activeGalleryIndex ? "active" : ""}
                  aria-label={`Show ${item.title}`}
                  aria-pressed={index === activeGalleryIndex}
                  onClick={() => showGalleryItem(index)}
                  onMouseEnter={() => previewGalleryItem(index)}
                  key={item.title}
                >
                  <img src={item.image} alt="" aria-hidden="true" />
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
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

      <section className="lml-founders lml-reveal" id="founders">
        <div className="lml-founders-head">
          <div>
            <span>Founders</span>
            <h2>The people behind the La Maison Luxe experience.</h2>
          </div>
          <p>
            Two founder journeys, shaped by care, craft, beauty, and a shared commitment to making
            every guest feel personally looked after.
          </p>
        </div>

        <div className="lml-founder-panels lml-stagger">
          {founders.map((founder, index) => (
            <article
              className={`lml-founder-panel ${index % 2 === 1 ? "is-reverse" : ""}`}
              key={founder.name}
            >
              <figure className={`lml-founder-panel-portrait ${founder.imageClass}`}>
                <img src={founder.image} alt={`${founder.name}, ${founder.role}`} loading="lazy" />
                <figcaption>
                  <strong>{String(index + 1).padStart(2, "0")}</strong>
                  <span>{founder.role}</span>
                </figcaption>
              </figure>

              <div className="lml-founder-panel-copy">
                <p className="lml-founder-panel-role">{founder.role}</p>
                <h3>{founder.name}</h3>
                <p className="lml-founder-panel-intro">{founder.intro}</p>
                {founder.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <ConversionBand />
      <LuxuryLightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />
    </PageShell>
  );
}
