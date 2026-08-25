import { useState } from 'react';
import ProductBadge from './ProductBadge';

// این کامپوننت یک آبجکت product رو می‌گیره و کارت رو رندر می‌کنه
// شکل مورد انتظار product (از API):
// { id, title, price, image, status }
export default function ProductCard({ product, onAddToCart }) {

  const { title, price, image, status } = product;
  const [liked, setLiked] = useState(false);

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-3 shadow-lg shadow-black/30 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#EF9F27]/40 hover:bg-white/[0.07] hover:shadow-[0_25px_60px_-15px_rgba(239,159,39,0.3)]">
      {/* تصویر محصول */}
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-neutral-800/60">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <ProductBadge status={status} />

        {/* دکمه علاقه‌مندی */}
        <button
          onClick={() => setLiked((v) => !v)}
          aria-label="افزودن به علاقه‌مندی‌ها"
          className={`absolute top-3 right-3 z-10 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border backdrop-blur-md transition-all duration-300 ${
            liked
              ? 'scale-110 border-red-400/40 bg-red-500/20 text-red-400 shadow-[0_0_15px_-2px_rgba(248,113,113,0.6)]'
              : 'border-white/15 bg-black/30 text-white/70 opacity-0 group-hover:opacity-100 hover:scale-110 hover:text-red-400'
          }`}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill={liked ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
        </button>

        {image ? (
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            loading="lazy"
          />
        ) : (
          // در نبود عکس، آیکون placeholder نمایش داده میشه
          <div className="flex h-full w-full items-center justify-center text-neutral-600 transition-colors duration-500 group-hover:text-[#EF9F27]/50">
            <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25">
              <rect x="7" y="2" width="10" height="20" rx="2" />
              <line x1="11" y1="18" x2="13" y2="18" />
            </svg>
          </div>
        )}
      </div>

      {/* اطلاعات محصول */}
      <div className="flex grow flex-col px-1 pt-4">
        <h3 className="text-sm font-bold text-white transition-colors duration-300 group-hover:text-[#EF9F27]">
          {title}
        </h3>

        <div className="mt-auto flex items-end justify-between pt-3 pb-4">
          <span className="text-[11px] text-neutral-500">قیمت</span>
          <p className="flex items-baseline gap-1.5 text-sm text-neutral-400">
            <span className="bg-gradient-to-l from-[#EF9F27] to-[#f7b955] bg-clip-text text-base font-extrabold text-transparent sm:text-lg">
              {price?.toLocaleString('fa-IR')}
            </span>
            تومان
          </p>
        </div>

        <button
          onClick={() => onAddToCart?.(product)}
          className="group/btn relative mt-auto flex w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-xl border border-[#EF9F27]/25 bg-[#EF9F27]/10 py-2.5 text-sm font-bold text-[#EF9F27] transition-all duration-300 hover:border-transparent hover:bg-gradient-to-l hover:from-[#EF9F27] hover:to-[#f7b955] hover:text-[#141414] hover:shadow-[0_10px_30px_-10px_rgba(239,159,39,0.7)] active:scale-95"
        >
          افزودن به سبد خرید
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="transition-transform duration-300 group-hover/btn:-rotate-12"
          >
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
