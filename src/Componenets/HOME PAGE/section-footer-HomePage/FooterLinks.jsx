
import { Link } from 'react-router';
import {  Send, MessageCircle } from 'lucide-react';

export const FooterLinks = () => {
  const footerData = {
    product: [
      { title: 'لپ‌تاپ استوک', href: '/products/laptops' },
      { title: 'قطعات و لوازم', href: '/products/parts' },
      { title: 'تخفیف‌های ویژه', href: '/discounts' },
      { title: 'جدیدترین‌ها', href: '/new-arrivals' },
    ],
    resources: [
      { title: 'راهنمای خرید', href: '/guide' },
      { title: 'شرایط گارانتی', href: '/warranty' },
      { title: 'وبلاگ و مقالات', href: '/blog' },
      { title: 'سوالات متداول', href: '/faq' },
    ],
    company: [
      { title: 'درباره ولتورا', href: '/about' },
      { title: 'تماس با ما', href: '/contact' },
      { title: 'فرصت‌های شغلی', href: '/careers' },
      { title: 'همکاری با ما', href: '/partnership' },
    ],
  };

  return (
    <div className="mt-8 rounded-3xl bg-neutral-900/60 border border-neutral-800/80 p-8 md:p-12 text-neutral-300">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-neutral-800">
        {/* Brand info */}
        <div className="md:col-span-5 space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black text-amber-500">Voltora</span>
            <span className="text-xl font-bold text-white">ولتورا</span>
          </div>
          <p className="text-sm text-neutral-400 leading-relaxed max-w-sm">
            ولتورا؛ ارائه‌دهنده انواع دستگاه‌های الکترونیکی و لپ‌تاپ استوک با تست دقیق، گارانتی
            معتبر و پشتیبانی کامل.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3 text-neutral-400 pt-2">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-neutral-800/50 hover:bg-neutral-800 hover:text-amber-500 transition-all"
              aria-label="Instagram"
            >
              {/* <Instagram className="w-5 h-5" /> */}
            </a>
            <a
              href="https://t.me"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-neutral-800/50 hover:bg-neutral-800 hover:text-amber-500 transition-all"
              aria-label="Telegram"
            >
              <Send className="w-5 h-5" />
            </a>
            <a
              href="https://whatsapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-neutral-800/50 hover:bg-neutral-800 hover:text-amber-500 transition-all"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-neutral-800/50 hover:bg-neutral-800 hover:text-amber-500 transition-all"
              aria-label="GitHub"
            >
              {/* <Github className="w-5 h-5" /> */}
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6">
          <div>
            <h3 className="font-semibold text-white mb-4">محصولات</h3>
            <ul className="space-y-2.5 text-sm">
              {footerData.product.map((item, idx) => (
                <li key={idx}>
                  <Link to={item.href} className="hover:text-amber-400 transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">راهنما و منابع</h3>
            <ul className="space-y-2.5 text-sm">
              {footerData.resources.map((item, idx) => (
                <li key={idx}>
                  <Link to={item.href} className="hover:text-amber-400 transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">ولتورا</h3>
            <ul className="space-y-2.5 text-sm">
              {footerData.company.map((item, idx) => (
                <li key={idx}>
                  <Link to={item.href} className="hover:text-amber-400 transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
        <p>©  ولتورا. تمامی حقوق محفوظ است.</p>
        <div className="flex gap-6">
          <Link to="/privacy" className="hover:text-neutral-300 transition-colors">
            حریم خصوصی
          </Link>
          <Link to="/terms" className="hover:text-neutral-300 transition-colors">
            قوانین و مقررات
          </Link>
          <Link to="/cookies" className="hover:text-neutral-300 transition-colors">
            تنظیمات کوکی
          </Link>
        </div>
      </div>
    </div>
  );
};
