"use client";
import SearchItem from "./SearchItem";
import useStore from "@/hooks/useStore";

const NotFound = ({ text }) => (
  <p className="mt-10 text-xl text-[--modal-primary-text] tracking-wide text-center">
    {text}
  </p>
);

export default function SearchContent({ parentRef }) {
  const { value, searchResult, selected, selectSearch } = useStore();

  const recent = null;
  if (value || searchResult) {
    return (
      <>
        <h3 className="text-xl text-[--modal-primary-text] uppercase tracking-wider mx-6 my-3.5 font-semibold">
          {value ? "Location" : "Recent"}
        </h3>
        <div
          ref={parentRef}
          className="grid gap-2.5 content-start overflow-auto pb-10"
        >
          {searchResult?.error && <NotFound text={searchResult.error} />}
          {searchResult?.result &&
            searchResult.result.map((location, index) => (
              <SearchItem
                type={value ? "location" : "history"}
                location={location}
                key={location._id}
                active={selected === index}
                index={index}
                onClick={selectSearch}
              />
            ))}
        </div>
      </>
    );
  }
  return <NotFound text={"No recent searches"} />;
}
