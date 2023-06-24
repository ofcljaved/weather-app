import Recent from "./Recent";

export default function SearchContent() {
  const recent = false;
  return (
    <div className="grid">
      {recent ? (
        <div className="grid gap-2.5 content-start">
          <h3 className="text-xl text-[--modal-primary-text] uppercase tracking-wider mx-6 my-3.5 font-semibold">
            Recent
          </h3>
          <Recent />
          <Recent />
          <Recent />
        </div>
      ) : (
        <p className="mt-10 text-xl text-[--modal-primary-text] tracking-wide text-center">
          No recent searches
        </p>
      )}
    </div>
  );
}
