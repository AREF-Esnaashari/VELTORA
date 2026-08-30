import { useProductsContext } from '../Context/ContextProductApi';
import ProductCard from './ProductCard';
import ProductCardSkeleton from './ProductCardSkeleton';

export default function ProductGrid() {
  let { error, isLoading, products } = useProductsContext();

  if (error) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-3xl border border-red-500/20 bg-red-500/5 py-16 text-center backdrop-blur-md">
        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-red-400/30 bg-red-500/10 text-2xl text-red-400">
          ⚠
        </span>
        <p className="text-sm text-neutral-300">
          مشکلی در دریافت محصولات پیش اومد. لطفاً دوباره تلاش کن.
        </p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (!products || products.length === 0) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.03] py-16 text-center backdrop-blur-md">
        <span className="text-4xl opacity-60">📦</span>
        <div>
          <p className="font-bold text-neutral-200">محصولی پیدا نشد</p>
          <p className="mt-1 text-sm text-neutral-500">
            در این دسته‌بندی فعلاً محصولی موجود نیست.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
      {products.map((product) => (
        <div
          key={product.id}
          data-aos="fade-up"
          data-aos-duration="700"
  
          className="h-full"
        >
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}
