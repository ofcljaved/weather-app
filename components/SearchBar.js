"use client";

import Image from "next/image";
import KeyboardKey from "./KeyboardKey";

export default function SearchBar() {
  const openModal = (event) => {
    document.querySelector("dialog").showModal();
  };
  return (
    <button
      onClick={openModal}
      className="flex items-center text-start px-3.5 py-2.5 bg-[--glass-bg] rounded-xl gap-4 cursor-pointer"
    >
      <Image src="/icon/search.svg" alt="Search Icon" width={30} height={30} />
      <span className="w-48 text-[--tertiary-text] text-lg">
        Search locations...
      </span>
      <div className="flex gap-3">
        <KeyboardKey label={"Ctrl"} paddingX="px-1.5" />
        <KeyboardKey label={"K"} paddingX="px-2.5" />
      </div>
    </button>
  );
}
