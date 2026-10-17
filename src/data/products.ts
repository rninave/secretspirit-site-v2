export interface Product {
    slug: string;
    name: string;
    category: string;
    /** Omit when the product has no logo yet; the card shows the name instead */
    logo?: string;
    /** Height override for logos whose artwork isn't a wide wordmark (default h-6) */
    logoClassName?: string;
    tagline: string;
    description: string;
    website?: string;
    /** Coming-soon products render as a non-clickable card */
    comingSoon?: boolean;
}

export const products: Product[] = [
    {
        slug: 'secretuxd',
        name: 'SecretUXD',
        category: 'AI UX/UI Audit',
        logo: '/brands/secretuxd-logo.svg',
        tagline: 'Find the UX flaws before your users do.',
        description:
            'An AI-powered UX intelligence platform that audits live URLs, Figma files and screenshots against WCAG 2.2 AA, Nielsen’s 10 heuristics and the Laws of UX — then hands you the evidence and the fix.',
        website: 'https://www.secretuxd.com/',
    },
    {
        slug: 'sustystep',
        name: 'Sustystep',
        category: 'Household Services',
        logo: '/brands/sustystep-logo.svg',
        tagline: 'Trusted help for every home, a tap away.',
        description:
            'A household services platform that makes it simple to find, book and manage reliable help for everyday home needs — all in one place.',
        comingSoon: true,
    },
    {
        slug: 'ai-travel-guide',
        name: 'AI Travel Guide',
        category: 'AI Travel',
        tagline: 'Your personal travel guide, powered by AI.',
        description:
            'An AI travel companion that plans personalised itineraries, recommends places to see, stay and eat, and guides you on the go.',
        comingSoon: true,
    },
    {
        slug: 'stiqza',
        name: 'Stiqza',
        category: 'Custom Stickers',
        logo: '/brands/stiqza-logo.svg',
        logoClassName: 'h-12 -my-3',
        tagline: 'Custom stickers, made your way.',
        description:
            'A customised sticker solution to design, personalise and order stickers for brands, events, packaging and personal use.',
        comingSoon: true,
    },
];
