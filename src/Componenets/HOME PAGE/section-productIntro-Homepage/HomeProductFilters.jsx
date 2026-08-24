import React from 'react';
import { useSearchParams } from 'react-router';

const categories = [
  { id: 'all', label: 'لپ‌تاپ' },
  { id: 'gaming', label: 'گیمینگ' },
  { id: 'office', label: 'اداری' },
  { id: 'engineering', label: 'مهندسی' },
  { id: 'home', label: 'خانگی' },
  { id: 'ultrabook', label: 'اولترابوک' },
  { id: 'lightweight', label: 'وزن سبک' },
];

const HomeProductFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('category') || 'all';

  const handleCategoryChange = (catId) => {
    if (catId === 'all') {
      searchParams.delete('category');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category: catId });
    }
  };

  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-6" dir="rtl">
      {categories.map((cat) => {
        const isActive = activeCategory === cat.id;
        return (
          <button
            key={cat.id}
            onClick={() => handleCategoryChange(cat.id)}
            className={`px-5 py-4 rounded-xl text-xs font-bold transition-all duration-200 whitespace-nowrap cursor-pointer ${
              isActive
                ? 'bg-amber-500 text-neutral-950 shadow-lg shadow-amber-500/10'
                : 'bg-neutral-900 text-neutral-400 border border-neutral-800/80 hover:text-white hover:border-neutral-700'
            }`}
          >
            {cat.label}
          </button>
        );
      })}
    </div>
  );
};

export default HomeProductFilters;
