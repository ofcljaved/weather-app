import { useState } from "react";

export default function useKeyNavigation(list) {
  const [selected, setSelected] = useState(0);

  const handleKeydown = (e) => {
    if (!list?.result) return;

    switch (e.code) {
      case "ArrowUp":
        selected === 0
          ? setSelected(list.result.length - 1)
          : setSelected((prev) => prev - 1);

        break;
      case "ArrowDown":
        selected === list.result.length - 1
          ? setSelected(0)
          : setSelected((prev) => prev + 1);

        break;
      case "Enter":
        break;
    }
  };

  const KeyProps = {
    selected,
    onKeyDown: handleKeydown,
  };

  return KeyProps;
}
