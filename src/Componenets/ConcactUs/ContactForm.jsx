function ContactForm() {
  return (
    <form className="bg-[#1c1c1c] border border-[#2a2a2a] rounded-2xl p-6 space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[#b5b3ac] text-sm mb-2 ">نام</label>
          <input
            type="text"
            placeholder="نام خود را وارد کنید"
            className="w-full  bg-[#141414] border border-[#2a2a2a] rounded-lg px-4 py-2 text-[#f2f2ee] text-sm outline-none duration-300  focus:border-[#f39405]"
          />
        </div>
        <div>
          <label className="block text-[#b5b3ac] text-sm mb-2">شماره تماس</label>
          <input
            type="text"
            placeholder="09xxxxxxxxx"
            className="w-full bg-[#141414] border border-[#2a2a2a] rounded-lg px-4 py-2 text-[#f2f2ee] text-sm outline-none duration-300  focus:border-[#EF9F27]"
          />
        </div>
      </div>

      <div>
        <label className="block text-[#b5b3ac] text-sm mb-2">ایمیل</label>
        <input
          type="email"
          placeholder="example@email.com"
          className="w-full bg-[#141414] duration-300  border border-[#2a2a2a] rounded-lg px-4 py-2 text-[#f2f2ee] text-sm outline-none focus:border-[#EF9F27]"
        />
      </div>

      <div>
        <label className="block text-[#b5b3ac]  text-sm mb-2">موضوع</label>
        <select className="w-full bg-[#141414] border border-[#2a2a2a] rounded-lg px-4 py-2 text-[#f2f2ee] text-sm outline-none duration-300  focus:border-[#EF9F27]">
          <option>پشتیبانی فنی</option>
          <option>سوال قبل از خرید</option>
          <option>شکایت</option>
          <option>همکاری</option>
        </select>
      </div>

      <div>
        <label className="block text-[#b5b3ac] text-sm mb-2">پیام</label>
        <textarea
          rows={4}
          placeholder="پیام خود را بنویسید..."
          className="w-full bg-[#141414] border border-[#2a2a2a] rounded-lg px-4 py-2 text-[#f2f2ee] text-sm outline-none duration-300  focus:border-[#EF9F27] resize-none"
        />
      </div>

      <button type="submit" onClick={(e)=>{e.preventDefault()}} className="bg-[#EF9F27] text-[#141414] font-semibold cursor-pointer hover:scale-95 text-sm px-6 py-2.5 rounded-lg hover:opacity-90 duration-300  transition">
        ارسال پیام
      </button>
    </form>
  );
}

export default ContactForm;
