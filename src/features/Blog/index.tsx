import PageHero from "@/components/common/PageHero";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import BlogListSection from "./blogList";

export default function BlogPage() {
    return (
        <>
            <ScrollProgress className="top-[76px]" />
            <PageHero
                title="Tech Insights"
                bgImage="/heros/blog-hero.jpg"
                overlayColor="opacity-[0.90]"
                bgstyle="linear-gradient(123.99deg, #181616 5.78%, #131131 45.6%, #181616 81.77%)"
                breadcrumbItems={[{ label: 'HOME', href: '/' }, { label: 'BLOG' }]}
                subtitle="Dive into our IT blog for the latest tech trends, expert analysis, and innovative solutions. Stay informed and inspired by the world of technology."
            />
            <BlogListSection />
        </>
    )
}