/**
 * Edit this file to update all marketing copy, compliance statuses, and contact details.
 * Status values drive badge colours on the trust bar (Pending vs Completed).
 */

export type TrustStatus = 'Pending' | 'Completed' | 'N/A' | 'If applicable';

export const business = {
  /** Shown in footer and hero accent */
  shortName: 'Little Oak Childminding',
  /** Formal or full business name if different */
  legalName: 'Little Oak Childminding',
  tagline: 'Warm, reliable care in a home-from-home setting',
  /** General area (no full address required on public site) */
  area: 'Dublin area',
} as const;

export const contact = {
  email: 'hello@example.com',
  phone: '+353 00 000 0000',
  /** Optional WhatsApp link (https://wa.me/353...) — leave empty string to hide */
  whatsappUrl: '',
  /** Instagram profile URL — leave empty to hide */
  instagramUrl: '',
} as const;

/**
 * Replace with your live URL after deploy (used for Open Graph).
 * For GitHub Project Pages this is often https://<user>.github.io/<repo>/
 */
export const site = {
  canonicalBaseUrl: 'https://vaidehi-ram.github.io/vaidehiram',
} as const;

export const seo = {
  title: `${business.shortName} | Registered childminder in ${business.area}`,
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
  roleLabel: 'Childminder · Home-based care · Early years',
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
    'Home-based childminding with gentle structure, outdoor play, and partnership with families. Spaces limited—say hello to check availability.',
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
    detail: 'Application in progress',
  },
  {
    id: 'first-aid',
    label: 'Paediatric First Aid',
    status: 'Pending',
    detail: 'Course scheduled',
  },
  {
    id: 'tusla',
    label: 'Tusla Registered',
    status: 'If applicable',
    detail: 'Status per current registration',
  },
];

export const about = {
  eyebrow: 'Meet me',
  sectionTitle: 'Why I love childminding',
  paragraphs: [
    'Children remind us to notice the small wonders—a robin in the garden, the first successful pour from a jug, a new friendship over shared blocks. Supporting those moments in a calm, predictable environment is what drew me to childminding.',
    'I plan gentle rhythms for the day: time outdoors, shared meals, stories, and plenty of space for unstructured play. You will get honest updates and practical tips so we stay aligned on sleep, meals, and developmental leaps.',
    'Families trust me because I communicate early, listen well, and treat every child as an individual. I would love to meet you and learn how we can support your little one.',
  ],
} as const;

export const trustSection = {
  eyebrow: 'Credentials',
  title: 'Peace of mind',
  subtitle: 'Clear, honest status on the qualifications families ask about first.',
} as const;

export const testimonialsSection = {
  eyebrow: 'Families',
  title: 'Kind words from families',
  noteDesktop: 'Reviews are anonymised; replace with real testimonials when you are ready.',
  noteMobile: 'Swipe sideways to read more. Replace copy in `testimonials.json` anytime.',
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
