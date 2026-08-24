import AppNav from './AppNav';
import { useContext, useEffect } from 'react';
import Lenis from 'lenis';
import AOS from 'aos';
// ⚠️ این دو خط CSS حتماً باید باشند:
import 'lenis/dist/lenis.css';
import 'aos/dist/aos.css';
import MainApp from '../Componenets/HOME PAGE/main/MainApp';
import Carts_section1 from '../Componenets/HOME PAGE/section-Carts-Home/Carts_section1';
// import TrustHomePage from '../Componenets/section-trust-HomePage/TrustHomePage';

import ProductInto_Homepage from '../Componenets/HOME PAGE/section-productIntro-Homepage/ProductInto_Homepage';
import About_Homepage from '../Componenets/HOME PAGE/section-about-HomePage/About_Homepage';

import Footer from '../Componenets/HOME PAGE/section-footer-HomePage/Footer';
import ExpertCertificateBanner from '../Componenets/HOME PAGE/Identity-Home/ExpertCertificateBanner';
import HowWeWork from '../Componenets/HOME PAGE/section-trust-HomePage/HowWeWork';
import GuaranteeSection from '../Componenets/HOME PAGE/section-about-HomePage/About_Homepage';
import OurMission_Homepage from '../Componenets/HOME PAGE/section-ourMission-Homepage/OurMission_Homepage';
import Footer_Homepage from '../Componenets/HOME PAGE/section-footer-Homepage v2/Footer_Homepage';
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
      <div className="w-full  items-center  flex flex-col gap-40  h-[600px] main">
        <AppNav />
        <MainApp />
      </div>
      <Carts_section1 />
      <ExpertCertificateBanner />
      {/* <TrustHomePage /> */}
      <HowWeWork />
      <ProductInto_Homepage />
      <GuaranteeSection />
      <OurMission_Homepage />
      {/* <Footer /> */}
      <Footer_Homepage />
    </>
  );
}
