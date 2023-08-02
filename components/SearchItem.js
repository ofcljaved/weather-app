"use client";
import useStore from "@/hooks/useStore";
import Image from "next/image";
import React from "react";

export default function SearchItem({ type, location, active, onClick, index }) {
  const { setSelected } = useStore();

  return (
    <div
      className="grid grid-cols-[1fr_max-content] mr-6 gap-2.5 items-center"
      onMouseOver={() => setSelected(index)}
    >
      <button
        className={`grid grid-cols-[max-content_1fr] gap-2.5 items-center px-5 py-3.5 bg-[--bg-modal-color]  rounded-e-xl max-w-full ${
          active && "bg-red-500"
        }`}
        onClick={onClick}
      >
        <Image
          src={`/icon/${type}.svg`}
          alt="Search Icon"
          width={30}
          height={30}
        />
        <p className="text-lg font-medium tracking-wide text-[--tertiary-text] text-ellipsis overflow-hidden whitespace-nowrap text-start">
          {location.name}, {location.state.name}, {location.countryCode}
        </p>
      </button>
      {type === "location" ? (
        active && (
          <button>
            <Image
              src="/icon/enter.svg"
              alt="Search Icon"
              width={30}
              height={30}
            />
          </button>
        )
      ) : (
        <button>
          <Image
            src="/icon/close.svg"
            alt="Search Icon"
            width={30}
            height={30}
          />
        </button>
      )}
    </div>
  );
}
