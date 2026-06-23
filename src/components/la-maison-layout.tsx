import { Link, useRouterState } from "@tanstack/react-router";
import { Facebook, Instagram, MapPin, Menu, MessageCircle, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import { contact, detailPath, quickActions, services } from "../lib/la-maison";

let hasPlayedLoader = false;

export function SiteNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const updateScrolled = () => {
      setIsScrolled(window.scrollY > 18);
    };

    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });

    return () => window.removeEventListener("scroll", updateScrolled);
  }, []);

  return (
    <nav
      className={`lml-nav ${isMenuOpen ? "is-open" : ""} ${isScrolled ? "is-scrolled" : ""}`}
      aria-label="Primary navigation"
    >
      <Link to="/" className="lml-brand" aria-label="La Maison Luxe home" onClick={closeMenu}>
        <img
          className="lml-nav-logo"
          src="/brand/la-maison-horizontal-salon-cornsilk.png"
          alt="La Maison Luxe Salon"
        />
      </Link>
      <div className="lml-nav-links">
        <Link to="/the-salon" onClick={closeMenu}>
          The Salon
        </Link>
        <Link to="/services" onClick={closeMenu}>
          Services
        </Link>
        <Link to="/gallery" onClick={closeMenu}>
          Gallery
        </Link>
        <Link to="/contact" onClick={closeMenu}>
          Contact
        </Link>
      </div>
      <div className="lml-nav-actions">
        <a className="lml-icon-link" href={contact.phoneHref} aria-label="Call La Maison Luxe">
          <Phone size={17} />
        </a>
        <a className="lml-nav-cta" href={contact.whatsapp}>
          <MessageCircle size={15} />
          <span>WhatsApp</span>
        </a>
        <button
          className="lml-menu-toggle"
          type="button"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>
    </nav>
  );
}

export function SiteFooter() {
  return (
    <footer className="lml-footer lml-reveal">
      <div className="lml-footer-grid lml-stagger">
        <div>
          <div className="lml-footer-brand">
            <img src="/brand/la-maison-icon-cornsilk.png" alt="" aria-hidden="true" />
            <span>La Maison Luxe</span>
          </div>
          <p>
            A luxury grooming house in Greater Noida, shaped around thoughtful consultations,
            refined interiors, and elevated beauty care.
          </p>
          <div className="lml-footer-social">
            <a href={contact.instagram} aria-label="Instagram">
              <Instagram size={16} />
            </a>
            <a href="#" aria-label="Facebook">
              <Facebook size={16} />
            </a>
            <a href={contact.whatsapp} aria-label="WhatsApp">
              <WhatsAppMark />
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
            <MapPin size={17} strokeWidth={2.2} />
            {contact.address}
          </p>
          <p className="lml-footer-line">
            <Phone size={17} strokeWidth={2.2} />
            {contact.phoneLabel}
          </p>
          <a className="lml-footer-button" href={contact.directions}>
            Get Directions
          </a>
        </div>
      </div>
      <div className="lml-footer-bottom">
        <span>© 2026 La Maison Luxe. All rights reserved.</span>
        <span>The house of luxury grooming in Greater Noida.</span>
      </div>
    </footer>
  );
}

function WhatsAppMark() {
  return (
    <svg
      className="lml-whatsapp-mark"
      viewBox="0 0 32 32"
      width="17"
      height="17"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M16.02 4.5A11.08 11.08 0 0 0 6.6 21.43L5.2 26.5l5.2-1.36A11.08 11.08 0 1 0 16.02 4.5Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.1"
      />
      <path
        d="M12.34 10.56c-.28-.62-.58-.64-.84-.65h-.72c-.25 0-.65.09-.99.46-.34.37-1.3 1.27-1.3 3.1 0 1.82 1.33 3.58 1.51 3.83.18.25 2.57 4.1 6.35 5.58 3.14 1.23 3.79.99 4.47.92.69-.06 2.22-.9 2.53-1.78.31-.87.31-1.62.22-1.78-.1-.15-.34-.25-.72-.43-.37-.19-2.22-1.1-2.57-1.22-.34-.13-.59-.19-.84.18-.25.38-.96 1.22-1.18 1.47-.22.25-.43.28-.81.09-.37-.19-1.58-.58-3.02-1.86-1.11-.99-1.86-2.22-2.08-2.59-.22-.38-.02-.58.16-.77.17-.17.37-.43.56-.65.19-.22.25-.38.37-.62.13-.25.06-.47-.03-.65-.09-.19-.82-2.02-1.05-2.74Z"
        fill="currentColor"
      />
    </svg>
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
    const isMobileViewport = window.matchMedia("(max-width: 767px)").matches;
    const revealElements = Array.from(document.querySelectorAll<HTMLElement>(".lml-reveal"));
    let cleanupGsap: (() => void) | undefined;
    let isCancelled = false;

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

    if (!isMobileViewport)
      void (async () => {
        const [{ gsap }, scrollTriggerModule] = await Promise.all([
          import("gsap"),
          import("gsap/ScrollTrigger"),
        ]);
        const ScrollTrigger = scrollTriggerModule.ScrollTrigger;
        gsap.registerPlugin(ScrollTrigger);
        if (isCancelled) return;

        const context = gsap.context(() => {
          gsap.utils
            .toArray<HTMLElement>(
              ".lml-page-hero > div, .lml-section-intro, .lml-service-row, .lml-salon-grid article, .lml-love-list article, .lml-contact-panel article, .lml-detail-grid > div, .lml-faq details",
            )
            .forEach((element) => {
              gsap.fromTo(
                element,
                { autoAlpha: 0, y: 22 },
                {
                  autoAlpha: 1,
                  y: 0,
                  duration: 1,
                  ease: "power3.out",
                  scrollTrigger: {
                    trigger: element,
                    start: "top 86%",
                    once: true,
                  },
                },
              );
            });

          gsap.utils
            .toArray<HTMLElement>(
              ".lml-page-hero img, .lml-space-main, .lml-space-stack figure, .lml-masonry > *, .lml-salon-grid article",
            )
            .forEach((element) => {
              gsap.fromTo(
                element,
                { clipPath: "inset(12% 0 0 0)", autoAlpha: 0.88 },
                {
                  clipPath: "inset(0% 0 0 0)",
                  autoAlpha: 1,
                  duration: 1.15,
                  ease: "power3.out",
                  scrollTrigger: {
                    trigger: element,
                    start: "top 88%",
                    once: true,
                  },
                },
              );
            });

          gsap.utils.toArray<HTMLElement>(".lml-stagger").forEach((group) => {
            const children = Array.from(group.children);
            if (!children.length) return;

            gsap.fromTo(
              children,
              { autoAlpha: 0, y: 20 },
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.9,
                ease: "power3.out",
                stagger: 0.1,
                scrollTrigger: {
                  trigger: group,
                  start: "top 86%",
                  once: true,
                },
              },
            );
          });
        });

        cleanupGsap = () => {
          context.revert();
        };
      })();

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
      isCancelled = true;
      observer.disconnect();
      cleanupGsap?.();
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
  title = "Begin with a Consultation",
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
