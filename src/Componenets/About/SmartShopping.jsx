import ProductGridGraphic from './ProductGridGraphic';
import CurvedIcon from './CurvedIcon';

export default function SmartShopping() {
  return (
    <section className="container mt-0 mx-auto  px-6 md:px-16 py-20">
      <div className="flex justify-center mb-10">
        <CurvedIcon size={142} className="rotate-90" />
      </div>

      <div className="flex flex-col md:flex-row-reverse items-center justify-around   gap-10">
        <div className="flex-1 text-center md:text-right max-w-md">
          <h2 className="text-5xl md:text-3xl font-bold   text-[#EF9F27]">خرید هوشمندانه</h2>

          <p className="mt-3 font-bold text-2xl   text-[#f2f2ee]">نو یا استوک، تو فقط کیفیت را انتخاب کن</p>

          <p className="mt-5 leading-loose text-[#b5b3ac]">
            توی Veltora، هر محصولی که می‌بینی از قبل بررسی و تایید شده. چه دنبال یک گوشی نو باشی، چه
            یک لپ‌تاپ استوک با قیمت مناسب، اینجا هر چیزی که انتخاب می‌کنی همراه با شفافیت کامل
            درباره‌ی وضعیت و قیمتش به دستت می‌رسه.
          </p>
        </div>

        <div className="flex-1 max-w-xs w-full">
          <ProductGridGraphic className="w-full aspect-square" />
        </div>
      </div>
    </section>
  );
}
