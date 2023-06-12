"use client";
import React, { useEffect, useRef } from "react";
import SearchInput from "./SearchInput";
import SearchFooter from "./SearchFooter";
import SearchContent from "./SearchContent";

export default function SearchDialog() {
  const dialog = useRef(null);

  useEffect(() => {
    dialog.current.showModal();
  }, []);

  return (
    <dialog
      ref={dialog}
      className="backdrop:bg-[--blur-bg] backdrop:backdrop-blur-md open:grid w-2/3 max-w-4xl p-0 bg-[--bg-color] rounded-2xl h-4/6 max-h-[40rem] grid-rows-[max-content_auto_max-content] -top-[10%]"
    >
      <SearchInput />
      <SearchContent />
      <SearchFooter />
    </dialog>
  );
}
