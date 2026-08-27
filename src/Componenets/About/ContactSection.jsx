import { useState } from 'react';

export default function ContactSection() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: اتصال به سرویس ارسال پیام
    console.log(form);
  };

  const inputClass =
    'w-full bg-[#f2f2ee] text-[#141414] placeholder:text-[#8a8a86] text-sm px-4 py-3 rounded-sm outline-none focus:ring-2 focus:ring-[#EF9F27] text-right';

  return (
    <section dir="rtl" className="container mt-0 mx-auto px-6 md:px-16 py-20">
      {/* Frame 124 */}
      <div className="cursor-pointer flex justify-center items-center  bg-[#EF9F27] text-[#fafafa] text-xl  px-12 py-5 rounded-full mb-10">
        <h1 className="">منتظر پیام شما هستیم</h1>
      </div>

      <div className="flex flex-col md:flex-row-reverse gap-8">
        {/* Frame 133 - فرم */}
        <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-3">
          <div className="flex gap-3">
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              placeholder="نام خانوادگی"
              className={inputClass}
            />
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              placeholder="نام"
              className={inputClass}
            />
          </div>

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="ایمیل :"
            className={inputClass}
          />

          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="شماره تماس:"
            className={inputClass}
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="پیام شما"
            rows={5}
            className={`${inputClass} resize-none`}
          />

          <button
            type="submit"
            className="mt-2 bg-[#EF9F27] text-[#141414] font-bold text-sm px-6 py-3 rounded-sm self-start hover:opacity-90 transition"
          >
            ارسال پیام
          </button>
        </form>

        {/* Frame 125 - جای عکس */}
        <div className="flex-1 max-w-xs w-full">
          <div className="w-full h-full min-h-[320px] flex hidden lg:flex bg-[#f2f2ee] rounded-sm" />
        </div>
      </div>
    </section>
  );
}
