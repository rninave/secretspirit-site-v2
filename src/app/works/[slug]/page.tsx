import WorkDetails from '@/features/Works/work-details'

export default async function ProjectDetailsPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  return <WorkDetails params={params} />;
}
