import React, { createContext, useContext } from "react";
import linksState from "./links";
import photosState from "./photos";
import serviceState from "./services";

export const appState = {
  name: "American Game Machine",
  logo: "/svg/logo.svg",
  ...linksState,
  ...serviceState,
  ...photosState,
};

export const AppContext = createContext(appState);

export function AppProvider({ children }) {
  return <AppContext.Provider value={appState}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
