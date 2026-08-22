import React from 'react';
import { useSearchParams } from 'react-router';
import HomeProductHeader from './HomeProductHeader';
import HomeProductFilters from './HomeProductFilters';
import HomeProductGrid from './HomeProductGrid';

const mockProducts = [
  {
    id: 1,
    title: 'ایسر نیتور 5',
    category: 'gaming',
    badge: 'گیمینگ',
    score: '8.5',
    price: '7.900.000',
  },
  {
    id: 2,
    title: 'لپ‌تاپ دل Latitude',
    category: 'office',
    badge: 'اداری',
    score: '8.5',
    price: '7.800.500',
  },
  {
    id: 3,
    title: 'ThinkPad T14',
    category: 'engineering',
    badge: 'مهندسی',
    score: '9.5',
    price: '7.900.000',
  },
  {
    id: 4,
    title: 'MacBook Pro 2021',
    category: 'ultrabook',
    badge: 'اولترا',
    score: '8.5',
    price: '7.800.000',
  },
];

const ProductInto_Homepage = () => {
  const [searchParams] = useSearchParams();
  const activeCategory = searchParams.get('category') || 'all';

  // منطق فیلتر بر اساس URL
  const filteredProducts =
    activeCategory === 'all'
      ? mockProducts
      : mockProducts.filter((product) => product.category === activeCategory);

  return (
    <section className="w-full mt-20 py-12" dir="rtl">
      <div className="container mx-auto px-4">
        <HomeProductHeader />
        <HomeProductFilters />
        <HomeProductGrid products={filteredProducts} />
      </div>
    </section>
  );
};

export default ProductInto_Homepage;
