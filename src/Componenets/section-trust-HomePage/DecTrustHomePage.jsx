import { ArrowLeft, ArrowRight, Zap, MonitorCheck, ShieldCheck } from 'lucide-react';

export default function DecTrustHomePage({ setIndexImg, DataTrust, indexImg }) {
  const checklist = [
    { icon: Zap, text: 'تست باتری و شارژ' },
    { icon: MonitorCheck, text: 'تست عملکرد و صفحه‌نمایش' },
    { icon: ShieldCheck, text: 'تایید نهایی و مهر کیفیت' },
  ];

  return (
    <div
      dir="rtl"
      className="w-full sm:w-full md:w-full lg:w-1/2 h-auto flex flex-col justify-center  items-center gap-6 p-4 md:items-start  "
    >
      {/* eyebrow */}
      <h1 className="text-orange-500 font-bold text-5xl ">هرکالا.</h1>

      {/* heading */}
      <h2 className="text-white text-center md:text-right font-bold text-3xl leading-relaxed">
        قبل از رسیدن به دست شما زیر ذره‌بین <span className="text-orange-500">متخصصین</span> ماست
      </h2>

      {/* paragraph */}
      <p className="text-gray-400 text-base leading-loose">
        هر کالا پیش از ارسال، مراحل دقیق کنترل کیفیت رو پشت سر می‌ذاره.
      </p>

      {/* checklist */}
      <ul className="flex flex-col gap-3">
        {checklist.map(({ icon: Icon, text }, i) => (
          <li key={i} className="flex items-center gap-3 text-white">
            <Icon className="text-orange-500 w-5 h-5" />
            <span>{text}</span>
          </li>
        ))}
      </ul>

      {/* buttons row */}
      <div className="flex flex-col sm:flex-col md:flex-row items-center gap-14 mt-4">
        <button className="px-8 py-3 rounded-md bg-orange-500 text-white font-bold cursor-pointer transition-all duration-200 hover:bg-orange-600 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/40 active:scale-95 active:bg-orange-700">
          درباره متخصصین
        </button>
        <div className="flex gap-12 ">
          <button
            className="w-11 h-11 flex items-center justify-center rounded-full bg-orange-500 text-white cursor-pointer transition-all duration-200 hover:bg-orange-600 hover:scale-110 hover:shadow-lg hover:shadow-orange-500/40 active:scale-90 active:bg-orange-700"
            onClick={() => {
              setIndexImg((prev) => (indexImg < DataTrust.length - 1 ? prev + 1 : 0));
            }}
          >
            <ArrowRight className="w-5 h-5" />
          </button>
          <button
            className="w-11 h-11 flex items-center justify-center rounded-full bg-orange-500 text-white cursor-pointer transition-all duration-200 hover:bg-orange-600 hover:scale-110 hover:shadow-lg hover:shadow-orange-500/40 active:scale-90 active:bg-orange-700"
            onClick={() => {
              setIndexImg((prev) => (indexImg === 0 ? DataTrust.length - 1 : prev - 1));
            }}
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
