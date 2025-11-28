import blogs from "@/data/blogs.json";
import { notFound } from "next/navigation";

export default async function BlogDetails({
    params
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params;
    console.log(slug);
    
    const blog = blogs.find((p) => p.slug === slug)

    if (!blog) return notFound()

    const { details } = blog

    return (
        <>
        {details}
        </>
    )
}