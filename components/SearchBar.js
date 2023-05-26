import Image from "next/image";
import KeyboardKey from "./KeyboardKey";

export default function SearchBar() {
  return (
    <div className="flex items-center px-4 py-3 bg-slate-500 rounded-xl gap-4 cursor-pointer">
      <Image src="/search.svg" alt="Search Icon" width={30} height={30} />
      <input
        type="text"
        placeholder="Search locations..."
        className="w-48 bg-transparent text-lg placeholder:text-[--primary-text] cursor-pointer"
      />
      <div className="flex gap-3">
        <KeyboardKey label={"Ctrl"} className="px-3" />
        <KeyboardKey label={"K"} className="px-4" />
      </div>
    </div>
  );
}
