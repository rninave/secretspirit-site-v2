import { notFound } from 'next/navigation'
import projects from '@/data/projects.json'
import AppBreadcrumb from '@/components/common/AppBreadcrumb'
import Image from 'next/image'
import UnderDevelopment from '@/components/common/UnderDevelopment'
import { Layers, Boxes, Building2, CalendarDays, Link2, ArrowUpRight } from 'lucide-react'

export function getFontWeight(weight: string) {
    const map: any = {
        Bold: 700,
        SemiBold: 600,
        Regular: 400,
        Medium: 500,
        Light: 300,
        Thin: 100,
    };

    return map[weight] ?? 400; // fallback Regular
}

function ListOrText({ value }: { value: string | string[] | undefined }) {
    if (!value) return <p className="text-body text-sm md:text-lg leading-8 font-body">-</p>

    if (Array.isArray(value)) {
        if (value.length === 1) {
            return <p className="text-body text-sm md:text-lg leading-8 font-body">{value[0]}</p>
        }
        return (
            <ul className="list-none space-y-4">
                {value.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                        <p className="text-body text-sm md:text-lg leading-8 font-body">{item}</p>
                    </li>
                ))}
            </ul>
        )
    }

    return <p className="text-body text-sm md:text-lg leading-8 font-body">{value}</p>
}

