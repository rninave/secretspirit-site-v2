import PageHero from "@/components/common/PageHero";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import blogs from "@/data/blogs.json";
import { notFound } from "next/navigation";
import BlogDetailsSection from "./blog-details";
import UnderDevelopment from '@/components/common/UnderDevelopment'

export default async function BlogDetails({
    params
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params;

    const blog = blogs.find((p) => p.slug === slug)

    if (!blog) return notFound()

    const blogInfo = blog

    // if details are missing or empty, show under-development page
    const details = blogInfo.details ?? []
    if (!Array.isArray(details) || details.length === 0) {
        return <UnderDevelopment returnUrl={{ name: 'Blog', href: '/blog' }} />
    }

    return (
        <>
            {/* JSON-LD Article schema for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        headline: blogInfo.title,
                        image: [(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000') + (blogInfo.image || '/og-image.png')],
                        datePublished: blogInfo.date ? new Date(blogInfo.date).toISOString() : undefined,
                        author: {
                            "@type": "Person",
                            name: "Secretspirit"
                        },
                        publisher: {
                            "@type": "Organization",
                            name: "Secretspirit",
                            logo: {
                                "@type": "ImageObject",
                                url: (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000') + '/logo.svg'
                            }
                        },
                        description: blogInfo.excerpt || ''
                    }),
                }}
            />
            {/* BreadcrumbList JSON-LD for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        itemListElement: [
                            {
                                "@type": "ListItem",
                                position: 1,
                                name: "Home",
                                item: (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000')
                            },
                            {
                                "@type": "ListItem",
                                position: 2,
                                name: "Blog",
                                item: (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000') + '/blog'
                            },
                            {
                                "@type": "ListItem",
                                position: 3,
                                name: blogInfo.title,
                                item: (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000') + '/blog/' + blogInfo.slug
                            }
                        ]
                    })
                }}
            />
            <ScrollProgress className="top-[76px]" />
            <PageHero
                title={blogInfo.title}
                bgImage="/heros/blog-detail-hero.png"
                overlayColor="opacity-[0.90]"
                date={blogInfo.date}
                align="left"
                bgstyle="linear-gradient(123.99deg, #181616 5.78%, #331C07 45.6%, #181616 81.77%)"
                breadcrumbItems={[{ label: 'HOME', href: '/' }, { label: 'BLOG', href: 'blog' }, {label: 'BLOG DETAIL'}]}
            />
            <BlogDetailsSection blog={blogInfo} />
        </>
    )
}