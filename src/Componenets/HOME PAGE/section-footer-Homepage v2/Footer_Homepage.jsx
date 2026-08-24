import React from 'react';
import FooterBrand from './FooterBrand';
import FooterLinks from './FooterLinks';
import FooterContact from './FooterContact';
import FooterBottom from './FooterBottom';

const Footer_Homepage = () => {
  return (
    <footer className="w-full bg-neutral-950 border-t border-neutral-900 pt-12" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <FooterBrand />
          <div className="lg:col-span-2">
            <FooterLinks />
          </div>
          <FooterContact />
        </div>
      </div>
      <FooterBottom />
    </footer>
  );
};

export default Footer_Homepage;
