function ContactSocial() {
  return (
    <div className="flex justify-center gap-4 my-10 ">
      <div className="w-36 bg-[#1c1c1c] border border-[#2a2a2a] rounded-xl py-4 text-center">
        <div className="w-8 animate-none lg:animate-ping h-8 rounded-full bg-[#EF9F27]/15 mx-auto mb-2 flex items-center justify-center">
          <span className="w-3 h-3 rounded-full bg-[#EF9F27]" />
        </div>
        <p className="text-[#b5b3ac] text-xs">اینستاگرام</p>
      </div>

      <div className="w-36 bg-[#1c1c1c]  border border-[#2a2a2a] rounded-xl py-4 text-center">
        <div className="w-8 h-8 rounded-full animate-none lg:animate-ping bg-[#EF9F27]/15 mx-auto mb-2 flex items-center justify-center">
          <span className="w-3 h-3 rounded-full bg-[#EF9F27]" />
        </div>
        <p className="text-[#b5b3ac] text-xs">تلگرام</p>
      </div>
    </div>
  );
}

export default ContactSocial;
