import { Product } from '../types';

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'prod-01',
    name: 'Emerald Green Designer Zardozi Lehenga',
    category: 'Lehenga',
    gender: 'Women',
    rentalPrice3Days: 1999,
    rentalPrice7Days: 3299,
    rentalPrice10Days: 4199,
    retailPrice: 42000,
    securityDeposit: 2500,
    sizes: ['S', 'M', 'L', 'XL'],
    color: 'Emerald Green & Antique Gold',
    fabric: 'Pure Velvet & Net with Raw Silk Lining',
    occasions: ['Sangeet', 'Wedding', 'Pre-Wedding Shoot'],
    description: 'Bespoke bridal emerald green velvet lehenga hand-embroidered with intricate antique dabka, zardozi and sequins work. Paired with a sweetheart neckline blouse and double dupattas.',
    careInfo: [
      'Professionally dry cleaned before every dispatch',
      'Do not wash at home or apply direct iron',
      'Delivered in anti-dust garment bag with velvet hanger',
      'Return inside the provided reusable waterproof bag'
    ],
    images: [
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=1000&q=80'
    ],
    videoPreviewUrl: 'https://assets.mixkit.co/videos/preview/mixkit-indian-bride-dressed-in-traditional-costume-41680-large.mp4',
    rating: 4.9,
    reviewCount: 38,
    hygieneBadges: ['Hospital Grade UV-C Disinfection', 'Eco Dry Cleaned', 'Steam Sanitized at 100°C', 'Zero-Odor Guarantee'],
    isFeatured: true,
    isPopular: true,
    existingBookings: [
      {
        startDate: '2026-10-25',
        endDate: '2026-10-27',
        bufferStart: '2026-10-23',
        bufferEnd: '2026-10-29',
        orderId: 'SR-10842'
      },
      {
        startDate: '2026-11-12',
        endDate: '2026-11-15',
        bufferStart: '2026-11-10',
        bufferEnd: '2026-11-17',
        orderId: 'SR-10901'
      }
    ]
  },
  {
    id: 'prod-02',
    name: 'Royal Maroon Embroidered Silk Sherwani',
    category: 'Sherwani',
    gender: 'Men',
    rentalPrice3Days: 1499,
    rentalPrice7Days: 2499,
    rentalPrice10Days: 3199,
    retailPrice: 38000,
    securityDeposit: 2000,
    sizes: ['M', 'L', 'XL', 'XXL'],
    color: 'Deep Maroon with Muted Gold',
    fabric: 'Matka Silk with Jacquard Weaving',
    occasions: ['Wedding', 'Sangeet', 'Pre-Wedding Shoot'],
    description: 'Regal maroon silk sherwani tailored with structured shoulders, handcrafted crest buttons, and tonal thread embroidery. Accompanied by ivory churidar pants and a bordered organza stole.',
    careInfo: [
      'Microbially sanitized before every rental',
      'Steam ironed prior to packaging',
      'Includes collar sweat guard strips',
      'Return in the same garment carrier'
    ],
    images: [
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=1000&q=80'
    ],
    videoPreviewUrl: 'https://assets.mixkit.co/videos/preview/mixkit-young-man-in-traditional-attire-dancing-celebrating-41777-large.mp4',
    rating: 4.8,
    reviewCount: 42,
    hygieneBadges: ['Microbially Disinfected', 'Industrial Steam Pressed', 'Tox-Free Ozone Cleaned'],
    isFeatured: true,
    isPopular: true,
    existingBookings: [
      {
        startDate: '2026-10-28',
        endDate: '2026-10-31',
        bufferStart: '2026-10-26',
        bufferEnd: '2026-11-02',
        orderId: 'SR-10855'
      }
    ]
  },
  {
    id: 'prod-03',
    name: 'Blush Pink Mirror Work Organza Lehenga',
    category: 'Lehenga',
    gender: 'Women',
    rentalPrice3Days: 1799,
    rentalPrice7Days: 2999,
    rentalPrice10Days: 3799,
    retailPrice: 35000,
    securityDeposit: 2200,
    sizes: ['XS', 'S', 'M', 'L'],
    color: 'Blush Rose Pink',
    fabric: 'Pure Silk Organza & Shimmer Crepe',
    occasions: ['Sangeet', 'Cocktail Party', 'College Function', 'Festivities'],
    description: 'Ethereal lightweight organza lehenga adorned with real mirror hand-work, thread scallops, and a contemporary backless blouse. Perfect for daytime sangeets or farewell fests.',
    careInfo: [
      'Delicate mirror check conducted pre-dispatch',
      'Sealed in moisture-proof zip sleeve',
      'Gentle steam ironed before shipment'
    ],
    images: [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=80'
    ],
    videoPreviewUrl: 'https://assets.mixkit.co/videos/preview/mixkit-indian-bride-dressed-in-traditional-costume-41680-large.mp4',
    rating: 4.9,
    reviewCount: 29,
    hygieneBadges: ['Microbially Disinfected', 'Steam Ironed', 'Zero-Contact Packaging'],
    isFeatured: true,
    isPopular: false,
    existingBookings: []
  },
  {
    id: 'prod-04',
    name: 'Ivory Raw Silk Sherwani with Zari Stole',
    category: 'Sherwani',
    gender: 'Men',
    rentalPrice3Days: 1899,
    rentalPrice7Days: 3199,
    rentalPrice10Days: 3999,
    retailPrice: 48000,
    securityDeposit: 2500,
    sizes: ['S', 'M', 'L', 'XL'],
    color: 'Ivory Cream & Antique Gold',
    fabric: 'Pure Raw Silk with Cotton Silk Lining',
    occasions: ['Wedding', 'Pre-Wedding Shoot', 'Sangeet'],
    description: 'Timeless ivory groom sherwani crafted in heavy raw silk with tone-on-tone resham embroidery, pearl buttons, and a complementary royal zari dupatta.',
    careInfo: [
      'Ozone treated and 100°C steam pressed',
      'Extra buttons and safety pins provided in pouch',
      'Return inside the tamper-evident return bag'
    ],
    images: [
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=1000&q=80'
    ],
    videoPreviewUrl: 'https://assets.mixkit.co/videos/preview/mixkit-young-man-in-traditional-attire-dancing-celebrating-41777-large.mp4',
    rating: 4.7,
    reviewCount: 31,
    hygieneBadges: ['UV-C Sterilized', 'Eco Dry Cleaned', 'Quality Inspected'],
    isFeatured: false,
    isPopular: true,
    existingBookings: [
      {
        startDate: '2026-11-05',
        endDate: '2026-11-08',
        bufferStart: '2026-11-03',
        bufferEnd: '2026-11-10',
        orderId: 'SR-10890'
      }
    ]
  },
  {
    id: 'prod-05',
    name: 'Crimson Banarasi Katan Silk Heritage Saree',
    category: 'Saree',
    gender: 'Women',
    rentalPrice3Days: 1299,
    rentalPrice7Days: 2099,
    rentalPrice10Days: 2699,
    retailPrice: 28000,
    securityDeposit: 1500,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    color: 'Crimson Red with Kadwa Zari Weave',
    fabric: 'Pure Katan Silk with Gold Zari Pallu',
    occasions: ['Wedding', 'Festivities', 'Cocktail Party'],
    description: 'Authentic Banarasi handloom saree featuring intricate floral jaal motifs and heavy royal pallu. Comes with an unstitched or pre-stitched bustier blouse (specify in measurements).',
    careInfo: [
      'Handled with specialized silk dry cleaning agents',
      'Crease-free hanger packaging',
      'Includes matching petticoat slip upon request'
    ],
    images: [
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=1000&q=80'
    ],
    videoPreviewUrl: 'https://assets.mixkit.co/videos/preview/mixkit-indian-bride-dressed-in-traditional-costume-41680-large.mp4',
    rating: 4.9,
    reviewCount: 45,
    hygieneBadges: ['Microbially Disinfected', 'Steam Ironed', 'Heritage Silk Certified'],
    isFeatured: true,
    isPopular: true,
    existingBookings: []
  },
  {
    id: 'prod-06',
    name: 'Champagne Gold Sequin Floor-Length Gown',
    category: 'Gown',
    gender: 'Women',
    rentalPrice3Days: 1699,
    rentalPrice7Days: 2799,
    rentalPrice10Days: 3499,
    retailPrice: 32000,
    securityDeposit: 2000,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    color: 'Champagne Gold Shimmer',
    fabric: 'Georgette & Net with Micro Sequins',
    occasions: ['Cocktail Party', 'Corporate Gala', 'College Function', 'Pre-Wedding Shoot'],
    description: 'Glamorous red-carpet gown with micro champagne sequins, structured corsetry, built-in cups, and an elegant side trail for evening galas.',
    careInfo: [
      'Ozone disinfected to eliminate odor and microbes',
      'Individual sequin inspection prior to dispatch',
      'Delivered in long bridal hanging carrier'
    ],
    images: [
      'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=80'
    ],
    videoPreviewUrl: 'https://assets.mixkit.co/videos/preview/mixkit-indian-bride-dressed-in-traditional-costume-41680-large.mp4',
    rating: 4.8,
    reviewCount: 24,
    hygieneBadges: ['Hospital Grade Disinfection', 'Steam Pressed', 'Zero-Contact Packaging'],
    isFeatured: false,
    isPopular: true,
    existingBookings: []
  },
  {
    id: 'prod-07',
    name: 'Midnight Black Velvet Bandhgala Jodhpuri Suit',
    category: 'Blazer & Tuxedo',
    gender: 'Men',
    rentalPrice3Days: 1599,
    rentalPrice7Days: 2599,
    rentalPrice10Days: 3299,
    retailPrice: 34000,
    securityDeposit: 2000,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    color: 'Jet Black with Gunmetal Accents',
    fabric: 'Premium Italian Velvet & Satin Trims',
    occasions: ['Cocktail Party', 'Corporate Gala', 'Sangeet', 'College Function'],
    description: 'Impeccably tailored bandhgala suit crafted in deep midnight black velvet with metallic crest buttons and matching slim-fit trousers.',
    careInfo: [
      'Brushed and steam sanitized',
      'Packed with premium cedarwood sachet',
      'Return with supplied wooden hanger'
    ],
    images: [
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=1000&q=80'
    ],
    videoPreviewUrl: 'https://assets.mixkit.co/videos/preview/mixkit-young-man-in-traditional-attire-dancing-celebrating-41777-large.mp4',
    rating: 4.8,
    reviewCount: 36,
    hygieneBadges: ['Microbially Disinfected', 'Steam Ironed', 'Tox-Free Cleaning'],
    isFeatured: true,
    isPopular: true,
    existingBookings: []
  },
  {
    id: 'prod-08',
    name: 'Sunshine Mustard Yellow Georgette Anarkali Set',
    category: 'Anarkali',
    gender: 'Women',
    rentalPrice3Days: 1199,
    rentalPrice7Days: 1899,
    rentalPrice10Days: 2399,
    retailPrice: 22000,
    securityDeposit: 1500,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    color: 'Mustard Haldi Yellow',
    fabric: 'Flowing Pure Georgette with Gotapatti',
    occasions: ['Haldi', 'Festivities', 'College Function', 'Sangeet'],
    description: 'Bright and festive floor-touch 32-kali flared Anarkali embellished with traditional Rajasthani gotapatti borders and matching bandhani print dupatta.',
    careInfo: [
      'Sanitized specifically for dye preservation',
      'Pre-steamed ready to wear upon unpacking',
      'Haldi-proof stain repellent treatment applied'
    ],
    images: [
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80'
    ],
    videoPreviewUrl: 'https://assets.mixkit.co/videos/preview/mixkit-indian-bride-dressed-in-traditional-costume-41680-large.mp4',
    rating: 4.9,
    reviewCount: 51,
    hygieneBadges: ['Eco Dry Cleaned', 'Stain Guard Coated', '100% Sanitized'],
    isFeatured: true,
    isPopular: true,
    existingBookings: [
      {
        startDate: '2026-10-24',
        endDate: '2026-10-26',
        bufferStart: '2026-10-22',
        bufferEnd: '2026-10-28',
        orderId: 'SR-10822'
      }
    ]
  },
  {
    id: 'prod-09',
    name: 'Emerald Green Asymmetric Draped Kurta Set',
    category: 'Kurta Set',
    gender: 'Men',
    rentalPrice3Days: 999,
    rentalPrice7Days: 1699,
    rentalPrice10Days: 2099,
    retailPrice: 19500,
    securityDeposit: 1200,
    sizes: ['S', 'M', 'L', 'XL'],
    color: 'Forest Emerald Green',
    fabric: 'Lustrous Silk Crepe with Churidar',
    occasions: ['Sangeet', 'Haldi', 'Festivities', 'College Function'],
    description: 'Modern asymmetric wrap kurta featuring tonal thread work along the collar and diagonal hemline, paired with stretch churidar pants.',
    careInfo: [
      'Antimicrobial dry wash',
      'Precision ironed collar',
      'Ready to wear packaging'
    ],
    images: [
      'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1000&q=80'
    ],
    videoPreviewUrl: 'https://assets.mixkit.co/videos/preview/mixkit-young-man-in-traditional-attire-dancing-celebrating-41777-large.mp4',
    rating: 4.7,
    reviewCount: 19,
    hygieneBadges: ['Microbially Disinfected', 'Steam Ironed', 'Zero-Contact Packaging'],
    isFeatured: false,
    isPopular: true,
    existingBookings: []
  },
  {
    id: 'prod-10',
    name: 'Sapphire Blue Indo-Western Slit Cape & Palazzo',
    category: 'Indo-Western',
    gender: 'Women',
    rentalPrice3Days: 1499,
    rentalPrice7Days: 2399,
    rentalPrice10Days: 2999,
    retailPrice: 27000,
    securityDeposit: 1800,
    sizes: ['S', 'M', 'L', 'XL'],
    color: 'Sapphire Royal Blue',
    fabric: 'Georgette Cape with Silk Crop Top & Palazzo',
    occasions: ['Cocktail Party', 'Sangeet', 'College Function', 'Corporate Gala'],
    description: 'Contemporary 3-piece indo-western ensemble with an embroidered sweetheart bustier, wide-leg satin palazzo, and a flowing sheer floor cape.',
    careInfo: [
      'Cleaned with eco-friendly organic solvents',
      'Packaged in breathable garment cover',
      'Return inside the prepaid reverse logistics bag'
    ],
    images: [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80'
    ],
    videoPreviewUrl: 'https://assets.mixkit.co/videos/preview/mixkit-indian-bride-dressed-in-traditional-costume-41680-large.mp4',
    rating: 4.8,
    reviewCount: 22,
    hygieneBadges: ['Microbially Disinfected', 'Steam Ironed', 'Quality Checked'],
    isFeatured: true,
    isPopular: false,
    existingBookings: []
  },
  {
    id: 'prod-11',
    name: 'Italian Charcoal Wool 3-Piece Peak Tuxedo',
    category: 'Blazer & Tuxedo',
    gender: 'Men',
    rentalPrice3Days: 1799,
    rentalPrice7Days: 2999,
    rentalPrice10Days: 3699,
    retailPrice: 44000,
    securityDeposit: 2500,
    sizes: ['38R (M)', '40R (L)', '42R (XL)', '44R (XXL)'],
    color: 'Charcoal Grey with Satin Lapels',
    fabric: 'Super 120s Italian Merino Wool Blend',
    occasions: ['Corporate Gala', 'Cocktail Party', 'Pre-Wedding Shoot', 'Wedding'],
    description: 'Distinguished 3-piece tuxedo comprising a single-button peak lapel jacket, double-breasted horseshoe waistcoat, and tailored flat-front trousers.',
    careInfo: [
      'Dry-cleaned by master suit technicians',
      'Comes with bow tie and mother-of-pearl cufflinks',
      'Steam pressed and contoured on molded hanger'
    ],
    images: [
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=1000&q=80'
    ],
    videoPreviewUrl: 'https://assets.mixkit.co/videos/preview/mixkit-young-man-in-traditional-attire-dancing-celebrating-41777-large.mp4',
    rating: 4.9,
    reviewCount: 34,
    hygieneBadges: ['Disinfected', 'Steam Ironed', 'Cuff & Collar Protection'],
    isFeatured: false,
    isPopular: true,
    existingBookings: []
  },
  {
    id: 'prod-12',
    name: 'Mustard Silk Mirror-Embellished Bundi Jacket Set',
    category: 'Kurta Set',
    gender: 'Men',
    rentalPrice3Days: 1099,
    rentalPrice7Days: 1799,
    rentalPrice10Days: 2299,
    retailPrice: 21000,
    securityDeposit: 1400,
    sizes: ['S', 'M', 'L', 'XL'],
    color: 'Mustard & Off-White',
    fabric: 'Raw Silk Bundi with Cotton Silk Kurta Pajama',
    occasions: ['Haldi', 'Sangeet', 'Festivities', 'College Function'],
    description: 'Vibrant sleeveless Nehru jacket decorated with authentic mirror-work geometry, worn over a pristine ivory kurta and churidar.',
    careInfo: [
      'Disinfected after every event',
      'Tested for loose mirrors before dispatch',
      'Delivered in compact travel cover'
    ],
    images: [
      'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=80'
    ],
    videoPreviewUrl: 'https://assets.mixkit.co/videos/preview/mixkit-young-man-in-traditional-attire-dancing-celebrating-41777-large.mp4',
    rating: 4.8,
    reviewCount: 28,
    hygieneBadges: ['Microbially Disinfected', 'Steam Ironed', 'Safe For Sensitive Skin'],
    isFeatured: false,
    isPopular: false,
    existingBookings: []
  },
  {
    id: 'prod-13',
    name: 'Pastel Lilac Ruffle Pre-Draped Saree',
    category: 'Saree',
    gender: 'Women',
    rentalPrice3Days: 1399,
    rentalPrice7Days: 2199,
    rentalPrice10Days: 2799,
    retailPrice: 24000,
    securityDeposit: 1500,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    color: 'Pastel Lilac & Silver',
    fabric: 'Pleated Chiffon & Satin Lycra',
    occasions: ['Cocktail Party', 'College Function', 'Pre-Wedding Shoot', 'Sangeet'],
    description: 'Instant 1-minute pre-stitched cocktail saree with cascading tier ruffles, an embellished metallic belt, and a statement designer blouse.',
    careInfo: [
      'Pleat-locked steam ironing process',
      'Packaged without compression to retain flounces',
      'Disinfected prior to sealing'
    ],
    images: [
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80'
    ],
    videoPreviewUrl: 'https://assets.mixkit.co/videos/preview/mixkit-indian-bride-dressed-in-traditional-costume-41680-large.mp4',
    rating: 4.9,
    reviewCount: 33,
    hygieneBadges: ['Microbially Disinfected', 'Steam Ironed', 'Ready-to-Wear Guaranteed'],
    isFeatured: true,
    isPopular: true,
    existingBookings: []
  },
  {
    id: 'prod-14',
    name: 'Royal Kundan & Polki Bridal Jewellery Choker Set',
    category: 'Accessories',
    gender: 'Women',
    rentalPrice3Days: 699,
    rentalPrice7Days: 1099,
    rentalPrice10Days: 1499,
    retailPrice: 18000,
    securityDeposit: 1000,
    sizes: ['Free Size'],
    color: 'Antique Gold & Pearl',
    fabric: '22K Gold Plated Brass, Kundan Stones, Green Emerald Beads',
    occasions: ['Wedding', 'Sangeet', 'Festivities'],
    description: 'Handcrafted royal Rajasthani bridal choker set with matching oversized jhumkas and a delicate maang tikka. Sanitized in UV ultrasonic baths.',
    careInfo: [
      'Ultrasonically disinfected & UV sterilized',
      'Store in provided velvet cushioned jewel box',
      'Keep away from sprays and perfumes'
    ],
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1611591475155-42e929a2e261?auto=format&fit=crop&w=1000&q=80'
    ],
    videoPreviewUrl: '',
    rating: 4.8,
    reviewCount: 17,
    hygieneBadges: ['Ultrasonically Cleaned', 'UV-C Sterilized', 'Hypoallergenic Plating'],
    isFeatured: false,
    isPopular: false,
    existingBookings: []
  },
  {
    id: 'prod-15',
    name: 'Groom Embroidered Raw Silk Safa & Kalgi Brooch',
    category: 'Accessories',
    gender: 'Men',
    rentalPrice3Days: 599,
    rentalPrice7Days: 899,
    rentalPrice10Days: 1199,
    retailPrice: 12000,
    securityDeposit: 800,
    sizes: ['Free Size'],
    color: 'Blush Peach & Antique Gold',
    fabric: 'Chanderi Silk with Kundan Stone Kalgi',
    occasions: ['Wedding', 'Pre-Wedding Shoot'],
    description: 'Pre-tied traditional Rajasthani groom turban embellished with delicate gold borders, accompanied by an antique emerald and kundan kalgi feather brooch.',
    careInfo: [
      'Interior sweat-band sanitized with antibacterial mist',
      'Packed in hard-shell circular box to preserve shape',
      'Return inside the provided protective container'
    ],
    images: [
      'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=80'
    ],
    videoPreviewUrl: '',
    rating: 4.7,
    reviewCount: 14,
    hygieneBadges: ['Antibacterial Fogged', 'UV-C Treated', 'Shape-Safe Packing'],
    isFeatured: false,
    isPopular: false,
    existingBookings: []
  },
  {
    id: 'prod-16',
    name: 'Navy Blue Contemporary Asymmetric Indo-Western Achkan',
    category: 'Indo-Western',
    gender: 'Men',
    rentalPrice3Days: 1699,
    rentalPrice7Days: 2699,
    rentalPrice10Days: 3399,
    retailPrice: 36000,
    securityDeposit: 2200,
    sizes: ['M', 'L', 'XL'],
    color: 'Midnight Navy Blue',
    fabric: 'Italian Poly-Viscose with Silk Flaps',
    occasions: ['Sangeet', 'Cocktail Party', 'Corporate Gala', 'Pre-Wedding Shoot'],
    description: 'Architectural silhouette achkan with side-button placket, contrast satin collar, and pleated hemline. Worn over slim tapered trousers.',
    careInfo: [
      'Disinfected and steam pressed',
      'Packed with anti-crease tissue inside sleeves',
      'Return in garment travel carrier'
    ],
    images: [
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=1000&q=80'
    ],
    videoPreviewUrl: 'https://assets.mixkit.co/videos/preview/mixkit-young-man-in-traditional-attire-dancing-celebrating-41777-large.mp4',
    rating: 4.8,
    reviewCount: 27,
    hygieneBadges: ['Microbially Disinfected', 'Steam Ironed', 'Zero-Odor Cleaned'],
    isFeatured: true,
    isPopular: true,
    existingBookings: []
  }
];
