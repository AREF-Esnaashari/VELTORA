import { useProductsContext } from '../Context/ContextProductApi';
import ProductCard from './ProductCard';
import ProductCardSkeleton from './ProductCardSkeleton';

export default function ProductGrid() {
  let { error, isLoading, products } = useProductsContext();
  if (error) {
    return (
      <p className="py-12 text-center text-[#9a9a9a]">
        مشکلی در دریافت محصولات پیش اومد. لطفاً دوباره تلاش کن.
      </p>
    );
  }

  if (isLoading) {
    return (
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (!products || products.length === 0) {
    return <p className="py-12 text-center text-[#9a9a9a]">محصولی در این دسته‌بندی پیدا نشد.</p>;
  }

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
