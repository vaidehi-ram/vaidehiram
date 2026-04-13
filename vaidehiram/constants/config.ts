/**
 * Edit this file to update all marketing copy, compliance statuses, and contact details.
 * Status values drive badge colours on the trust bar (Pending vs Completed).
 */

export type TrustStatus = 'Pending' | 'Completed' | 'N/A' | 'If applicable';

export const business = {
  /** Shown in footer and hero accent */
  shortName: 'Vaidehi Ramakrishnan',
  /** Formal or full business name if different */
  legalName: 'Vaidehi Ramakrishnan',
  tagline: 'Every child is a story yet to be told — I love being part of that story.',
  /** General area (no full address required on public site) */
  area: 'Kildare area',
} as const;

export const contact = {
  email: 'vaidehiram23@gmail.com',
  phone: '+353874453433',
  /** Optional WhatsApp link (https://wa.me/353...) — leave empty string to hide */
  whatsappUrl: '',
  /** Instagram profile URL — leave empty to hide */
  instagramUrl: '',
} as const;

/**
 * Public site URL (canonical + Open Graph). Use your custom domain on GitHub Pages,
 * not the *.github.io project URL, or link previews will show the GitHub address.
 */
export const site = {
  canonicalBaseUrl: 'https://vaidehiram.com',
} as const;

export const seo = {
  title: `${business.shortName} | Childminder in ${business.area}`,
  description: `${business.shortName}: nurturing childminding with clear routines, outdoor play, and open communication. ${business.area}.`,
  /** Optional absolute image URL for social previews */
  ogImageUrl: '',
} as const;

/**
 * Profile — shown in the big “Meet your childminder” spotlight under the hero.
 *
 * - `local` — put your portrait at `assets/images/profile.png` (JPG/PNG both work; swap the file, keep the name)
 * - `remote` — set `remoteUrl` to a full `https://…` link
 * - `none` — no image; a colourful friendly placeholder appears instead (great while you sort a photo)
 */
export const profilePhoto = {
  mode: 'local' as 'none' | 'local' | 'remote',
  remoteUrl: '',
  /** First name or how you sign off — appears large next to the photo */
  displayName: 'Vaidehi',
  /** Line under the name */
  roleLabel: 'Childminder · I come to your home · Early years',
  /** Short colourful tags (emoji optional) — edit freely */
  funTags: ['🧸 Play & creativity', '🌳 Outdoor time', '📚 Stories & songs'] as const,
  /** Accessibility & SEO description of the image */
  alt: 'Portrait of the childminder',
  /** Caption under photo in spotlight (leave '' to hide) */
  caption: 'Nice to meet you!',
  /** Shown under the role line when there is no photo (`mode: none` or missing remote URL) */
  noPhotoHint:
    'Add your portrait: keep `mode: local` and replace `assets/images/profile.png`, or switch to `remote` with an https image link.',
} as const;

export const hero = {
  headline: 'Calm, joyful days for little learners',
  subline:
    'I come to your home — so your little one stays in their own familiar space, with their own toys and routines. Gentle structure, outdoor play, and open partnership with families. Spaces limited — say hello to check availability.',
  primaryCtaLabel: 'Contact me',
  /** Shown under the main button */
  ctaHint: 'Usually replies within one business day',
} as const;

export const trustBadges: {
  id: string;
  label: string;
  status: TrustStatus;
  detail?: string;
}[] = [
    {
      id: 'garda',
      label: 'Garda Vetting',
      status: 'Pending',
      detail: 'In progress',
    },
    {
      id: 'first-aid',
      label: 'Paediatric First Aid',
      status: 'Pending',
      detail: 'In progress',
    },
    {
      id: 'tusla',
      label: 'Tusla Registration',
      status: 'Pending',
      detail: 'In progress',
    },
  ];

export const about = {
  eyebrow: 'Meet me',
  sectionTitle: 'Why I love childminding',
  paragraphs: [
    '',
  ],
  pullQuote:
    'Children remind us to notice the small wonders—a robin in the garden, the first successful pour from a jug, a new friendship over shared blocks. Supporting those moments in a calm, predictable environment is what drew me to childminding. My journey into children\'s worlds began when I had my son — he is six now. Watching him grow day by day had such a profound impact on me that I felt I was growing alongside him. It was through him that I truly discovered what inner joy feels like.',
  philosophyCard: {
    emoji: '🌱',
    heading: 'Why quality childminding matters',
    pillars: [
      { icon: '😊', label: 'Happy', detail: 'A child who feels secure is a child ready to thrive.' },
      { icon: '🎨', label: 'Creative play', detail: 'Open-ended play builds curiosity, problem-solving, and imagination.' },
      { icon: '🔍', label: 'Explore', detail: 'Little discoveries — indoors and out — shape big thinkers.' },
      { icon: '🌟', label: 'Grow', detail: 'Every kind word and gentle nudge helps a child become their best self.' },
    ],
    closing:
      'Quality childminding is more than care — it is about creating a nurturing space where every child feels seen, valued, and free to become who they are meant to be.',
  },
} as const;

export const trustSection = {
  eyebrow: 'Credentials',
  title: 'Peace of mind',
  subtitle: 'Clear, honest status on the qualifications families ask about first.',
} as const;

export const testimonialsSection = {
  eyebrow: 'Families',
  title: 'Kind words from families',
  noteDesktop: 'Hear what families who know Vaidehi have to say.',
  noteMobile: 'Swipe to read more kind words from families.',
} as const;

export const faqSection = {
  eyebrow: 'FAQ',
  title: 'Questions parents ask',
} as const;

export const faq = [
  {
    question: 'What ages do you take?',
    answer:
      'Typically early years; enquiries welcome so we can confirm fit based on current ratios and registration.',
  },
  {
    question: 'What are your hours?',
    answer:
      'Core hours are agreed per family—share your schedule when you get in touch and we can see if it works.',
  },
  {
    question: 'Do you offer part-time places?',
    answer:
      'Yes, when available. Part-time contracts depend on how sessions align with other families.',
  },
  {
    question: 'How do you handle settling in?',
    answer:
      'Gradual settling with short visits where possible, clear handover notes, and open communication so your child feels secure.',
  },
] as const;

export const footer = {
  note: `© ${new Date().getFullYear()} ${business.legalName}. All rights reserved.`,
  contactHeading: 'Get in touch',
} as const;
