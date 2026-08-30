export default function ProductGridGraphic({ className = '' }) {
  return (
    <div className={`bg-[#f2f2ee] p-3 ${className}`}>
      <div
        className="grid gap-2 w-full h-full min-h-[260px]"
        style={{
          gridTemplateColumns: '1fr 1fr 1fr',
          gridTemplateRows: '1fr 1.5fr 1fr',
          gridTemplateAreas: `
            "orange cyan  cyan"
            "magenta crimson blue"
            "green   green  blue"
          `,
        }}
      >
        <div style={{ gridArea: 'orange' }} className="bg-[#EF9F27]">
          <img src="./s.png" className="h-full w-full" alt="" />
        </div>
        <div style={{ gridArea: 'cyan' }} className="bg-[#1FC8E3]">
          {' '}
          <img src="./s.png" className="h-full w-full" alt="" />
        </div>
        <div style={{ gridArea: 'magenta' }} className="bg-[#C817E8]">
          <img src="./s.png" className="h-full w-full" alt="" />
        </div>
        <div style={{ gridArea: 'crimson' }} className="bg-[#E8174B]">
          <img src="./s.png" className="h-full w-full" alt="" />
        </div>
        <div style={{ gridArea: 'blue' }} className="bg-[#2440D6]">
          <img src="./s.png" className="h-full w-full" alt="" />
        </div>
        <div style={{ gridArea: 'green' }} className="bg-[#3DCB1E]">
          <img src="./s.png" className="h-full w-full" alt="" />
        </div>
      </div>
    </div>
  );
}
