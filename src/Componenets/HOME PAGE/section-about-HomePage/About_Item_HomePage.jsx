import { Link } from 'react-router';

export default function About_Item_HomePage({ aboutContent, indexSelected }) {
  const filtred = aboutContent.find((item) => item.iconId === indexSelected);

  if (!filtred) return null;

  const { id, title, text, link } = filtred;
  const Icon = filtred.icon;

  return (
    <div>
      <div className="mb-8 container h-auto" key={id}>
        {/* Title + Icon */}
        <div className="flex items-center gap-2 mb-2">
          <h3 className="text-3xl font-medium text-[#f2f2ee]">{title}</h3>

          <Icon size={30} className="text-[#F59E0B]" />
        </div>

        {/* Description */}
        <p className="text-md leading-8 text-[#f2f2ee]/90">{text}</p>

        {link && (
          <Link
            to={link.href}
            className="flex justify-end items-center gap-1 mt-6 text-xs text-[#F59E0B] underline underline-offset-4 hover:opacity-80 transition-opacity"
          >
            {link.text}
            <span>←</span>
          </Link>
        )}
      </div>
    </div>
  );
}
