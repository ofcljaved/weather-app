"use client";
import { StoreProvider } from "@/context/storeContext";

const StoreLayout = ({ children }) => {
  return <StoreProvider>{children}</StoreProvider>;
};

export default StoreLayout;
