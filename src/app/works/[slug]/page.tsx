import WorkDetails from '@/features/Works/work-details'
import projects from '@/data/projects.json'

const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/+$/, '');

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = (projects as any[]).find((p) => p.slug === slug);
  if (!project) return {};

  const url = `${baseUrl}/works/${project.slug}`;

  return {
    title: project.title,
    description: project.description || undefined,
    openGraph: {
      title: project.title,
      description: project.description,
      url,
      images: [
        {
          url: `${baseUrl}${project.mainImage || '/og-image.png'}`,
          width: 1200,
          height: 630,
        },
      ],
      type: 'website',
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function ProjectDetailsPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  return <WorkDetails params={params} />;
}
