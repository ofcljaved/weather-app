import Image from 'next/image';
import SearchBar from './SearchBar';
import { lato } from '@/utils/font';

function Icon({ src, alt, link }) {
  return (
    <a
      href={link}
      target="_blank"
      className="w-11 lg:w-14 h-11 lg:h-14 bg-[--glass-bg] rounded-full grid place-items-center cursor-pointer"
    >
      <Image
        src={`/icon/${src}`}
        width={30}
        height={30}
        alt={alt}
        className="w-6 h-6 lg:w-auto lg:h-auto"
      />
    </a>
  );
}

export default function Header() {
  return (
    <header className="grid grid-cols-1 justify-items-start items-start grid-flow-col gap-2.5 lg:gap-5 mx-5 md:mx-0">
      <SearchBar />
      {/* <div className="flex gap-5 flex-row-reverse lg:flex-row"> */}
      <Icon
        src={'github.svg'}
        alt={'Github Icon'}
        link={'https://github.com/Ofcl-Javed'}
      />
      <Icon
        src={'dark_theme.svg'}
        alt={'Dark Theme Icon'}
        link={'https://github.com/Ofcl-Javed'}
      />
      <div
        className={`${lato.className} logo bg-[--primary-color] px-4 pt-3 lg:pt-4 pb-12 lg:pb-20 -mt-4 lg:-mt-6 -mx-5 lg:mx-0 col-start-1 lg:col-start-auto`}
      >
        <p className="text-2xl lg:text-4xl font-bold tracking-wider text-center">
          WEATHER <br /> 360
        </p>
      </div>
      {/* </div> */}
    </header>
  );
}
