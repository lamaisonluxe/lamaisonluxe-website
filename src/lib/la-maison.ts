import type { LucideIcon } from "lucide-react";
import { Gem, Hand, MapPin, MessageCircle, Phone, Scissors, Sparkles, Waves } from "lucide-react";

export const contact = {
  phoneLabel: "+91 93111 05336",
  phoneHref: "tel:+919311105336",
  whatsapp:
    "https://wa.me/919311105336?text=Hello%20La%20Maison%20Luxe%2C%20I%20would%20like%20a%20consultation.",
  directions:
    "https://www.google.com/maps/place/Sun+Twilight+Mall/@28.4779758,77.5073827,15z/data=!3m1!4b1!4m6!3m5!1s0x390cea8519eeb891:0x506c14edb6c0c05a!8m2!3d28.477977!4d77.5258367!16s%2Fg%2F11tf_4m2h5?entry=ttu&g_ep=EgoyMDI2MDYwMy4xIKXMDSoASAFQAw%3D%3D",
  mapEmbed:
    "https://www.google.com/maps?q=Suntwilight%2C%20Ground%20Floor%2C%20Shop%20No.%2010%2C%2011%20%26%2012%2C%20Sector-27%2C%20Greater%20Noida%20201310%2C%20Uttar%20Pradesh%2C%20India&output=embed",
  address:
    "Suntwilight, Ground Floor, Shop No. 10, 11 & 12, Sector-27, Greater Noida - 201310, Uttar Pradesh (India)",
  email: "lamaisonluxe@gmail.com",
  instagram: "https://www.instagram.com/la.maison_luxe?igsh=MnI5MnAzbXZ0bmZp",
  hours: ["Monday - Saturday: 10:00 AM - 8:00 PM", "Sunday: 11:00 AM - 6:00 PM"],
};

export const images = {
  hero: "/showroom/hero-salon-floor.jpeg",
  reception: "/showroom/consultation-room-marble.jpeg",
  stations: "/showroom/styling-mirrors-wide.jpeg",
  mirrors: "/showroom/long-mirror-styling.jpeg",
  lounge: "/showroom/guest-lounge-monogram.jpeg",
  treatment: "/showroom/treatment-room-bright.jpeg",
  treatmentAlt: "/showroom/treatment-room-casmara.jpeg",
  treatmentMood: "/showroom/treatment-room-moody.jpeg",
  nails: "/showroom/nail-pedicure-studio.jpeg",
  nailLounge: "/showroom/nail-lounge-brand-wall.jpeg",
  detail: "/showroom/beauty-room-corridor.jpeg",
  skin: "/showroom/treatment-room-casmara.jpeg",
  hair: "/showroom/styling-stations.jpeg",
  body: "/showroom/treatment-room-bright.jpeg",
  scalp: "/showroom/hair-wash-styling-bay.jpeg",
  consultation: "/showroom/consultation-room-lounge.jpeg",
  shampoo: "/showroom/shampoo-lounge.jpeg",
  exterior: "/showroom/guest-lounge-monogram.jpeg",
};

export const salonSpaces = [
  {
    title: "Reception",
    image: images.reception,
    text: "A quiet consultation room with marble, warm wood, and brand-green seating.",
  },
  {
    title: "Styling Area",
    image: images.stations,
    text: "Illuminated mirrors, polished stations, and generous working space for detailed craft.",
  },
  {
    title: "Skin Care Rooms",
    image: images.treatment,
    text: "Private treatment rooms with clean surfaces, soft lighting, and a composed service pace.",
  },
  {
    title: "Nail Studio",
    image: images.nails,
    text: "A dedicated nail and pedicure studio with product walls, lounge seating, and refined detail.",
  },
  {
    title: "Luxury Details",
    image: images.detail,
    text: "Marble textures, lit signage, sculptural lighting, and careful guest touchpoints.",
  },
];

