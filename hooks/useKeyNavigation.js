import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import useStore from "./useStore";

export default function useKeyNavigation() {
  const { dialog, searchResult, selected, setSelected } = useStore();
  const parentRef = useRef();

  const router = useRouter();

  const selectSearch = () => {
    dialog.current.close();
    const { name, state, countryCode } = searchResult.result[selected];
    console.log(name, state, countryCode);
    router.push(`/?city=${name}&state=${state.name}&country=${countryCode}`);
  };

  const handleKeydown = (e) => {
    if (!searchResult?.result) return;
    switch (e.code) {
      case "ArrowUp":
        e.preventDefault();
        selected === 0
          ? setSelected(searchResult.result.length - 1)
          : setSelected((prev) => prev - 1);

        break;
      case "ArrowDown":
        e.preventDefault();
        selected === searchResult.result.length - 1
          ? setSelected(0)
          : setSelected((prev) => prev + 1);

        break;
      case "Enter":
        e.preventDefault();
        selectSearch();
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
  }, [searchResult]);

  const KeyProps = {
    onKeyDown: handleKeydown,
    parentRef,
    handleClick: selectSearch,
  };

  return KeyProps;
}
