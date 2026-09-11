// -----------------------------------------------------------------------------
// Centralized, editable content for Coorg North Breeze.
// Edit values here to update the whole site. No fabricated facts — placeholder
// fields are clearly marked and safe to replace with real information.
// -----------------------------------------------------------------------------

export const site = {
  name: 'North Breeze',
  fullName: 'Coorg North Breeze',
  location: 'Madikeri, Coorg, Karnataka',
  // Primary phone (provided).
  phone: '+91 88673 18857',
  phoneHref: 'tel:+918867318857',
  // WhatsApp uses the same number by default. Edit if a different number is used.
  whatsapp: '918867318857',
  whatsappMessage: 'Hello! I would like to enquire about a stay at Coorg North Breeze.',
  // Configurable Google Maps links. Replace the query with an exact pin when available.
  mapsSearchUrl: 'https://www.google.com/maps/search/?api=1&query=Coorg+North+Breeze+Madikeri+Coorg+Karnataka',
  mapsDirectionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Coorg+North+Breeze+Madikeri+Coorg+Karnataka',
  mapsEmbedUrl:
    'https://www.google.com/maps?q=Madikeri,Coorg,Karnataka&z=13&output=embed',
} as const

export function whatsappUrl(message = site.whatsappMessage) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`
}

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Stay', href: '/stay' },
  { label: 'Experience', href: '/experience' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
] as const

export type Room = {
  id: string
  label: string
  name: string
  image: string
  description: string
  details: string[]
}

// Room names/features are editable placeholders — replace with actual details.
export const rooms: Room[] = [
  {
    id: 'room-01',
    label: 'Room 01',
    name: 'Garden View Room',
    image: '/images/room-1.png',
    description:
      'A warm wood-framed room with a pitched timber ceiling, opening to soft green views through the windows.',
    details: ['Double bed', 'Garden-facing windows', 'Ceiling fan', 'Attached bathroom'],
  },
  {
    id: 'room-02',
    label: 'Room 02',
    name: 'Corner Light Room',
    image: '/images/room-2.png',
    description:
      'A bright corner room wrapped in natural light, with a simple work desk and calm, airy surroundings.',
    details: ['Double bed', 'Corner windows', 'Work desk', 'Attached bathroom'],
  },
]

export const amenities = [
  'Hill & valley views',
  'Open terrace',
  'Home-cooked meals',
  'Parking on site',
  'Peaceful surroundings',
  'Warm homestay hospitality',
]

export type Experience = {
  number: string
  title: string
  description: string
  image?: string
}

// Descriptions are short and atmospheric — no invented distances or facts.
export const experiences: Experience[] = [
  {
    number: '01',
    title: "Raja's Seat",
    description:
      'A garden viewpoint famous for its sweeping sunsets over the layered Coorg hills.',
    image: '/images/coorg-town-day.png',
  },
  {
    number: '02',
    title: 'Madikeri Fort',
    description:
      'A historic hilltop fort at the heart of Madikeri, quietly holding the town’s stories.',
    image: '/images/property-exterior.png',
  },
  {
    number: '03',
    title: 'Abbey Falls',
    description:
      'A cascade tucked among coffee estates and spice plantations, framed by dense green.',
    image: '/images/balcony.png',
  },
  {
    number: '04',
    title: 'Coffee Plantations',
    description:
      'The scent of coffee blossom drifts across the estates that give Coorg its character.',
    image: '/images/night-terrace.png',
  },
  {
    number: '05',
    title: 'Coorg Nature & Surroundings',
    description:
      'Misty mornings, birdsong and slow walks through the hills that surround the homestay.',
    image: '/images/coorg-night.png',
  },
]

export type GalleryImage = {
  src: string
  alt: string
  category: 'Property' | 'Rooms' | 'Views' | 'Nature' | 'Coorg'
}

export const gallery: GalleryImage[] = [
  {
    src: '/images/coorg-town-day.png',
    alt: 'Daytime view over the colourful hillside homes and green hills of Coorg',
    category: 'Views',
  },
  {
    src: '/images/property-exterior.png',
    alt: 'The North Breeze homestay exterior with terracotta tiled roof in golden light',
    category: 'Property',
  },
  {
    src: '/images/balcony.png',
    alt: 'Open terrace with potted plants and string lights overlooking the town at dusk',
    category: 'Property',
  },
  {
    src: '/images/room-1.png',
    alt: 'Bedroom with a pitched timber ceiling and warm wooden furniture',
    category: 'Rooms',
  },
  {
    src: '/images/room-2.png',
    alt: 'Bright corner bedroom filled with natural light and a simple work desk',
    category: 'Rooms',
  },
  {
    src: '/images/night-terrace.png',
    alt: 'Warmly lit terrace with string lights under a dusk sky',
    category: 'Property',
  },
  {
    src: '/images/coorg-night.png',
    alt: 'Coorg town glittering with lights at night beneath a moody sky',
    category: 'Coorg',
  },
]

export type Testimonial = {
  quote: string
  name: string
  detail: string
}

// EDITABLE PLACEHOLDERS — replace with real, attributed guest reviews.
export const testimonials: Testimonial[] = [
  {
    quote:
      'Add a real guest review here. Share what made the stay feel calm, warm and memorable.',
    name: 'Guest name',
    detail: 'Stay details',
  },
  {
    quote:
      'Add another genuine review here — the views, the quiet mornings, the hospitality.',
    name: 'Guest name',
    detail: 'Stay details',
  },
  {
    quote:
      'Add a third guest voice here. Keep it honest and in their own words.',
    name: 'Guest name',
    detail: 'Stay details',
  },
]
