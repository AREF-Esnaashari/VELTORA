import { useParams, useSearchParams } from 'react-router';
import HomeProductCard from './HomeProductCard';

export default function HomeProductGrid() {
  let [search] = useSearchParams();
  let current = search.get('category');
  console.log(current);
  const mockProducts = [
    { id: 1, title: 'آیفون 16 پرو', price: '7.900.000', badge: 'در حد نو', category: 'mobile' },
    { id: 2, title: 'لپتاپ دل', price: '7.900.000', badge: 'استوک', category: 'laptop' },
    { id: 3, title: 'اپل واچ', price: '7.900.000', badge: 'نو', category: 'accessories' },
    { id: 4, title: 'آیفون 16 پرو', price: '7.900.000', badge: 'نو', category: 'mobile' },
  ];
  // const filteredProducts = mockProducts.filter((item) =>
  //   current === 'all' || !current ? true : item.category === current
  // );
  let filtered = mockProducts.filter((item) =>
    // current === null ? item.category === current : (current = 'all')
    current === 'all' || !current ? true : item.category === current
  );
  console.log(filtered);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {filtered.map((item) => (
        <HomeProductCard key={item.id} product={item} />
      ))}
    </div>
  );
}
