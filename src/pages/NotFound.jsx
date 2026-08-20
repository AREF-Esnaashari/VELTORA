import { Link } from "react-router";


export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-[#11110f] text-[#f2f2ee]">
      <div className="text-center max-w-md">
        {/* 404 */}
        <h1 className="text-[120px] leading-none font-black tracking-tighter text-[#F59E0B]">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-6 text-2xl font-bold">اوه! اینجا خبری نیست 😅</h2>

        {/* Description */}
        <p className="mt-4 text-sm leading-8 text-[#f2f2ee]/60">
          انگار این صفحه رفته یه دستگاه استوک پیدا کنه و هنوز برنگشته! 🫠
          <br />
          برگردیم به صفحه اصلی و از اول شروع کنیم؟
        </p>

        {/* Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl
          bg-[#F59E0B] text-[#11110f] font-medium
          hover:bg-[#fbbf24] transition-all duration-300
          hover:-translate-y-1"
        >
          برگشت به صفحه اصلی
          <span>←</span>
        </Link>
      </div>
    </div>
  );
}
