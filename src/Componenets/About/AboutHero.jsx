import ProductGridGraphic from './ProductGridGraphic';
import CurvedIcon from './CurvedIcon';

export default function AboutHero() {
  return (
    <section className=" container px-6 md:px-16 pt-16 overflow-hidden">
   
      <div className="pointer-events-none absolute inset-0 opacity-40 bg-[linear-gradient(135deg,transparent_45%,#1f1f1f_46%,#1f1f1f_48%,transparent_49%)]" />

      <div className="relative max-w-3xl mr-0 ml-auto text-right">
        <h1 className="text-4xl text-center md:text-right md:text-4xl font-bold leading-relaxed text-[#f2f2ee]">
          ما تصمیم گرفتیم راهی بهتر برای خرید <span className="text-[#EF9F27]">لوازم استوک</span>{' '}
          پیدا کنید
        </h1>
        <div className=" container mt-20 flex items-center justify-center">
          <CurvedIcon className="mr-4" />
        </div>
      </div>

      <div className=" container mt-10 flex items-end justify-end">
        <ProductGridGraphic className="w-full md:w-1/2 lg:w-1/3 aspect-square" />
      </div>
    </section>
  );
}
