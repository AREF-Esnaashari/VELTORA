
import { Link } from 'react-router';

const FooterBottom = () => {
  return (
    <div className="border-t border-neutral-900 py-4 mt-8" dir="rtl">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-neutral-500">
        <p>© ۱۴۰۵ ولتورا. تمامی حقوق محفوظ است.</p>
        <div className="flex items-center gap-4">
          <Link to="/commingsoon" className="hover:text-neutral-400 transition-colors">
            حریم خصوصی
          </Link>
          <Link to="/commingsoon" className="hover:text-neutral-400 transition-colors">
            قوانین و مقررات
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
