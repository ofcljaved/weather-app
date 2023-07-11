export default function SearchDialog({ dialogRef, children }) {
  return (
    <dialog
      ref={dialogRef}
      className="backdrop:bg-[--blur-bg] backdrop:backdrop-blur-md open:grid w-2/3 max-w-4xl p-0 bg-[--bg-color] rounded-2xl h-4/6 max-h-[40rem] grid-rows-[max-content_max-content_auto_max-content] -top-[10%]"
    >
      {children}
    </dialog>
  );
}
