import { Link, Send } from 'lucide-react';

const FooterBrand = () => {
  return (
    <div className="flex flex-col gap-4 text-right">
      <div className="flex items-center gap-2">
        <span className="text-2xl font-black tracking-widest text-amber-500">Voltora</span>
        <span className="text-sm font-bold text-white">ولتورا</span>
      </div>

      <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
        ولتورا مرجع شفاف کارشناسی و فروش لپ‌تاپ‌های استوک. ما سخت‌افزارها را با داتای واقعی جراحی و
        تست می‌کنیم تا خریدی بدون ریسک داشته باشید.
      </p>

      {/* شبکه‌های اجتماعی */}
      <a
        href="https://instagram.com/voltora"
        target="_blank"
        rel="noopener noreferrer"
        className="w-9 h-9 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-amber-500 hover:border-amber-500/40 transition-all"
      >
        <Send className="w-4 h-4 stroke-[1.75]" />
      </a>
    </div>
  );
};

export default FooterBrand;
