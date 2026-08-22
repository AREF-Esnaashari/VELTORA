import React from 'react';
import { Link } from 'react-router';

const navSections = [
  {
    title: 'محصولات',
    links: [
      { label: 'اشتراک کارشناسی', path: '/commingsoon' },
      { label: 'صفحه اصلی برند', path: '/' },
      { label: 'جلسه های تست', path: '/commingsoon' },
      { label: 'توضیحات لپ‌تاپ‌ها', path: '/commingsoon' },
    ],
  },
  {
    title: 'راهنما و منابع',
    links: [
      { label: 'راهنمای خرید', path: '/commingsoon' },
      { label: 'فرآیند کارشناسی', path: '/commingsoon' },
      { label: 'تست‌های داخلی', path: '/commingsoon' },
      { label: 'سوالات متداول', path: 'commingsoon' },
    ],
  },
  {
    title: 'ولتورا',
    links: [
      { label: 'درباره ولتورا', path: '/commingsoon' },
      { label: 'تماس با ما', path: '/commingsoon' },
      { label: 'لیست های داخلی', path: '/commingsoon' },
      { label: 'همکاری با ما', path: '/commingsoon' },
    ],
  },
];

const FooterLinks = () => {
  return (
    <div className="grid grid-cols-3 gap-6 text-right">
      {navSections.map((sec, idx) => (
        <div key={idx} className="flex flex-col gap-3">
          <h4 className="text-xs font-bold text-white tracking-wider">{sec.title}</h4>
          <ul className="flex flex-col gap-2">
            {sec.links.map((link, i) => (
              <li key={i}>
                <Link
                  to={link.path}
                  className="text-xs text-neutral-400 hover:text-amber-400 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FooterLinks;
