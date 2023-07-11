import { updateUrlParams } from "@/utils/features";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function useKeyNavigation(list, dialog) {
  const [selected, setSelected] = useState(0);
  const parentRef = useRef();
  const router = useRouter();

  const handleKeydown = (e) => {
    if (!list?.result) return;
    switch (e.code) {
      case "ArrowUp":
        e.preventDefault();
        selected === 0
          ? setSelected(list.result.length - 1)
          : setSelected((prev) => prev - 1);

        break;
      case "ArrowDown":
        e.preventDefault();
        selected === list.result.length - 1
          ? setSelected(0)
          : setSelected((prev) => prev + 1);

        break;
      case "Enter":
        e.preventDefault();
        dialog.current.close();
        const pathname = updateUrlParams(list.result[selected]);
        router.push(pathname);
        break;
    }
  };

  useEffect(() => {
    parentRef.current?.children[selected].scrollIntoView({
      behavior: "auto",
      block: "nearest",
    });
  }, [selected]);

  useEffect(() => {
    setSelected(0);
  }, [list]);

  const KeyProps = {
    selected,
    onKeyDown: handleKeydown,
    parentRef,
  };

  return KeyProps;
}
