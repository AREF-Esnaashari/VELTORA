import ProductBadge from './ProductBadge';

// این کامپوننت یک آبجکت product رو می‌گیره و کارت رو رندر می‌کنه
// شکل مورد انتظار product (از API):
// { id, title, price, image, status }
export default function ProductCard({ product }) {
  const { title, price, image, status } = product;

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-[#1c1c1c] p-3 transition-transform hover:-translate-y-1">
      <div className="relative aspect-square overflow-hidden rounded-xl bg-[#262626]">
        <ProductBadge status={status} />

        {image ? (
          <img src={image} alt={title} className="h-full w-full object-cover" loading="lazy" />
        ) : (
          // در نبود عکس، آیکون placeholder نمایش داده میشه
          <div className="flex h-full w-full items-center justify-center text-[#4a4a4a]">
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <rect x="7" y="2" width="10" height="20" rx="2" />
              <line x1="11" y1="18" x2="13" y2="18" />
            </svg>
          </div>
        )}
      </div>

      <div className="px-1 pt-4">
        <h3 className="text-sm font-medium text-white">{title}</h3>

        <p className="mt-2 text-sm text-[#9a9a9a]">
          تومان <span className="font-bold text-[#EF9F27]">{price?.toLocaleString('fa-IR')}</span>
        </p>

        <button
          onClick={() => onAddToCart?.(product)}
          className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg bg-[#EF9F27] py-2 text-sm font-bold text-[#141414] transition-colors hover:bg-[#d88f1f]"
        >
          افزودن به سبد خرید
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
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
