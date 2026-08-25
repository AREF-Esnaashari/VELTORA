// اسکلت لودینگ که تا رسیدن دیتای واقعی از API نمایش داده میشه
export default function ProductCardSkeleton() {
  return (
    <div className="relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-3 shadow-lg shadow-black/30 backdrop-blur-xl">
      <div className="aspect-square animate-pulse rounded-2xl bg-gradient-to-br from-white/[0.07] to-white/[0.03]" />
      <div className="flex grow flex-col px-1 pt-4">
        <div className="h-4 w-2/3 animate-pulse rounded-lg bg-white/[0.08]" />
        <div className="flex items-end justify-between pt-3 pb-4">
          <div className="h-3 w-8 animate-pulse rounded bg-white/[0.06]" />
          <div className="h-5 w-24 animate-pulse rounded-lg bg-[#EF9F27]/15" />
        </div>
        <div className="h-11 w-full animate-pulse rounded-xl bg-white/[0.08]" />
      </div>
    </div>
  );
}
