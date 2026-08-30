function ContactHero() {
  return (
    <div className="text-right shadow-amber-500">
      <span className="inline-block bg-[#EF9F27]/10 font-bold animate-pulse  text-[#fc9700] text-sm px-3 py-1 rounded-full mb-4">
        تماس با ما
      </span>
      <h1 className="text-4xl md:text-5xl font-bold text-[#f2f2ee] mb-3">
        در ارتباط باشید با تیم <p className="font-bold font-syne inline-block  text-5xl text-amber-500">VELTORA</p>
      </h1>
      <p className="text-[#b5b3ac] text-sm md:text-base leading-7 max-w-md">
        فرم
        <span className="md:hidden"> زیر </span>
        <span className="hidden md:inline"> سمت چپ </span>
        را پر کنید، تیم پشتیبانی ولتورا در سریع‌ترین زمان ممکن با شما تماس می‌گیرد.
      </p>
    </div>
  );
}

export default ContactHero;
