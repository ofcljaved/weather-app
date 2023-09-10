function Key({ label }) {
  return (
    <button className="shadow-modal-key p-2 rounded-md text-xs">{label}</button>
  );
}
export default function SearchFooter() {
  return (
    <div className="hidden lg:flex gap-5 justify-end p-6 shadow-line-up self-end">
      <div className="flex gap-2.5 text-[--modal-primary-text] tracking-wide items-center">
        <Key label={<img src="/icon/enter.svg" alt="Enter" />} />
        <span>to select</span>
      </div>
      <div className="flex gap-2.5 text-[--modal-primary-text] tracking-wide items-center">
        <Key label={<img src="/icon/arrow_up.svg" alt="Up" />} />
        <Key label={<img src="/icon/arrow_down.svg" alt="Down" />} />
        <span>to navigate</span>
      </div>
      <div className="flex gap-2.5 text-[--modal-primary-text] tracking-wide items-center">
        <Key label={<span>esc</span>} />
        <span>to close</span>
      </div>
    </div>
  );
}
