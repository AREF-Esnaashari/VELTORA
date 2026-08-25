import { useProductsContext } from '../Context/ContextProductApi';
import { categories } from './Categories/categories';

export default function CategoryFilter() {
  let { activeCategory, handleCategoryChange } = useProductsContext();

  return (
    <div className="sticky top-4 z-30 flex flex-wrap items-center justify-center gap-2.5 rounded-3xl border border-white/10 bg-[#141414]/60 p-3 shadow-lg shadow-black/40 backdrop-blur-xl sm:gap-3">
      {categories.map((category) => {
        const isActive = activeCategory === category.value;

        return (
          <button
            key={category.id}
            onClick={() => handleCategoryChange(isActive ? null : category.value)}
            className={`relative cursor-pointer overflow-hidden rounded-full px-5 py-2.5 text-sm font-medium whitespace-nowrap transition-all duration-300 sm:px-7 ${
              isActive
                ? 'scale-105 bg-gradient-to-l from-[#EF9F27] to-[#f7b955] font-extrabold text-[#141414] shadow-[0_8px_25px_-5px_rgba(239,159,39,0.6)]'
                : 'border border-white/10 bg-white/5 text-neutral-300 hover:-translate-y-0.5 hover:border-[#EF9F27]/50 hover:bg-white/10 hover:text-white'
            }`}
          >
            {category.label}
            {isActive && (
              <span className="absolute inset-x-6 -bottom-px h-px bg-white/60 blur-[1px]" />
            )}
          </button>
        );
      })}
    </div>
  );
}
