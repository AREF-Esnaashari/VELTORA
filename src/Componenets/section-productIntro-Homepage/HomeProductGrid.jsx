import React from 'react';
import HomeProductCard from './HomeProductCard';

const HomeProductGrid = ({ products }) => {

  if (!products || products.length === 0) {
    return (
      <div className="w-full py-12 flex justify-center items-center">
          <h1 className="text-amber-300 font-bold text-center text-lg">
          داریم رو بهترینش تمرکز میکنیم
        </h1>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {products.map((product) => (
        <HomeProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default HomeProductGrid;
