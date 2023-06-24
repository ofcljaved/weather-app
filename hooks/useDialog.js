import { useEffect, useRef } from "react";

export default function useDialog() {
  const dialog = useRef(null);

  const handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === "k") {
      event.preventDefault();
      dialog.current.open ? dialog.current.close() : dialog.current.showModal();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return dialog;
}
