import { lato } from "@/utils/font";

export default function MainContent() {
  return (
    <div
      className={`${lato.className} font-bold grid gap-5 content-center tracking-widest`}
    >
      <h1 className="text-5xl my-1">Weather 360</h1>
      <h2 className="text-4xl">
        Your Ultimate Source for Accurate Weather Information
      </h2>
      <button className="px-6 py-4 bg-[--primary-color] rounded-xl justify-self-start relative">
        <img
          src="/point_arrow.svg"
          alt="Point toward search"
          className="absolute bottom-2/3 right-[calc(100%+1rem)]"
        />
        <span className="text-2xl tracking-wider">Get Live Updates</span>
      </button>
    </div>
  );
}
