// بج وضعیت محصول (بالا-چپ کارت)
// status یکی از این مقادیره: 'new' | 'like-new' | 'used'
const STATUS_LABELS = {
  new: 'نو',
  'like-new': 'در حد نو',
  used: 'استوک',
};

export default function ProductBadge({ status }) {
  if (!status || !STATUS_LABELS[status]) return null;

  return (
    <span className="absolute top-3 left-3 rounded-full bg-[#EF9F27] px-3 py-1 text-xs font-bold text-[#141414]">
      {STATUS_LABELS[status]}
    </span>
  );
}
