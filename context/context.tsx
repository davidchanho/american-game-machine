import React, { createContext, useContext } from "react";
import photosState from "./photos";

export const appState = {
  companyName: "American Game Machine",
  ...photosState,
};

export const AppContext = createContext(appState);

export function AppProvider({ children }) {
  return <AppContext.Provider value={appState}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
