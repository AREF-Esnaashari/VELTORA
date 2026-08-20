import MainApp from '../Componenets/main/MainApp';
import Carts_section1 from '../Componenets/section-Carts-Home/Carts_section1';
import TrustHomePage from '../Componenets/section-trust-HomePage/TrustHomePage';
import AppNav from './AppNav';
import { useEffect } from 'react';
import Lenis from 'lenis';
import AOS from 'aos';

// ⚠️ این دو خط CSS حتماً باید باشند:
import 'lenis/dist/lenis.css';
import 'aos/dist/aos.css';
import ProductInto_Homepage from '../Componenets/section-productIntro-Homepage/ProductInto_Homepage';
import About_Homepage from '../Componenets/section-about-HomePage/About_Homepage';

import Footer from '../Componenets/section-footer-HomePage/Footer';
export default function Home() {
  useEffect(() => {
    // ۱. مقداردهی اولیه Lenis با تنظیمات بسیار نرم
    const lenis = new Lenis({
      duration: 1.6, // مدت زمان انیمیشن (هرچه بیشتر باشد، اسکرول سنگین‌تر و نرم‌تر است)
      smoothWheel: true, // فعال‌سازی اسکرول نرم روی ماوس
      wheelMultiplier: 1, // ضریب سرعت اسکرول
    });

    // ۲. هماهنگ‌سازی Lenis با AOS
    lenis.on('scroll', () => {
      AOS.refresh();
    });

    // ۳. حلقه انیمیشن برای رندر روان
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // ۴. پاکسازی هنگام آن‌مانت شدن
    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <>
      <div className="w-full  flex flex-col gap-40  h-[600px] main">
        <AppNav />
        <MainApp />
      </div>
      <Carts_section1 />
      <TrustHomePage />
      <ProductInto_Homepage />
      <About_Homepage />
      <Footer />
    </>
  );
}
