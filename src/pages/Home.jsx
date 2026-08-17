import MainApp from '../Componenets/main/MainApp';
import Carts_section1 from '../Componenets/section-Carts-Home/Carts_section1';
import TrustHomePage from '../Componenets/section-trust-HomePage/TrustHomePage';
import AppNav from './AppNav';

export default function Home() {
  return (
    <>
      <div className="w-full  flex flex-col gap-40  h-[600px] main">
        <AppNav />
        <MainApp />
      </div>
      <Carts_section1 />
      <TrustHomePage />
    </>
  );
}
