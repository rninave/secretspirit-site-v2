import PageHero from "@/components/common/PageHero";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import blogs from "@/data/blogs.json";
import { notFound } from "next/navigation";
import BlogDetailsSection from "./blog-details";

export default async function BlogDetails({
    params
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params;
    console.log(slug);

    const blog = blogs.find((p) => p.slug === slug)

    if (!blog) return notFound()

    const blogInfo = blog

    return (
        <>
            <ScrollProgress className="top-[76px]" />
            <PageHero
                title={blogInfo.title}
                bgImage="/heros/blog-detail-hero.png"
                overlayColor="opacity-[0.90]"
                bgstyle="linear-gradient(123.99deg, #181616 5.78%, #331C07 45.6%, #181616 81.77%)"
                breadcrumbItems={[{ label: 'HOME', href: '/' }, { label: 'BLOG', href: 'blog' }, {label: 'BLOG DETAIL'}]}
            />
            <BlogDetailsSection blog={blogInfo} />
        </>
    )
}