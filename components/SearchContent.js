"use client";
import SearchItem from "./SearchItem";
import useStore from "@/hooks/useStore";

const NotFound = ({ text }) => (
  <p className="mt-10 text-xl text-[--modal-primary-text] tracking-wide text-center">
    {text}
  </p>
);

export default function SearchContent({ parentRef, handleClick }) {
  const { searchResult, selected } = useStore();
  const recent = null;
  if (recent || searchResult) {
    return (
      <>
        <h3 className="text-xl text-[--modal-primary-text] uppercase tracking-wider mx-6 my-3.5 font-semibold">
          {searchResult ? "Location" : "Recent"}
        </h3>
        <div
          ref={parentRef}
          className="grid gap-2.5 content-start overflow-auto pb-10"
        >
          {searchResult?.error && <NotFound text={searchResult.error} />}
          {searchResult?.result &&
            searchResult.result.map((location, index) => (
              <SearchItem
                type={"location"}
                location={location}
                key={location._id}
                active={selected === index}
                index={index}
                onClick={handleClick}
              />
            ))}
          {!searchResult &&
            recent.map((location) => (
              <SearchItem
                type={"history"}
                location={location}
                key={location._id}
                onClick={handleClick}
              />
            ))}
        </div>
      </>
    );
  }
  return <NotFound text={"No recent searches"} />;
}
