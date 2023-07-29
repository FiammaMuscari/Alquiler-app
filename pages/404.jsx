import Link from "next/link";

export default function NotFound() {
  return (
    <div className="my-[15em] gap-3 flex items-center flex-col">
      <h2>La página que estás buscando no existe.</h2>
      <Link
        href="/"
        className="mb-4 px-4 py-2 bg-[#bdb5aaeb] font-bold text-white hover:text-[#444444] rounded-md hover:bg-[#d3cabeeb] focus:outline-none"
      >
        Ir al inicio
      </Link>
    </div>
  );
}
