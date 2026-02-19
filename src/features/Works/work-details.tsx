import { notFound } from 'next/navigation'
import projects from '@/data/projects.json'
import AppBreadcrumb from '@/components/common/AppBreadcrumb'
import Image from 'next/image'
import UnderDevelopment from '@/components/common/UnderDevelopment'

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
            <div className="max-w-7xl mx-auto py-12 md:py-15 px-4 md:px-8">
                <AppBreadcrumb
                    className="flex justify-start mb-10 md:mb-20"
                    textClassName="text-body"
                    items={[
                        { label: 'HOME', href: '/' },
                        { label: 'WORK', href: '/work' },
                        { label: 'WORK DETAIL' },
                    ]}
                />
                <h1 className="text-3xl md:text-[42px] text-heading font-bold mb-6 md:mb-10 font-heading">
                    {project.title || '-'}
                </h1>
                <h2 className="text-lg md:text-[32px] font-bold text-heading mb-4 font-heading">
                    {details.subtitle || '-'}
                </h2>
                <p className="text-body text-sm md:text-lg mb-4 leading-8 max-w-4xl font-body">
                    {details.text || '-'}
                </p>
                <div className="flex flex-wrap gap-2 mb-10 md:mb-20">
                    {project?.tags.map((tag, i) => (
                        <span
                            key={i}
                            className={`bg-white border border-divider ${i === 0 ? 'text-primary' : 'text-body'
                                } text-[8px] md:text-xs font-heading font-bold px-3 py-2 rounded-full shadow-md`}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Project Main Image */}
            <div className='max-w-xl mx-auto'>
                <Image
                    src={project.mainImage}
                    alt={project.title}
                    width={1400}
                    height={800}
                    className="w-full h-auto "
                />
            </div>

            {/* Dynamic Detail Section (below image) */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 lg:py-20 flex md:flex-row flex-col gap-8 md:gap-15">
                {/* Left Side */}
                <div className="w-full md:w-1/3 space-y-9 text-sm md:text-lg">
                    <div>
                        <h4 className="font-bold text-black font-heading mb-3">Type</h4>
                        <p className="font-normal text-body font-body">{details.type}</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-black font-heading mb-3">Segment</h4>
                        <p className="font-normal text-body font-body">{details.segment}</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-black font-heading mb-3">Industry</h4>
                        <p className="font-normal text-body font-body">{details.industry}</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-black font-heading mb-3">Year</h4>
                        <p className="font-normal text-body font-body">{details.year}</p>
                    </div>
                </div>

                {/* Right Side */}
                <div className="w-full md:w-2/3 space-y-9">
                    <div>
                        <h3 className="font-bold text-xl md:text-[32px] text-heading font-heading mb-4">
                            Problem Statement
                        </h3>
                        {Array.isArray(details.problem) ? (
                            details.problem.length === 1 ? (
                                <p className="text-body text-normal font-body text-sm md:text-lg leading-8">{details.problem[0]}</p>
                            ) : (
                                <ul className="list-none space-y-4">
                                    {details.problem.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <span className="w-2 h-2 rounded-full bg-primary mt-3 flex-shrink-0" />
                                            <p className="text-body text-normal font-body text-sm md:text-lg leading-8">{item}</p>
                                        </li>
                                    ))}
                                </ul>
                            )
                        ) : (
                            <p className="text-body text-normal font-body text-sm md:text-lg leading-8">{details.problem}</p>
                        )}
                    </div>
                    <div>
                        <h3 className="font-bold text-xl md:text-[32px] text-heading font-heading mb-4">
                            Possible Solutions
                        </h3>
                        {Array.isArray(details.solution) ? (
                            details.solution.length === 1 ? (
                                <p className="text-body text-normal font-body text-sm md:text-lg leading-8">{details.solution[0]}</p>
                            ) : (
                                <ul className="list-none space-y-4">
                                    {details.solution.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <span className="w-2 h-2 rounded-full bg-primary mt-3 flex-shrink-0" />
                                            <p className="text-body text-normal font-body text-sm md:text-lg leading-8">{item}</p>
                                        </li>
                                    ))}
                                </ul>
                            )
                        ) : (
                            <p className="text-body text-normal font-body text-sm md:text-lg leading-8">{details.solution}</p>
                        )}
                    </div>
                </div>
            </div>

            {/* Typography Section */}
            <div className="max-w-7xl mx-auto py-10 lg:py-20 px-8 flex gap-8 text-sm md:text-base">
                <div className='max-lg:hidden md:w-1/3 space-y-6'></div>

                <div className='w-full lg:w-2/3 space-y-10'>
                    <h3 className="text-xl md:text-[32px] font-bold text-heading font-heading mb-8">
                        Typography - <span className="text-primary text-xl md:text-2xl">{details?.typography?.fontName}</span>
                    </h3>

                    <div className="flex items-center justify-end sm:flex-row flex-col">
                        {details?.typography?.weights.map((weight, i) => (
                            <div
                                key={i}
                                className="py-8 px-10 relative overflow-hidden border border-divider"
                                style={{
                                    background: 'linear-gradient(71.28deg, #FFF9F8 -0.25%, #FFEEE9 92.6%)'
                                }}
                            >
                                <h4 className={`font-bold text-lg text-body mb-4 ${details.typography.tailwindFontClass}`}>{weight}</h4>
                                <p
                                    className={`text-body mb-24 leading-[100%] tracking-[6px] text-sm break-all ${details.typography.tailwindFontClass}`}
                                    style={{ fontWeight: getFontWeight(weight) }}
                                >
                                    ABCDEFGHIJKLMNOPQRSTUVWXYZ
                                </p>
                                <p
                                    className={`text-[130px] absolute -bottom-4 -right-4 text-orange-200 font-bold leading-[100%] ${details.typography.tailwindFontClass}`}
                                    style={{ fontWeight: getFontWeight(weight) }}
                                >
                                    Aa
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Colors Used Section */}
            <div className="max-w-7xl mx-auto py-10 lg:py-20 px-8 flex gap-8">
                {/* Left side empty for structure consistency */}
                <div className="max-lg:hidden md:w-1/3 space-y-6"></div>

                {/* Right side */}
                <div className="w-full lg:w-2/3 space-y-10">
                    <h3 className="text-xl md:text-[32px] font-bold text-heading font-heading mb-8">
                        Colors Used
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {details?.colors?.map((color, i) => (
                            <div
                                key={i}
                                className="rounded-xl p-4 border border-divider shadow-sm bg-white"
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
                                <div className="flex flex-col">
                                    {[0.9, 0.7, 0.5, 0.3, 0.1].map((opacity, j) => (
                                        <div
                                            key={j}
                                            className={`
                                                w-full h-8
                                                ${j === 0 ? "rounded-t-lg" : ""}
                                                ${j === 4 ? "rounded-b-lg" : ""}
                                            `}
                                            style={{ backgroundColor: color.base, opacity }}
                                        ></div>
                                    ))}
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Colors Used Section */}
            <div className="max-w-7xl mx-auto py-10 lg:py-20 px-8 flex gap-8">
                {/* Left side empty for structure consistency */}
                <div className="max-lg:hidden md:w-1/3 space-y-6"></div>

                {/* Right side */}
                <div className="w-full lg:w-2/3 space-y-10">
                    <h3 className="text-xl md:text-[32px] font-bold text-heading font-heading mb-8">
                        Showing The UI Layouts
                    </h3>

                    <div className="flex items-center justify-center overflow-hidden relative">
                        <Image src={project.mainImage} alt={project.title} width={275} height={177} className='object-cover rounded-lg absolute -left-28 max-h-64.25 z-10'/>
                        <Image src={project.mainImage} alt={project.title} width={400} height={257} className='object-cover rounded-lg max-h-64.25 z-20'/>
                        <Image src={project.mainImage} alt={project.title} width={275} height={177} className='object-cover rounded-lg absolute -right-28 max-h-64.25 z-10'/>
                    </div>
                </div>
            </div>


        </section>
    )
}
