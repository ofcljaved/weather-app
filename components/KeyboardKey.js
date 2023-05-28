export default function KeyboardKey({ label, paddingX }) {
  return (
    <div
      className={`flex bg-[--glass-bg] text-[--key-text] rounded-md py-0.5 shadow-key font-medium text-lg ${paddingX}`}
    >
      {label}
    </div>
  );
}
