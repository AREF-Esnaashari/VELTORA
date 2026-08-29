
import { Link } from 'react-router';
import { Target, ArrowLeft } from 'lucide-react';

const OurMission_Homepage = () => {
  return (
    <section className="w-full py-12" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="bg-neutral-900/80 border border-neutral-800 hover:border-amber-500/30 rounded-2xl p-6 md:p-8 transition-all duration-300">
          {/* هدر بخش ماموریت */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500">
              <Target className="w-5 h-5 stroke-[2]" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">ماموریت ما</h2>
          </div>

          {/* متن توضیحات ماموریت و لینک قوانین */}
          <p className="text-xs md:text-sm text-neutral-400 leading-relaxed max-w-4xl mb-4">
            ماموریت ما ایجاد شفافیت مطلق در بازار لپ‌تاپ‌های استوک است. ما معتقدیم هر خریدار حق دارد
            پیش از پرداخت وجه، از تمام جزییات سخت‌افزاری و سلامت واقعی دستگاه باخبر باشد. تمامی
            خریدها بر اساس{' '}
            <Link
              to="/commingsoon"
              className="text-amber-400 font-bold hover:underline hover:text-amber-300 transition-colors inline-flex items-center gap-1"
            >
              قوانین کارشناسی ولتورا
              <ArrowLeft className="w-3.5 h-3.5" />
            </Link>{' '}
            انجام می‌شود.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurMission_Homepage;
