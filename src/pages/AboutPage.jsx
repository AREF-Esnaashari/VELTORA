import AboutHero from '../Componenets/About/AboutHero';
import OurStory from '../Componenets/About/OurStory';
import SmartShopping from '../Componenets/About/SmartShopping';
import ContactSection from '../Componenets/About/ContactSection';
import AppNav from './AppNav';
import Footer from '../Componenets/HOME PAGE/section-footer-HomePage/Footer';

export default function AboutPage() {
  return (
    <main className=" min-h-screen mt-0 mx-auto container">
    
      <AppNav />
      <hr />
      <AboutHero />
      <OurStory />
      <SmartShopping />
      <ContactSection />
      <Footer />
    </main>
  );
}
