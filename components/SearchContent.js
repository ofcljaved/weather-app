import SearchItem from "./SearchItem";

export default function SearchContent({ content }) {
  console.log(content, "line 4 file SearchContent");
  const recent = false;
  return (
    <div className="grid">
      {recent || content ? (
        <div className="grid gap-2.5 content-start">
          <h3 className="text-xl text-[--modal-primary-text] uppercase tracking-wider mx-6 my-3.5 font-semibold">
            {recent ? "Recent" : "Location"}
          </h3>
          <SearchItem type={"history"} />
          <SearchItem type={"history"} />
          <SearchItem type={"history"} />
        </div>
      ) : (
        <p className="mt-10 text-xl text-[--modal-primary-text] tracking-wide text-center">
          No recent searches
        </p>
      )}
    </div>
  );
}
