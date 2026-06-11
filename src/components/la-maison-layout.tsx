import { Link, useRouterState } from "@tanstack/react-router";
import { Facebook, Instagram, MapPin, MessageCircle, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import { contact, detailPath, quickActions, services } from "../lib/la-maison";

let hasPlayedLoader = false;

export function SiteNav() {
  return (
    <nav className="lml-nav" aria-label="Primary navigation">
      <Link to="/" className="lml-brand" aria-label="La Maison Luxe home">
        <img
          className="lml-nav-logo"
          src="/brand/la-maison-luxe-salon-horizontal-logo.png"
          alt="La Maison Luxe Salon"
        />
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
    <footer className="lml-footer lml-reveal">
      <div className="lml-footer-grid lml-stagger">
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
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  useLuxuryMotion(pathname);
  const loaderState = useSiteLoader();

  return (
    <div className="lml-root">
      {loaderState ? <SiteLoader state={loaderState} /> : null}
      <SiteNav />
      {children}
      <SiteFooter />
    </div>
  );
}

function SiteLoader({ state }: { state: "visible" | "leaving" }) {
  return (
    <div
      className={`lml-loader ${state === "leaving" ? "is-leaving" : ""}`}
      aria-label="Loading La Maison Luxe"
      aria-live="polite"
      role="status"
    >
      <div className="lml-loader-glow" aria-hidden="true" />
      <div className="lml-loader-frame" aria-hidden="true" />
      <div className="lml-loader-inner">
        <img
          className="lml-loader-logo"
          src="/brand/la-maison-luxe-salon-logo.png"
          alt="La Maison Luxe Salon"
        />
        <p className="lml-loader-eyebrow">The House of Luxury Grooming</p>
        <p className="lml-loader-title" aria-label="La Maison Luxé">
          {"LA MAISON LUXÉ".split("").map((letter, index) => (
            <span key={`${letter}-${index}`} style={{ "--letter-index": index } as CSSProperties}>
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </p>
        <div className="lml-loader-rule" aria-hidden="true" />
        <p className="lml-loader-copy">Salon</p>
      </div>
    </div>
  );
}

function useSiteLoader() {
  const [loaderState, setLoaderState] = useState<"visible" | "leaving" | null>(() =>
    hasPlayedLoader ? null : "visible",
  );

  useEffect(() => {
    if (!loaderState) return;

    document.body.classList.add("lml-loading-active");

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const holdDuration = reducedMotion ? 450 : 2100;
    const exitDuration = reducedMotion ? 120 : 650;

    const leaveTimer = window.setTimeout(() => {
      setLoaderState("leaving");
    }, holdDuration);

    const doneTimer = window.setTimeout(() => {
      hasPlayedLoader = true;
      setLoaderState(null);
      document.body.classList.remove("lml-loading-active");
    }, holdDuration + exitDuration);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(doneTimer);
      document.body.classList.remove("lml-loading-active");
    };
  }, []);

  return loaderState;
}

function useLuxuryMotion(pathname: string) {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealElements = Array.from(document.querySelectorAll<HTMLElement>(".lml-reveal"));

    if (reducedMotion) {
      revealElements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -14% 0px", threshold: 0.16 },
    );

    revealElements.forEach((element) => observer.observe(element));

    const heroImage = document.querySelector<HTMLElement>(".lml-hero-img");
    let animationFrame = 0;

    const updateHeroParallax = () => {
      animationFrame = 0;
      if (!heroImage || window.innerWidth < 768) return;

      const hero = heroImage.closest<HTMLElement>(".lml-hero");
      if (!hero) return;

      const rect = hero.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) return;

      const progress = Math.min(1, Math.max(0, -rect.top / Math.max(1, rect.height)));
      heroImage.style.setProperty("--lml-hero-y", `${progress * 28}px`);
    };

    const requestHeroParallax = () => {
      if (!animationFrame) {
        animationFrame = window.requestAnimationFrame(updateHeroParallax);
      }
    };

    updateHeroParallax();
    window.addEventListener("scroll", requestHeroParallax, { passive: true });
    window.addEventListener("resize", requestHeroParallax);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", requestHeroParallax);
      window.removeEventListener("resize", requestHeroParallax);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, [pathname]);
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
    <section className="lml-conversion lml-reveal">
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
