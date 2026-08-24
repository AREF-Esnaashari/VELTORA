import { useProductsContext } from '../Context/ContextProductApi';
import { categories } from './Categories/categories';

export default function CategoryFilter() {
  let { activeCategory, handleCategoryChange } = useProductsContext();

  return (
    <div className="flex flex-wrap justify-center gap-3">
      {categories.map((category) => {
        const isActive = activeCategory === category.value;

        return (
          <button
            key={category.id}
            onClick={() => handleCategoryChange(isActive ? null : category.value)}
            className={`rounded-full border px-5 py-2 text-sm transition-colors ${
              isActive
                ? 'border-[#EF9F27] bg-[#EF9F27] text-[#141414] font-bold'
                : 'border-[#3a3a3a] text-white hover:border-[#EF9F27]'
            }`}
          >
            {category.label}
          </button>
        );
      })}
    </div>
  );
}
