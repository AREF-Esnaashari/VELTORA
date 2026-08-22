
import { RotateCcw, Video, FileCheck, CalendarCheck } from 'lucide-react';

const guarantees = [
  {
    id: 1,
    title: 'بازگشت وجه کامل',
    description: 'بازگشت وجه کامل در صورت مغایرت دستگاه با اطلاعات ثبت‌شده.',
    icon: RotateCcw,
  },
  {
    id: 2,
    title: 'ویدیو آنباکس الزامی است',
    description: 'ضبط ویدیو آنلاین هنگام باز کردن بسته‌بندی الزام‌آور است.',
    icon: Video,
  },
  {
    id: 3,
    title: 'ضمانت تطابق با شناسنامه',
    description: 'ضمانت ۱۰۰٪ تطابق قطعات سخت‌افزاری با شناسنامه صدور یافته.',
    icon: FileCheck,
  },
  {
    id: 4,
    title: '۷ روز مهلت تست واقعی',
    description: 'مهلت تست کامل سخت‌افزاری از زمان تحویل کالا.',
    icon: CalendarCheck,
  },
];

const GuaranteeSection = () => {
  return (
    <section className="w-full mt-20 py-12" dir="rtl">
      <div className="container  mx-auto px-4">
        {/* هدر بخش */}
        <div className="flex flex-col gap-1 mb-8 text-right">
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
            قوانین و ضمانت شفاف
          </h2>
          <p className="text-xs md:text-sm text-neutral-400">
            قوانین و ضمانت شفاف، پیش‌شرط کارشناسی گردیده در ولتورا برای کارشناسی است.
          </p>
        </div>

        {/* گرید ۴ تایی کارت‌های ضمانت */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {guarantees.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="bg-neutral-900/80 border border-neutral-800 hover:border-amber-500/40 rounded-2xl p-6 flex flex-col justify-between gap-6 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40"
              >
                {/* عنوان و توضیحات */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">{item.description}</p>
                </div>

                {/* آیکون در بخش پایین */}
                <div className="flex justify-start">
                  <div className="w-12 h-12 rounded-xl bg-neutral-800/80 border border-neutral-700/50 flex items-center justify-center text-amber-500 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-neutral-950 transition-all duration-300">
                    <IconComponent className="w-6 h-6 stroke-[1.75]" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
