import { lato } from '@/utils/font';

export default function MainContent() {
  return (
    <div
      className={`${lato.className} col-span-full lg:col-auto row-[1/3] lg:row-auto font-bold grid gap-6 lg:gap-5 content-start lg:content-center tracking-widest px-6 lg:px-0 text-center lg:text-left mt-10 lg:mt-0 z-10`}
    >
      <h1 className="text-4xl lg:text-5xl my-1">Weather 360</h1>
      <h2 className="text-3xl lg:text-4xl max-w-[23ch] text-center lg:text-left">
        Your Ultimate Source for Accurate Weather Information
      </h2>
      <button className="px-6 py-3 lg:py-4 bg-[--primary-color] rounded-full lg:rounded-xl lg:justify-self-start relative">
        <img
          src="/icon/point_arrow.svg"
          alt="Point toward search"
          className="absolute bottom-2/3 right-[calc(100%+1rem)] hidden lg:block"
        />
        <span className="text-2xl tracking-wider">Get Live Updates</span>
      </button>
    </div>
  );
}
