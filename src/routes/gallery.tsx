import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { galleryItems, images } from "../lib/la-maison";
import { LuxuryLightbox } from "../components/luxury-lightbox";
import type { LightboxImage } from "../components/luxury-lightbox";
import { PageShell, SectionIntro } from "../components/la-maison-layout";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery - La Maison Luxe" },
      {
        name: "description",
        content:
          "View La Maison Luxe gallery with salon interiors, hair, skin, nails, and behind-the-scenes details.",
      },
    ],
  }),
  component: GalleryPage,
});

const filters = ["All", "Salon", "Hair", "Skin", "Nails", "Behind the Scenes"];

function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<LightboxImage | null>(null);
  const visibleItems =
    activeFilter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <PageShell>
      <section className="lml-page-hero">
        <img src={images.lounge} alt="La Maison Luxe lounge" />
        <div>
          <span>Gallery</span>
          <h1>The salon, the work, and the details that make the visit memorable.</h1>
          <p>Large-format imagery focused on atmosphere, cleanliness, craft, and finish.</p>
        </div>
      </section>

      <section className="lml-gallery-page">
        <SectionIntro eyebrow="Photography" title="Interiors and service moments." />
        <div className="lml-filter-row" aria-label="Gallery filters">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={filter === activeFilter ? "active" : ""}
              aria-pressed={filter === activeFilter}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="lml-masonry lml-gallery-click-grid">
          {visibleItems.map((item, index) => (
            <button
              type="button"
              className={index % 4 === 0 ? "tall" : ""}
              key={`${item.category}-${item.label}`}
              aria-label={`Open ${item.label}`}
              onClick={() =>
                setLightboxImage({
                  src: item.image,
                  alt: item.label,
                  label: `${item.category} - ${item.label}`,
                })
              }
            >
              <img src={item.image} alt={item.label} />
              <span className="lml-masonry-caption">
                <span>{item.category}</span>
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </section>
      <LuxuryLightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />
    </PageShell>
  );
}
