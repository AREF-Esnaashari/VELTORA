import { ShieldCheck, Sparkles, ShoppingCart } from 'lucide-react';

export default function MainApp() {
  return (
    <div
      className="container flex flex-col items-center justify-center gap-10 mx-auto px-4 text-center"
      data-aos="fade"
      data-aos-duration="1500"
      data-aos-easing="ease-out-cubic"
    >
      <div>
        <div className="flex items-center justify-center gap-2">
          <Sparkles className="text-amber-500" size={28} />
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-white/80 font-extrabold leading-tight">
            اولین مرجع خرید تمام لوازم استوک
          </h1>
        </div>
        <div className="flex items-center justify-center gap-2">
          <ShieldCheck className="text-amber-600" size={22} />
          <h3 className="text-xl sm:text-2xl md:text-3xl text-amber-600 [text-shadow:0_1px_2px_rgba(180,83,9,0.4)]">
            بــا تــــســــت و تــــضــــمـــــــیــــــن کـــــیــــفــــیــــت
          </h3>
        </div>
      </div>
      <button className="mt-2 px-6 py-3 rounded-md bg-yellow-600 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-700 active:scale-95 transition-all duration-200 cursor-pointer flex items-center gap-2">
        <ShoppingCart size={20} />
        همین الان خرید کن !
      </button>
    </div>
  );
}
