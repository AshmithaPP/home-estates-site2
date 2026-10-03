"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, MapPin } from "lucide-react";

// 3 rows of the 8-column grid
const ITEMS_PER_TAB = 24;

// Categories requested: Modern, Classical, Contemporary, Vernacular Homes
const categories = [
  { id: "all", label: "All Homes" },
  { id: "modern", label: "Modern" },
  { id: "classical", label: "Classical" },
  { id: "contemporary", label: "Contemporary" },
  { id: "vernacular", label: "Vernacular Homes" },
];

// 96 signature spaces (24 per style), hand-picked from the residence photo library
const spotlightItems = [
  // ── MODERN ──
  {
    id: "modern-01",
    name: "The Linear Villa",
    category: "modern",
    badge: "Modern",
    subtext: "Glass & Steel Elevation",
    location: "Anna Nagar, Chennai",
    area: "5,400 sq.ft",
    timeline: "12 Months",
    image: "/images/residence-images/ankan-resideance-view/img26.jpg",
    description:
      "Minimalist modern villa with cantilevered slabs, clean white planes and floor-to-ceiling glazing.",
  },
  {
    id: "modern-02",
    name: "Aura Horizon",
    category: "modern",
    badge: "Modern",
    subtext: "Low-Rise Modern Residence",
    location: "ECR, Chennai",
    area: "6,200 sq.ft",
    timeline: "14 Months",
    image: "/images/residence-images/ankan-resideance-view/img29.jpg",
    description:
      "Horizontal modern composition with deep overhangs, landscaped edges and seamless indoor-outdoor living.",
  },
  {
    id: "modern-03",
    name: "Vertex Glass House",
    category: "modern",
    badge: "Modern",
    subtext: "Curtain-Wall Modernist",
    location: "Adyar, Chennai",
    area: "5,850 sq.ft",
    timeline: "13 Months",
    image: "/assets/img/img-004.jpeg",
    description:
      "Crisp glass curtain-wall facade with slim vertical fins and a precise orthogonal grid.",
  },
  {
    id: "modern-04",
    name: "Prism Tower Villa",
    category: "modern",
    badge: "Modern",
    subtext: "Urban Vertical Modern",
    location: "Besant Nagar, Chennai",
    area: "4,950 sq.ft",
    timeline: "11 Months",
    image: "/assets/img/img-007.jpeg",
    description:
      "Multi-level modern home with glazed volumes, metal screens and private terraces on every floor.",
  },
  {
    id: "modern-05",
    name: "Lumen Living",
    category: "modern",
    badge: "Modern",
    subtext: "Open-Plan Modern Interior",
    location: "Boat Club Road, Chennai",
    area: "6,700 sq.ft",
    timeline: "15 Months",
    image: "/images/residence-images/natraj-residence/img102.jpg",
    description:
      "Bright open-plan living and dining with flush ceilings, light stone floors and minimal detailing.",
  },
  {
    id: "modern-06",
    name: "Skyline Lounge",
    category: "modern",
    badge: "Modern",
    subtext: "Double-Height Modern Living",
    location: "Alwarpet, Chennai",
    area: "5,600 sq.ft",
    timeline: "12 Months",
    image: "/images/residence-images/natraj-residence/img74.jpg",
    description:
      "Double-height lounge with sculptural lighting, clean millwork and a calm neutral palette.",
  },
  {
    id: "modern-07",
    name: "Monochrome Suite",
    category: "modern",
    badge: "Modern",
    subtext: "Modern Living Space",
    location: "Nungambakkam, Chennai",
    area: "5,200 sq.ft",
    timeline: "12 Months",
    image: "/images/residence-images/natraj-residence/img81.jpg",
    description:
      "Expansive modern living room framed by full-height glazing and a restrained white-and-grey scheme.",
  },
  {
    id: "modern-08",
    name: "Cubic Kitchen",
    category: "modern",
    badge: "Modern",
    subtext: "Modern Culinary Space",
    location: "Kilpauk, Chennai",
    area: "4,800 sq.ft",
    timeline: "11 Months",
    image: "/images/residence-images/suresh-residence-view/img42.jpg",
    description:
      "Handle-less modern kitchen with a central island, integrated appliances and seamless storage.",
  },
  {
    id: "modern-09",
    name: "Nightfall Residence",
    category: "modern",
    badge: "Modern",
    subtext: "Illuminated Modern Facade",
    location: "Anna Nagar, Chennai",
    area: "4,600 sq.ft",
    timeline: "11 Months",
    image: "/images/residence-images/shasthri-nagar-adyar/img79.jpg",
    description:
      "Layered modern facade with warm cove lighting and planted terraces that glow after dusk.",
  },
  {
    id: "modern-10",
    name: "Verde Stack",
    category: "modern",
    badge: "Modern",
    subtext: "Green-Terrace Modern",
    location: "Adyar, Chennai",
    area: "4,850 sq.ft",
    timeline: "12 Months",
    image: "/images/residence-images/shasthri-nagar-adyar/img64.jpg",
    description:
      "Stacked modern floors with continuous planters, timber screens and a clean white frame.",
  },
  {
    id: "modern-11",
    name: "Parallax House",
    category: "modern",
    badge: "Modern",
    subtext: "Corner-Plot Modern",
    location: "Besant Nagar, Chennai",
    area: "5,100 sq.ft",
    timeline: "13 Months",
    image: "/images/residence-images/suresh-residence-view/img17.jpg",
    description:
      "Bold corner composition with glass balconies, pergola roof and crisp rendered planes.",
  },
  {
    id: "modern-12",
    name: "Halo Kitchen",
    category: "modern",
    badge: "Modern",
    subtext: "Island Kitchen",
    location: "Alwarpet, Chennai",
    area: "5,300 sq.ft",
    timeline: "12 Months",
    image: "/images/residence-images/natraj-residence/img19.jpg",
    description:
      "Bright modern kitchen with a waterfall island, glass-front shelving and concealed storage.",
  },
  {
    id: "modern-13",
    name: "Linea Kitchen",
    category: "modern",
    badge: "Modern",
    subtext: "Open Modular Kitchen",
    location: "ECR, Chennai",
    area: "5,500 sq.ft",
    timeline: "14 Months",
    image: "/images/residence-images/natraj-residence/img27.jpg",
    description:
      "Clean modular kitchen with warm-grey shutters, stone counters and integrated appliances.",
  },
  {
    id: "modern-14",
    name: "Pantry Studio",
    category: "modern",
    badge: "Modern",
    subtext: "Modern Pantry",
    location: "Kilpauk, Chennai",
    area: "5,750 sq.ft",
    timeline: "11 Months",
    image: "/images/residence-images/natraj-residence/img34.jpg",
    description:
      "Compact modern pantry with tall units, a breakfast counter and soft under-cabinet lighting.",
  },
  {
    id: "modern-15",
    name: "Marble Spa Bath",
    category: "modern",
    badge: "Modern",
    subtext: "Modern Bathroom",
    location: "Nungambakkam, Chennai",
    area: "6,000 sq.ft",
    timeline: "13 Months",
    image: "/images/residence-images/natraj-residence/img41.jpg",
    description:
      "Spa-style bath with a freestanding tub, backlit mirrors and veined marble surfaces.",
  },
  {
    id: "modern-16",
    name: "Garden Bath",
    category: "modern",
    badge: "Modern",
    subtext: "Biophilic Modern Bath",
    location: "Velachery, Chennai",
    area: "6,250 sq.ft",
    timeline: "12 Months",
    image: "/images/residence-images/natraj-residence/img55.jpg",
    description:
      "Modern bathroom opening to a vertical garden, with a soaking tub and warm timber vanity.",
  },
  {
    id: "modern-17",
    name: "Twin Vanity Suite",
    category: "modern",
    badge: "Modern",
    subtext: "Modern Dressing Bath",
    location: "Mylapore, Chennai",
    area: "6,500 sq.ft",
    timeline: "15 Months",
    image: "/images/residence-images/natraj-residence/img48.jpg",
    description:
      "Twin-basin vanity, glass shower enclosure and a sculpted tub in a calm modern palette.",
  },
  {
    id: "modern-18",
    name: "Atrium Dining",
    category: "modern",
    badge: "Modern",
    subtext: "Modern Dining Hall",
    location: "T. Nagar, Chennai",
    area: "4,900 sq.ft",
    timeline: "11 Months",
    image: "/images/residence-images/natraj-residence/img95.jpg",
    description:
      "Dining under a double-height void with a floating stair and linear pendant light.",
  },
  {
    id: "modern-19",
    name: "Gallery Foyer",
    category: "modern",
    badge: "Modern",
    subtext: "Modern Entrance Lobby",
    location: "Kotturpuram, Chennai",
    area: "5,200 sq.ft",
    timeline: "12 Months",
    image: "/images/residence-images/natraj-residence/img67.jpg",
    description:
      "Gallery-like foyer with sculptural art, stone flooring and a slim feature column.",
  },
  {
    id: "modern-20",
    name: "Pearl Kitchen",
    category: "modern",
    badge: "Modern",
    subtext: "White Gloss Kitchen",
    location: "OMR, Chennai",
    area: "5,650 sq.ft",
    timeline: "13 Months",
    image: "/images/residence-images/suresh-residence-view/img45.jpg",
    description:
      "High-gloss white kitchen with a long island and a garden view through the backsplash window.",
  },
  {
    id: "modern-21",
    name: "Stone Spa",
    category: "modern",
    badge: "Modern",
    subtext: "Modern Master Bath",
    location: "Boat Club Road, Chennai",
    area: "5,900 sq.ft",
    timeline: "14 Months",
    image: "/images/residence-images/besantnagar-residence-view/img216.jpg",
    description:
      "Grey-stone master bath with a sculpted tub, matte fittings and a planted glass wall.",
  },
  {
    id: "modern-22",
    name: "Courtyard Entry",
    category: "modern",
    badge: "Modern",
    subtext: "Modern Entrance Court",
    location: "Mogappair, Chennai",
    area: "6,300 sq.ft",
    timeline: "12 Months",
    image: "/images/residence-images/besantnagar-residence-view/img33.jpg",
    description:
      "Entrance court with stepping stones, sculpted shrubs and a tall pivot door.",
  },
  {
    id: "modern-23",
    name: "Black Marble Foyer",
    category: "modern",
    badge: "Modern",
    subtext: "Modern Entry Hall",
    location: "R.A. Puram, Chennai",
    area: "4,700 sq.ft",
    timeline: "11 Months",
    image: "/images/residence-images/besantnagar-residence-view/img40.jpg",
    description:
      "Black marble floors, gold inlays and an indoor garden frame this dramatic modern entry.",
  },
  {
    id: "modern-24",
    name: "Sunlit Lounge",
    category: "modern",
    badge: "Modern",
    subtext: "Modern Family Living",
    location: "Thiruvanmiyur, Chennai",
    area: "5,400 sq.ft",
    timeline: "13 Months",
    image: "/images/residence-images/suresh-residence-view/img81.jpg",
    description:
      "Corner living room with wraparound glazing, low sofas and a terrace view.",
  },
  // ── CLASSICAL ──
  {
    id: "classical-01",
    name: "The Grand Regency",
    category: "classical",
    badge: "Classical",
    subtext: "Neoclassical Facade",
    location: "Poes Garden, Chennai",
    area: "7,400 sq.ft",
    timeline: "16 Months",
    image: "/images/residence-images/besantnagar-residence-view/img19.jpg",
    description:
      "Symmetrical neoclassical elevation with stone cornices, framed windows and balustraded balconies.",
  },
  {
    id: "classical-02",
    name: "Imperial Heritage",
    category: "classical",
    badge: "Classical",
    subtext: "Classical Manor House",
    location: "Harrington Road, Chetpet",
    area: "6,800 sq.ft",
    timeline: "14 Months",
    image: "/images/residence-images/besantnagar-residence-view/img26.jpg",
    description:
      "Stately classical proportions with layered mouldings, arched openings and a grand entrance.",
  },
  {
    id: "classical-03",
    name: "Palazzo Foyer",
    category: "classical",
    badge: "Classical",
    subtext: "Panelled Classical Entry",
    location: "Kotturpuram, Chennai",
    area: "5,900 sq.ft",
    timeline: "13 Months",
    image: "/images/residence-images/besantnagar-residence-view/img54.jpg",
    description:
      "Formal foyer with wall panelling, a crystal chandelier and a framed console vignette.",
  },
  {
    id: "classical-04",
    name: "Windsor Salon",
    category: "classical",
    badge: "Classical",
    subtext: "Classical Living Room",
    location: "Kilpauk, Chennai",
    area: "6,300 sq.ft",
    timeline: "14 Months",
    image: "/images/residence-images/besantnagar-residence-view/img75.jpg",
    description:
      "Elegant living room with classical wall mouldings, coffered ceiling and refined furnishings.",
  },
  {
    id: "classical-05",
    name: "Sovereign Dining",
    category: "classical",
    badge: "Classical",
    subtext: "Formal Dining Hall",
    location: "Boat Club Road, Chennai",
    area: "7,800 sq.ft",
    timeline: "16 Months",
    image: "/images/residence-images/besantnagar-residence-view/img89.jpg",
    description:
      "Formal dining set beneath a coffered ceiling with tall windows and classical joinery.",
  },
  {
    id: "classical-06",
    name: "Crown Study",
    category: "classical",
    badge: "Classical",
    subtext: "Wood-Panelled Library",
    location: "Nungambakkam, Chennai",
    area: "6,100 sq.ft",
    timeline: "13 Months",
    image: "/images/residence-images/besantnagar-residence-view/img152.jpg",
    description:
      "Rich walnut-panelled study with built-in shelving, leather seating and warm lighting.",
  },
  {
    id: "classical-07",
    name: "Regal Suite",
    category: "classical",
    badge: "Classical",
    subtext: "Classical Master Bedroom",
    location: "Alwarpet, Chennai",
    area: "6,500 sq.ft",
    timeline: "14 Months",
    image: "/images/residence-images/besantnagar-residence-view/img195.jpg",
    description:
      "Serene master suite with panelled walls, gilded accents and a statement chandelier.",
  },
  {
    id: "classical-08",
    name: "Heritage Gallery",
    category: "classical",
    badge: "Classical",
    subtext: "Classical Display Wall",
    location: "R.A. Puram, Chennai",
    area: "5,700 sq.ft",
    timeline: "13 Months",
    image: "/assets/img/img-053.jpeg",
    description:
      "Carved classical display wall with arched niches, cove lighting and fine timber detailing.",
  },
  {
    id: "classical-09",
    name: "Ivory Apartments",
    category: "classical",
    badge: "Classical",
    subtext: "Classical Apartment Block",
    location: "Anna Nagar, Chennai",
    area: "4,600 sq.ft",
    timeline: "11 Months",
    image: "/assets/img/img-013.jpeg",
    description:
      "Classical apartment elevation with rhythmic balconies, cornices and framed windows.",
  },
  {
    id: "classical-10",
    name: "Grand Atrium",
    category: "classical",
    badge: "Classical",
    subtext: "Classical Living & Stair",
    location: "Adyar, Chennai",
    area: "4,850 sq.ft",
    timeline: "12 Months",
    image: "/images/residence-images/besantnagar-residence-view/img82.jpg",
    description:
      "Formal living room with a sweeping timber stair, chandeliers and moulded wall panels.",
  },
  {
    id: "classical-11",
    name: "Marble Foyer",
    category: "classical",
    badge: "Classical",
    subtext: "Classical Entry Console",
    location: "Besant Nagar, Chennai",
    area: "5,100 sq.ft",
    timeline: "13 Months",
    image: "/images/residence-images/besantnagar-residence-view/img61.jpg",
    description:
      "Panelled foyer with a framed artwork, gilded mirror and soft symmetric lighting.",
  },
  {
    id: "classical-12",
    name: "Banquet Dining",
    category: "classical",
    badge: "Classical",
    subtext: "Classical Dining Room",
    location: "Alwarpet, Chennai",
    area: "5,300 sq.ft",
    timeline: "12 Months",
    image: "/images/residence-images/besantnagar-residence-view/img96.jpg",
    description:
      "Dining room with coffered ceiling, garden-facing windows and refined panelled walls.",
  },
  {
    id: "classical-13",
    name: "Heritage Staircase",
    category: "classical",
    badge: "Classical",
    subtext: "Classical Stair Hall",
    location: "ECR, Chennai",
    area: "5,500 sq.ft",
    timeline: "14 Months",
    image: "/images/residence-images/besantnagar-residence-view/img68.jpg",
    description:
      "Timber stair with turned balusters, marble cladding and a classical display niche.",
  },
  {
    id: "classical-14",
    name: "Ivory Lounge",
    category: "classical",
    badge: "Classical",
    subtext: "Classical Upper Lounge",
    location: "Kilpauk, Chennai",
    area: "5,750 sq.ft",
    timeline: "11 Months",
    image: "/images/residence-images/besantnagar-residence-view/img131.jpg",
    description:
      "Bright lounge with moulded panels, classic armchairs and a glass balustrade.",
  },
  {
    id: "classical-15",
    name: "Pearl Landing",
    category: "classical",
    badge: "Classical",
    subtext: "Classical Family Lounge",
    location: "Nungambakkam, Chennai",
    area: "6,000 sq.ft",
    timeline: "13 Months",
    image: "/images/residence-images/besantnagar-residence-view/img138.jpg",
    description:
      "Family lounge with coffered ceiling, curved seating and garden-facing glazing.",
  },
  {
    id: "classical-16",
    name: "Morning Room",
    category: "classical",
    badge: "Classical",
    subtext: "Classical Sitting Room",
    location: "Velachery, Chennai",
    area: "6,250 sq.ft",
    timeline: "12 Months",
    image: "/images/residence-images/besantnagar-residence-view/img145.jpg",
    description:
      "Light-filled sitting room with panelled doors, classical mouldings and soft furnishings.",
  },
  {
    id: "classical-17",
    name: "Library Office",
    category: "classical",
    badge: "Classical",
    subtext: "Wood-Panelled Office",
    location: "Mylapore, Chennai",
    area: "6,500 sq.ft",
    timeline: "15 Months",
    image: "/images/residence-images/besantnagar-residence-view/img159.jpg",
    description:
      "Executive office wrapped in walnut panelling with built-in display shelving.",
  },
  {
    id: "classical-18",
    name: "Chairman's Study",
    category: "classical",
    badge: "Classical",
    subtext: "Classical Study",
    location: "T. Nagar, Chennai",
    area: "4,900 sq.ft",
    timeline: "11 Months",
    image: "/images/residence-images/besantnagar-residence-view/img167.jpg",
    description:
      "Panelled study with framed art, a leather chair and warm brass lighting.",
  },
  {
    id: "classical-19",
    name: "Walnut Chamber",
    category: "classical",
    badge: "Classical",
    subtext: "Classical Work Room",
    location: "Kotturpuram, Chennai",
    area: "5,200 sq.ft",
    timeline: "12 Months",
    image: "/images/residence-images/besantnagar-residence-view/img174.jpg",
    description:
      "Rich timber chamber with a carved desk, display cabinets and sculptural pendant.",
  },
  {
    id: "classical-20",
    name: "Velvet Salon",
    category: "classical",
    badge: "Classical",
    subtext: "Classical Lounge",
    location: "OMR, Chennai",
    area: "5,650 sq.ft",
    timeline: "13 Months",
    image: "/images/residence-images/besantnagar-residence-view/img181.jpg",
    description:
      "Lounge with a crystal chandelier, velvet seating and tall draped windows.",
  },
  {
    id: "classical-21",
    name: "Blue Drawing Room",
    category: "classical",
    badge: "Classical",
    subtext: "Classical Drawing Room",
    location: "Boat Club Road, Chennai",
    area: "5,900 sq.ft",
    timeline: "14 Months",
    image: "/images/residence-images/besantnagar-residence-view/img188.jpg",
    description:
      "Drawing room with panelled walls, a herringbone floor and navy upholstery.",
  },
  {
    id: "classical-22",
    name: "Champagne Suite",
    category: "classical",
    badge: "Classical",
    subtext: "Classical Bedroom",
    location: "Mogappair, Chennai",
    area: "6,300 sq.ft",
    timeline: "12 Months",
    image: "/images/residence-images/besantnagar-residence-view/img202.jpg",
    description:
      "Bedroom with a gilded headboard wall, chandelier and soft classic tones.",
  },
  {
    id: "classical-23",
    name: "Chandelier Suite",
    category: "classical",
    badge: "Classical",
    subtext: "Classical Master Suite",
    location: "R.A. Puram, Chennai",
    area: "4,700 sq.ft",
    timeline: "11 Months",
    image: "/images/residence-images/besantnagar-residence-view/img209.jpg",
    description:
      "Master suite with a marble feature wall, statement chandelier and upholstered bed.",
  },
  {
    id: "classical-24",
    name: "Ivory Retreat",
    category: "classical",
    badge: "Classical",
    subtext: "Classical Guest Suite",
    location: "Thiruvanmiyur, Chennai",
    area: "5,400 sq.ft",
    timeline: "13 Months",
    image: "/images/residence-images/besantnagar-residence-view/img103.jpg",
    description:
      "Guest suite with fluted panels, brass accents and a crystal pendant light.",
  },
  // ── CONTEMPORARY ──
  {
    id: "contemporary-01",
    name: "Terra Nova",
    category: "contemporary",
    badge: "Contemporary",
    subtext: "Timber & White Contemporary",
    location: "Anna Nagar, Chennai",
    area: "5,300 sq.ft",
    timeline: "12 Months",
    image: "/images/residence-images/raman-residence-view/img39.jpg",
    description:
      "Contemporary elevation pairing warm timber cladding with crisp white planes and planted balconies.",
  },
  {
    id: "contemporary-02",
    name: "Scarlet Diamond",
    category: "contemporary",
    badge: "Contemporary",
    subtext: "Signature Contemporary Villa",
    location: "Anna Nagar East, Chennai",
    area: "5,800 sq.ft",
    timeline: "13 Months",
    image: "/assets/img/img-001.jpeg",
    description:
      "Perforated feature facade, private terrace garden and layered contemporary massing.",
  },
  {
    id: "contemporary-03",
    name: "Emerald Heights",
    category: "contemporary",
    badge: "Contemporary",
    subtext: "Garden Contemporary",
    location: "Anna Nagar, Chennai",
    area: "5,200 sq.ft",
    timeline: "12 Months",
    image: "/assets/img/img-006.jpeg",
    description:
      "Terracotta-toned contemporary villa with planter balconies and a landscaped roof deck.",
  },
  {
    id: "contemporary-04",
    name: "Solarium Villa",
    category: "contemporary",
    badge: "Contemporary",
    subtext: "Light-Filled Contemporary",
    location: "Thiruvanmiyur, Chennai",
    area: "4,850 sq.ft",
    timeline: "11 Months",
    image: "/assets/img/img-011.jpeg",
    description:
      "Bright contemporary home with a glazed stair core, timber accents and a sheltered porch.",
  },
  {
    id: "contemporary-05",
    name: "Zenith Pavilion",
    category: "contemporary",
    badge: "Contemporary",
    subtext: "Low-Slung Contemporary",
    location: "ECR, Chennai",
    area: "6,400 sq.ft",
    timeline: "14 Months",
    image: "/assets/img/img-010.jpeg",
    description:
      "Sweeping roof planes and warm lighting create a relaxed, resort-style contemporary residence.",
  },
  {
    id: "contemporary-06",
    name: "Lumina Court",
    category: "contemporary",
    badge: "Contemporary",
    subtext: "Courtyard Contemporary",
    location: "Gandhi Nagar, Adyar",
    area: "5,650 sq.ft",
    timeline: "12 Months",
    image: "/images/residence-images/suresh-residence-view/img33.jpg",
    description:
      "Glass-walled internal courtyard with a living tree, bringing light and greenery into the home.",
  },
  {
    id: "contemporary-07",
    name: "Slate Retreat",
    category: "contemporary",
    badge: "Contemporary",
    subtext: "Contemporary Bedroom",
    location: "OMR, Chennai",
    area: "4,600 sq.ft",
    timeline: "10 Months",
    image: "/images/residence-images/ankan-resideance-view/img65.jpg",
    description:
      "Layered greys, textured panels and timber trims in a calm contemporary bedroom.",
  },
  {
    id: "contemporary-08",
    name: "Urban Nest",
    category: "contemporary",
    badge: "Contemporary",
    subtext: "Contemporary Living",
    location: "Velachery, Chennai",
    area: "4,900 sq.ft",
    timeline: "11 Months",
    image: "/images/residence-images/ankan-resideance-view/img74.jpg",
    description:
      "Open contemporary living space with soft leather seating and a sleek media wall.",
  },
  {
    id: "contemporary-09",
    name: "Cedar Crest",
    category: "contemporary",
    badge: "Contemporary",
    subtext: "Contemporary Elevation",
    location: "Anna Nagar, Chennai",
    area: "4,600 sq.ft",
    timeline: "11 Months",
    image: "/images/residence-images/raman-residence-view/img40.jpg",
    description:
      "Contemporary villa with timber-clad volumes, deep balconies and a sculpted roof pergola.",
  },
  {
    id: "contemporary-10",
    name: "Ember Heights",
    category: "contemporary",
    badge: "Contemporary",
    subtext: "Warm Contemporary Villa",
    location: "Adyar, Chennai",
    area: "4,850 sq.ft",
    timeline: "12 Months",
    image: "/images/residence-images/raman-residence-view/img41.jpg",
    description:
      "Copper-toned screens and white planes create a warm contemporary street presence.",
  },
  {
    id: "contemporary-11",
    name: "Graphite Lounge",
    category: "contemporary",
    badge: "Contemporary",
    subtext: "Contemporary Family Lounge",
    location: "Besant Nagar, Chennai",
    area: "5,100 sq.ft",
    timeline: "13 Months",
    image: "/images/residence-images/ankan-resideance-view/img68.jpg",
    description:
      "Grey stone floors, a leather sofa and slim panelling in an open contemporary lounge.",
  },
  {
    id: "contemporary-12",
    name: "Besant Crest",
    category: "contemporary",
    badge: "Contemporary",
    subtext: "Contemporary Apartment Villa",
    location: "Alwarpet, Chennai",
    area: "5,300 sq.ft",
    timeline: "12 Months",
    image: "/assets/img/img-002.jpeg",
    description:
      "Contemporary residence with timber fins, stone base and planted roof terraces.",
  },
  {
    id: "contemporary-13",
    name: "Amber Lounge",
    category: "contemporary",
    badge: "Contemporary",
    subtext: "Contemporary Sitting Room",
    location: "ECR, Chennai",
    area: "5,500 sq.ft",
    timeline: "14 Months",
    image: "/images/residence-images/suresh-residence-view/img57.jpg",
    description:
      "Sitting room with amber accent chairs, a geometric screen and soft cove lighting.",
  },
  {
    id: "contemporary-14",
    name: "Oakline Residence",
    category: "contemporary",
    badge: "Contemporary",
    subtext: "Timber Contemporary",
    location: "Kilpauk, Chennai",
    area: "5,750 sq.ft",
    timeline: "11 Months",
    image: "/assets/img/img-012.jpeg",
    description:
      "Contemporary home with vertical timber, stone accents and a landscaped entrance.",
  },
  {
    id: "contemporary-15",
    name: "Stone & Teak House",
    category: "contemporary",
    badge: "Contemporary",
    subtext: "Textured Contemporary",
    location: "Nungambakkam, Chennai",
    area: "6,000 sq.ft",
    timeline: "13 Months",
    image: "/assets/img/img-015.jpeg",
    description:
      "Grey stone cladding and teak-toned panels in a crisp contemporary composition.",
  },
  {
    id: "contemporary-16",
    name: "Zen Court",
    category: "contemporary",
    badge: "Contemporary",
    subtext: "Courtyard Contemporary",
    location: "Velachery, Chennai",
    area: "6,250 sq.ft",
    timeline: "12 Months",
    image: "/images/residence-images/suresh-residence-view/img36.jpg",
    description:
      "Living spaces wrapped around a glass courtyard with a meditating Buddha and greenery.",
  },
  {
    id: "contemporary-17",
    name: "Garden Dining",
    category: "contemporary",
    badge: "Contemporary",
    subtext: "Contemporary Dining",
    location: "Mylapore, Chennai",
    area: "6,500 sq.ft",
    timeline: "15 Months",
    image: "/images/residence-images/suresh-residence-view/img39.jpg",
    description:
      "Dining room with timber shelving, a geometric pendant and a garden-view window.",
  },
  {
    id: "contemporary-18",
    name: "Twin Suite",
    category: "contemporary",
    badge: "Contemporary",
    subtext: "Contemporary Family Bedroom",
    location: "T. Nagar, Chennai",
    area: "4,900 sq.ft",
    timeline: "11 Months",
    image: "/images/residence-images/suresh-residence-view/img48.jpg",
    description:
      "Warm contemporary bedroom with timber floors, panelled headwall and soft lighting.",
  },
  {
    id: "contemporary-19",
    name: "Sage Bedroom",
    category: "contemporary",
    badge: "Contemporary",
    subtext: "Contemporary Bedroom",
    location: "Kotturpuram, Chennai",
    area: "5,200 sq.ft",
    timeline: "12 Months",
    image: "/images/residence-images/raman-residence/img36.jpg",
    description:
      "Sage-green feature wall, linen bed and a built-in study in a relaxed contemporary suite.",
  },
  {
    id: "contemporary-20",
    name: "Mint Retreat",
    category: "contemporary",
    badge: "Contemporary",
    subtext: "Contemporary Suite",
    location: "OMR, Chennai",
    area: "5,650 sq.ft",
    timeline: "13 Months",
    image: "/images/residence-images/raman-residence/img43.jpg",
    description:
      "Soft mint tones, framed art and an integrated work desk in a calm bedroom.",
  },
  {
    id: "contemporary-21",
    name: "Graphite Suite",
    category: "contemporary",
    badge: "Contemporary",
    subtext: "Contemporary Master Bedroom",
    location: "Boat Club Road, Chennai",
    area: "5,900 sq.ft",
    timeline: "14 Months",
    image: "/images/residence-images/raman-residence/img57.jpg",
    description:
      "Graphite panelling, a low upholstered bed and slim vertical lighting details.",
  },
  {
    id: "contemporary-22",
    name: "Herringbone Suite",
    category: "contemporary",
    badge: "Contemporary",
    subtext: "Contemporary Bedroom",
    location: "Mogappair, Chennai",
    area: "6,300 sq.ft",
    timeline: "12 Months",
    image: "/images/residence-images/raman-residence/img64.jpg",
    description:
      "Herringbone timber floor, exposed brick accent and a cosy reading corner.",
  },
  {
    id: "contemporary-23",
    name: "Atelier Office",
    category: "contemporary",
    badge: "Contemporary",
    subtext: "Contemporary Home Office",
    location: "R.A. Puram, Chennai",
    area: "4,700 sq.ft",
    timeline: "11 Months",
    image: "/images/residence-images/raman-residence/img92.jpg",
    description:
      "Home office with timber shelving, indoor plants and a glass-framed planter wall.",
  },
  {
    id: "contemporary-24",
    name: "Teal Lounge",
    category: "contemporary",
    badge: "Contemporary",
    subtext: "Contemporary Living",
    location: "Thiruvanmiyur, Chennai",
    area: "5,400 sq.ft",
    timeline: "13 Months",
    image: "/images/residence-images/suresh-residence-view/img75.jpg",
    description:
      "Bold teal wall, sculptural seating and an arched floor lamp in a lively lounge.",
  },
  // ── VERNACULAR ──
  {
    id: "vernacular-01",
    name: "Thinnai House",
    category: "vernacular",
    badge: "Vernacular",
    subtext: "Tiled-Roof Vernacular",
    location: "Mylapore, Chennai",
    area: "5,100 sq.ft",
    timeline: "13 Months",
    image: "/images/residence-images/r3-brc-views/img29.jpg",
    description:
      "Sloping Mangalore-tile roofs, deep verandahs and timber columns in a Chettinad-inspired form.",
  },
  {
    id: "vernacular-02",
    name: "Kaveri Homestead",
    category: "vernacular",
    badge: "Vernacular",
    subtext: "Exposed Brick Vernacular",
    location: "Kanchipuram Road, Chennai",
    area: "4,700 sq.ft",
    timeline: "12 Months",
    image: "/images/residence-images/r3-brc-views/img12.jpg",
    description:
      "Exposed brick walls, pitched roofs and shaded terraces suited to the Chennai climate.",
  },
  {
    id: "vernacular-03",
    name: "Oonjal Hall",
    category: "vernacular",
    badge: "Vernacular",
    subtext: "Traditional Swing Lounge",
    location: "Mogappair, Chennai",
    area: "4,400 sq.ft",
    timeline: "11 Months",
    image: "/images/residence-images/ankan-resideance-view/img35.jpg",
    description:
      "A traditional wooden oonjal anchors this living hall, with kolam-inspired inlay flooring.",
  },
  {
    id: "vernacular-04",
    name: "Sannidhi Pooja",
    category: "vernacular",
    badge: "Vernacular",
    subtext: "Sacred Prayer Space",
    location: "Anna Nagar, Chennai",
    area: "4,200 sq.ft",
    timeline: "11 Months",
    image: "/images/residence-images/ankan-resideance-view/img53.jpg",
    description:
      "Vastu-aligned pooja room with carved backdrop, brass lamps and traditional tile flooring.",
  },
  {
    id: "vernacular-05",
    name: "Mutram Living",
    category: "vernacular",
    badge: "Vernacular",
    subtext: "Timber-Beam Living Room",
    location: "Besant Nagar, Chennai",
    area: "5,000 sq.ft",
    timeline: "12 Months",
    image: "/images/residence-images/raman-residence-view/img47.jpg",
    description:
      "Exposed timber ceiling beams and wooden furniture echo the warmth of a traditional home.",
  },
  {
    id: "vernacular-06",
    name: "Courtyard Dining",
    category: "vernacular",
    badge: "Vernacular",
    subtext: "Vernacular Dining Space",
    location: "Kotturpuram, Chennai",
    area: "5,300 sq.ft",
    timeline: "13 Months",
    image: "/images/residence-images/raman-residence-view/img59.jpg",
    description:
      "Beamed ceiling, wooden screens and indoor plants bring vernacular calm to family dining.",
  },
  {
    id: "vernacular-07",
    name: "Brick Stair Hall",
    category: "vernacular",
    badge: "Vernacular",
    subtext: "Exposed Brick & Athangudi",
    location: "Velachery, Chennai",
    area: "4,800 sq.ft",
    timeline: "12 Months",
    image: "/images/residence-images/raman-residence/img153.jpg",
    description:
      "Exposed brick stair wall and patterned floor tiles in a light-filled vernacular hall.",
  },
  {
    id: "vernacular-08",
    name: "Ganapathy Entrance",
    category: "vernacular",
    badge: "Vernacular",
    subtext: "Traditional Welcome Foyer",
    location: "T. Nagar, Chennai",
    area: "4,500 sq.ft",
    timeline: "11 Months",
    image: "/images/residence-images/suresh-residence-view/img24.jpg",
    description:
      "A Ganesha-adorned entrance with stone steps, vertical garden and timber cladding.",
  },
  {
    id: "vernacular-09",
    name: "Chettinad Villa",
    category: "vernacular",
    badge: "Vernacular",
    subtext: "Brick & Tile Vernacular",
    location: "Anna Nagar, Chennai",
    area: "4,600 sq.ft",
    timeline: "11 Months",
    image: "/images/residence-images/r3-brc-views/img4.jpg",
    description:
      "Exposed brick walls and stone paving with a traditional sloping-roof silhouette.",
  },
  {
    id: "vernacular-10",
    name: "Heritage Street Home",
    category: "vernacular",
    badge: "Vernacular",
    subtext: "Traditional Tiled Roof",
    location: "Adyar, Chennai",
    area: "4,850 sq.ft",
    timeline: "12 Months",
    image: "/images/residence-images/ankan-resideance-view/img13.jpg",
    description:
      "A traditional Chennai home with Mangalore-tile roofs, verandah and courtyard gate.",
  },
  {
    id: "vernacular-11",
    name: "Agraharam House",
    category: "vernacular",
    badge: "Vernacular",
    subtext: "Tiled-Roof Townhouse",
    location: "Besant Nagar, Chennai",
    area: "5,100 sq.ft",
    timeline: "13 Months",
    image: "/images/residence-images/ankan-resideance-view/img14.jpg",
    description:
      "Row-house form with sloping tiled roofs and shaded front thinnai seating.",
  },
  {
    id: "vernacular-12",
    name: "Pillared Pooja Hall",
    category: "vernacular",
    badge: "Vernacular",
    subtext: "Traditional Prayer Hall",
    location: "Alwarpet, Chennai",
    area: "5,300 sq.ft",
    timeline: "12 Months",
    image: "/images/residence-images/ankan-resideance-view/img32.jpg",
    description:
      "Pooja hall framed by turned timber pillars, brass lamps and a carved deity wall.",
  },
  {
    id: "vernacular-13",
    name: "Peacock Living",
    category: "vernacular",
    badge: "Vernacular",
    subtext: "Traditional Living Room",
    location: "ECR, Chennai",
    area: "5,500 sq.ft",
    timeline: "14 Months",
    image: "/images/residence-images/ankan-resideance-view/img38.jpg",
    description:
      "Living room with framed Tanjore-inspired art, kolam floor inlay and wooden accents.",
  },
  {
    id: "vernacular-14",
    name: "Indigo Hall",
    category: "vernacular",
    badge: "Vernacular",
    subtext: "Heritage Family Hall",
    location: "Kilpauk, Chennai",
    area: "5,750 sq.ft",
    timeline: "11 Months",
    image: "/images/residence-images/ankan-resideance-view/img41.jpg",
    description:
      "Indigo panelled walls and traditional artwork in a warm family living hall.",
  },
  {
    id: "vernacular-15",
    name: "Mandapam Lounge",
    category: "vernacular",
    badge: "Vernacular",
    subtext: "Traditional Lounge",
    location: "Nungambakkam, Chennai",
    area: "6,000 sq.ft",
    timeline: "13 Months",
    image: "/images/residence-images/ankan-resideance-view/img44.jpg",
    description:
      "Lounge with heritage wall art, a carved timber screen and a traditional prayer niche.",
  },
  {
    id: "vernacular-16",
    name: "Arched Dining",
    category: "vernacular",
    badge: "Vernacular",
    subtext: "Traditional Dining Hall",
    location: "Velachery, Chennai",
    area: "6,250 sq.ft",
    timeline: "12 Months",
    image: "/images/residence-images/ankan-resideance-view/img47.jpg",
    description:
      "Dining hall with a carved timber arch, brass chandelier and wooden furniture.",
  },
  {
    id: "vernacular-17",
    name: "Kuthuvilakku Shrine",
    category: "vernacular",
    badge: "Vernacular",
    subtext: "Pooja Room",
    location: "Mylapore, Chennai",
    area: "6,500 sq.ft",
    timeline: "15 Months",
    image: "/images/residence-images/ankan-resideance-view/img56.jpg",
    description:
      "Shrine with brass kuthuvilakku lamps, a carved backdrop and patterned floor tiles.",
  },
  {
    id: "vernacular-18",
    name: "Mandala Bedroom",
    category: "vernacular",
    badge: "Vernacular",
    subtext: "Traditional Bedroom",
    location: "T. Nagar, Chennai",
    area: "4,900 sq.ft",
    timeline: "11 Months",
    image: "/images/residence-images/ankan-resideance-view/img59.jpg",
    description:
      "Bedroom with a carved timber mandala, indigo drapes and a cosy reading corner.",
  },
  {
    id: "vernacular-19",
    name: "Teak Beam Hall",
    category: "vernacular",
    badge: "Vernacular",
    subtext: "Timber Ceiling Living",
    location: "Kotturpuram, Chennai",
    area: "5,200 sq.ft",
    timeline: "12 Months",
    image: "/images/residence-images/raman-residence-view/img50.jpg",
    description:
      "Exposed teak beams, wooden furniture and wide windows in a breezy living hall.",
  },
  {
    id: "vernacular-20",
    name: "Red Brick Lounge",
    category: "vernacular",
    badge: "Vernacular",
    subtext: "Exposed Brick Living",
    location: "OMR, Chennai",
    area: "5,650 sq.ft",
    timeline: "13 Months",
    image: "/images/residence-images/raman-residence-view/img53.jpg",
    description:
      "Red brick feature wall, wooden seating and traditional rugs in a family lounge.",
  },
  {
    id: "vernacular-21",
    name: "Jaali Dining",
    category: "vernacular",
    badge: "Vernacular",
    subtext: "Vernacular Dining",
    location: "Boat Club Road, Chennai",
    area: "5,900 sq.ft",
    timeline: "14 Months",
    image: "/images/residence-images/raman-residence-view/img62.jpg",
    description:
      "Dining space with carved jaali chairs, timber beams and a hanging basket lamp.",
  },
  {
    id: "vernacular-22",
    name: "Athangudi Hall",
    category: "vernacular",
    badge: "Vernacular",
    subtext: "Patterned Tile Hall",
    location: "Mogappair, Chennai",
    area: "6,300 sq.ft",
    timeline: "12 Months",
    image: "/images/residence-images/raman-residence/img113.jpg",
    description:
      "Black-and-white Athangudi-style floor tiles and brick walls in a bright hall.",
  },
  {
    id: "vernacular-23",
    name: "Courtyard Swing",
    category: "vernacular",
    badge: "Vernacular",
    subtext: "Vernacular Lounge",
    location: "R.A. Puram, Chennai",
    area: "4,700 sq.ft",
    timeline: "11 Months",
    image: "/images/residence-images/raman-residence/img146.jpg",
    description:
      "Wooden swing seating, brick walls and hanging plants around an open skylight.",
  },
  {
    id: "vernacular-24",
    name: "Ganesha Threshold",
    category: "vernacular",
    badge: "Vernacular",
    subtext: "Traditional Entrance",
    location: "Thiruvanmiyur, Chennai",
    area: "5,400 sq.ft",
    timeline: "13 Months",
    image: "/images/residence-images/suresh-residence-view/img27.jpg",
    description:
      "Entrance with a carved Ganesha panel, brass lamps and a stone threshold.",
  },
];

