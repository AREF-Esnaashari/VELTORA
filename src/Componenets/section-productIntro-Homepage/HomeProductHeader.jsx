import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';

const HomeProductHeader = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6" dir="rtl">
      <div className="flex flex-col gap-1">
        <h2 className="text-3xl font-bold text-white">محصولات</h2>
        <p className="text-xs md:text-sm text-neutral-400">
          منتخب برترین لپ‌تاپ‌های استوک، کارشناسی و تست شده توسط متخصصین
        </p>
      </div>

      <button className="self-start md:self-auto flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-neutral-300 hover:text-white text-xs font-medium transition-all duration-200 cursor-pointer">
        <Link to="/commingsoon">مشاهده همه</Link>
        <ArrowLeft className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};

export default HomeProductHeader;
