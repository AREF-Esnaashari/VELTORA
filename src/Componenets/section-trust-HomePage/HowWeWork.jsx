import { Search, Wrench, ShieldCheck, PackageCheck } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'پیدا کردن بهترین لپ‌تاپ‌ها',
    stepText: 'Step 1',
    icon: Search,
  },
  {
    id: 2,
    title: 'تست سخت‌گیرانه سخت‌افزاری',
    stepText: 'Step 2',
    icon: Wrench,
  },
  {
    id: 3,
    title: 'صدور شناسنامه کارشناسی',
    stepText: 'Step 3',
    icon: ShieldCheck,
  },
  {
    id: 4,
    title: 'ارسال به شما',
    stepText: 'Step 4',
    icon: PackageCheck,
  },
];

export default function HowWeWork() {
  return (
    <section className="w-full py-12" dir="rtl">
      <div className="container mx-auto px-4">
        {/* هدر بخش */}
        <div className="flex flex-col gap-1 mb-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
            How We Work
          </h2>
          <p className="text-xs md:text-sm text-neutral-400">
          مراحل کارشناسی و ارسال شفاف لپ‌تاپ در ولتورا
          </p>
        </div>

        {/* گرید ۴ تایی کارت‌ها */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {steps.map((step) => {
            const IconComponent = step.icon;
            return (
              <div
                key={step.id}
                className="relative bg-neutral-900/80 border border-neutral-800 hover:border-amber-500/50 rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-4 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/5"
              >
                {/* آیکون */}
                <div className="w-16 h-16 rounded-xl bg-neutral-800/80 border border-neutral-700/50 flex items-center justify-center text-amber-500 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-neutral-950 transition-all duration-300">
                  <IconComponent className="w-8 h-8 stroke-[1.5]" />
                </div>

                {/* مرحله و عنوان */}
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-semibold text-amber-500 tracking-wider">
                    {step.stepText}
                  </span>
                  <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                    {step.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
