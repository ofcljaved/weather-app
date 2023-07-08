import SearchItem from "./SearchItem";

const NotFound = ({ text }) => (
  <p className="mt-10 text-xl text-[--modal-primary-text] tracking-wide text-center">
    {text}
  </p>
);

export default function SearchContent({ content, selected, parentRef }) {
  const recent = null;
  if (recent || content) {
    return (
      <>
        <h3 className="text-xl text-[--modal-primary-text] uppercase tracking-wider mx-6 my-3.5 font-semibold">
          {content ? "Location" : "Recent"}
        </h3>
        <div
          ref={parentRef}
          className="grid gap-2.5 content-start overflow-auto pb-10"
        >
          {content?.error && <NotFound text={content.error} />}
          {content?.result &&
            content.result.map((location, index) => (
              <SearchItem
                type={"location"}
                location={location}
                key={location._id}
                active={selected === index}
              />
            ))}
          {!content &&
            recent.map((location) => (
              <SearchItem
                type={"history"}
                location={location}
                key={location._id}
              />
            ))}
        </div>
      </>
    );
  }
  return <NotFound text={"No recent searches"} />;
}
