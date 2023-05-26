export default function KeyboardKey({ label, className }) {
  return (
    <div
      className={`bg-slate-600 rounded-md py-2 shadow-key shadow-slate-50 ${className}`}
    >
      {label}
    </div>
  );
}
