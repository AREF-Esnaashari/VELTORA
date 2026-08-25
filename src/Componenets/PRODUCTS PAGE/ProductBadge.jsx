// بج وضعیت محصول (بالای کارت)
// status یکی از این مقادیره: 'new' | 'like-new' | 'used'
const STATUS_CONFIG = {
  new: {
    label: 'نو',
    className:
      'border-emerald-400/30 bg-emerald-400/10 text-emerald-300 shadow-[0_0_15px_-3px_rgba(52,211,153,0.5)]',
    dot: 'bg-emerald-300',
  },
  'like-new': {
    label: 'در حد نو',
    className:
      'border-[#EF9F27]/30 bg-[#EF9F27]/10 text-[#EF9F27] shadow-[0_0_15px_-3px_rgba(239,159,39,0.5)]',
    dot: 'bg-[#EF9F27]',
  },
  used: {
    label: 'استوک',
    className:
      'border-sky-400/30 bg-sky-400/10 text-sky-300 shadow-[0_0_15px_-3px_rgba(56,189,248,0.5)]',
    dot: 'bg-sky-300',
  },
};

export default function ProductBadge({ status }) {
  const config = STATUS_CONFIG[status];
  if (!config) return null;

  return (
    <span
      className={`absolute top-3 left-3 z-10 inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-bold backdrop-blur-md ${config.className}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${config.dot}`} />
      {config.label}
    </span>
  );
}
