import { Skeleton } from "@/components/ui/skeleton";

export default function TableLoader() {
  return (
    <div className="max-w-3xl flex flex-col items-center justify-center gap-4">
      <Skeleton className="w-full h-12" />
      <Skeleton className="w-full h-8" />
      <Skeleton className="w-full h-8" />
      <Skeleton className="w-full h-8" />
      <Skeleton className="w-full h-8" />
    </div>
  );
}
