import ContactHero from '../Componenets/ConcactUs/ContactHero';
import ContactCards from '../Componenets/ConcactUs/ContactCards';
import ContactForm from '../Componenets/ConcactUs/ContactForm';
import ContactMap from '../Componenets/ConcactUs/ContactMap';
import ContactFAQ from '../Componenets/ConcactUs/ContactFAQ';
import ContactSocial from '../Componenets/ConcactUs/ContactSocial';
import Footer from '../Componenets/HOME PAGE/section-footer-HomePage/Footer';
import AppNav from './AppNav';

function ContactPage() {
  return (
    <>
      <AppNav />
      <div className="container mt-0 mx-auto min-h-screen px-4 md:px-16 py-16" dir="rtl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <ContactHero />
            <ContactCards />
          </div>
          <ContactForm />
        </div>

        <ContactMap />
        <ContactFAQ />
        <ContactSocial />
        <Footer />
      </div>
    </>
  );
}

export default ContactPage;
