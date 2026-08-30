
import { CtaSection } from './CtaSection';
import { FooterLinks } from './FooterLinks';

export const Footer = () => {
  return (
    <footer className="w-full bg-[#1E1E1E] rounded-2xl pt-12 pb-8 dir-rtl" dir="rtl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <CtaSection />
        <FooterLinks />
      </div>
    </footer>
  );
};

export default Footer;
