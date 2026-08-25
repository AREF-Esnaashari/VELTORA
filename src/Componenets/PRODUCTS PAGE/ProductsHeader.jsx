export default function ProductsHeader() {
  return (
    <header className="flex flex-col items-center gap-5 pt-12 text-center">
      {/* برچسب کوچک بالای عنوان */}
      <span className="inline-flex items-center gap-2 rounded-full border border-[#EF9F27]/30 bg-[#EF9F27]/10 px-4 py-1.5 text-xs font-medium tracking-wide text-[#EF9F27] shadow-[0_0_20px_-5px_rgba(239,159,39,0.4)] backdrop-blur-md">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#EF9F27] shadow-[0_0_8px_#EF9F27]" />
        کالکشن اختصاصی Veltora
      </span>

      <div className="flex items-center justify-center gap-4 sm:gap-6">
        <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#EF9F27] sm:w-32" />
        <h1 className="bg-gradient-to-l from-white via-white to-[#EF9F27] bg-clip-text text-4xl font-extrabold whitespace-nowrap text-transparent drop-shadow-lg sm:text-6xl">
          محصولات ما
        </h1>
        <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#EF9F27] sm:w-32" />
      </div>

      <p className="max-w-md text-sm leading-relaxed text-neutral-400 sm:text-base">
        بهترین لپ‌تاپ‌ها و لوازم گیمینگ، دست‌چین‌شده با ضمانت اصالت و بهترین قیمت
      </p>
    </header>
  );
}
