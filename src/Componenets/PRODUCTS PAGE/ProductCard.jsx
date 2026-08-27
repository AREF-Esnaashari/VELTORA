import { useState } from 'react';
// import ProductBadge from '../HOME PAGE/section-productIntro-Homepage/';
import { ShoppingBag, Laptop } from 'lucide-react';
// این کامپوننت یک آبجکت product رو می‌گیره و کارت رو رندر می‌کنه
// شکل مورد انتظار product (از API):
// { id, title, price, image, status }
export default function ProductCard({ product, onAddToCart }) {
  console.log(product)
  // const { title, price, image, status } = product;
  // const [liked, setLiked] = useState(false);

  return (
    <div
      className="bg-neutral-900/90 border border-neutral-800 hover:border-amber-500/40 rounded-2xl p-4 flex flex-col justify-between gap-4 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50"
      dir="rtl"
    >
      {/* بخش بالای کارت: آیکون، بج‌ها و نمره کارشناسی */}
      <div className="flex flex-col gap-3">
        <div className="relative w-full h-44 rounded-xl bg-neutral-950 border border-neutral-800/50 flex flex-col items-center justify-center text-neutral-600 group-hover:text-amber-500 transition-colors">
          {/* بج وضعیت */}
          {product.badge && (
            <span className="absolute top-2 right-2 px-2.5 py-1 rounded-lg text-[10px] font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30 backdrop-blur-md">
              {product.badge}
            </span>
          )}

          {/* آیکون به جای عکس سیاه */}
          <Laptop className="w-16 h-16 stroke-[1.25] group-hover:scale-110 transition-transform duration-300" />
        </div>

        {/* بج نمره کارشناسی */}
        <div className="w-full py-1.5 px-3 rounded-lg bg-emerald-950/40 border border-emerald-800/50 text-emerald-400 text-xs font-bold flex items-center justify-between">
          <span>کارشناسی شده:</span>
          <span className="text-emerald-300 font-extrabold">{product.score} / 10</span>
        </div>

        {/* عنوان محصول */}
        <h3 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-1">
          {product.title}
        </h3>
      </div>

      {/* بخش پایین کارت: قیمت و دکمه خرید */}
      <div className="flex flex-col gap-3 border-t border-neutral-800/60 pt-3">
        <div className="flex items-center justify-between text-xs">
          <span className="text-neutral-500 font-medium">قیمت:</span>
          <div className="flex items-center gap-1 font-extrabold text-white text-sm">
            <span>{product.price}</span>
            <span className="text-[10px] text-neutral-400 font-normal">تومان</span>
          </div>
        </div>

        <button className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 text-xs font-bold transition-all duration-200 active:scale-95 cursor-pointer">
          <ShoppingBag className="w-4 h-4 stroke-[2.2]" />
          <span>اضافه به سبد خرید</span>
        </button>
      </div>
    </div>
  );
}
