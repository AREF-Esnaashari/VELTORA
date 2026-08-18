import { NavLink } from 'react-router';
import Logo from './Logo';
export default function Navbar() {
  return (
    <nav className="container h-20  mt-0 mx-auto">
      <ul
        className=" flex gap-5 justify-evenly  items-center text-white mt-2 "
        data-aos="fade"
        data-aos-duration="1500"
        data-aos-easing="ease-out-cubic"
      >
        <li>
          <NavLink>خانه</NavLink>
        </li>
        <li>
          <NavLink>محصولات</NavLink>
        </li>
        <li>
          <NavLink>
            <Logo />
          </NavLink>
        </li>
        <li>
          <NavLink>درباره ما</NavLink>
        </li>
        <li>
          <NavLink>راه های ارتباطی</NavLink>
        </li>
      </ul>
    </nav>
  );
}
