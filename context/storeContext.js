import useDialog from "@/hooks/useDialog";
import { createContext, useState } from "react";

const StoreContext = createContext({});

export const StoreProvider = ({ children }) => {
  const dialog = useDialog();
  const [searchResult, setSearchResult] = useState(null);
  return (
    <StoreContext.Provider value={{ dialog, searchResult, setSearchResult }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContext;
