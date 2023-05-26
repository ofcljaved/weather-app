import Image from "next/image";
import SearchBar from "./SearchBar";

function Icon({ src, alt }) {
  return (
    <div className="relative w-14 h-14 bg-slate-500 rounded-full grid place-items-center">
      <Image src={`/${src}`} width={30} height={30} alt={alt} />
    </div>
  );
}

export default function Header() {
  return (
    <header className="flex justify-between items-start">
      <SearchBar />
      <div className="flex gap-5">
        <Icon src={"github.svg"} alt={"Github Icon"} />
        <Icon src={"dark_theme.svg"} alt={"Dark Theme Icon"} />
        <div className="logo bg-orange-500 px-4 pt-3 pb-20">
          <p className="text-5xl font-bold tracking-wider text-center">
            Weather <br /> 360
          </p>
        </div>
      </div>
    </header>
  );
}
