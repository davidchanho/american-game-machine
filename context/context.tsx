import React, { createContext, useContext } from "react";

export const appState = {
  companyName: "American Game Machine",
};

export const AppContext = createContext(appState);

export function AppProvider({ children }) {
  return <AppContext.Provider value={appState}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
