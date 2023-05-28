import Image from "next/image";
import KeyboardKey from "./KeyboardKey";

export default function SearchBar() {
  return (
    <div className="flex items-center px-3.5 py-2.5 bg-[--glass-bg] rounded-xl gap-4 cursor-pointer">
      <Image src="/search.svg" alt="Search Icon" width={30} height={30} />
      <input
        type="text"
        placeholder="Search locations..."
        className="w-48 bg-transparent text-[--tertiary-text] text-lg placeholder:text-[--tertiary-text] cursor-pointer focus:outline-none"
      />
      <div className="flex gap-3">
        <KeyboardKey label={"Ctrl"} paddingX="px-1.5" />
        <KeyboardKey label={"K"} paddingX="px-2.5" />
      </div>
    </div>
  );
}
