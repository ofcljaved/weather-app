import useDialog from '@/hooks/useDialog';
import useInputSearch from '@/hooks/useInputSearch';
import { createContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const StoreContext = createContext({});

export const StoreProvider = ({ children }) => {
  const router = useRouter();

  const dialog = useDialog();
  const [searchResult, setSearchResult] = useState(null);
  const [selected, setSelected] = useState(0);

  const { value, onChange } = useInputSearch('', (value, result) => {
    if (value.trim()) {
      setSearchResult(result);
    } else {
      const recents = JSON.parse(localStorage.getItem('recents'));
      recents && setSearchResult({ result: recents });
    }
  });

  useEffect(() => {
    let recents = JSON.parse(localStorage.getItem('recents'));
    if (recents) setSearchResult({ result: recents });
  }, []);

  const saveInLocalStorage = (recentLocation) => {
    const recents = JSON.parse(localStorage.getItem('recents')) || [];
    if (recents.length >= 10) recents.pop();
    const existingIndex = recents.findIndex(
      (recent) => recent._id === recentLocation._id
    );
    if (existingIndex !== -1) recents.splice(existingIndex, 1);
    recents.unshift(recentLocation);
    localStorage.setItem('recents', JSON.stringify(recents));
  };

  const selectSearch = () => {
    onChange('');
    dialog.current.close();
    saveInLocalStorage(searchResult.result[selected]);
    const { name, state, countryCode } = searchResult.result[selected];
    setSelected(0);
    router.push(`/?city=${name}&state=${state.name}&country=${countryCode}`);
  };

  const removeRecent = (id) => {
    const recents = JSON.parse(localStorage.getItem('recents'));
    const existingIndex = recents.findIndex((recent) => recent._id === id);
    recents.splice(existingIndex, 1);
    if (recents.length) {
      localStorage.setItem('recents', JSON.stringify(recents));
      setSearchResult({ result: recents });
    } else {
      localStorage.removeItem('recents');
      setSearchResult(null);
    }
  };

  return (
    <StoreContext.Provider
      value={{
        dialog,
        searchResult,
        setSearchResult,
        selected,
        setSelected,
        value,
        onChange,
        selectSearch,
        removeRecent,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContext;
