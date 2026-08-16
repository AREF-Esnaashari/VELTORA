import { ShieldCheck, ThumbsUp, Users, BadgeCheck } from 'lucide-react';

const iconMap = {
  0: { Icon: ShieldCheck, color: 'text-green-500', ring: 'ring-green-100' },
  1: { Icon: ThumbsUp, color: 'text-blue-500', ring: 'ring-blue-100' },
  2: { Icon: Users, color: 'text-purple-500', ring: 'ring-purple-100' },
  3: { Icon: BadgeCheck, color: 'text-amber-500', ring: 'ring-amber-100' },
};

export default function Cart_section1({ data }) {
  const { Icon, color, ring } = iconMap[data.id];

  return (
    <div className="group flex flex-col bg-white items-center gap-4 p-4 sm:p-6 rounded-2xl shadow-lg shadow-black/10 border border-black/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <img
        src={data.imgCart}
        alt={data.description}
        className="w-24 h-24 sm:w-28 sm:h-28 md:w-40 md:h-32 object-contain transition-transform duration-300 group-hover:scale-105"
      />
      <div className="flex items-center gap-2">
        <span className="text-black text-sm sm:text-base font-medium">{data.description}</span>
        <span
          className={`flex items-center justify-center rounded-full p-1.5 ring-4 ${ring} bg-white`}
        >
          <Icon className={color} size={18} />
        </span>
      </div>
    </div>
  );
}
