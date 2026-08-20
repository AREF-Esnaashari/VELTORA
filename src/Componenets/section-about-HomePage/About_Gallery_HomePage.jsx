export default function About_Gallery_HomePage({ icons, indexSelected, setIndexSelected }) {
  return (
    <div className="container mx-auto mt-0 aboutPage h-[400px] flex justify-center items-end ">
      {icons.map((item) => {
        let Component = item.icon;
        return (
          <button
            key={item.id}
            onClick={() => {
              setIndexSelected(item.id);
            }}
            className={`p-4 rounded-full flex items-center justify-center mx-1.5  hover:scale-110 cursor-pointer active:scale-98 transition-all shadow-amber-900 ${indexSelected === item.id ? `bg-[#EF9F27] text-[#e0dada]` : `bg-black/90 text-[#f2f2ee]/70`} `}
          >
            <Component size={20} />
          </button>
        );
      })}
    </div>
  );
}

// p-4 rounded-full flex items-center justify-center mx-1.5  hover:scale-110 cursor-pointer active:scale-98 transition-all shadow-amber-900

// not slected:bg-black/90 text-[#f2f2ee]/70

// selected:
// bg-[#EF9F27] text-[#141414]