export type Service = {
  slug: string;
  title: string;
  eyebrow: string;
  image: string;
  icon: LucideIcon;
  description: string;
  highlights: string[];
  benefits: string[];
  offerings: string[];
  faq: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "hair-artistry",
    title: "Hair Artistry",
    eyebrow: "Cuts, color, and finish",
    image: images.hair,
    icon: Scissors,
    description:
      "Precision-led hair services shaped around face structure, lifestyle, hair health, and the finish you want to live with after the salon.",
    highlights: ["Consultation-led approach", "Color planning", "Gloss and finish care"],
    benefits: ["Balanced shape", "Refined color movement", "Hair health protection"],
    offerings: [
      "Precision Cuts",
      "Balayage and Global Color",
      "Hair Spa",
      "Blowouts",
      "Scalp Care",
    ],
    faq: [
      {
        q: "Do you offer consultations before color?",
        a: "Yes. Color services begin with a discussion of hair history, maintenance, tone, and finish.",
      },
      {
        q: "Can I ask about hair health before choosing a service?",
        a: "Yes. The team can guide you toward treatments that support strength, shine, and manageability.",
      },
    ],
  },
  {
    slug: "skin-care",
    title: "Skin Care Rituals",
    eyebrow: "Facials, cleanups, and glow care",
    image: images.skin,
    icon: Sparkles,
    description:
      "Skin care rituals are selected after understanding sensitivity, texture, hydration, and visible skin goals.",
    highlights: ["Private rooms", "Skin-first guidance", "Comfortable rituals"],
    benefits: ["Cleaner texture", "Rested appearance", "Better product response"],
    offerings: ["Signature Facials", "Cleanups", "Hydration Rituals", "De-tan Care", "Waxing"],
    faq: [
      {
        q: "How do I know which facial is right for me?",
        a: "The team can help choose after reviewing your skin type, sensitivity, and current concerns.",
      },
      {
        q: "Are the rooms private?",
        a: "Skin care services are designed around privacy, cleanliness, and a calm treatment experience.",
      },
    ],
  },
  {
    slug: "nail-architecture",
    title: "Nail Architecture",
    eyebrow: "Extensions, gel, hands and feet",
    image: images.nails,
    icon: Gem,
    description:
      "Nail services focus on shape, structure, surface finish, and the small details that make hands look considered.",
    highlights: ["Shape consultation", "Gel finishes", "Detailed prep"],
    benefits: ["Polished finish", "Better structure", "Longer-lasting look"],
    offerings: ["Nail Extensions", "Gel Overlays", "Spa Manicure", "Spa Pedicure", "Nail Art"],
    faq: [
      {
        q: "Can I discuss nail shape before starting?",
        a: "Yes. Shape, length, lifestyle, and finish are discussed before the service begins.",
      },
      {
        q: "Do you offer subtle luxury finishes?",
        a: "Yes. The nail studio supports understated, editorial, and detail-led finishes.",
      },
    ],
  },
  {
    slug: "body-treatments",
    title: "Body Treatments",
    eyebrow: "Body care and polishing",
    image: images.body,
    icon: Hand,
    description:
      "Body care services are built around comfort, skin feel, and the kind of composed reset expected from a premium beauty house.",
    highlights: ["Calm rooms", "Comfort-led service", "Skin softness"],
    benefits: ["Smoother feel", "Relaxed experience", "Refreshed appearance"],
    offerings: ["Body Polishing", "Body Rituals", "Waxing", "Hand and Foot Care"],
    faq: [],
  },
  {
    slug: "scalp-treatments",
    title: "Scalp Treatments",
    eyebrow: "Scalp and hair wellness",
    image: images.scalp,
    icon: Waves,
    description:
      "Scalp treatments support healthier-feeling hair through cleansing, care rituals, and a more mindful service rhythm.",
    highlights: ["Scalp focus", "Hair wellness", "Relaxed finish"],
    benefits: ["Cleaner scalp feel", "Improved comfort", "Healthier-looking hair"],
    offerings: ["Scalp Rituals", "Hair Spa", "Strength Care", "Shine Care"],
    faq: [],
  },
];

export const serviceDetails = services.slice(0, 3);

export const galleryItems = [
  { label: "Main Salon Floor", category: "Salon", image: images.hero },
  { label: "Mirror Styling Wall", category: "Hair", image: images.stations },
  { label: "Long Styling Suite", category: "Hair", image: images.mirrors },
  { label: "Styling Stations", category: "Hair", image: images.hair },
  { label: "Hair Wash Bay", category: "Hair", image: images.scalp },
  { label: "Shampoo Lounge", category: "Salon", image: images.shampoo },
  { label: "Nail Studio", category: "Nails", image: images.nails },
  { label: "Nail Lounge", category: "Nails", image: images.nailLounge },
  { label: "Consultation Room", category: "Salon", image: images.reception },
  { label: "Private Consultation", category: "Behind the Scenes", image: images.consultation },
  { label: "Beauty Room Corridor", category: "Skin", image: images.detail },
  { label: "Treatment Room", category: "Skin", image: images.treatment },
  { label: "Casmara Treatment Room", category: "Skin", image: images.treatmentAlt },
  { label: "Ambient Treatment Room", category: "Behind the Scenes", image: images.treatmentMood },
  { label: "Guest Lounge", category: "Salon", image: images.lounge },
];

export const testimonials = [
  {
    quote:
      "The space is beautifully kept, calm, and private. The consultation felt personal and the finish was exactly what I wanted.",
    initials: "AK",
    location: "Sector 104, Noida",
    rating: 5,
  },
  {
    quote:
      "It does not feel rushed. The salon has a premium, clean atmosphere and the team pays attention to small details.",
    initials: "PS",
    location: "Noida",
    rating: 5,
  },
  {
    quote:
      "A polished, comfortable experience from reception to service. The interiors make the visit feel special.",
    initials: "MR",
    location: "Delhi NCR",
    rating: 5,
  },
];

export const quickActions = [
  { label: "WhatsApp Consultation", href: contact.whatsapp, icon: MessageCircle },
  { label: "Get Directions", href: contact.directions, icon: MapPin },
  { label: "Call Now", href: contact.phoneHref, icon: Phone },
];

export function detailPath(slug: string) {
  if (slug === "skin-care") return "/services/skin-care";
  if (slug === "nail-architecture") return "/services/nail-architecture";
  return "/services/hair-artistry";
}
