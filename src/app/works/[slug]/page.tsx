import { notFound } from 'next/navigation'
import  projects  from '@/data/projects.json'
import WorkDetails from '@/features/Works/work-details'

interface Params {
  params: { slug: string }
}

export default function ProjectDetailsPage({ params }: Params) {
  return <WorkDetails params={params} />;
}
