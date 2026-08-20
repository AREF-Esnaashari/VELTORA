import { ArrowLeft } from 'lucide-react'; // یا هر آیکون‌پکیجی که استفاده می‌کنی

export default function HomeProductHeader() {
  return (
    <div className="flex items-center container justify-between mb-8">
      <div className="text-right">
        <h2 className="text-2xl font-bold text-white mb-2">محصولات پیشنهادی</h2>
        <p className="text-md text-gray-400">نو و استوک، تست‌شده توسط متخصصین</p>
      </div>
      <button className="flex items-center gap-2 bg-[#373737] hover:bg-[#494949] active:scale-95 text-white px-5 py-2.5 rounded-xl text-sm transition-all duration-200 cursor-pointer group">
        <ArrowLeft className="w-4 h-4 stroke-[#EF9F27] group-hover:-translate-x-1 transition-transform duration-200" />
        <span>مشاهده همه</span>
      </button>
    </div>
  );
}
