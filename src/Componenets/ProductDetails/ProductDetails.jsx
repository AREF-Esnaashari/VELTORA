import { useParams, Link } from 'react-router';
import { useProducts } from '../PRODUCTS PAGE/hooks/useProducts';

export default function ProductDetail() {
  let { productId } = useParams();
  let { products, isLoading } = useProducts();

  if (isLoading) return <p>در حال بارگذاری...</p>;

  let product = products.find((i) => i.id === Number(productId));

  if (!product) return <p>محصول پیدا نشد</p>;

  return (
    <div
      className="max-w-5xl mx-auto p-6 grid grid-cols-2 gap-6 bg-[#141414] rounded-3xl border border-gray-800 "
      dir="ltr"
    >
      {/* تصویر محصول */}
      <div className="relative rounded-2xl overflow-hidden aspect-square bg-gradient-to-br from-[#5c4530] to-[#2e2216]">
        <Link to="/Products" className="w-fit mt-1">
          <button className="cursor-pointer bg-white text-black text-xs px-3 py-1.5 rounded">
            Back
          </button>
        </Link>
        <span className="absolute top-3 right-3 bg-orange-400 text-black text-xs font-semibold px-3 py-1 rounded-full">
          {product?.condition ?? '؟'}
        </span>
        <img
          src={product?.image ?? '؟'}
          alt={product?.name ?? '؟'}
          className="w-full h-full object-contain p-10"
        />
      </div>

      {/* اطلاعات محصول */}
      <div dir="rtl" className="flex flex-col justify-center gap-3 text-white">
        <h1 className="text-xl font-bold leading-tight text-white">{product?.name ?? '؟'}</h1>
        <p className="text-xs text-gray-400 leading-relaxed">{product?.specsSummary ?? '؟'}</p>

        <hr className="border-gray-700 my-1" />

        {/* رنگ بدنه */}
        <div>
          <p className="text-xs text-gray-300 mb-2">رنگ بدنه:</p>
          <div className="flex gap-2">
            {product?.colors?.length > 0 ? (
              product.colors.map((color, index) => (
                <button
                  key={index}
                  className="px-3 py-1 rounded-full border border-gray-600 text-gray-200 text-xs cursor-pointer hover:border-orange-400"
                >
                  {color?.name ?? '؟'}
                </button>
              ))
            ) : (
              <span className="text-xs">؟</span>
            )}
          </div>
        </div>

        <button className="w-fit text-xs text-orange-400 border border-orange-400/50 rounded-full px-3 py-1 cursor-pointer">
          مشاهده همه ‹
        </button>

        {/* ویژگی ها */}
        <div>
          <p className="text-xs text-gray-300 mb-2">ویژگی ها</p>
          <div className="grid grid-cols-3 gap-2">
            <FeatureBox label="نوع حافظه" value={product?.features?.memoryType} />
            <FeatureBox label="مقدار حافظه" value={product?.features?.memoryAmount} />
            <FeatureBox label="رابط ما" value={product?.features?.interfaceType} />
            <FeatureBox label="سرعت پردازنده" value={product?.features?.processorSpeed} />
            <FeatureBox label="نوع صفحه نمایش" value={product?.features?.displayType} />
            <FeatureBox label="HDMI" value={product?.features?.hdmiPorts} />
          </div>
        </div>

        {/* دکمه ها */}
        <div className="flex gap-3 mt-2">
          <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm py-2.5 rounded-full cursor-pointer">
            برچسب سلامت
          </button>
          <button className="flex-1 bg-orange-400 hover:bg-orange-500 text-black text-sm font-medium py-2.5 rounded-full cursor-pointer">
            اضافه به سبد خرید
          </button>
        </div>
      </div>
    </div>
  );
}

function FeatureBox({ label, value }) {
  return (
    <div className="bg-[#1e1e1e] border border-gray-700 rounded-lg px-2 py-2 text-center">
      <p className="text-[10px] text-gray-400">{label}</p>
      <p className="text-xs text-white mt-0.5">{value ?? '؟'}</p>
    </div>
  );
}
