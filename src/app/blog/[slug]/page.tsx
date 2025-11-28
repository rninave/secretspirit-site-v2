import BlogDetails from "@/features/Blog/blog-details";

export default async function BlogDetailsPage({
  params
}: {
  params: Promise<{ slug: string }>
  
}) {

  return <BlogDetails params={params} />;
}
