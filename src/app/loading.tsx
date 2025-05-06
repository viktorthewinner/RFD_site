import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="space-y-8 w-full max-w-4xl">
        <Skeleton className="h-32 w-full rounded-lg bg-primary/10" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Skeleton className="h-48 w-full rounded-lg bg-secondary" />
          <Skeleton className="h-48 w-full rounded-lg bg-secondary" />
          <Skeleton className="h-48 w-full rounded-lg bg-secondary" />
        </div>
        <Skeleton className="h-64 w-full rounded-lg bg-muted" />
      </div>
    </div>
  );
}
