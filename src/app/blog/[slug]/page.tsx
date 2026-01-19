import BlogDetails from "@/features/Blog/blog-details";
import blogs from '@/data/blogs.json'

const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/+$/, '');

export function generateStaticParams() {
  return (blogs as any[]).map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = (blogs as any[]).find((b) => b.slug === slug);
  if (!blog) return {};

  const url = `${baseUrl}/blog/${blog.slug}`;

  return {
    title: `${blog.title} | Secretspirit Blog`,
    description: blog.excerpt || undefined,
    openGraph: {
      title: `${blog.title} | Secretspirit Blog`,
      description: blog.excerpt,
      url,
      images: [
        {
          url: `${baseUrl}${blog.image || '/og-image.png'}`,
          width: 1200,
          height: 630,
        },
      ],
      type: 'article',
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function BlogDetailsPage({
  params
}: {
  params: Promise<{ slug: string }>
  
}) {

  return <BlogDetails params={params} />;
}
