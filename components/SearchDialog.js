"use client";

import SearchContent from "@/components/SearchContent";
import SearchInput from "@/components/SearchInput";

import useStore from "@/hooks/useStore";

export default function SearchDialog({ children }) {
  const { dialog } = useStore();

  return (
    <dialog
      ref={dialog}
      className="backdrop:bg-[--blur-bg] backdrop:backdrop-blur-md open:grid w-2/3 max-w-4xl p-0 bg-[--bg-color] rounded-2xl h-3/4 max-h-[40rem] grid-rows-[max-content_max-content_auto_max-content] -top-[10%]"
    >
      <SearchInput />
      <SearchContent />
      {children}
    </dialog>
  );
}
