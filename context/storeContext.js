import useDialog from "@/hooks/useDialog";
import { createContext } from "react";

const StoreContext = createContext({});

export const StoreProvider = ({ children }) => {
  const dialog = useDialog();
  return (
    <StoreContext.Provider value={{ dialog }}>{children}</StoreContext.Provider>
  );
};

export default StoreContext;
