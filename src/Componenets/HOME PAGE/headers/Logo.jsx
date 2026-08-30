import { Link } from "react-router";


export default function Logo() {
  return (
    <Link to="/">
      <h1 className="text-2xl text-center font-syne font-bold uppercase">
        Veltora
        <span className="block font-mono">ولتورا</span>
      </h1>
    </Link>
  );
}
