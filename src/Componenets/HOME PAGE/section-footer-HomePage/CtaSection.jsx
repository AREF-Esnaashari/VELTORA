
import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';

export const CtaSection = () => {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-neutral-900 border border-neutral-800 text-white py-16 px-6 text-center">
      {/* Soft Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-800/50 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          آماده ارتقای تجهیزات خود هستید؟
        </h2>
        <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
          به هزاران مشتری رضایت‌مند ولتورا بپیوندید و دستگاه‌های دیجیتال استوک را با تضمین کیفیت و
          مهلت تست دریافت کنید.
        </p>
        <div>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-black font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:scale-105"
          >
            <span>شروع بررسی محصولات</span>
            <ArrowLeft className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
