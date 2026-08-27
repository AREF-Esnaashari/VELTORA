export default function CurvedIcon({ className = '', size = 28 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 30 28"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M8 4C8 5 20 8 20 17C20 22 12 24 8 22C13 22 16 18 16 17C16 8 8 6 8 4Z"
        fill="#EF9F27"
      />
    </svg>
  );
}
