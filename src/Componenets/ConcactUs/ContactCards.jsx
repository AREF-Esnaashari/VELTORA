const contactItems = [
  { title: 'دفتر مرکزی', value: 'کرمان، خیابان...' },
  { title: 'تماس تلفنی', value: '0912xxxxxxx' },
  { title: 'ایمیل', value: 'info@veltora.com' },
  { title: 'ساعات پاسخگویی', value: 'شنبه تا پنجشنبه، 9 تا 21' },
];

function ContactCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
      {contactItems.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-3 bg-[#1c1c1c] border border-[#2a2a2a] rounded-xl p-4"
        >
          <div className="animate-none lg:animate-ping w-4 h-5 rounded-full bg-[#EF9F27]/15 flex items-center justify-center">
            <span className="w-4 h-4 rounded-full bg-[#EF9F27]" />
          </div>
          <div>
            <p className="text-[#f2f2ee] text-sm font-medium">{item.title}</p>
            <p className="text-[#b5b3ac] text-xs mt-1">{item.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ContactCards;
