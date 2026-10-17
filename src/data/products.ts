export interface Product {
    slug: string;
    name: string;
    category: string;
    logo: string;
    tagline: string;
    description: string;
    website: string;
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
];
