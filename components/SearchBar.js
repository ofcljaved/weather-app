'use client';
import Image from 'next/image';
import KeyboardKey from './KeyboardKey';
import useStore from '@/hooks/useStore';

export default function SearchBar() {
  const { dialog } = useStore();
  const openModal = () => {
    dialog.current.showModal();
  };

  return (
    <button
      onClick={openModal}
      className="flex items-center justify-center lg:justify-normal text-start bg-[--glass-bg] w-11 h-11 lg:w-auto lg:h-auto rounded-full lg:rounded-xl lg:gap-4 lg:px-3.5 lg:py-2.5"
    >
      <Image
        src="/icon/search.svg"
        alt="Search Icon"
        width={30}
        height={30}
        className="w-6 h-6 lg:w-auto lg:h-auto"
      />

      <span className="hidden lg:inline w-48 text-[--tertiary-text] text-lg">
        Search locations...
      </span>
      <div className="hidden lg:flex gap-3">
        <KeyboardKey label={'Ctrl'} paddingX="px-1.5" />
        <KeyboardKey label={'K'} paddingX="px-2.5" />
      </div>
    </button>
  );
}
