import useDialog from "@/hooks/useDialog";
import useInputSearch from "@/hooks/useInputSearch";
import { createContext, useState } from "react";
import { useRouter } from "next/navigation";

const StoreContext = createContext({});

export const StoreProvider = ({ children }) => {
  const router = useRouter();

  const dialog = useDialog();
  const [searchResult, setSearchResult] = useState(null);
  const [selected, setSelected] = useState(0);

  const { value, onChange } = useInputSearch("", setSearchResult);

  const selectSearch = () => {
    onChange("");
    dialog.current.close();
    const { name, state, countryCode } = searchResult.result[selected];
    router.push(`/?city=${name}&state=${state.name}&country=${countryCode}`);
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
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContext;
