import useStore from "@/hooks/useStore";
import Image from "next/image";

export default function SearchInput({ onKeyDown }) {
  const { value, onChange } = useStore();

  const handleClick = () => {
    onChange("");
  };

  return (
    <div className="p-6 shadow-line-down">
      <div className="px-5 py-2.5 grid grid-cols-[max-content_auto_max-content] gap-5 bg-[--bg-modal-color] rounded-xl">
        <Image
          src="/icon/input_search.svg"
          alt="Search Icon"
          width={30}
          height={30}
        />
        <input
          type="text"
          placeholder="Search locations..."
          className="text-xl bg-[--bg-modal-color] outline-none font-medium text-[--modal-primary-text] placeholder:text-[--modal-secondary-text] tracking-wide"
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
        <button>
          <Image
            src="/icon/close.svg"
            alt="Search Icon"
            width={30}
            height={30}
            onClick={handleClick}
          />
        </button>
      </div>
    </div>
  );
}
