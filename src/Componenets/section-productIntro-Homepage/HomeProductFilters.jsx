import { useSearchParams } from 'react-router';

// const categories = ['همه', 'موبایل', 'لپ‌تاپ', 'لوازم جانبی'];

let categories = [
  { id: 'all', sortedName: 'همه' },
  { id: 'mobile', sortedName: 'موبایل' },
  { id: 'laptop', sortedName: 'لپ‌تاپ' },
  { id: 'accessories', sortedName: 'لوازم‌ جانبی' },
];
export default function HomeProductFilters() {
  let [test, setTest] = useSearchParams();
  let currentActive = test.get('category') || 'all';
  function handleActive(id) {
    setTest({ category: id });
  }
  return (
    <div className="flex  items-center justify-end gap-3 mb-8">
      {categories.map((cat) => {
        const isActive = cat.id === currentActive;
        return (
          <button
            key={cat.id}
            onClick={() => handleActive(cat.id)}
            className={`px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer active:scale-95 ${
              isActive
                ? 'bg-[#EF9F27] hover:bg-[#f0a83b] text-black font-semibold shadow-lg shadow-[#EF9F27]/20 hover:shadow-[#EF9F27]/40'
                : 'bg-[#373737] text-gray-300 hover:bg-[#494949] hover:text-white'
            }`}
          >
            {cat.sortedName}
          </button>
        );
      })}
    </div>
  );
}
