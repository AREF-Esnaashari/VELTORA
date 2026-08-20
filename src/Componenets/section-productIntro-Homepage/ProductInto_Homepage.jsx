import HomeProductHeader from './HomeProductHeader';
import HomeProductFilters from './HomeProductFilters';
import HomeProductGrid from './HomeProductGrid';

export default function ProductInto_Homepage() {
  return (
    <section className=" container mx-auto px-4 py-10 my-8 ">
      <HomeProductHeader />
      <HomeProductFilters />
      <HomeProductGrid />
    </section>
  );
}
