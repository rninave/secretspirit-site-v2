import { notFound } from 'next/navigation'
import projects from '@/data/projects.json'
import AppBreadcrumb from '@/components/common/AppBreadcrumb'
import Image from 'next/image'

interface Params {
    params: { slug: string }
}


export default async function WorkDetails({ params }: Params) {
    const { slug } = await params // ✅ await this

    const project = projects.find(p => p.slug === slug)

    if (!project) return notFound()

    return (
        <section className="bg-white ">
            <div className='max-w-7xl mx-auto py-12 md:py-15 px-4 md:px-8'>
                <AppBreadcrumb className='flex justify-start pb-20' textClassName='text-body' items={[{ label: 'HOME', href: '/' }, { label: 'WORKS', href: '/works' }, { label: "WORK DETAIL" }]} />
                <h1 className="text-[42px] text-heading font-bold mb-10 font-heading">{project.title || '-'}</h1>
                <h2 className="text-[32px] font-bold text-heading mb-4 font-heading ">{project.details.subtitle || '-'}</h2>
                <p className="text-body text-lg mb-4 leading-8 max-w-4xl font-body">{project.details.text || '-'}</p>
                <div className="flex flex-wrap gap-2 mb-20">
                    {project?.tags.map((tag, i) => (
                        <span
                            key={i}
                            className={`bg-white border border-divider ${i === 0 ? 'text-primary' : 'text-body'} text-[8px] md:text-xs font-heading font-bold px-3 py-2 rounded-full shadow-md`}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
            <div className='max-w-7xl mx-auto'>
            <Image src={project.mainImage} alt={project.title} width={1400} height={800} className="w-full h-auto" />
            </div>
        </section>
    )
}