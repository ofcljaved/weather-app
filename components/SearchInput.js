import useStore from '@/hooks/useStore';
import Image from 'next/image';

export default function SearchInput({ onKeyDown }) {
  const { value, onChange, dialog } = useStore();

  const handleClick = () => {
    onChange('');
  };

  const cancelHandler = () => {
    dialog.current.close();
  };
  return (
    <div className="flex gap-3.5 lg:block px-5 py-4 lg:p-6 shadow-line-down">
      <div className="flex-1 px-4 lg:px-5 py-2.5 grid grid-cols-[max-content_auto_max-content] gap-2.5 lg:gap-5 bg-[--bg-modal-color] rounded-xl items-center">
        <Image
          src="/icon/input_search.svg"
          alt="Search Icon"
          width={30}
          height={30}
          className="w-6 h-6 lg:w-auto lg:h-auto"
        />
        <input
          type="text"
          placeholder="Search locations..."
          className="text-base lg:text-xl bg-[--bg-modal-color] outline-none font-medium text-[--modal-primary-text] placeholder:text-[--modal-secondary-text] tracking-wide w-full"
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
            className="w-6 h-6 lg:w-auto lg:h-auto"
          />
        </button>
      </div>
      <button
        className="lg:hidden text-base text-[--modal-primary-text]"
        onClick={cancelHandler}
      >
        Cancel
      </button>
    </div>
  );
}
