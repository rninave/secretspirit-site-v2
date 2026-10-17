import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
    <div className="w-full h-[90vh] flex flex-col justify-center gap-4 max-w-7xl mx-auto animate-pulse px-4 py-10">
      {/* Subtitle */}
      <Skeleton className="mx-auto h-4 w-48 bg-primary-light rounded mb-6" />

      {/* Heading Line 1 */}
      <Skeleton className="mx-auto h-6 w-1/2 bg-primary-light rounded mb-4" />

      {/* Heading Line 2 */}
      <Skeleton className="mx-auto h-12 w-64 bg-primary-light rounded mb-8" />

      {/* Paragraph */}
      <Skeleton className="mx-auto h-4 w-3/4 bg-primary-light rounded mb-1" />
      <Skeleton className="mx-auto h-4 w-3/4 bg-primary-light rounded mb-1" />
      <Skeleton className="mx-auto h-4 w-1/2 bg-primary-light rounded mb-16" />
    </div>
  );
}
