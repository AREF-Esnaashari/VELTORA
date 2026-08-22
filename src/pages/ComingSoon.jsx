import React from 'react';
import { Link } from 'react-router';
import { Wrench, ArrowLeft, Sparkles } from 'lucide-react';

const ComingSoon = () => {
  return (
    <div className="w-full min-h-[70vh] flex items-center justify-center py-16 px-4" dir="rtl">
      <div className="container mx-auto max-w-2xl">
        <div className="relative overflow-hidden bg-neutral-900/90 border border-neutral-800 rounded-3xl p-8 md:p-12 text-center flex flex-col items-center gap-6 shadow-2xl backdrop-blur-sm">
          {/* آیکون اصلی با افکت پالس */}
          <div className="relative">
            <div className="w-20 h-20 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 shadow-inner">
              <Wrench className="w-10 h-10 stroke-[1.5] animate-pulse" />
            </div>
            <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 border border-amber-500/30">
              <Sparkles className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* متن‌ها */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold tracking-widest text-amber-500 uppercase">
              در حال توسعه...
            </span>
            <h1 className="text-2xl md:text-3xl font-black text-white tracking-tight">
              این بخش به‌زودی آماده می‌شود
            </h1>
            <p className="text-xs md:text-sm text-neutral-400 leading-relaxed max-w-md mx-auto">
              تیم ولتورا در حال کارشناسی دقیق و پیاده‌سازی زیرساخت این صفحه است تا بهترین تجربه را
              برای شما فراهم کند.
            </p>
          </div>

          {/* دکمه بازگشت به صفحه اصلی */}
          <div className="mt-2 w-full sm:w-auto">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 text-xs font-bold transition-all duration-200 active:scale-95 shadow-lg shadow-amber-500/10 cursor-pointer"
            >
              <span>بازگشت به صفحه اصلی</span>
              <ArrowLeft className="w-4 h-4 stroke-[2.2]" />
            </Link>
          </div>

          {/* افکت‌های نور پس‌زمینه (Glow Effects) */}
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