export default function Spotlight() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);

  // Filter items based on active category
  const filteredItems = useMemo(() => {
    // Every tab fills the same 3 rows (24 spaces): "All" shows the first 6 of each style
    if (activeCategory === "all") {
      return categories
        .filter((c) => c.id !== "all")
        .flatMap((c) => spotlightItems.filter((item) => item.category === c.id).slice(0, ITEMS_PER_TAB / 4));
    }
    return spotlightItems.filter((item) => item.category === activeCategory).slice(0, ITEMS_PER_TAB);
  }, [activeCategory]);

  const openConsultation = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event("open-consultation"));
    }
  };

  return (
    <section id="spotlight" className="relative w-full bg-white py-14 sm:py-20 lg:py-24 font-sans overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Clean Heading matching section design */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-[32px] 2xl:text-[38px] font-bold tracking-tight text-slate-900 font-sans leading-tight">
            Architectural Styles
          </h2>
          {/* One-Line Subtitle */}
          <p className="mt-2.5 text-xs sm:text-sm md:text-[15px] font-medium text-slate-600 font-sans leading-relaxed">
            Classic silhouettes and cutting-edge innovation to build your dream home from the ground up.
          </p>
        </div>

        {/* Minimalist Nike-Style Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-10 sm:mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                suppressHydrationWarning
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-[13px] font-bold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-slate-950 text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Nike-Style Pixel-Perfect 8-Column Grid with floating images and clean titles */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-x-4 sm:gap-x-6 lg:gap-x-6 gap-y-8 sm:gap-y-10 lg:gap-y-12">
          {filteredItems.map((item) => (
            <button
              key={item.id}
              type="button"
              suppressHydrationWarning
              onClick={() => setSelectedItem(item)}
              className="group flex flex-col items-center cursor-pointer select-none text-center outline-none bg-transparent border-0 p-0 w-full"
            >
              {/* Product Silhouette Floating Frame */}
              <div className="relative h-[82px] sm:h-[96px] lg:h-[106px] w-full flex items-center justify-center">
                {/* Uniform landscape frame so every thumbnail is the same size */}
                <div className="relative w-full aspect-[3/2] max-h-full overflow-hidden transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-1 drop-shadow-xs">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 45vw, (max-width: 1024px) 22vw, 140px"
                    className="object-cover object-center"
                  />
                </div>
              </div>

              {/* Title below image matching Nike clean typography */}
              <div className="mt-2.5 sm:mt-3 w-full">
                <h3 className="text-[11px] sm:text-[12px] font-bold text-slate-900 group-hover:text-[var(--primary)] transition-colors leading-tight font-sans text-center">
                  {item.name}
                </h3>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Quick View Interactive Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedItem(null)}
          role="presentation"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="spotlight-title"
            onClick={(e) => e.stopPropagation()}
            className="relative flex w-full max-w-2xl flex-col md:flex-row overflow-hidden rounded-2xl bg-white shadow-2xl animate-in zoom-in-95 duration-200"
          >
            {/* Close Button */}
            <button
              type="button"
              suppressHydrationWarning
              onClick={() => setSelectedItem(null)}
              aria-label="Close modal"
              className="absolute right-3 top-3 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-sm transition-colors hover:bg-slate-100 hover:text-slate-950 cursor-pointer"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Left: Project Image */}
            <div className="relative h-56 md:h-auto md:w-[48%] bg-slate-100 shrink-0">
              <Image
                src={selectedItem.image}
                alt={selectedItem.name}
                fill
                sizes="(max-width: 768px) 100vw, 320px"
                className="object-cover"
              />
              <div className="absolute top-3 left-3">
                <span className="rounded-full bg-slate-950/80 px-2.5 py-1 text-[10px] font-bold text-white backdrop-blur-sm">
                  {selectedItem.badge}
                </span>
              </div>
            </div>

            {/* Right: Project Details */}
            <div className="flex-1 p-5 sm:p-6 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--primary)]">
                  {selectedItem.subtext}
                </span>
                <h3 id="spotlight-title" className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                  {selectedItem.name}
                </h3>

                <p className="mt-1 flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                  <MapPin className="h-3.5 w-3.5 text-[var(--grey-base)]" />
                  <span>{selectedItem.location}</span>
                </p>

                <p className="mt-3.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                  {selectedItem.description}
                </p>

                {/* Key Specs */}
                <div className="mt-4 grid grid-cols-2 gap-2.5 border-t border-slate-100 pt-3 text-xs">
                  <div className="rounded-lg bg-slate-50 p-2 border border-slate-100">
                    <span className="block text-[10px] text-slate-400 font-medium">Built-up Area</span>
                    <span className="font-bold text-slate-800">{selectedItem.area}</span>
                  </div>
                  <div className="rounded-lg bg-slate-50 p-2 border border-slate-100">
                    <span className="block text-[10px] text-slate-400 font-medium">Delivery Timeline</span>
                    <span className="font-bold text-slate-800">{selectedItem.timeline}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-wrap items-center gap-2.5">
                <Link
                  href="/contact"
                  onClick={() => setSelectedItem(null)}
                  className="flex-1 rounded-xl bg-[var(--primary)] py-2.5 px-3 text-center text-xs sm:text-sm font-bold text-white shadow-md shadow-[var(--primary)]/25 transition-all hover:bg-[var(--primary-dark)] cursor-pointer"
                >
                  Request Quote for this Model
                </Link>
                <Link
                  href="/gallery"
                  onClick={() => setSelectedItem(null)}
                  className="rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 cursor-pointer"
                >
                  View in Gallery
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
