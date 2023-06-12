import Image from "next/image";
import React from "react";

export default function Recent() {
  return (
    <button className="grid grid-cols-[max-content_1fr_max-content] gap-2.5 items-center px-5 py-3.5 bg-[--bg-modal-color] mr-6 rounded-e-2xl max-w-full">
      <Image src="/icon/history.svg" alt="Search Icon" width={30} height={30} />
      <p className="text-lg font-medium tracking-wide text-[--tertiary-text] text-ellipsis overflow-hidden whitespace-nowrap">
        New Delhi, Delhi, IN New Delhi, Delhi, INNew Delhi, Delhi, INNew Delhi,
        Delhi, INNew Delhi, Delhi, IN
      </p>
      <button className="justify-self-end">
        <Image src="/icon/close.svg" alt="Search Icon" width={30} height={30} />
      </button>
    </button>
  );
}
