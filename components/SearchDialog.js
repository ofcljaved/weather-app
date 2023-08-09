"use client";

import SearchContent from "@/components/SearchContent";
import SearchInput from "@/components/SearchInput";

import useStore from "@/hooks/useStore";
import useKeyNavigation from "@/hooks/useKeyNavigation";

export default function SearchDialog({ children }) {
  const { dialog, value, onChange, selectSearch } = useStore();
  const { parentRef, onKeyDown } = useKeyNavigation();

  const closeOnOutsideClick = (e) => {
    const dialogDimensions = dialog.current.getBoundingClientRect();
    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
      dialog.current.close();
    }
  };
  return (
    <dialog
      ref={dialog}
      onClick={closeOnOutsideClick}
      className="backdrop:bg-[--blur-bg] backdrop:backdrop-blur-md open:grid w-2/3 max-w-4xl p-0 bg-[--bg-color] rounded-2xl h-3/4 max-h-[40rem] grid-rows-[max-content_max-content_auto_max-content] -top-[10%]"
    >
      <SearchInput value={value} onChange={onChange} onKeyDown={onKeyDown} />
      <SearchContent parentRef={parentRef} handleClick={selectSearch} />
      {children}
    </dialog>
  );
}
