import AppNav from './AppNav';
import Footer_Homepage from '../Componenets/HOME PAGE/section-footer-Homepage v2/Footer_Homepage';
import ProductsHeader from '../Componenets/PRODUCTS PAGE/ProductsHeader';
import CategoryFilter from '../Componenets/PRODUCTS PAGE/CategoryFilter';
import ProductGrid from '../Componenets/PRODUCTS PAGE/ProductGrid';

export default function ProductsPage() {
  return (
    <main dir="rtl" className="relative min-h-screen overflow-x-clip pb-16">
      {/* نورهای محیطی (Glow) پس‌زمینه */}
      <div className="pointer-events-none absolute -top-40 right-[15%] h-[28rem] w-[28rem] rounded-full bg-[#EF9F27]/15 blur-[130px]" />
      <div className="pointer-events-none absolute top-[35%] -left-32 h-96 w-96 rounded-full bg-orange-700/10 blur-[110px]" />
      <div className="pointer-events-none absolute bottom-0 right-[30%] h-72 w-72 rounded-full bg-amber-500/10 blur-[100px]" />

      <div className="relative z-10">
        <AppNav />

        <div className="container mx-auto max-w-7xl space-y-12 px-4 pt-6 sm:px-8">
          <ProductsHeader />
          <CategoryFilter />
          <ProductGrid />
        </div>

        <Footer_Homepage />
      </div>
    </main>
  );
}
