import { ShoppingCart, Smartphone } from 'lucide-react';

export default function HomeProductCard({ product }) {
  // رنگ متغیر بج‌ها براساس نوع (در حد ظاهر)
  const getBadgeStyle = (badgeType) => {
    switch (badgeType) {
      case 'در حد نو':
        return 'bg-[#EC6A13] text-white';
      case 'استوک':
        return 'bg-[#178FF0] text-white';
      case 'نو':
        return 'bg-[#EF9F27] text-white ';
      default:
        return 'bg-[#EF9F27] text-black';
    }
  };

  return (
    <div className="bg-[#1F1F1F] border border-gray-800 rounded-2xl p-4 flex flex-col justify-between hover:border-gray-700 transition-all">
      {/* بخش تصویر و بج */}
      <div className="relative bg-[#373737]/40 rounded-xl h-48 flex items-center justify-center mb-4">
        <span
          className={`absolute top-2 right-2 text-xs px-2.5 py-1 rounded-md ${getBadgeStyle(
            product?.badge
          )}`}
        >
          {product.badge || 'نو'}
        </span>
        {/* تصویر یا آیکون نمونه */}
        <Smartphone className="w-16 h-16 text-gray-600 stroke-[1.2]" />
      </div>

      {/* اطلاعات محصول */}
      <div className="text-right space-y-2 mb-4">
        <h3 className="text-white text-base font-medium">{product?.title || 'آیفون 16 پرو'}</h3>
        <p className="text-[#EF9F27] text-sm font-semibold dir-rtl">
          {product?.price || '7.900.000'}{' '}
          <span className="text-xs font-normal text-gray-400">تومان</span>
        </p>
      </div>

      {/* دکمه افزودن به سبد خرید */}
      <button className="w-full bg-[#EF9F27] hover:bg-[#f0a83b] active:scale-[0.98] text-black font-medium py-2 px-3 rounded-lg flex items-center justify-center gap-2 text-xs transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg hover:shadow-[#EF9F27]/20">
        <ShoppingCart className="w-4 h-4" />
        <span>اضافه به سبد خرید</span>
      </button>
    </div>
  );
}
