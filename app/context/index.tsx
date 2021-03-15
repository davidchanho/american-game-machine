import { createContext, useContext } from "react";

const contextState = {
  companyInfo: {
    name: "American Game Machine",
    abbreviation: "AGM",
  },
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
