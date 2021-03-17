import { createContext, useContext } from "react";
import accessories from "./accessories";
import company from "./company";
import news from "./news";
import products from "./products";
import services from "./services";

const contextState = {
  ...company,
  ...news,
  ...products,
  ...accessories,
  ...services,
};

const AppContext = createContext(contextState);

export function AppProvider({ children }) {
  return (
    <AppContext.Provider value={contextState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
