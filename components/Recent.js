import Image from "next/image";
import React from "react";

export default function Recent() {
  return (
    <div className="grid grid-cols-[1fr_max-content] mr-6 gap-2.5 items-center">
      <button className="grid grid-cols-[max-content_1fr] gap-2.5 items-center px-5 py-3.5 bg-[--bg-modal-color]  rounded-e-xl max-w-full">
        <Image
          src="/icon/history.svg"
          alt="Search Icon"
          width={30}
          height={30}
        />
        <p className="text-lg font-medium tracking-wide text-[--tertiary-text] text-ellipsis overflow-hidden whitespace-nowrap">
          Delhi, Delhi, INNew Delhi, Delhi, IN Delhi, Delhi, INNew Delhi, Delhi,
          Delhi, Delhi, INNew Delhi, Delhi, IN Delhi, Delhi, INNew Delhi, Delhi,
          IN Delhi, Delhi, INNew Delhi, Delhi, IN Delhi, Delhi, INNew Delhi,
          Delhi, IN Delhi, Delhi, INNew Delhi, Delhi, IN IN New Delhi, Delhi, IN
          New Delhi
        </p>
      </button>
      <button>
        <Image src="/icon/close.svg" alt="Search Icon" width={30} height={30} />
      </button>
    </div>
  );
}
