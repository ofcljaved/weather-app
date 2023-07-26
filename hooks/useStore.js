import { useContext } from "react";
import StoreContext from "@/context/storeContext";

const useStore = () => {
  const data = useContext(StoreContext);
  return data;
};

export default useStore;
