import { X } from "lucide-react";
import { useEffect, useState } from "react";

export type LightboxImage = {
  src: string;
  alt: string;
  label?: string;
};

export function LuxuryLightbox({
  image,
  onClose,
}: {
  image: LightboxImage | null;
  onClose: () => void;
}) {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (!image) return;
    setIsClosing(false);

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsClosing(true);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [image, onClose]);

  if (!image) return null;

  return (
    <div
      className={`lml-lightbox ${isClosing ? "is-closing" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-label={image.label ?? image.alt}
      onClick={() => setIsClosing(true)}
      onAnimationEnd={(event) => {
        if (event.currentTarget === event.target && isClosing) onClose();
      }}
    >
      <button
        className="lml-lightbox-close"
        type="button"
        aria-label="Close image"
        onClick={() => setIsClosing(true)}
      >
        <X size={20} />
      </button>
      <figure className="lml-lightbox-frame" onClick={(event) => event.stopPropagation()}>
        <img src={image.src} alt={image.alt} />
        {image.label ? <figcaption>{image.label}</figcaption> : null}
      </figure>
    </div>
  );
}
