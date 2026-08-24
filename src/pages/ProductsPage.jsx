
import ProductsHeader from '../Componenets/PRODUCTS PAGE/ProductsHeader';
import CategoryFilter from '../Componenets/PRODUCTS PAGE/CategoryFilter';
import ProductGrid from '../Componenets/PRODUCTS PAGE/ProductGrid';
import AppNav from './AppNav';

export default function ProductsPage() {

  // let [searchParams, setSearchParams] = useSearchParams();

  // const activeCategory = searchParams.get('categ');

  // const { products, isLoading, error } = useProducts(activeCategory);
  // function handleCategoryChange(categ) {
  //   if (categ) {
  //     setSearchParams({ categ });
  //   } else {
  //     setSearchParams({});
  //   }
  // }

  return (
    <main dir="rtl" className="min-h-screen  px-4 container mt-0 mx-auto  pb-12 sm:px-8">
      <div className="w-full  items-center  flex flex-col ">
        <AppNav />
      </div>
      <div className="mx-auto max-w-6xl space-y-10">
        <ProductsHeader />

        <CategoryFilter />

        <ProductGrid />
      </div>
    </main>
  );
}
