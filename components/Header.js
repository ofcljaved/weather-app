import Image from "next/image";
import SearchBar from "./SearchBar";
import { lato } from "@/utils/font";

function Icon({ src, alt, link }) {
  return (
    <a
      href={link}
      target="_blank"
      className="relative w-14 h-14 bg-[--glass-bg] rounded-full grid place-items-center cursor-pointer"
    >
      <Image src={`/icon/${src}`} width={30} height={30} alt={alt} />
    </a>
  );
}

export default function Header() {
  return (
    <header className="flex justify-between items-start">
      <SearchBar />
      <div className="flex gap-5">
        <Icon
          src={"github.svg"}
          alt={"Github Icon"}
          link={"https://github.com/Ofcl-Javed"}
        />
        <Icon
          src={"dark_theme.svg"}
          alt={"Dark Theme Icon"}
          link={"https://github.com/Ofcl-Javed"}
        />
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
