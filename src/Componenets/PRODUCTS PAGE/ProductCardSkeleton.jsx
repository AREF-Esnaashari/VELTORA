// اسکلت لودینگ که تا رسیدن دیتای واقعی از API نمایش داده میشه
export default function ProductCardSkeleton() {
  return (
    <div className="rounded-2xl bg-[#1c1c1c] p-3">
      <div className="aspect-square animate-pulse rounded-xl bg-[#262626]" />
      <div className="px-1 pt-4">
        <div className="h-4 w-2/3 animate-pulse rounded bg-[#262626]" />
        <div className="mt-3 h-4 w-1/2 animate-pulse rounded bg-[#262626]" />
        <div className="mt-3 h-9 w-full animate-pulse rounded-lg bg-[#262626]" />
      </div>
    </div>
  );
}