export default async function WorkDetails({
    params
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    const project = projects.find((p) => p.slug === slug)

    if (!project) return notFound()

    const { details } = project

    // if details object is missing or empty, show under-development page
    if (!details || (typeof details === 'object' && Object.keys(details).length === 0)) {
        return <UnderDevelopment returnUrl={{ name: 'Home', href: '/' }} />
    }

    const metaRows = [
        { label: 'Type', value: details.type, icon: Layers },
        { label: 'Segment', value: details.segment, icon: Boxes },
        { label: 'Industry', value: details.industry, icon: Building2 },
        { label: 'Year', value: details.year, icon: CalendarDays },
    ].filter((row) => row.value)

    return (
        <section className="bg-white">
            {/* CreativeWork JSON-LD for project */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "CreativeWork",
                        name: project.title,
                        description: project.description || details?.subtitle || '',
                        image: [(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000') + (project.mainImage || '/og-image.png')],
                        url: (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000') + '/work/' + project.slug,
                        datePublished: details?.year ? String(details.year) : undefined,
                        about: details?.type || undefined,
                    }),
                }}
            />
            {/* BreadcrumbList JSON-LD for project */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        itemListElement: [
                            { "@type": "ListItem", position: 1, name: "Home", item: (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000') },
                            { "@type": "ListItem", position: 2, name: "Work", item: (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000') + '/work' },
                            { "@type": "ListItem", position: 3, name: project.title, item: (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000') + '/work/' + project.slug }
                        ]
                    })
                }}
            />

            {/* Hero */}
            <div className="max-w-7xl mx-auto pt-10 md:pt-16 pb-10 md:pb-16 px-4 md:px-8">
                <AppBreadcrumb
                    className="flex justify-start mb-10 md:mb-16"
                    textClassName="text-body"
                    items={[
                        { label: 'HOME', href: '/' },
                        { label: 'WORK', href: '/work' },
                        { label: 'WORK DETAIL' },
                    ]}
                />
                <span className="inline-block text-primary text-xs md:text-sm font-bold tracking-[0.25em] uppercase mb-4 font-heading">
                    Case Study
                </span>
                <h1 className="text-3xl md:text-[42px] text-heading font-bold mb-6 md:mb-8 font-heading">
                    {project.title || '-'}
                </h1>
                <h2 className="text-lg md:text-[28px] font-bold text-heading mb-4 font-heading max-w-4xl">
                    {details.subtitle || '-'}
                </h2>
                <p className="text-body text-sm md:text-lg mb-8 leading-8 max-w-4xl font-body">
                    {details.text || '-'}
                </p>
                <div className="flex flex-wrap gap-2">
                    {project?.tags.map((tag, i) => (
                        <span
                            key={i}
                            className={`bg-white border border-divider ${i === 0 ? 'text-primary' : 'text-body'
                                } text-[8px] md:text-xs font-heading font-bold px-3 py-2 rounded-full shadow-sm`}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Project Main Image */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 mb-4">
                <div className="rounded-2xl md:rounded-[32px] overflow-hidden border border-divider bg-gray-light shadow-[0px_25px_60px_-20px_rgba(19,17,49,0.18)]">
                    <Image
                        src={project.mainImage}
                        alt={project.title}
                        width={1400}
                        height={800}
                        className="w-full h-auto"
                    />
                </div>
            </div>

            {/* Dynamic Detail Section (below image) */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 lg:py-8 flex md:flex-row flex-col gap-8 md:gap-15">
                {/* Left Side - Meta Panel */}
                <div className="w-full md:w-1/3">
                    <div className="md:sticky md:top-24 bg-gray-light border border-divider rounded-2xl md:rounded-3xl p-6 md:p-8 space-y-6 divide-y divide-divider/60">
                        {metaRows.map(({ label, value, icon: Icon }, i) => (
                            <div key={label} className={i === 0 ? '' : 'pt-6'}>
                                <div className="flex items-center gap-2 mb-2">
                                    <Icon className="w-4 h-4 text-primary" strokeWidth={2.5} />
                                    <h4 className="text-xs md:text-sm font-bold text-body uppercase tracking-wider font-heading">
                                        {label}
                                    </h4>
                                </div>
                                <p className="font-semibold text-heading text-sm md:text-lg font-body">{value}</p>
                            </div>
                        ))}
                        {details.website && (
                            <div className="pt-6">
                                <div className="flex items-center gap-2 mb-2">
                                    <Link2 className="w-4 h-4 text-primary" strokeWidth={2.5} />
                                    <h4 className="text-xs md:text-sm font-bold text-body uppercase tracking-wider font-heading">
                                        Website
                                    </h4>
                                </div>
                                <a
                                    href={details.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 font-semibold text-primary text-sm md:text-lg font-body break-all hover:underline"
                                >
                                    {details.website.replace(/^https?:\/\//, '')}
                                    <ArrowUpRight className="w-4 h-4 flex-shrink-0" strokeWidth={2.5} />
                                </a>
                            </div>
                        )}
                        {details.appLink && (
                            <div className="pt-6">
                                <div className="flex items-center gap-2 mb-2">
                                    <Link2 className="w-4 h-4 text-primary" strokeWidth={2.5} />
                                    <h4 className="text-xs md:text-sm font-bold text-body uppercase tracking-wider font-heading">
                                        App Store
                                    </h4>
                                </div>
                                <a
                                    href={details.appLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 font-semibold text-primary text-sm md:text-lg font-body break-all hover:underline"
                                >
                                    Play Store App
                                    <ArrowUpRight className="w-4 h-4 flex-shrink-0" strokeWidth={2.5} />
                                </a>
                            </div>
                        )}
                    </div>
                </div>

                {/* Right Side */}
                <div className="w-full md:w-2/3 space-y-6">
                    <div className="bg-white border border-divider rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-sm">
                        <h3 className="font-bold text-xl md:text-[28px] text-heading font-heading mb-4">
                            Problem Statement
                        </h3>
                        <ListOrText value={details.problem} />
                    </div>
                    <div className="bg-white border border-divider rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-sm">
                        <h3 className="font-bold text-xl md:text-[28px] text-heading font-heading mb-4">
                            Possible Solutions
                        </h3>
                        <ListOrText value={details.solution} />
                    </div>
                </div>
            </div>

            {/* Typography Section */}
            {details?.typography && (
                <div className="max-w-7xl mx-auto py-4 lg:py-8 px-4 md:px-8">
                    <div className="bg-gray-light border border-divider rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-12">
                        <span className="inline-block text-primary text-xs md:text-sm font-bold tracking-[0.25em] uppercase mb-3 font-heading">
                            Typefaces
                        </span>
                        <h3 className="text-xl md:text-[32px] font-bold text-heading font-heading mb-8">
                            Typography - <span className="text-primary">{details.typography.fontName}</span>
                        </h3>

                        <div className="flex flex-wrap gap-6">
                            {details.typography.weights.map((weight, i) => (
                                <div
                                    key={i}
                                    className="py-8 px-10 relative overflow-hidden border border-divider rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow flex-1 min-w-[240px]"
                                >
                                    <h4 className={`font-bold text-lg text-body mb-4 ${details.typography.tailwindFontClass}`}>{weight}</h4>
                                    <p
                                        className={`text-body mb-24 leading-[100%] tracking-[6px] text-sm break-all ${details.typography.tailwindFontClass}`}
                                        style={{ fontWeight: getFontWeight(weight) }}
                                    >
                                        ABCDEFGHIJKLMNOPQRSTUVWXYZ
                                    </p>
                                    <p
                                        className={`text-[130px] absolute -bottom-4 -right-4 text-light-primary font-bold leading-[100%] ${details.typography.tailwindFontClass}`}
                                        style={{ fontWeight: getFontWeight(weight) }}
                                    >
                                        Aa
                                    </p>
                                </div>
                            ))}
                        </div>

                        {details?.secondaryTypography && (
                            <div className="mt-10">
                                <span className="inline-block bg-white border border-divider text-body text-[10px] md:text-xs font-heading font-bold px-3 py-1.5 rounded-full mb-4">
                                    {details.secondaryTypography.role || 'Secondary Typeface'}
                                </span>
                                <div className="flex flex-wrap gap-4">
                                    {details.secondaryTypography.weights.map((weight, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center gap-4 rounded-2xl border border-divider bg-white px-6 py-4 shadow-sm"
                                        >
                                            <span className={`text-3xl text-primary font-bold ${details.secondaryTypography.tailwindFontClass}`}>
                                                Aa
                                            </span>
                                            <div>
                                                <p className="text-sm font-bold text-heading font-heading">{details.secondaryTypography.fontName}</p>
                                                <p className="text-xs text-body font-body">{weight}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Colors Used Section */}
            {details?.colors && details.colors.length > 0 && (
                <div className="max-w-7xl mx-auto py-4 lg:py-8 px-4 md:px-8">
                    <div className="bg-white border border-divider rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-12 shadow-sm">
                        <span className="inline-block text-primary text-xs md:text-sm font-bold tracking-[0.25em] uppercase mb-3 font-heading">
                            Palette
                        </span>
                        <h3 className="text-xl md:text-[32px] font-bold text-heading font-heading mb-8">
                            Colors Used
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {details.colors.map((color, i) => (
                                <div
                                    key={i}
                                    className="rounded-2xl p-4 border border-divider shadow-sm bg-white hover:shadow-md transition-shadow"
                                >
                                    <h4 className="font-semibold text-sm text-black mb-4">{color.name}</h4>

                                    {/* Main Color Box */}
                                    <div
                                        className="w-full h-12 rounded-lg mb-4 flex items-center justify-center text-white text-sm font-semibold"
                                        style={{ backgroundColor: color.base }}
                                    >
                                        {color.base}
                                    </div>

                                    {/* Gradient Shades */}
                                    <div className="flex flex-col overflow-hidden rounded-lg">
                                        {[0.9, 0.7, 0.5, 0.3, 0.1].map((opacity, j) => (
                                            <div
                                                key={j}
                                                className="w-full h-8"
                                                style={{ backgroundColor: color.base, opacity }}
                                            ></div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Showing The UI Layouts Section */}
            {details?.showUiLayouts !== false && (
                <div className="max-w-7xl mx-auto py-4 lg:py-8 px-4 md:px-8">
                    <div className="bg-gray-light border border-divider rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-12">
                        <span className="inline-block text-primary text-xs md:text-sm font-bold tracking-[0.25em] uppercase mb-3 font-heading">
                            Gallery
                        </span>
                        <h3 className="text-xl md:text-[32px] font-bold text-heading font-heading mb-10">
                            Showing The UI Layouts
                        </h3>

                        {(() => {
                            const layoutImages = project.images?.length ? project.images : [project.mainImage]

                            return (
                                <div className="flex flex-col items-center gap-8 max-w-3xl mx-auto">
                                    {layoutImages.map((img, i) => (
                                        <div
                                            key={i}
                                            className="w-full rounded-2xl overflow-hidden border border-divider bg-white shadow-[0px_20px_45px_-20px_rgba(19,17,49,0.15)]"
                                        >
                                            <Image
                                                src={img}
                                                alt={project.title}
                                                width={800}
                                                height={514}
                                                className="object-cover w-full h-auto"
                                            />
                                        </div>
                                    ))}
                                </div>
                            )
                        })()}
                    </div>
                </div>
            )}
        </section>
    )
}
