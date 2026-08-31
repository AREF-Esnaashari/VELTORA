import { useState } from 'react';

const faqItems = [
  { question: 'زمان ارسال سفارش چقدر است؟', answer: 'معمولاً بین 2 تا 5 روز کاری.', indexFaq: 0 },
  {
    question: 'گارانتی محصولات چگونه است؟',
    answer: 'بسته به نوع محصول، از 3 تا 18 ماه.',
    indexFaq: 1,
  },
  {
    question: 'چطور سفارشم را پیگیری کنم؟',
    answer: 'از طریق پنل کاربری یا تماس تلفنی.',
    indexFaq: 2,
  },
  { question: 'امکان مرجوعی کالا وجود دارد؟', answer: 'بله، تا 7 روز پس از تحویل.', indexFaq: 3 },
];

function ContactFAQ() {
  let [indexSelected, setIndexSelected] = useState(null);

  function handelClick(ids) {
    setIndexSelected((prev) => (prev == ids ? null : ids));
  }
  return (
    <div className="mt-10">
      <h2 className="text-[#f2f2ee] text-lg font-semibold mb-5">سوالات متداول</h2>
      <div className="space-y-3">
        {faqItems.map((item, index) => (
          <>
            <div
              key={index}
              className="bg-[#1c1c1c] border border-[#2a2a2a] rounded-lg px-4 py-3 flex items-center justify-between cursor-pointer"
              onClick={() => {
                handelClick(index);
              }}
            >
              <span className="text-[#f2f2ee] text-sm">{item.question}</span>
              <span className="text-[#b5b3ac] text-xs">+</span>
            </div>

            {indexSelected === index ? (
              <div className="w-full mt-2 p-4 bg-[#EF9F27]/10 border border-[#EF9F27]/30 rounded-xl">
                <p className="text-[#f2f2ee] leading-relaxed" key={index}>
                  {item.answer}
                </p>
              </div>
            ) : (
              ''
            )}
          </>
        ))}
      </div>
    </div>
  );
}

export default ContactFAQ;
