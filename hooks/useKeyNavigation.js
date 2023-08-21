import { useEffect, useRef } from 'react';
import useStore from './useStore';

export default function useKeyNavigation() {
  const { searchResult, selected, setSelected, selectSearch } = useStore();
  const parentRef = useRef();

  const handleKeydown = (e) => {
    if (!searchResult?.result) return;
    switch (e.code) {
      case 'ArrowUp':
        e.preventDefault();
        selected === 0
          ? setSelected(searchResult.result.length - 1)
          : setSelected((prev) => prev - 1);

        break;
      case 'ArrowDown':
        e.preventDefault();
        selected === searchResult.result.length - 1
          ? setSelected(0)
          : setSelected((prev) => prev + 1);

        break;
      case 'Enter':
        e.preventDefault();
        selectSearch();
        break;
    }
  };

  useEffect(() => {
    parentRef.current?.children[selected]?.scrollIntoView({
      behavior: 'auto',
      block: 'nearest',
    });
  }, [selected]);

  useEffect(() => {
    setSelected(0);
  }, [searchResult]);

  const KeyProps = {
    onKeyDown: handleKeydown,
    parentRef,
    selectSearch,
  };

  return KeyProps;
}
