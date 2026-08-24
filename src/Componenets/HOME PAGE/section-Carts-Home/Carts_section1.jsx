import laptop from './assets/laptop.png';
import electeronic from './assets/cpu.png';
import profecis from './assets/profs.png';
import enamad from './assets/enamad.png';
import Cart_section1 from './Cart_section1';

let data = [
  { id: 3, imgCart: enamad, description: 'خرید کاملاً امن' },
  { id: 1, imgCart: laptop, description: 'خرید با اطمینان' },
  { id: 2, imgCart: profecis, description: 'بررسی‌متخصصان' },
  { id: 0, imgCart: electeronic, description: 'تست و تضمین' },
];

export default function Carts_section1() {
  return (
    <div className="container gap-2  -mt-30  h-auto  mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4   justify-items-center ">
      {data.map((carts) => (
        <Cart_section1 key={carts.id} data={carts} />
      ))}
    </div>
  );
}
