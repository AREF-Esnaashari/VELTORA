import { ClipboardCheck, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router';

const ExpertCertificateBanner = () => {
  return (
    <section className="w-full max-w-6xl mt-10 mx-auto px-4 py-6" dir="rtl">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 border border-neutral-700/60 p-6 md:p-8 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 group hover:border-amber-500/40 transition-all duration-300">
        {/* بخش سمت راست: آیکون و متن‌ها */}
        <div className="flex items-center gap-5 z-10">
          <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-neutral-800 border border-neutral-700 flex items-center justify-center text-amber-500 shadow-inner group-hover:scale-105 transition-transform duration-300">
            <ClipboardCheck className="w-9 h-9 stroke-[1.75]" />
          </div>

          <div className="flex flex-col gap-1">
            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
              شناسنامه کارشناسی تخصصی
            </h3>
            <p className="text-sm md:text-base text-neutral-400 font-medium">
              دیدن شناسنامه سلامت واقعی هر دستگاه
            </p>
          </div>
        </div>

        {/* بخش سمت چپ: دکمه اکشن */}
        <div className="z-10 w-full md:w-auto">
          <button className="w-full md:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-sm transition-all duration-200 shadow-lg shadow-amber-500/10 active:scale-95 cursor-pointer">
            <Link to="/commingsoon">مشاهده نمونه شناسنامه</Link>
            <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

        {/* افکت نور پس‌زمینه (Glow Effect) */}
        <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />
      </div>
    </section>
  );
};

export default ExpertCertificateBanner;
