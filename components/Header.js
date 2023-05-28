import Image from "next/image";
import { Lato } from "next/font/google";
import SearchBar from "./SearchBar";

const lato = Lato({ weight: ["400", "700"], subsets: ["latin"] });

function Icon({ src, alt }) {
  return (
    <div className="relative w-14 h-14 bg-[--glass-bg] rounded-full grid place-items-center">
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
        <div
          className={`${lato.className} logo bg-[--primary-color] px-4 pt-4 pb-20 -mt-6`}
        >
          <p className="text-4xl font-bold tracking-wider text-center">
            WEATHER <br /> 360
          </p>
        </div>
      </div>
    </header>
  );
}
